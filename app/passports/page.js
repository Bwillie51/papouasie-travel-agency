"use client";

import React from 'react';
import Navbar from '../../components/navigation/navbar';
import Footer from '../../components/navigation/footer';

export default function PassportsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow mx-auto max-w-4xl px-6 py-16">
        <div className="border-l-4 border-brand-gold pl-4 mb-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Identity Bureau</span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-brand-charcoal mt-1">PNG Passport Services</h1>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed font-medium mb-8">
          Dedicated document collection guidance for local PNG citizens seeking standard renewals or fast-track identity applications.
        </p>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-base text-brand-charcoal mb-2">Application Checklist</h3>
          <p className="text-xs text-slate-500 leading-relaxed">Ensure you possess signed identity photos, a Treasury receipt token, and original birth certificates before requesting file queue logging.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
