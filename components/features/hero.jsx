"use client";
import React, { useState, useEffect } from 'react';

// Array list of local dummy asset images sitting right under your root public folder
const SLIDESHOW_IMAGES = [
  '/img6.jpeg',
  '/img4.jpg',
  '/img1.jpg'
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // --- AUTOMATED BACKGROUND IMAGES TRANSITION CYCLE TIMER (5 SECONDS) ---
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % SLIDESHOW_IMAGES.length);
    }, 5000); // 5000ms = Exactly 5 Seconds

    return () => clearInterval(slideInterval);
  }, []);

  const triggerBookingPortal = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('switchFormMode', { detail: { mode: 'booking' } }));
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 pb-32 pt-20">
      
      {/* Dynamic Slideshow Layer Core Engine Container */}
      <div className="absolute inset-0 z-0">
        {SLIDESHOW_IMAGES.map((imagePath, idx) => (
          <img
            key={imagePath}
            src={imagePath}
            alt="Papouasie Travel Background Layer"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === currentIdx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Soft, plain light gradient mask protecting your headline text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-80/100 to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:text-left">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-brand-gold/10 px-4 py-1.5 text-[10px] font-black tracking-widest uppercase text-brand-gold mb-6 border border-brand-gold/20">
            Papua New Guinea Local Experts
          </span>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl uppercase leading-[1.05] text-brand-charcoal">
            Discover the Untamed <br />
            Beauty of <span className="text-brand-gold">Papouasie</span>
          </h1>
          <p className="mt-6 text-xs text-slate-500 font-semibold leading-relaxed max-w-xl">
            Custom-built cultural tours, international and domestic flight ticketing, visa documentation support, and passport logistics managed carefully by certified native operators.
          </p>
          <div className="mt-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
            <button
              onClick={triggerBookingPortal}
              className="inline-flex items-center justify-center rounded-xl bg-brand-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-goldHover transition-colors shadow-md cursor-pointer focus:outline-none"
            >
              Book Expeditions
            </button>
            <a href="#packages" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 transition-colors">
              Our Core Services
            </a>
          </div>
        </div>
      </div>

      {/* --- FLUID SEA WAVE TRANSITION SEPARATOR --- */}
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full overflow-hidden leading-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] text-white fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,53.05,18,79.44,26.31,142,46,206.52,65.66,321.39,56.44Z"></path>
        </svg>
      </div>

    </section>
  );
}
