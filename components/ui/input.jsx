import React from 'react';

export function Input({ name, type = 'text', className = '', ...props }) {
  return (
    <input
      type={type}
      name={name}
      className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 transition-all focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20 placeholder:text-slate-400 ${className}`}
      {...props}
    />
  );
}
