import React from 'react';

const CHECKLISTS = [
  {
    title: "International Tourist Visas",
    subtitle: "Incoming Holiday Makers",
    steps: [
      "Valid passport with at least 6 months validity remaining.",
      "Copy of return international flight tickets.",
      "Completed G-Form (ICA Entry Permission File).",
      "Approved digital eVisa or Visa on Arrival (VoA) verification code."
    ]
  },
  {
    title: "PNG Passport Applications",
    subtitle: "Local Citizens & Corporate Flyers",
    steps: [
      "Original birth certificate or citizenship certificate profile.",
      "Two standard passport-sized identity photos signed by a witness.",
      "Completed standard application form (ICA Form 1).",
      "Paid receipt token from official Treasury office counters."
    ]
  }
];

export default function TravelInfo() {
  return (
    <section id="travel-info" className="mx-auto max-w-7xl px-6 py-16 bg-white border-b border-slate-100">
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        
        {/* Left Column Text Descriptions */}
        <div className="lg:col-span-4 space-y-4">
          <div className="border-l-4 border-brand-gold pl-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Consular Bureau</span>
            <h2 className="text-xl font-black uppercase tracking-tight text-brand-charcoal mt-1">Documentation Checklists</h2>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed font-semibold">
            We streamline complex visa lodgements and passport filings. Ensure you possess these verified baseline components before deploying to the airport tracking lanes.
          </p>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <span className="block text-[10px] font-black uppercase tracking-wider text-brand-gold">Important Notice</span>
            <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed">
              Visa parameters fluctuate based on bilateral treaties. Contact our desk directly for verified corporate worker entry requirements.
            </p>
          </div>
        </div>

        {/* Right Column Checklist Data Containers */}
        <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
          {CHECKLISTS.map((list, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-100 bg-slate-50/30 p-6">
              <span className="text-[9px] font-black uppercase tracking-widest text-brand-gold">{list.subtitle}</span>
              <h3 className="font-bold text-sm text-brand-charcoal mt-0.5 mb-4">{list.title}</h3>
              <ul className="space-y-3">
                {list.steps.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start space-x-2.5 text-xs text-slate-600 font-medium leading-relaxed">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-[10px] font-black text-brand-gold">
                      {sIdx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
