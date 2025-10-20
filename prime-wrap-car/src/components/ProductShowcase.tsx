import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'สีแรปเมทัลลิค',
    description: 'สีแรปเมทัลลิคคุณภาพสูง ให้ความเงางามสวยงาม',
    price: '฿2,500 - ฿4,500',
    colors: ['#C0C0C0', '#FFD700', '#CD7F32', '#708090'],
    category: 'premium'
  },
  {
    id: 2,
    name: 'สีแรปด้าน (Matte)',
    description: 'สีแรปด้านสำหรับลุคสปอร์ตและหรูหรา',
    price: '฿2,000 - ฿3,500',
    colors: ['#2C2C2C', '#FFFFFF', '#FF0000', '#0066CC'],
    category: 'popular'
  },
  {
    id: 3,
    name: 'สีแรปเปลี่ยนสี',
    description: 'สีแรปที่เปลี่ยนสีตามมุมมอง สร้างความโดดเด่น',
    price: '฿5,000 - ฿8,000',
    colors: ['#9932CC', '#FF1493', '#00CED1', '#32CD32'],
    category: 'premium'
  },
  {
    id: 4,
    name: 'สีแรปคาร์บอนไฟเบอร์',
    description: 'ลายคาร์บอนไฟเบอร์ 3D สำหรับลุคสปอร์ต',
    price: '฿3,000 - ฿5,500',
    colors: ['#1C1C1C', '#2F2F2F', '#0D47A1', '#B71C1C'],
    category: 'sport'
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            สินค้าแนะนำ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            เลือกสีแรปรถยนต์คุณภาพสูงจากแบรนด์ชั้นนำ พร้อมบริการติดตั้งโดยช่างผู้เชี่ยวชาญ
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="card group cursor-pointer hover:scale-105 transition-transform duration-300">
              {/* Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  product.category === 'premium' ? 'bg-yellow-100 text-yellow-800' :
                  product.category === 'popular' ? 'bg-green-100 text-green-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {product.category === 'premium' ? 'พรีเมียม' :
                   product.category === 'popular' ? 'ยอดนิยม' : 'สปอร์ต'}
                </span>
              </div>

              {/* Product Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center group-hover:from-blue-50 group-hover:to-blue-100 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎨</div>
                  <p className="text-gray-500 text-sm">ตัวอย่างสีแรป</p>
                </div>
              </div>

              {/* Color Swatches */}
              <div className="flex space-x-2 mb-4">
                {product.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="w-6 h-6 rounded-full border-2 border-gray-200 hover:scale-110 transition-transform duration-200"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-blue-600 font-bold">
                    {product.price}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                    ดูรายละเอียด →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/products" className="btn-primary hover:scale-105 transition-transform duration-200">
            ดูสินค้าทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}