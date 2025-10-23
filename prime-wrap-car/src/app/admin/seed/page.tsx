'use client';

import { useState } from 'react';
import Link from 'next/link';
import { seedProducts, seedArticles, seedShowcase, seedAllData } from '@/lib/seedData';

export default function SeedDataPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSeedProducts = async () => {
    setLoading(true);
    setMessage('');
    try {
      await seedProducts();
      setMessage('เพิ่มข้อมูลสินค้าตัวอย่างเรียบร้อยแล้ว');
    } catch (error) {
      setMessage('เกิดข้อผิดพลาดในการเพิ่มข้อมูลสินค้า');
    } finally {
      setLoading(false);
    }
  };

  const handleSeedArticles = async () => {
    setLoading(true);
    setMessage('');
    try {
      await seedArticles();
      setMessage('เพิ่มข้อมูลบทความตัวอย่างเรียบร้อยแล้ว');
    } catch (error) {
      setMessage('เกิดข้อผิดพลาดในการเพิ่มข้อมูลบทความ');
    } finally {
      setLoading(false);
    }
  };

  const handleSeedShowcase = async () => {
    setLoading(true);
    setMessage('');
    try {
      await seedShowcase();
      setMessage('เพิ่มข้อมูลผลงานตัวอย่างเรียบร้อยแล้ว');
    } catch (error) {
      setMessage('เกิดข้อผิดพลาดในการเพิ่มข้อมูลผลงาน');
    } finally {
      setLoading(false);
    }
  };

  const handleSeedAll = async () => {
    setLoading(true);
    setMessage('');
    try {
      await seedAllData();
      setMessage('เพิ่มข้อมูลตัวอย่างทั้งหมดเรียบร้อยแล้ว');
    } catch (error) {
      setMessage('เกิดข้อผิดพลาดในการเพิ่มข้อมูล');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="text-gray-600 hover:text-gray-900">
                ← กลับ
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">เพิ่มข้อมูลตัวอย่าง</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">เพิ่มข้อมูลตัวอย่างลงใน Firebase</h2>
            <p className="text-gray-600 mb-6">
              คลิกปุ่มด้านล่างเพื่อเพิ่มข้อมูลตัวอย่างลงในฐานข้อมูล Firebase
              <br />
              <strong>หมายเหตุ:</strong> ตรวจสอบให้แน่ใจว่าได้ตั้งค่า Firebase configuration ใน .env.local แล้ว
            </p>

            {message && (
              <div className={`p-4 rounded-md mb-6 ${
                message.includes('เกิดข้อผิดพลาด') 
                  ? 'bg-red-50 text-red-700 border border-red-200' 
                  : 'bg-green-50 text-green-700 border border-green-200'
              }`}>
                {message}
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h3 className="font-medium">เพิ่มข้อมูลสินค้าตัวอย่าง</h3>
                  <p className="text-sm text-gray-600">เพิ่มสินค้า Wrap รถยนต์ตัวอย่าง 4 รายการ</p>
                </div>
                <button
                  onClick={handleSeedProducts}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                >
                  {loading ? 'กำลังเพิ่ม...' : 'เพิ่มสินค้า'}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h3 className="font-medium">เพิ่มข้อมูลบทความตัวอย่าง</h3>
                  <p className="text-sm text-gray-600">เพิ่มบทความเกี่ยวกับ Wrap รถยนต์ 3 บทความ</p>
                </div>
                <button
                  onClick={handleSeedArticles}
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                >
                  {loading ? 'กำลังเพิ่ม...' : 'เพิ่มบทความ'}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h3 className="font-medium">เพิ่มข้อมูลผลงานตัวอย่าง</h3>
                  <p className="text-sm text-gray-600">เพิ่มผลงาน Wrap รถยนต์ 6 ผลงาน</p>
                </div>
                <button
                  onClick={handleSeedShowcase}
                  disabled={loading}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                >
                  {loading ? 'กำลังเพิ่ม...' : 'เพิ่มผลงาน'}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-yellow-50">
                <div>
                  <h3 className="font-medium">เพิ่มข้อมูลทั้งหมด</h3>
                  <p className="text-sm text-gray-600">เพิ่มข้อมูลสินค้า บทความ และผลงานทั้งหมดในครั้งเดียว</p>
                </div>
                <button
                  onClick={handleSeedAll}
                  disabled={loading}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                >
                  {loading ? 'กำลังเพิ่ม...' : 'เพิ่มทั้งหมด'}
                </button>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">วิธีการตั้งค่า Firebase</h3>
              <ol className="text-sm text-blue-800 space-y-1">
                <li>1. สร้างโปรเจกต์ใน Firebase Console</li>
                <li>2. เปิดใช้งาน Firestore Database</li>
                <li>3. คัดลอก configuration ไปใส่ในไฟล์ .env.local</li>
                <li>4. ตั้งค่า Security Rules ให้อนุญาตการอ่าน/เขียนข้อมูล</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}