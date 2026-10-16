import React from 'react';
import Navbar from '../../components/navigation/navbar';
import Footer from '../../components/navigation/footer';

export default function FlightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow mx-auto max-w-4xl px-6 py-16">
        <div className="border-l-4 border-brand-gold pl-4 mb-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Aviation Desk</span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-brand-charcoal mt-1">Flight Ticketing Logistics</h1>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed font-medium mb-8">
          We coordinate seamless domestic and international routing. Our direct relationships with commercial operators ensure rapid ticketing confirmation.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-base text-brand-charcoal mb-2">Domestic Flights (PNG Network)</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Complete schedule coverage for Air Niugini and PNG Air routes connecting Port Moresby, Lae, Mount Hagen, Goroka, and island provinces.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-base text-brand-charcoal mb-2">International Connections</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Global flight management routing through major regional gateways including Brisbane, Singapore, Manila, and Hong Kong hubs.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
