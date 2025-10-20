import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Prime Wrap Car</span>
                <br />
                ผู้เชี่ยวชาญด้าน
                <br />
                สีแรปรถยนต์
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                ขายปลีก-ส่งสีแรปรถยนต์คุณภาพสูง พร้อมบริการติดตั้งโดยช่างผู้เชี่ยวชาญ 
                รับประกันคุณภาพ ราคาย่อมเยา
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-center hover:scale-105 transition-transform duration-200">
                ดูสินค้าทั้งหมด
              </Link>
              <Link href="/contact" className="btn-secondary text-center hover:scale-105 transition-transform duration-200">
                ติดต่อเรา
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors duration-200">
                  <span className="text-blue-600 text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-gray-900">คุณภาพสูง</h3>
                <p className="text-sm text-gray-600">สีแรปนำเข้าคุณภาพดี</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors duration-200">
                  <span className="text-blue-600 text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900">บริการรวดเร็ว</h3>
                <p className="text-sm text-gray-600">ติดตั้งเสร็จภายใน 1-2 วัน</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors duration-200">
                  <span className="text-blue-600 text-2xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-gray-900">รับประกัน</h3>
                <p className="text-sm text-gray-600">รับประกันคุณภาพ 2 ปี</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚗</div>
                    <p className="text-blue-600 font-semibold">Car Wrap Showcase</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 bg-red-200 rounded hover:bg-red-300 transition-colors duration-200"></div>
                  <div className="h-16 bg-blue-200 rounded hover:bg-blue-300 transition-colors duration-200"></div>
                  <div className="h-16 bg-green-200 rounded hover:bg-green-300 transition-colors duration-200"></div>
                </div>
              </div>
            </div>
            
            {/* Simple Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}