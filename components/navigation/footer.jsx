import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-slate-400 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 border-b border-white/5 pb-8">
          
          <div>
            <span className="block text-base font-black tracking-tight text-white uppercase">
              Papouasie Travel&Tour Agency
            </span>
            <p className="text-xs text-slate-500 mt-1 max-w-xs">
              Premium destination logistics and cultural expedition itineraries across Papua New Guinea.
            </p>
          </div>

          <div className="flex flex-col space-y-2 text-right text-xs md:items-end">
            <span className="font-bold text-white uppercase tracking-wider text-[10px]">Operations Office</span>
            <span className="text-slate-400">Port Moresby, National Capital District, PNG</span>
            <span className="text-brand-gold font-medium">operations@papouasietravel.com</span>
          </div>

        </div>

        <div className="flex flex-col items-center justify-between space-y-4 pt-8 text-[11px] font-medium text-slate-600 md:flex-row md:space-y-0">
          <p>© {new Date().getFullYear()} Papouasie Travel&Tour Agency. All rights reserved.</p>
          <p>Powered securely via Next.js & Supabase Systems.</p>
        </div>
      </div>
    </footer>
  );
}
