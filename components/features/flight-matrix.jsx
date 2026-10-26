"use client";
import React, { useState, useEffect } from 'react';
import { createClient } from 'next-sanity';
import { Calendar as CalendarIcon, PlaneTakeoff, Info, Loader2 } from 'lucide-react';

// Connect client locally inside the component matching project credentials
const client = createClient({
  projectId: 'olaj27v1',
  dataset: 'production',
  apiVersion: '2024-03-15',
  useCdn: false,
});

const DAY_LABELS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const FULL_DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function FlightMatrix() {
  const [routes, setRoutes] = useState([]);
  const [matrices, setMatrices] = useState([]);
  const [activeRouteKey, setActiveRouteKey] = useState('');
  const [loading, setLoading] = useState(true);

  // --- FETCH LIVE DATA FROM SANITY CMS DESK ---
    // --- FETCH LIVE DATA FROM SANITY CMS DESK ---
  useEffect(() => {
    async function getFlightData() {
      try {
        // Fix capitalization to lowercase 'f' to match your schema types exactly
        const routesData = await client.fetch(`*[_type == "flightRoute"]`);
        const matrixData = await client.fetch(`*[_type == "flightPriceMatrix"]{..., "routeId": routeRef->routeId.current}`);
        
        setRoutes(routesData);
        setMatrices(matrixData);
        
        if (routesData.length > 0) {
          setActiveRouteKey(routesData[0].routeId?.current || '');
        }
        setLoading(false);
      } catch (err) {
        console.error("Sanity data fetch error:", err);
        setLoading(false);
      }
    }
    getFlightData();
  }, []);


  // Find active configurations based on dropdown selection state
  const currentRoute = routes.find(r => r.routeId?.current === activeRouteKey);
  const currentMatrix = matrices.find(m => m.routeId === activeRouteKey);

  const handleDayClick = (dayNumber, price) => {
    if (!currentRoute || !currentMatrix) return;
    
    const totalOffsetIndex = (currentMatrix.startDayOffset + (dayNumber - 1)) % 7;
    const weekdayName = FULL_DAY_NAMES[totalOffsetIndex];

    const userConfirmed = window.confirm(`You sure to book this?\n\nFlight: ${currentRoute.routeShort}\nDate: ${dayNumber}/11/26\nDay: ${weekdayName}\nPrice: ${price}`);
    if (!userConfirmed) return;

    const rawMessage = `Hi, I am checking on this flight. Is it available? \n\nFlight Details: \nFlight: ${currentRoute.routeShort}\nPrice: ${price}\nDate: ${dayNumber}/11/26\nDay: ${weekdayName}.\n\nCan you confirm please?`;
    const encodedMessage = encodeURIComponent(rawMessage);
    window.open(`https://wa.me{encodedMessage}`, '_blank');
  };

  if (loading) {
    return (
      <div className="w-full bg-white rounded-3xl border border-slate-100 p-12 flex flex-col items-center justify-center space-y-3">
        <Loader2 className="h-6 w-6 animate-spin text-brand-gold" />
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Syncing Live Sanity Tariffs...</span>
      </div>
    );
  }

  // Fallback default variables if database items haven't been completed yet
  const monthLabel = currentMatrix?.monthLabel || "November 2026";
  const daysInMonth = currentMatrix?.daysInMonth || 30;
  const startDayOffset = currentMatrix?.startDayOffset ?? 6;
  const defaultPrice = currentRoute?.defaultPrice || "K1,140";

  // Re-map Sanity array overrides onto an accessible lookup object dictionary
  const priceOverridesMap = {};
  if (currentMatrix?.specialPrices) {
    currentMatrix.specialPrices.forEach(item => {
      priceOverridesMap[item.dayNumber] = item.customPrice;
    });
  }

  const renderCalendarDays = () => {
    const dayCells = [];
    for (let i = 0; i < startDayOffset; i++) {
      dayCells.push(<div key={`empty-${i}`} className="bg-slate-50/40 min-h-[50px] sm:min-h-[64px] border border-slate-100/60"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const price = priceOverridesMap[day] || defaultPrice;
      dayCells.push(
        <button 
          key={`day-${day}`} 
          type="button"
          onClick={() => handleDayClick(day, price)}
          className="bg-white min-h-[50px] sm:min-h-[64px] p-1 sm:p-2 border border-slate-100 flex flex-col justify-between items-center transition-all hover:bg-brand-gold/5 focus:outline-none w-full cursor-pointer text-left"
        >
          <span className="text-[10px] font-black text-slate-400 self-start">{day}</span>
          <div className="text-center pb-0.5 w-full">
            <span className="block text-[10px] sm:text-xs font-black tracking-tight text-slate-700">{price}</span>
          </div>
        </button>
      );
    }
    return dayCells;
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-100 p-4 sm:p-6 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-50 pb-5">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-brand-gold"><CalendarIcon className="h-4 w-4 stroke-[2.5]" /><h3 className="text-xs font-black uppercase tracking-widest">Flight Seat Availability Matrix</h3></div>
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Managed Live Via Sanity CMS</p>
        </div>

        <div className="relative min-w-[260px]">
          <select 
            value={activeRouteKey}
            onChange={(e) => setActiveRouteKey(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-700 focus:outline-none appearance-none cursor-pointer"
          >
            {routes.map(r => (
              <option key={r.routeId?.current} value={r.routeId?.current}>{r.routeName}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between bg-slate-900 text-white rounded-xl px-4 py-3 shadow">
          <span className="text-xs font-black uppercase tracking-wider flex items-center gap-2"><PlaneTakeoff className="h-3.5 w-3.5 text-brand-gold" />{currentRoute?.routeName || "Select Route"}</span>
          <span className="text-[10px] font-black uppercase tracking-widest bg-brand-gold/20 text-brand-gold px-2.5 py-1 rounded-md border border-brand-gold/20">{monthLabel}</span>
        </div>
        <div className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50">
          <div className="grid grid-cols-7 text-center bg-slate-100 border-b border-slate-200 py-2">
            {DAY_LABELS.map(lbl => (<span key={lbl} className="text-[9px] font-black tracking-widest text-slate-500">{lbl}</span>))}
          </div>
          <div className="grid grid-cols-7">{renderCalendarDays()}</div>
        </div>
      </div>
    </div>
  );
}
