"use client";
import React, { use, useState, useEffect } from 'react';
import Navbar from '../../../components/navigation/navbar';
import Footer from '../../../components/navigation/footer';
import FlightMatrix from '../../../components/features/flight-matrix';

const DATA_MOCK_CMS = {
  'local-tours': {
    title: "Local Cultural Expeditions",
    price: "K200",
    bgImage: "/img1.jpg",
    description: "Experience the deep heritage of Papua New Guinea. From the thunderous singsings of the Goroka and Mount Hagen festivals to the remote waterways of the Sepik River, our native guides provide absolute access to traditional protocols.",
    process: "1. Select Expedition Tier -> 2. Verify Tribal Clearances -> 3. Complete Cultural Orientation -> 4. Deploy with Certified Native Logistics Escort.",
    history: "Founded in 2025, our local tour framework was built to connect global visitors with authentic cultural caretakers safely, preserving regional community trust metrics.",
    displays: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg"]
  },
  'domestic-flights': {
    title: "Domestic Flights & Air Network Ticketing",
    price: "K350",
    bgImage: "/img4.jpg",
    description: "Rapid routing coordination across all local provinces. We issue commercial tickets and log cargo manifests natively via verified Air Niugini and PNG Air scheduling lanes.",
    process: "1. Log Route Parameters -> 2. Cross-Check Carrier Capacity -> 3. Lock Treasury Tokens -> 4. Issue Digital e-Ticket Boarding Slips.",
    history: "Our aviation routing grid handles worker transfers for major mining hubs and national public administration teams, maintaining reliable connectivity.",
    displays: ["/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img1.jpg", "/img2.jpg", "/img3.jpg"]
  },
  'international-packages': {
    title: "International Holiday Packages",
    price: "K1,500",
    bgImage: "/img7.jpg",
    description: "Complete outbound travel folders customized for families and corporate retreats. Includes resort accommodation bookings, regional transit, and tour coordination.",
    process: "1. Select Destination Profile -> 2. Define Accommodation Tier -> 3. Bundle Air Tickets -> 4. Issue Complete Travel Folder.",
    history: "We bridge local travelers with premium international hospitality links across Australia, Singapore, and regional Pacific networks.",
    displays: ["/img7.jpg", "/img4.jpg", "/img1.jpg", "/img2.jpg", "/img3.jpg", "/img5.jpg", "/img6.jpg"]
  },
  'international-flights': {
    title: "International Air Routing Desks",
    price: "K990",
    bgImage: "/img6.jpg",
    description: "Global flight ticketing connecting Port Moresby hubs with premier international air corridors routing safely through Brisbane, Cairns, Singapore, and Manila.",
    process: "1. Input Global Destination -> 2. Optimize Layover Connections -> 3. Finalize Baggage Allowances -> 4. Dispatch International Air Manifest.",
    history: "Our international desk coordinates bulk travel files for corporate entities, diplomatic offices, and overseas consulting teams.",
    displays: ["/img6.jpg", "/img5.jpg", "/img4.jpg", "/img3.jpg", "/img2.jpg", "/img1.jpg", "/img7.jpg"]
  },
  'visas': {
    title: "Visa Facilitation & Consular Lodgement",
    price: "K150",
    bgImage: "/img2.jpg",
    description: "Streamlined passport visa application tracking. We manage full compliance file assembly for inbound tourist clearances, corporate work entries, and local citizen filings.",
    process: "1. Assemble Baseline Identification Papers -> 2. Complete ICA Bureau G-Forms -> 3. Process Treasury Fee Tokens -> 4. Secure Authorized Corporate Entry Clearance.",
    history: "Operating closely with regional identity counters, our documentation bureau reduces consular filing bottlenecks for incoming operations.",
    displays: ["/img2.jpg", "/img3.jpg", "/img1.jpg", "/img6.jpg", "/img7.jpg", "/img4.jpg", "/img5.jpg"]
  }
};

export default function DynamicServicePage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  const content = DATA_MOCK_CMS[slug] || DATA_MOCK_CMS['local-tours'];

  // --- RESTORED LOGICAL TIMED ROTATION CALCULATOR ---
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIdx) => (prevIdx + 1) % content.displays.length);
    }, 3000); // Transitions exactly 1 position forward every 3s
    return () => clearInterval(timer);
  }, [content.displays.length]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      <Navbar />
      
      {/* High-Impact Header Section */}
      <section className="relative py-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={content.bgImage} 
            alt={content.title} 
            className="w-full h-full object-cover opacity-35" 
            onError={(e) => { e.target.src = '/img6.jpg'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block rounded-full bg-brand-gold/20 px-4 py-1.5 text-[10px] font-black tracking-widest uppercase text-brand-gold border border-brand-gold/30 mb-4">
            Operations Channel Profile
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">{content.title}</h1>
          <p className="mt-3 text-xs md:text-sm text-brand-gold font-black tracking-wider uppercase">Starting Registration Rates from {content.price}</p>
        </div>
      </section>

      {/* Main Core Content Grid Layout */}
      <main className="flex-grow mx-auto max-w-5xl px-6 py-16 w-full space-y-16">
        
        {/* Row 1: Core Description and Operational Process */}
        <div className="grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 border-l-4 border-brand-gold pl-3">Service Scope Description</h2>
            <p className="text-sm font-semibold text-slate-600 leading-relaxed">{content.description}</p>
          </div>
          <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-brand-gold">How to Reach Us & Process</h2>
            <p className="text-xs font-semibold text-slate-500 leading-relaxed">{content.process}</p>
            <div className="pt-2 border-t border-slate-50">
              <a href="/#portal" className="inline-block text-[11px] font-black uppercase tracking-wider text-brand-charcoal bg-brand-gold px-4 py-2.5 rounded-xl text-white shadow hover:bg-brand-goldHover transition-colors">
                Initiate Application File
              </a>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC MOUNT: FLIGHT AVAILABILITY CALENDAR MATRIX --- */}
        {(slug === 'domestic-flights' || slug === 'international-flights') && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 border-l-4 border-brand-gold pl-3">
              Real-Time Tariff Availability Matrix
            </h2>
            <FlightMatrix />
          </div>
        )}

        {/* --- RESTORED ROW 2: CONTINUOUS FLUID SINGLE-ITEM ROTATING AIR GALLERY --- */}
        <div className="space-y-6 overflow-hidden">
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 border-l-4 border-brand-gold pl-3">
            Media Displays & Air Gallery
          </h2>

          <div className="relative w-full overflow-hidden px-1">
            <div className="flex gap-4 items-center justify-start md:grid md:grid-cols-3">
              {content.displays.map((_, idx) => {
                // Calculate individual item display visibility window offset bounds exactly from your template model
                const positionOffset = (idx - currentSlideIndex + content.displays.length) % content.displays.length;
                const isVisibleDesktop = positionOffset < 3;
                const isVisibleMobile = positionOffset === 0;

                return (
                  <div
                    key={idx}
                    className={`shrink-0 w-full transition-all duration-700 ease-in-out aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-sm relative group ${
                      isVisibleDesktop ? 'md:block' : 'md:hidden'
                    } ${
                      isVisibleMobile ? 'block' : 'hidden'
                    }`}
                  >
                    <img
                      src={content.displays[idx]}
                      alt={`Gallery Display ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = '/img1.jpg'; }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Row 3: Corporate Past History Context */}
        <div className="bg-slate-100/60 rounded-2xl border border-slate-200/40 p-8 space-y-3">
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-500">Corporate Record & Past History</h2>
          <p className="text-xs font-semibold text-slate-600 leading-relaxed max-w-3xl">{content.history}</p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
