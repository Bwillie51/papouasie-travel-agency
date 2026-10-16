"use client";

import React from 'react';

const MOCK_GALLERY = [
  { id: 'g1', type: 'photo', label: 'Highland Festival Culture', src: '/img6.jpeg' },
  { id: 'g2', type: 'video', label: 'Milne Bay Coastal Tour', src: '/img7.jpeg' },
  { id: 'g3', type: 'photo', label: 'Kokoda Trail Ridge View', src: '/img3.jpg' }
];


export default function MediaGallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 border-l-4 border-brand-gold pl-4">
        <h2 className="text-xl font-black uppercase tracking-tight text-brand-charcoal">Gallery Explorer</h2>
        <p className="text-xs font-semibold text-slate-400 mt-0.5">Showcasing our exceptional travel experiences</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {MOCK_GALLERY.map((media) => (
          <div key={media.id} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm group">
            <div className="relative mb-4 h-44 rounded-xl bg-slate-100 overflow-hidden border border-slate-200 group-hover:border-brand-gold/40 transition-colors">
              <img 
                src={media.src} 
                alt={media.label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { e.target.src = 'https://unsplash.com'; }}
              />
              <span className={`absolute left-3 top-3 rounded-md px-2 py-0.5 text-[8px] font-black uppercase ${media.type === 'video' ? 'bg-rose-500 text-white shadow-sm' : 'bg-brand-charcoal text-brand-gold border border-brand-gold/20'}`}>
                {media.type}
              </span>
            </div>
            <h4 className="font-bold text-xs text-brand-charcoal tracking-tight">{media.label}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
