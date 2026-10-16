import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Papouasie Travel\&Tour Agency',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='min-h-screen bg-slate-50 font-sans antialiased text-slate-900'>
        {children}
      </body>
    </html>
  );
}
