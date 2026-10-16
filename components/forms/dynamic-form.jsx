"use client";
import React, { useState, useEffect } from 'react';
import BookingFields from './booking-fields';
import EnquiryFields from './enquiry-fields';

export default function DynamicForm() {
  const [formMode, setFormMode] = useState('booking');

  useEffect(() => {
    const handleSwitchForm = (e) => {
      if (e.detail?.mode) {
        setFormMode(e.detail.mode);
        document.getElementById('portal')?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('switchFormMode', handleSwitchForm);
    return () => window.removeEventListener('switchFormMode', handleSwitchForm);
  }, []);

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl md:p-8">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
        <h3 className="text-sm font-black uppercase tracking-tight text-brand-charcoal">
          {formMode === 'booking' ? 'Secure Expedition Booking' : 'General Desk Enquiry'}
        </h3>
        <div className="inline-flex rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setFormMode('booking')}
            className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${formMode === 'booking' ? 'bg-white text-brand-charcoal shadow-sm' : 'text-slate-400'}`}
          >
            Booking
          </button>
          <button
            type="button"
            onClick={() => setFormMode('enquiry')}
            className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${formMode === 'enquiry' ? 'bg-white text-brand-charcoal shadow-sm' : 'text-slate-400'}`}
          >
            Enquiry
          </button>
        </div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); alert('Request logged locally! (CMS/Email integration will hook here later)'); }} className="space-y-5">
        <div>
          <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-2">Full Name</label>
          <input required type="text" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900" placeholder="e.g. Brian Willie" />
        </div>
        <div>
          <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-2">Email Address</label>
          <input required type="email" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900" placeholder="client@example.com" />
        </div>

        {formMode === 'booking' ? <BookingFields /> : <EnquiryFields />}

        <button type="submit" className="w-full rounded-xl bg-brand-gold py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-goldHover transition-colors mt-4">
          {formMode === 'booking' ? 'Dispatch Booking File' : 'Submit Consultation'}
        </button>
      </form>
    </div>
  );
}
