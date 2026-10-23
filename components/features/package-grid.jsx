"use client";
import React from 'react';
import { Plane, Globe, Map, FileText } from 'lucide-react';

const CORE_SERVICES = [
  { id: 'local-tours', title: 'Local Tours', icon: Map, desc: 'Custom cultural itineraries covering the Goroka Show, Mount Hagen festivals, Sepik River expeditions, and Kokoda Trail operations.', badge: 'PNG Cultural Hub', startingPrice: 'K200' },
  { id: 'domestic-flights', title: 'Domestic Flights', icon: Plane, desc: 'Complete domestic route ticketing coverage linking Port Moresby, Lae, Mount Hagen, Wewak, and island networks via Air Niugini.', badge: 'National Connections', startingPrice: 'K350' },
  { id: 'international-packages', title: 'International Packages', icon: Globe, desc: 'All-inclusive outbound holiday files and corporate tour coordination routing into popular overseas destinations.', badge: 'Global Destinations', startingPrice: 'K1,500' },
  { id: 'international-flights', title: 'International Flights', icon: Plane, desc: 'Global airline ticket bookings and connection routing through regional flight gateways like Brisbane, Cairns, and Singapore.', badge: 'Overseas Air Desks', startingPrice: 'K990' },
  { id: 'visas', title: 'Visas', icon: FileText, desc: 'Complete documentation lodgement assistance for inbound holiday makers requesting Tourist Visas on Arrival and corporate permits.', badge: 'Consular Bureau', startingPrice: 'K150' }
];

export default function PackageGrid() {
  return (
    <section id="packages" className="mx-auto max-w-7xl px-6 py-20 bg-white">
      <div className="mb-12 border-l-4 border-brand-gold pl-4 max-w-2xl">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Core Capabilities</span>
        <h2 className="text-2xl font-black uppercase tracking-tight text-brand-charcoal mt-1">Our Five Areas of Operation</h2>
        <p className="text-xs text-slate-500 font-semibold mt-1 leading-relaxed">
          Papouasie Travel & Tours Agency manages transit, consular document workflows, and local cultural expeditions.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CORE_SERVICES.map((service) => {
          const IconComponent = service.icon;
          return (
            <a 
              key={service.id} 
              href={`/services/${service.id}`}
              className="group block rounded-2xl border border-slate-100 bg-slate-50/40 p-6 transition-all hover:bg-white hover:shadow-xl hover:border-slate-200/60 text-left decoration-none"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-charcoal text-brand-gold mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
                <IconComponent className="h-5 w-5 stroke-[2.5]" />
              </div>
              
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-block text-[9px] font-black uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-md">
                  {service.badge}
                </span>
                <span className="text-[11px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                  From {service.startingPrice}
                </span>
              </div>
              
              <h3 className="text-sm font-black uppercase tracking-tight text-brand-charcoal mb-2 group-hover:text-brand-gold transition-colors">
                {service.title}
              </h3>
              
              <p className="text-xs text-slate-500 leading-relaxed font-semibold mb-4">
                {service.desc}
              </p>

              <span className="text-[10px] font-black uppercase tracking-wider text-brand-gold flex items-center opacity-80 group-hover:opacity-100 transition-opacity">
                View Full Details & Explore &rarr;
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
