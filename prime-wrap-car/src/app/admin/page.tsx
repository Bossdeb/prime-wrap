'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - ในการใช้งานจริงจะใช้ Firebase Auth
    if (email === 'admin@primewrapcar.com' && password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              เข้าสู่ระบบ Admin
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              สำหรับผู้ดูแลระบบเท่านั้น
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  อีเมล
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="admin@primewrapcar.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  รหัสผ่าน
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="รหัสผ่าน"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                เข้าสู่ระบบ
              </button>
            </div>
            
            <div className="text-center text-sm text-gray-500">
              <p>Demo: admin@primewrapcar.com / admin123</p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              ออกจากระบบ
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-sm">📦</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        สินค้าทั้งหมด
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        24
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-sm">📝</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        บทความ
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        12
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-sm">🎨</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        ผลงาน
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        18
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-sm">👥</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        ผู้เยี่ยมชมวันนี้
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        156
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow rounded-lg mb-8">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                การจัดการเนื้อหา
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link 
                  href="/admin/products"
                  className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg text-center transition-colors"
                >
                  <div className="text-2xl mb-2">📦</div>
                  <div className="font-medium text-blue-900">จัดการสินค้า</div>
                  <div className="text-sm text-blue-600">เพิ่ม แก้ไข ลบสินค้า</div>
                </Link>

                <Link 
                  href="/admin/articles"
                  className="bg-green-50 hover:bg-green-100 p-4 rounded-lg text-center transition-colors"
                >
                  <div className="text-2xl mb-2">📝</div>
                  <div className="font-medium text-green-900">จัดการบทความ</div>
                  <div className="text-sm text-green-600">เขียน แก้ไข บทความ</div>
                </Link>

                <Link 
                  href="/admin/showcase"
                  className="bg-yellow-50 hover:bg-yellow-100 p-4 rounded-lg text-center transition-colors"
                >
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="font-medium text-yellow-900">จัดการผลงาน</div>
                  <div className="text-sm text-yellow-600">อัพโหลดผลงาน</div>
                </Link>

                <Link 
                  href="/admin/seed"
                  className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg text-center transition-colors"
                >
                  <div className="text-2xl mb-2">🌱</div>
                  <div className="font-medium text-gray-900">ข้อมูลตัวอย่าง</div>
                  <div className="text-sm text-gray-600">เพิ่มข้อมูลตัวอย่าง</div>
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                กิจกรรมล่าสุด
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">เพิ่มสินค้าใหม่: สี Wrap Matt Black</span>
                  <span className="text-xs text-gray-400">2 ชั่วโมงที่แล้ว</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">อัพเดทบทความ: วิธีการดูแลรักษาสี Wrap</span>
                  <span className="text-xs text-gray-400">5 ชั่วโมงที่แล้ว</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">เพิ่มผลงานใหม่: BMW Series 3</span>
                  <span className="text-xs text-gray-400">1 วันที่แล้ว</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
