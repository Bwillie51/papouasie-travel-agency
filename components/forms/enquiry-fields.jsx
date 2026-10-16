import React from 'react';
import { Field, ErrorMessage } from 'formik';

export default function EnquiryFields() {
  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      
      <div>
        <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-2">
          Message Specifications
        </label>
        <Field
          as="textarea"
          name="message"
          rows={4}
          placeholder="Please describe your general travel or flight itinerary consultation requirements in detail here..."
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 transition-all focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20 placeholder:text-slate-400"
        />
        <ErrorMessage name="message" component="div" className="text-xs text-rose-500 font-semibold mt-1 px-1" />
      </div>

    </div>
  );
}
