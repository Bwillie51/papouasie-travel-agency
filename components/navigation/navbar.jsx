"use client";
import React, { useState } from 'react';

const WEEKLY_HOURS = {
  1: { name: 'Mon', open: '08:00', close: '17:00', isClosed: false },
  2: { name: 'Tue', open: '08:00', close: '17:00', isClosed: false },
  3: { name: 'Wed', open: '08:00', close: '17:00', isClosed: false },
  4: { name: 'Thu', open: '08:00', close: '17:00', isClosed: false },
  5: { name: 'Fri', open: '08:00', close: '17:00', isClosed: false },
  6: { name: 'Sat', open: '09:00', close: '13:00', isClosed: false },
  0: { name: 'Sun', open: '00:00', close: '00:00', isClosed: true }
};

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- LIVE DATE & OPERATIONS TIMER CALCULATION ---
  const getLiveStatus = () => {
    const now = new Date();
    const currentDay = now.getDay();
    const schedule = WEEKLY_HOURS[currentDay];

    if (!schedule || schedule.isClosed) {
      return { text: `${schedule?.name || 'Today'} - Closed`, isOpen: false };
    }

    const [currentHours, currentMinutes] = [now.getHours(), now.getMinutes()];
    const currentTotalMinutes = currentHours * 60 + currentMinutes;

    const [openH, openM] = schedule.open.split(':').map(Number);
    const [closeH, closeM] = schedule.close.split(':').map(Number);
    
    const openTotalMinutes = openH * 60 + openM;
    const closeTotalMinutes = closeH * 60 + closeM;

    const isOpen = currentTotalMinutes >= openTotalMinutes && currentTotalMinutes < closeTotalMinutes;
    return { 
      text: isOpen ? `${schedule.name} - Open Now` : `${schedule.name} - Closed`, 
      isOpen 
    };
  };

  const status = getLiveStatus();

  // Helper function to dispatch form state switches and trigger smooth scroll motions
  const handleNavClick = (mode) => {
    setMobileMenuOpen(false); // Auto-close drawer window on mobile devices
    window.dispatchEvent(new CustomEvent('switchFormMode', { detail: { mode } }));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* LEFT SECTION: Visual Identity Branding Elements */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0 w-1/3 md:w-auto">
          {/* <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-brand-charcoal shrink-0"> */}
            <img 
              src="/assets/Logo.jpeg" 
              alt="Papouasie Travel Logo" 
              className="h-17 w-17 sm:h-20 sm:w-20 object-contain rounded-lg"
              onError={(e) => { e.target.src = '/img1.jpg'; }}
            />
          {/* </div> */}
          <div className="hidden xs:block">
            <span className="block text-sm sm:text-base font-black tracking-tight text-brand-charcoal uppercase leading-none">
              Papouasie
            </span>
            <span className="block text-[8px] sm:text-[9px] font-bold tracking-widest text-slate-400 uppercase mt-1">
              Travel&Tours
            </span>
          </div>
        </div>

        {/* --- CENTER SECTION: FIXED MIDDLE VIEW WEEKLY SCHEDULE STATUS TRACKER --- */}
        <div className="relative flex justify-center w-1/3 md:w-auto grow md:grow-0">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center space-x-1.5 rounded-xl border border-slate-100 bg-slate-50/90 px-2.5 py-1.5 sm:px-4 sm:py-2 text-left transition-all hover:bg-slate-100/60 focus:outline-none shadow-sm cursor-pointer"
          >
            <span className={`h-2 w-2 rounded-full shrink-0 ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-700 whitespace-nowrap">
              {status.text}
            </span>
            <svg className="h-3 w-3 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Expanded Operational Hours Dropdown Overlay */}
          {showDropdown && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl z-50">
              <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2 border-b border-slate-50 pb-2 text-center">Weekly Operational Hours</h4>
              <div className="space-y-1.5">
                {Object.keys(WEEKLY_HOURS).map((key) => {
                  const day = WEEKLY_HOURS[key];
                  return (
                    <div key={key} className="flex items-center justify-between text-[11px] font-semibold">
                      <span className="text-slate-600">{day.name}</span>
                      <span className={`${day.isClosed ? 'text-rose-500 font-bold' : 'text-slate-500'}`}>
                        {day.isClosed ? 'Closed' : `${day.open} - ${day.close}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* --- RIGHT SECTION: NAV REUTERS & HAMBURGER FOR MOBILE FLUID WINDOWS --- */}
        <div className="flex items-center justify-end w-1/3 md:w-auto shrink-0">
          
          {/* Desktop view anchors built with interactive click event dispatches */}
          <nav className="hidden space-x-6 lg:space-x-8 text-xs font-black uppercase tracking-wider text-slate-600 md:flex items-center">
            <a href="/" className="transition-colors hover:text-brand-gold">Home</a>
            <a href="/flights" className="transition-colors hover:text-brand-gold">Flights</a>
            <a href="/visas" className="transition-colors hover:text-brand-gold">Visas</a>
            <a href="/passports" className="transition-colors hover:text-brand-gold">Passports</a>
            <button 
              onClick={() => handleNavClick('enquiry')}
              className="transition-colors hover:text-brand-gold font-black uppercase focus:outline-none cursor-pointer border-none bg-transparent p-0"
            >
              Contact Us
            </button>
          </nav>

          {/* Clean Hamburger trigger visible strictly on mobile screen device sizes */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-2 text-slate-700 md:hidden hover:bg-slate-100 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>

        </div>
      </div>

      {/* --- RESPONSIVE MOBILE EXPANDED MENU DRAWER OVERLAY --- */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3.5 text-xs font-black uppercase tracking-wider text-slate-600">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className="py-1 transition-colors hover:text-brand-gold">Home</a>
            <a href="/flights" onClick={() => setMobileMenuOpen(false)} className="py-1 transition-colors hover:text-brand-gold">Flights</a>
            <a href="/visas" onClick={() => setMobileMenuOpen(false)} className="py-1 transition-colors hover:text-brand-gold">Visas</a>
            <a href="/passports" onClick={() => setMobileMenuOpen(false)} className="py-1 transition-colors hover:text-brand-gold">Passports</a>
            <button 
              onClick={() => handleNavClick('enquiry')}
              className="text-left py-1 transition-colors hover:text-brand-gold font-black uppercase focus:outline-none border-none bg-transparent p-0"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}


