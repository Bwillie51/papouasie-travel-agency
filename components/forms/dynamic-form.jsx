"use client";
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { EnquirySchema, BookingSchema } from '../../validators/forms';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import BookingFields from './booking-fields';
import EnquiryFields from './enquiry-fields';

export default function DynamicForm() {
  const [formMode, setFormMode] = useState('booking'); // Modes: 'booking' or 'enquiry'
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  // Dynamically listen for direct navigation links interaction events
  useEffect(() => {
    const handleSwitchForm = (e) => {
      if (e.detail?.mode) {
        setFormMode(e.detail.mode);
        setStatusMessage({ type: '', text: '' });
        
        // Fluidly scroll the client view context straight to the active form field container
        document.getElementById('portal')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('switchFormMode', handleSwitchForm);
    return () => window.removeEventListener('switchFormMode', handleSwitchForm);
  }, []);

  // Compute the exact Subject line string programmatically before passing it to Resend
  const getComputedSubject = (mode, values) => {
    if (mode === 'booking') {
      const serviceMapping = {
        'intl-flights': 'International Flights & Ticketing',
        'domestic-flights': 'Domestic PNG Routes',
        'visa-assistance': 'Visa Facilitation Assistance',
        'passport-processing': 'PNG Passport Services'
      };
      const chosenService = serviceMapping[values.destination] || 'General Travel Request';
      return `🚨 NEW BOOKING FILE: ${chosenService} - ${values.fullName}`;
    }
    return `✉️ NEW ADVISORY ENQUIRY: General Desk Consultation - ${values.fullName}`;
  };

  const handleFormSubmit = async (values, actions) => {
    setStatusMessage({ type: '', text: '' });
    try {
      // Auto-inject the calculated custom subject string into the transmission payload
      const customSubject = getComputedSubject(formMode, values);
      const payload = { 
        ...values, 
        formType: formMode,
        subject: customSubject 
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const resData = await response.json();

      if (resData.success) {
        setStatusMessage({ type: 'success', text: 'Your request has been processed successfully!' });
        actions.resetForm();
      } else {
        setStatusMessage({ type: 'error', text: resData.error || 'Failed to submit dispatch.' });
      }
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Network transmission failure. Please try again.' });
    } finally {
      actions.setSubmitting(false);
    }
  };

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
            onClick={() => { setFormMode('booking'); setStatusMessage({ type: '', text: '' }); }}
            className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${formMode === 'booking' ? 'bg-white text-brand-charcoal shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Booking
          </button>
          <button
            type="button"
            onClick={() => { setFormMode('enquiry'); setStatusMessage({ type: '', text: '' }); }}
            className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${formMode === 'enquiry' ? 'bg-white text-brand-charcoal shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Enquiry
          </button>
        </div>
      </div>

      {statusMessage.text && (
        <div className={`mb-6 rounded-xl p-4 text-xs font-bold ${statusMessage.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-rose-50 text-rose-700 border border-rose-100'}`}>
          {statusMessage.text}
        </div>
      )}

      <Formik
        key={formMode}
        initialValues={{ fullName: '', email: '', message: '', destination: '', travelDate: '', guests: 1 }}
        validationSchema={formMode === 'booking' ? BookingSchema : EnquirySchema}
        onSubmit={handleFormSubmit}
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

            <Button type="submit" disabled={isSubmitting} className="w-full uppercase tracking-wider mt-4">
              {isSubmitting ? 'Processing Entry...' : formMode === 'booking' ? 'Dispatch Booking File' : 'Submit Consultation'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
