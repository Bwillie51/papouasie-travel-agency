"use client";
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { EnquirySchema, BookingSchema } from '../../validators/forms';
import { Input } from '../ui/input';
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
      
      {/* Mode Switches */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
        <div>
          <h3 className="text-sm font-black uppercase tracking-tight text-brand-charcoal">
            {formMode === 'booking' ? 'Secure Expedition Booking' : 'General Desk Enquiry'}
          </h3>
        </div>
        <div className="inline-flex rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setFormMode('booking')}
            className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${formMode === 'booking' ? 'bg-white text-brand-charcoal shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Booking
          </button>
          <button
            type="button"
            onClick={() => setFormMode('enquiry')}
            className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${formMode === 'enquiry' ? 'bg-white text-brand-charcoal shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Enquiry
          </button>
        </div>
      </div>

      <Formik
        key={formMode}
        initialValues={{ fullName: '', email: '', message: '', destination: '', travelDate: '', guests: 1 }}
        validationSchema={formMode === 'booking' ? BookingSchema : EnquirySchema}
        onSubmit={(values, actions) => {
          alert('Request logged locally! (CMS/Email integration will hook here later)');
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5">
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-2">Full Name</label>
              <Field as={Input} name="fullName" placeholder="e.g. Brian Willie" />
              <ErrorMessage name="fullName" component="div" className="text-xs text-rose-500 font-semibold mt-1 px-1" />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-2">Email Address</label>
              <Field as={Input} name="email" type="email" placeholder="client@example.com" />
              <ErrorMessage name="email" component="div" className="text-xs text-rose-500 font-semibold mt-1 px-1" />
            </div>

            {formMode === 'booking' ? <BookingFields /> : <EnquiryFields />}

            <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-brand-gold py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-goldHover transition-colors mt-4 disabled:opacity-50 cursor-pointer">
              {isSubmitting ? 'Processing Entry...' : formMode === 'booking' ? 'Dispatch Booking File' : 'Submit Consultation'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
