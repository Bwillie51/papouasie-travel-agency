import React from 'react';

const SERVICES = [
  { id: 'f-local', category: 'Domestic Aviation', title: 'Local Flights', desc: 'Ticketing and connection logistics covering major domestic routes across Papua New Guinea, including Port Moresby, Lae, Mount Hagen, and Goroka.' },
  { id: 'f-intl', category: 'Global Routing', title: 'International Flights', desc: 'Streamlined corporate and leisure flight paths connecting PNG to major hubs worldwide, managing complex long-haul flight layovers easily.' },
  { id: 'doc-visa', category: 'Consular Clearances', title: 'Visa Facilitation', desc: 'Step-by-step guidance on entry permissions, tourist visas, and work permit application documentation requirements for incoming visitors.' },
  { id: 'doc-pass', category: 'Identity Management', title: 'Passport Procedures', desc: 'Assisting corporate citizens and local travelers with applications, renewals, and fast-track processing support files.' }
];

export default function PackageGrid() {
  return (
    <section id="packages" className="mx-auto max-w-7xl px-6 py-16 bg-white border-y border-slate-100">
      <div className="mb-10 border-l-4 border-brand-gold pl-4">
        <h2 className="text-xl font-black uppercase tracking-tight text-brand-charcoal">Core Agency Services</h2>
        <p className="text-xs font-semibold text-slate-400 mt-0.5">Comprehensive travel management systems for corporate and leisure clients</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((item) => (
          <div key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:shadow-md hover:bg-white hover:border-slate-200/60">
            <span className="block text-[9px] font-black uppercase tracking-widest text-brand-gold">{item.category}</span>
            <h3 className="font-bold text-base text-brand-charcoal mt-1 mb-2">{item.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
