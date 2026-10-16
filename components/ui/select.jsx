import React from 'react';

export function Select({ children, className = '', ...props }) {
  return (
    <div className="relative w-full">
      <select
        className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 transition-all focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20 appearance-none ${className}`}
        {...props}
      >
        {children}
      </select>
      {/* Absolute native vector indicator arrow to ensure dropdown click clarity */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
