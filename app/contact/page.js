import React from 'react';
import Navbar from '../../components/navigation/navbar';
import DynamicForm from '../../components/forms/dynamic-form';
import Footer from '../../components/navigation/footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow mx-auto max-w-4xl px-6 py-16 w-full">
        <div className="border-l-4 border-brand-gold pl-4 mb-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Operations Desk</span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-brand-charcoal mt-1">Connect With Our Team</h1>
        </div>
        <DynamicForm />
      </main>
      <Footer />
    </div>
  );
}
