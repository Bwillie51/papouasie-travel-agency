import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-charcoal text-slate-400 border-t border-slate-800 text-xs font-medium">
      <div className="mx-auto max-w-7xl px-6 py-12">
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          
          {/* Column 1: Brand & Statement */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 shrink-0">
                <img 
                  src="/assets/Logo.jpeg" 
                  alt="Papouasie" 
                  className="h-6 w-6 object-contain rounded"
                  onError={(e) => { e.target.src = '/img1.jpg'; }}
                />
              </div>
              <span className="text-sm font-black uppercase tracking-wider text-white">Papouasie</span>
            </div>
            <p className="text-slate-500 leading-relaxed font-semibold">
              Premium destination logistics and cultural expedition itineraries across Papua New Guinea.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Company Routes</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-brand-gold transition-colors">Home Canvas</a></li>
              <li><a href="/flights" className="hover:text-brand-gold transition-colors">Flights Desk</a></li>
              <li><a href="/visas" className="hover:text-brand-gold transition-colors">Visa Services</a></li>
              <li><a href="/passports" className="hover:text-brand-gold transition-colors">Passport Bureau</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">HQ Operations</h4>
            <p className="text-slate-300 font-semibold leading-relaxed">
              Section 45, Lot 12, Ground Floor <br />
              Cutler Place, Port Moresby, NCD <br />
              Papua New Guinea
            </p>
          </div>

          {/* Column 4: Operational Desks */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Direct Helpdesks</h4>
            <ul className="space-y-1.5 font-mono text-slate-300">
              <li>Phone: +675 7958 2583</li>
              <li>Email: info@papouasietravel.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & BiiXoft Credit */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-semibold">
          <div>
            &copy; {currentYear} Papouasie Travel & Tours Agency. All rights reserved.
          </div>
          <div className="flex items-center space-x-1 text-slate-500">
            <span>Developed by</span>
            <a 
              href="https://bii-xoft-website.vercel.app/#home" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-black text-slate-400 hover:text-brand-gold transition-colors uppercase tracking-wider"
            >
              BiiXoft
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
