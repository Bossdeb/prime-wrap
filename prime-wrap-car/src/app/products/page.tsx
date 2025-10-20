import Header from '@/components/Header';
import Footer from '@/components/Footer';

const products = [
  {
    id: 1,
    name: 'สีแรปเมทัลลิค Premium',
    description: 'สีแรปเมทัลลิคคุณภาพสูง ให้ความเงางามสวยงาม ทนทานต่อสภาพอากาศ',
    price: '฿2,500 - ฿4,500',
    colors: ['#C0C0C0', '#FFD700', '#CD7F32', '#708090', '#B87333'],
    category: 'premium',
    features: ['กันรังสี UV', 'กันน้ำ 100%', 'ใช้งานได้ 5-7 ปี', 'ติดตั้งง่าย']
  },
  {
    id: 2,
    name: 'สีแรปด้าน (Matte Finish)',
    description: 'สีแรปด้านสำหรับลุคสปอร์ตและหรูหรา ไม่สะท้อนแสง',
    price: '฿2,000 - ฿3,500',
    colors: ['#2C2C2C', '#FFFFFF', '#FF0000', '#0066CC', '#228B22'],
    category: 'popular',
    features: ['ผิวด้านสวยงาม', 'ไม่สะท้อนแสง', 'ทำความสะอาดง่าย', 'ลุคสปอร์ต']
  },
  {
    id: 3,
    name: 'สีแรปเปลี่ยนสี (Color Shift)',
    description: 'สีแรปที่เปลี่ยนสีตามมุมมอง สร้างความโดดเด่นและน่าสนใจ',
    price: '฿5,000 - ฿8,000',
    colors: ['#9932CC', '#FF1493', '#00CED1', '#32CD32', '#FF4500'],
    category: 'premium',
    features: ['เปลี่ยนสีตามแสง', 'เทคโนโลยีใหม่', 'โดดเด่นเฉพาะตัว', 'คุณภาพสูง']
  },
  {
    id: 4,
    name: 'สีแรปคาร์บอนไฟเบอร์ 3D',
    description: 'ลายคาร์บอนไฟเบอร์ 3D สำหรับลุคสปอร์ต มีเนื้อสัมผัสเหมือนจริง',
    price: '฿3,000 - ฿5,500',
    colors: ['#1C1C1C', '#2F2F2F', '#0D47A1', '#B71C1C', '#4A4A4A'],
    category: 'sport',
    features: ['ลาย 3D สมจริง', 'เนื้อสัมผัสดี', 'ลุคสปอร์ต', 'ทนทานสูง']
  },
  {
    id: 5,
    name: 'สีแรปใส (Clear Protection)',
    description: 'ฟิล์มใสป้องกันรอยขีดข่วน เก็บสีเดิมของรถไว้',
    price: '฿1,500 - ฿2,500',
    colors: ['transparent'],
    category: 'protection',
    features: ['ใสไม่เปลี่ยนสี', 'ป้องกันรอยขีดข่วน', 'กันรังสี UV', 'ถอดออกได้']
  },
  {
    id: 6,
    name: 'สีแรปกราฟิก Custom',
    description: 'บริการออกแบบกราฟิกตามต้องการ สำหรับงานโฆษณาและตกแต่ง',
    price: '฿3,500 - ฿15,000',
    colors: ['custom'],
    category: 'custom',
    features: ['ออกแบบตามต้องการ', 'พิมพ์คุณภาพสูง', 'สีสดใส', 'ทนทานต่อแสงแดด']
  }
];

const categories = [
  { id: 'all', name: 'ทั้งหมด' },
  { id: 'premium', name: 'พรีเมียม' },
  { id: 'popular', name: 'ยอดนิยม' },
  { id: 'sport', name: 'สปอร์ต' },
  { id: 'protection', name: 'ป้องกัน' },
  { id: 'custom', name: 'สั่งทำ' }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                สินค้าทั้งหมด
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                เลือกสีแรปรถยนต์คุณภาพสูงจากแบรนด์ชั้นนำ พร้อมบริการติดตั้งโดยช่างผู้เชี่ยวชาญ
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    category.id === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="card group cursor-pointer">
                  {/* Category Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.category === 'premium' ? 'bg-yellow-100 text-yellow-800' :
                      product.category === 'popular' ? 'bg-green-100 text-green-800' :
                      product.category === 'sport' ? 'bg-blue-100 text-blue-800' :
                      product.category === 'protection' ? 'bg-purple-100 text-purple-800' :
                      'bg-pink-100 text-pink-800'
                    }`}>
                      {product.category === 'premium' ? 'พรีเมียม' :
                       product.category === 'popular' ? 'ยอดนิยม' :
                       product.category === 'sport' ? 'สปอร์ต' :
                       product.category === 'protection' ? 'ป้องกัน' : 'สั่งทำ'}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center group-hover:from-blue-50 group-hover:to-blue-100 transition-colors">
                    <div className="text-center">
                      <div className="text-4xl mb-2">
                        {product.category === 'sport' ? '🏎️' :
                         product.category === 'premium' ? '✨' :
                         product.category === 'protection' ? '🛡️' :
                         product.category === 'custom' ? '🎨' : '🚗'}
                      </div>
                      <p className="text-gray-500 text-sm">{product.name}</p>
                    </div>
                  </div>

                  {/* Color Swatches */}
                  <div className="flex space-x-2 mb-4">
                    {product.colors[0] === 'transparent' ? (
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white relative">
                        <div className="absolute inset-1 border border-gray-200 rounded-full"></div>
                      </div>
                    ) : product.colors[0] === 'custom' ? (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400"></div>
                    ) : (
                      product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full border-2 border-gray-200"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="text-xs text-gray-500 flex items-center">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-blue-600 font-bold">
                        {product.price}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        ดูรายละเอียด →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ต้องการคำปรึกษาเรื่องสีแรป?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              ทีมงานผู้เชี่ยวชาญพร้อมให้คำแนะนำและประเมินราคาฟรี ติดต่อเราได้ทุกวัน
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                📞 โทรปรึกษา 02-xxx-xxxx
              </button>
              <button className="btn-secondary">
                💬 แชทไลน์
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}