'use client'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm px-6 py-4">
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-wide">
          Logo.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-indigo-500">About</a>
          <a href="#services" className="hover:text-indigo-500">Services</a>
          <a href="#portfolio" className="hover:text-indigo-500">Portfolio</a>
          <a href="#contact" className="hover:text-indigo-500">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start space-y-4 px-6 text-sm font-medium">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
