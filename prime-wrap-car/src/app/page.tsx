'use client';

import Link from 'next/link';
import { useProducts } from '@/hooks/useProducts';
import { useShowcase } from '@/hooks/useShowcase';
import { useArticles } from '@/hooks/useArticles';
import { useEffect, useState } from 'react';
import { Product, ShowcaseItem, Article } from '@/types';

export default function Home() {
  const { getFeaturedProducts } = useProducts();
  const { getFeaturedShowcaseItems } = useShowcase();
  const { getPublishedArticles } = useArticles();
  
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [featuredShowcase, setFeaturedShowcase] = useState<ShowcaseItem[]>([]);
  const [latestArticles, setLatestArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [products, showcase, articles] = await Promise.all([
          getFeaturedProducts(),
          getFeaturedShowcaseItems(),
          getPublishedArticles()
        ]);
        
        setFeaturedProducts(products.slice(0, 3));
        setFeaturedShowcase(showcase.slice(0, 3));
        setLatestArticles(articles.slice(0, 3));
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleOrderClick = (productName: string) => {
    const message = `สวัสดีครับ ผมสนใจสินค้า ${productName} ครับ`;
    const lineUrl = `https://line.me/ti/p/@primewrapcar?message=${encodeURIComponent(message)}`;
    window.open(lineUrl, '_blank');
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Luxury Design */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              <div className="bg-slate-900 rounded-full px-6 py-2">
                <span className="text-white text-sm font-medium">Premium Car Wrapping</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Prime Wrap Car
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            เปลี่ยนโฉมรถคุณด้วยสี Wrap คุณภาพพรีเมียม<br />
            <span className="text-white font-medium">ความหรูหรา ความทันสมัย ในราคาที่คุ้มค่า</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              href="/products" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">สำรวจสินค้า</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/showcase" 
              className="group px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              ดูผลงาน
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">ลูกค้าพึงพอใจ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-blue-200">ปีประสบการณ์</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-200">รับประกันคุณภาพ</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Products - Luxury Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              สินค้าแนะนำ
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              คัดสรรสี Wrap คุณภาพพรีเมียมที่ได้รับความนิยมสูงสุด
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.length > 0 ? (
                featuredProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative p-8">
                      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        {product.images && product.images.length > 0 && product.images[0] !== '/placeholder-product.jpg' ? (
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white text-2xl">🎨</span>
                              </div>
                              <span className="text-gray-500 text-sm">รูปภาพสินค้า</span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                            {product.category}
                          </span>
                          <span className="text-green-600 text-sm font-medium">
                            คงเหลือ {product.stock} ชิ้น
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                          {product.name}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4">
                          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            ฿{product.price.toLocaleString()}
                          </div>
                          
                          <button 
                            onClick={() => handleOrderClick(product.name)}
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                          >
                            สั่งซื้อ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <div className="text-gray-400 text-lg">ไม่มีสินค้าแนะนำในขณะนี้</div>
                  <Link href="/admin/seed" className="text-blue-600 hover:underline mt-2 inline-block">
                    เพิ่มข้อมูลตัวอย่าง
                  </Link>
                </div>
              )}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 group"
            >
              ดูสินค้าทั้งหมด
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              ผลงานล่าสุด
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ชมผลงานการติดตั้งสี Wrap ที่โดดเด่นและน่าประทับใจ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredShowcase.length > 0 ? (
              featuredShowcase.map((item, index) => (
                <div 
                  key={item.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
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
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <div className="text-gray-400 text-lg">ไม่มีผลงานแนะนำในขณะนี้</div>
              </div>
            )}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/showcase" 
              className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 group"
            >
              ดูผลงานทั้งหมด
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              บทความล่าสุด
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ความรู้และเทคนิคเกี่ยวกับการ Wrap รถยนต์
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.length > 0 ? (
              latestArticles.map((article, index) => (
                <Link 
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    {article.image && article.image !== '/placeholder-article.jpg' ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-500">รูปภาพบทความ</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{article.createdAt.toLocaleDateString('th-TH')}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                      อ่านต่อ
                      <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <div className="text-gray-400 text-lg">ไม่มีบทความในขณะนี้</div>
              </div>
            )}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/articles" 
              className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 group"
            >
              อ่านบทความทั้งหมด
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Luxury */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            พร้อมเปลี่ยนโฉมรถคุณแล้วหรือยัง?
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            ปรึกษาฟรี รับใบเสนอราคา และเริ่มต้นการเปลี่ยนแปลงที่น่าตื่นเต้น<br />
            <span className="text-white font-medium">ด้วยทีมผู้เชี่ยวชาญมากประสบการณ์</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://line.me/ti/p/@primewrapcar" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <span className="mr-3 text-2xl">💬</span>
              ติดต่อผ่าน LINE
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            
            <a 
              href="tel:02-xxx-xxxx"
              className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <span className="mr-3 text-xl">📞</span>
              โทรสอบถาม
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">🎨</span>
              </div>
              <div className="text-white font-semibold">คุณภาพพรีเมียม</div>
              <div className="text-blue-200 text-sm">วัสดุนำเข้าคุณภาพสูง</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">⚡</span>
              </div>
              <div className="text-white font-semibold">บริการรวดเร็ว</div>
              <div className="text-blue-200 text-sm">ช่างผู้เชี่ยวชาญ</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">💎</span>
              </div>
              <div className="text-white font-semibold">รับประกันคุณภาพ</div>
              <div className="text-blue-200 text-sm">บริการหลังการขาย</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}