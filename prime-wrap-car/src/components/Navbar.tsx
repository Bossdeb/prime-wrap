'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">
                Prime Wrap Car
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              หน้าแรก
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
              สินค้า
            </Link>
            <Link href="/articles" className="text-gray-700 hover:text-blue-600 font-medium">
              บทความ
            </Link>
            <Link href="/showcase" className="text-gray-700 hover:text-blue-600 font-medium">
              ผลงาน
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                หน้าแรก
              </Link>
              <Link href="/products" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                สินค้า
              </Link>
              <Link href="/articles" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                บทความ
              </Link>
              <Link href="/showcase" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                ผลงาน
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
