import React from 'react';

export default function Navbar() {
  return (
    // Top header section
<header className="w-full bg-white border-b py-3 px-6 flex items-center justify-between">
  <div className="flex items-center gap-3">
    <img 
      src="/shree-aishwarya-logo.png" // Save your logo in public/ with this filename
      alt="Shree Aishwarya Interiors Logo" 
      className="h-12 w-auto object-contain"
    />
    <span className="font-bold text-xl text-gray-800">
      SHREE AISHWARYA <br/>
      <span className="text-sm font-normal text-gray-500">INTERIOR & DESIGNERS</span>
    </span>
  </div>
</header>
  );
}