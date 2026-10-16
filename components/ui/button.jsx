import React from 'react';

export function Button({ children, type = 'button', variant = 'primary', className = '', ...props }) {
  const baseStyle = 'inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-brand-gold text-white hover:bg-brand-goldHover shadow-md focus:ring-brand-gold/20',
    secondary: 'bg-brand-charcoal text-white hover:bg-slate-900 focus:ring-brand-charcoal/20',
    outline: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:ring-slate-500/20',
  };

  return (
    <button type={type} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
