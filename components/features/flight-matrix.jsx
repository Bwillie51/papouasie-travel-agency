"use client";
import React, { useState } from 'react';
import { Calendar as CalendarIcon, PlaneTakeoff, Info } from 'lucide-react';

const FLIGHT_ROUTES = {
  'pom-hagen': {
    routeShort: "Pom - Hagen",
    routeName: "Port Moresby (POM) ➔ Mount Hagen (HGN)",
    carrier: "Air Niugini",
    monthLabel: "November 2026",
    daysInMonth: 30,
    startDayOffset: 6, // Starts on a Sunday (0=Mon, 6=Sun)
    defaultPrice: "K1,140",
    specialPrices: {}
  },
  'pom-goroka': {
    routeShort: "Pom - Goroka",
    routeName: "Port Moresby (POM) ➔ Goroka (GKA)",
    carrier: "Air Niugini",
    monthLabel: "November 2026",
    daysInMonth: 30,
    startDayOffset: 6, 
    defaultPrice: "K506",
    specialPrices: {
      1: "K543", 2: "K543", 3: "K580", 4: "K580", 6: "K543",
      9: "K506", 10: "K506", 14: "K543", 21: "K543",
      23: "K580", 24: "K728", 25: "K673", 26: "K580", 27: "K543", 28: "K543", 29: "K580",
      30: "K724"
    }
  }
};

const DAY_LABELS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const FULL_DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function FlightMatrix() {
  const [activeRouteKey, setActiveRouteKey] = useState('pom-hagen');
  const routeData = FLIGHT_ROUTES[activeRouteKey];

  // --- AUTOMATED WHATSAPP HANDLER WITH NATIVE POP-UP ---
  const handleDayClick = (dayNumber, price) => {
    // 1. Programmatically calculate the weekday name text string
    const totalOffsetIndex = (routeData.startDayOffset + (dayNumber - 1)) % 7;
    const weekdayName = FULL_DAY_NAMES[totalOffsetIndex];

    // 2. Trigger native confirmation prompt box
    const userConfirmed = window.confirm(`You sure to book this?\n\nFlight: ${routeData.routeShort}\nDate: ${dayNumber}/11/26\nDay: ${weekdayName}\nPrice: ${price}`);
    
    if (!userConfirmed) return; // Cut execution loop safely if user clicks "Cancel"

    // 3. Assemble the exact custom text message layout requested by your client
    const rawMessage = `Hi, I am checking on this flight. Is it available? \n\nFlight Details: \nFlight: ${routeData.routeShort}\nPrice: ${price}\nDate: ${dayNumber}/11/26\nDay: ${weekdayName}.\n\nCan you confirm please?`;
    
    // 4. Sanitize strings safely for global browser address line rendering
    const encodedMessage = encodeURIComponent(rawMessage);
    
    // 5. Target your client's business phone number channel (using the number from her flyers)
    const whatsappMobileNumber = "67581862924"; // Replace with your client's actual WhatsApp number
    const nativeWhatsAppUrl = `https://wa.me/${whatsappMobileNumber}?text=${encodedMessage}`;

    // 6. Direct launch the message transmission window stream instantly
    window.open(nativeWhatsAppUrl, '_blank');
  };

  const renderCalendarDays = () => {
    const dayCells = [];
    
    // 1. Grid empty layout pads padding columns
    for (let i = 0; i < routeData.startDayOffset; i++) {
      dayCells.push(<div key={`empty-${i}`} className="bg-slate-50/40 min-h-[50px] sm:min-h-[64px] border border-slate-100/60"></div>);
    }

    // 2. Interactive grid cell loops
    for (let day = 1; day <= routeData.daysInMonth; day++) {
      const price = routeData.specialPrices[day] || routeData.defaultPrice;
      const isPromoPrice = price === "K506";

      dayCells.push(
        <button 
          key={`day-${day}`} 
          type="button"
          onClick={() => handleDayClick(day, price)}
          className="bg-white min-h-[50px] sm:min-h-[64px] p-1 sm:p-2 border border-slate-100 flex flex-col justify-between items-center transition-all hover:bg-brand-gold/5 focus:outline-none focus:bg-brand-gold/10 group cursor-pointer text-left w-full"
        >
          <span className="text-[10px] font-black text-slate-400 self-start group-hover:text-brand-charcoal transition-colors">
            {day}
          </span>
          <div className="text-center pb-0.5 sm:pb-1 w-full">
            <span className={`block text-[10px] sm:text-xs font-black tracking-tight ${isPromoPrice ? 'text-emerald-600 underline underline-offset-2' : 'text-slate-700'}`}>
              {price}
            </span>
          </div>
        </button>
      );
    }

    return dayCells;
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-100 p-4 sm:p-6 shadow-xl space-y-6">
      
      {/* Route Selector Dropdown Row Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-50 pb-5">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-brand-gold">
            <CalendarIcon className="h-4 w-4 stroke-[2.5]" />
            <h3 className="text-xs font-black uppercase tracking-widest">Flight Seat Availability matrix</h3>
          </div>
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
            Select route options to pull available promotional tariffs
          </p>
        </div>

        <div className="relative min-w-[260px]">
          <select 
            value={activeRouteKey}
            onChange={(e) => setActiveRouteKey(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-700 focus:border-brand-gold focus:outline-none appearance-none cursor-pointer shadow-sm"
          >
            <option value="pom-hagen">Port Moresby ➔ Mount Hagen</option>
            <option value="pom-goroka">Port Moresby ➔ Goroka</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>

      {/* Main Calendar Render Area */}
      <div className="space-y-3">
        <div className="flex items-center justify-between bg-slate-900 text-white rounded-xl px-4 py-3 shadow">
          <span className="text-xs font-black uppercase tracking-wider flex items-center gap-2">
            <PlaneTakeoff className="h-3.5 w-3.5 text-brand-gold" />
            {routeData.routeName}
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest bg-brand-gold/20 text-brand-gold px-2.5 py-1 rounded-md border border-brand-gold/20">
            {routeData.monthLabel}
          </span>
        </div>

        <div className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50">
          <div className="grid grid-cols-7 text-center bg-slate-100 border-b border-slate-200 py-2">
            {DAY_LABELS.map((lbl) => (
              <span key={lbl} className="text-[9px] font-black tracking-widest text-slate-500">{lbl}</span>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {renderCalendarDays()}
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100 flex items-start space-x-2.5 text-[10px] font-semibold text-slate-500 leading-relaxed">
        <Info className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
        <p>
          Tariffs reflect one-way flight availability patterns. Click on any active date box grid coordinate above to initiate a direct digital reservation check via our official WhatsApp service channel.
        </p>
      </div>

    </div>
  );
}
