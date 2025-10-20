'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                Prime Wrap Car
              </h1>
              <p className="text-xs text-gray-500">
                ผู้เชี่ยวชาญด้านสีแรปรถยนต์
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              หน้าแรก
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              สินค้า
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              บริการ
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              ผลงาน
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              ติดต่อ
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/quote" className="btn-primary hover:scale-105 transition-transform duration-200">
              ขอใบเสนอราคา
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                หน้าแรก
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
                สินค้า
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                บริการ
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium">
                ผลงาน
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                ติดต่อ
              </Link>
              <Link href="/quote" className="btn-primary inline-block text-center">
                ขอใบเสนอราคา
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}