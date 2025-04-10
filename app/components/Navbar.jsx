// components/Navbar.jsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek scroll untuk mengubah warna navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="h-8 w-8 relative mr-2">
                  <Image 
                    src="/images/Untirta.png" 
                    alt="Untirta Icon"
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </div>
                <span className="text-black font-bold text-lg">Solar Panel Monitor</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-200">
                  Dashboard
                </Link>
                <Link href="/analytics" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900">
                  Analytics
                </Link>
                <Link href="/reports" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900">
                  Reports
                </Link>
                <Link href="/settings" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900">
                  Settings
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
              Live Monitor
            </button>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-200 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <Bars3Icon className="h-6 w-6 text-gray-700" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-200">
              Dashboard
            </Link>
            <Link href="/analytics" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              Analytics
            </Link>
            <Link href="/reports" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              Reports
            </Link>
            <Link href="/settings" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              Settings
            </Link>
            <div className="mt-4 px-3">
              <button className="w-full bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                Live Monitor
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}