import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Select } from '../ui/select';
import { Input } from '../ui/input';

export default function BookingFields() {
  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      
      <div>
        <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-2">
          Select Service Category
        </label>
        {/* Mapping custom select element to render internal children options array */}
        <Field name="destination">
          {({ field }) => (
            <Select {...field}>
              <option value="">Choose an operational channel...</option>
              <option value="intl-flights">International Flights & Ticketing</option>
              <option value="domestic-flights">Domestic PNG Routes (Air Niugini / PNG Air)</option>
              <option value="visa-assistance">Inbound Tourist / Corporate Visa Facilitation</option>
              <option value="passport-processing">Passport Renewal & Fast-Track Documentation</option>
            </Select>
          )}
        </Field>
        <ErrorMessage name="destination" component="div" className="text-xs text-rose-500 font-semibold mt-1 px-1" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-2">
            Target Travel/Filing Date
          </label>
          <Field as={Input} name="travelDate" type="date" />
          <ErrorMessage name="travelDate" component="div" className="text-xs text-rose-500 font-semibold mt-1 px-1" />
        </div>

        <div>
          <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-2">
            Total Passengers / Applicants
          </label>
          <Field as={Input} name="guests" type="number" min="1" placeholder="1" />
          <ErrorMessage name="guests" component="div" className="text-xs text-rose-500 font-semibold mt-1 px-1" />
        </div>
      </div>

    </div>
  );
}
