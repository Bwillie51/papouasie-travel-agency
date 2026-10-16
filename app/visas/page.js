"use client";

import React from 'react';
import Navbar from '../../components/navigation/navbar';
import Footer from '../../components/navigation/footer';

export default function VisasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow mx-auto max-w-4xl px-6 py-16">
        <div className="border-l-4 border-brand-gold pl-4 mb-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Consular Support</span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-brand-charcoal mt-1">Visa Facilitation Assistance</h1>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed font-medium mb-8">
          Navigating Papua New Guinea immigration frameworks requires precision. We assist international visitors and corporate firms with compliant lodgement files.
        </p>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <h3 className="font-bold text-base text-brand-charcoal">Available Entry Categories</h3>
          <p className="text-xs text-slate-500 leading-relaxed">We support filings for Tourist Visas on Arrival, Single-Entry Business permissions, and extended Organizational Work Permits for specialized corporate sectors.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
