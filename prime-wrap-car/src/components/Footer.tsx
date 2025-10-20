import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <h3 className="text-xl font-bold">Prime Wrap Car</h3>
            </div>
            <p className="text-gray-400">
              ผู้เชี่ยวชาญด้านสีแรปรถยนต์ ขายปลีก-ส่งสีแรปคุณภาพสูง พร้อมบริการติดตั้งโดยช่างมืออาชีพ
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span>📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                <span>💬</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <span>📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">เมนูหลัก</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  สินค้า
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  บริการ
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  ผลงาน
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  ติดต่อ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">บริการ</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  ติดตั้งสีแรป
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  ออกแบบกราฟิก
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  ขายปลีก-ส่ง
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  บำรุงรักษา
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  ประเมินราคา
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ติดต่อเรา</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📍</span>
                <div>
                  <p className="text-gray-400">
                  145/8 โครงการวิลเลจฮับ ราชพฤกษ์ ถ.ราชพฤกษ์<br />
                    
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <p className="text-gray-400">02-xxx-xxxx</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📱</span>
                <p className="text-gray-400">08x-xxx-xxxx</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">✉️</span>
                <p className="text-gray-400">info@primewrapcar.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">🕒</span>
                <div>
                  <p className="text-gray-400">จันทร์-เสาร์: 8:00-18:00</p>
                  <p className="text-gray-400">อาทิตย์: 9:00-17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Prime Wrap Car. สงวนลิขสิทธิ์ทุกประการ
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                ข้อกำหนดการใช้งาน
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}