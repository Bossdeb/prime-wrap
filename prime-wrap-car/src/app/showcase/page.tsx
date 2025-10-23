'use client';

import { useState, useEffect } from 'react';
import { ShowcaseItem } from '@/types';
import { useShowcase } from '@/hooks/useShowcase';

export default function ShowcasePage() {
  const { showcaseItems, loading, error } = useShowcase();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);

  // Get unique categories from showcase items
  const categories = ['All', ...Array.from(new Set(showcaseItems.map(item => item.category)))];

  const filteredItems = selectedCategory === 'All' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">กำลังโหลดผลงาน...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <p className="text-gray-600">กรุณาตรวจสอบการเชื่อมต่อ Firebase</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">ผลงานของเรา</h1>
          <p className="text-xl text-gray-600">ชมผลงานการติดตั้งสี Wrap รถยนต์คุณภาพสูง</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {category === 'All' ? 'ทั้งหมด' : category}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="h-64 bg-gray-200 overflow-hidden">
                {item.image && item.image !== '/placeholder-showcase.jpg' ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">รูปภาพผลงาน</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.description}
                </p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm">
                  ดูรายละเอียด →
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">ไม่พบผลงานในหมวดหมู่นี้</p>
          </div>
        )}

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h2>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedItem.beforeImage && selectedItem.beforeImage !== '/placeholder-before.jpg' && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">ก่อนติดตั้ง</h3>
                      <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={selectedItem.beforeImage}
                          alt={`${selectedItem.title} - ก่อน`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                  <div className={selectedItem.beforeImage && selectedItem.beforeImage !== '/placeholder-before.jpg' ? '' : 'md:col-span-2'}>
                    <h3 className="text-lg font-semibold mb-2">หลังติดตั้ง</h3>
                    <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                      {selectedItem.image && selectedItem.image !== '/placeholder-showcase.jpg' ? (
                        <img
                          src={selectedItem.image}
                          alt={`${selectedItem.title} - หลัง`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-gray-500">รูปภาพหลังติดตั้ง</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">รายละเอียด</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedItem.description}</p>
                  
                  <div className="mt-4 flex items-center space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {selectedItem.category}
                    </span>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">สนใจบริการเช่นนี้?</p>
                  <a 
                    href="https://line.me/ti/p/@primewrapcar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <span className="mr-2">💬</span>
                    ติดต่อสอบถาม
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">พร้อมสร้างผลงานให้กับรถคุณ?</h2>
          <p className="text-blue-100 mb-6">
            ติดต่อเราวันนี้เพื่อปรึกษาและรับใบเสนอราคาฟรี
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://line.me/ti/p/@primewrapcar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              💬 ติดต่อผ่าน LINE
            </a>
            <a 
              href="tel:02-xxx-xxxx"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors"
            >
              📞 โทรสอบถาม
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
