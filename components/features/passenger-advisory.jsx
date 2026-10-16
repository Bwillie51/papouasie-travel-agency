import React from 'react';

const ADVISORIES = [
  { title: "Financial Transactions", desc: "The official currency is the PNG Kina (PGK). Major credit cards are accepted in Port Moresby hubs, but carrying small Kina cash tokens is required for local markets and rural airfields." },
  { title: "Medical Precautions", desc: "Malaria protection protocols are strongly recommended for travel outside city centers. Always utilize bottled mineral water and carry personalized medical travel packs." },
  { title: "Cultural Integration", desc: "PNG has over 800 distinct languages. Respecting tribal lands and local leadership structures ensures smooth travel. Always seek permission before documenting tribal elements." }
];

export default function PassengerAdvisory() {
  return (
    <section id="advisory" className="mx-auto max-w-7xl px-6 py-16 bg-slate-50/50">
      <div className="mb-10 border-l-4 border-brand-gold pl-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Inbound Resources</span>
        <h2 className="text-xl font-black uppercase tracking-tight text-brand-charcoal mt-1">Passenger Preparedness Guide</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {ADVISORIES.map((adv, idx) => (
          <div key={idx} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-charcoal text-brand-gold font-black text-xs mb-4">
              !
            </div>
            <h3 className="font-bold text-sm text-brand-charcoal mb-2">{adv.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">{adv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
