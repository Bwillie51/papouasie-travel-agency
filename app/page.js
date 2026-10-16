"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navigation/navbar';
import Hero from '../components/features/hero';
import PackageGrid from '../components/features/package-grid';
import TravelInfo from '../components/features/travel-info';
import PassengerAdvisory from '../components/features/passenger-advisory';
import MediaGallery from '../components/features/media-gallery';
import DynamicForm from '../components/forms/dynamic-form';
import Footer from '../components/navigation/footer';

// Array list of your local public dummy assets allocated for the contact form block background
const PORTAL_IMAGES = [
  '/img4.jpg',
  '/img5.jpg',
  '/img7.jpeg'
];

export default function Home() {
  const [currentPortalIdx, setCurrentPortalIdx] = useState(0);

  // --- AUTOMATIC BACKGROUND CROSS-FADE TIMER LOOP (EVERY 5 SECONDS) ---
  useEffect(() => {
    const portalInterval = setInterval(() => {
      setCurrentPortalIdx((prevIdx) => (prevIdx + 1) % PORTAL_IMAGES.length);
    }, 5000); // Exactly 5 Seconds

    return () => clearInterval(portalInterval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PackageGrid />
        <TravelInfo />
        <PassengerAdvisory />
        <MediaGallery />
        
        {/* Dynamic Contact Portal Section Row */}
        <section id="portal" className="relative py-20 border-t border-slate-100 overflow-hidden bg-slate-900">
          
          {/* Automatic Cross-Fading Image Layer Loop Container */}
          <div className="absolute inset-0 z-0">
            {PORTAL_IMAGES.map((imageSrc, idx) => (
              <div 
                key={imageSrc}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                  idx === currentPortalIdx ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url('${imageSrc}')` }}
              ></div>
            ))}
            {/* Stable plain white layout mask preserving standard input field text legibility */}
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[0px]"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="border-l-4 border-brand-gold pl-4">
                  <h2 className="text-xl font-black uppercase tracking-tight text-brand-charcoal">Travel Desk Portal</h2>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                  Submit flight details, request entry visa documentation tracking assistance, or log passport filing operations profiles directly with our concierge agents.
                </p>
              </div>

              <div className="lg:col-span-7">
                <DynamicForm />
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
