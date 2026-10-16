"use client";
import React, { useState } from 'react';

import { Button } from '../../components/ui/button';


// Mock high-density booking database items for instant local UI rendering
const INITIAL_QUEUE = [
  { id: 'BK-9021', name: 'Alphonse Mara', email: 'amara@domain.pg', tour: 'International Flights & Ticketing', date: '2026-10-25', seats: 3, status: 'Pending Approval' },
  { id: 'BK-8843', name: 'Sarah Jenkins', email: 's.jenkins@global.com', tour: 'Visa Facilitation Tracking', date: '2026-11-02', seats: 2, status: 'Confirmed' },
  { id: 'BK-7110', name: 'Nathaniel Tau', email: 'ntau@ict.gov.pg', tour: 'Passport Renewal Documentation', date: '2026-10-29', seats: 5, status: 'Pending Approval' }
];

export default function AgentDashboard() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [queue, setQueue] = useState(INITIAL_QUEUE);

  const totalSeatsAllocated = queue.reduce((sum, item) => sum + item.seats, 0);
  const pendingCount = queue.filter(item => item.status === 'Pending Approval').length;

  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-100 font-sans antialiased">
      
      {/* --- DASHBOARD SIDEBAR FRAME --- */}
      <aside className="w-64 border-r border-slate-800 bg-brand-charcoal flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-800 flex items-center space-x-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800">
            <img 
              src="/assets/Logo.jpeg" 
              alt="Papouasie Logo" 
              className="h-8 w-8 object-contain rounded"
              onError={(e) => { e.target.src = '/img1.jpg'; }}
            />
          </div>
          <div>
            <span className="block text-sm font-black tracking-tight text-white uppercase leading-none">
              Papouasie
            </span>
            <span className="block text-[9px] font-bold tracking-widest text-slate-500 uppercase mt-0.5">
              Internal Desk
            </span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1.5">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`w-full text-left flex items-center space-x-3 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'bookings' ? 'bg-brand-gold text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <span>Active Booking Files</span>
          </button>
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`w-full text-left flex items-center space-x-3 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'enquiries' ? 'bg-brand-gold text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <span>Consultation Inbox</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800 text-[10px] font-medium text-slate-500 text-center">
          Agent Account Security Layer
        </div>
      </aside>

      {/* --- CORE WORKSPACE WINDOW --- */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Dynamic Horizontal Workspace Banner */}
        <header className="h-20 border-b border-slate-800 bg-brand-charcoal/40 backdrop-blur-md flex items-center justify-between px-8 shrink-0">
          <div>
            <h1 className="text-sm font-black uppercase tracking-tight text-white">
              {activeTab === 'bookings' ? 'Expedition Queue Logistics' : 'General Inquiries Ledger'}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs font-bold text-slate-400">Operator Desk #1</span>
            <div className="h-8 w-8 rounded-full bg-brand-gold flex items-center justify-center text-xs font-black text-white">
              AG
            </div>
          </div>
        </header>

        {/* Analytics Parameter Metric Grid */}
        <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
          
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-brand-charcoal/20 p-5 shadow-sm">
              <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500">Gross Active Transmissions</span>
              <span className="block text-xl font-black text-white mt-2">{queue.length}</span>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-brand-charcoal/20 p-5 shadow-sm">
              <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500">Awaiting Agent Verification</span>
              <span className="block text-xl font-black text-brand-gold mt-2">{pendingCount}</span>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-brand-charcoal/20 p-5 shadow-sm">
              <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500">Total Booked Seats Count</span>
              <span className="block text-xl font-black text-white mt-2">{totalSeatsAllocated}</span>
            </div>
          </div>

          {/* Structured Management Ledger Data Grid */}
          <div className="rounded-2xl border border-slate-800 bg-brand-charcoal/10 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-brand-charcoal/40 text-[9px] font-black uppercase tracking-widest text-slate-400">
                    <th className="py-4 px-6">File ID</th>
                    <th className="py-4 px-6">Client Persona</th>
                    <th className="py-4 px-6">Selected Operational Channel</th>
                    <th className="py-4 px-6 text-center">Departure / Filing</th>
                    <th className="py-4 px-6 text-center">Seats / Trans.</th>
                    <th className="py-4 px-6 text-center">Operational Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-xs font-medium text-slate-300">
                  {queue.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-6 font-mono text-brand-gold font-bold">{row.id}</td>
                      <td className="py-4 px-6">
                        <span className="block text-white font-bold">{row.name}</span>
                        <span className="block text-[10px] text-slate-500 font-mono mt-0.5">{row.email}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-200">{row.tour}</td>
                      <td className="py-4 px-6 text-center font-mono">{row.date}</td>
                      <td className="py-4 px-6 text-center text-white font-bold">{row.seats}</td>
                      <td className="py-4 px-6 text-center">
                        <span className={`inline-block rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wider ${row.status === 'Confirmed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20'}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
