'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Product } from '@/types';
import { useProducts } from '@/hooks/useProducts';



export default function ProductDetailPage() {
  const params = useParams();
  const { getProduct, products } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const loadProduct = async () => {
      if (params?.id) {
        try {
          const productData = await getProduct(params.id as string);
          setProduct(productData);
        } catch (error) {
          console.error('Error loading product:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadProduct();
  }, [params?.id, getProduct]);

  const handleOrderClick = () => {
    if (!product) return;
    const message = `สวัสดีครับ ผมสนใจสินค้า ${product.name} ราคา ฿${product.price.toLocaleString()} ครับ`;
    const lineUrl = `https://line.me/ti/p/@primewrapcar?message=${encodeURIComponent(message)}`;
    window.open(lineUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">กำลังโหลดข้อมูลสินค้า...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">ไม่พบสินค้า</h1>
          <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            กลับไปหน้าสินค้า
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-primary-600">
                หน้าแรก
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/products" className="text-gray-700 hover:text-primary-600">
                  สินค้า
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
                {product.images && product.images.length > 0 && product.images[selectedImage] !== '/placeholder-product.jpg' ? (
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500 text-lg">รูปภาพสินค้า</span>
                  </div>
                )}
              </div>
              
              {/* Thumbnail images */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    image !== '/placeholder-product.jpg' && (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImage === index ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    )
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full">
                  {product.category}
                </span>
                {product.featured && (
                  <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                    แนะนำ
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="text-4xl font-bold text-primary-600 mb-6">
                ฿{product.price.toLocaleString()}
              </div>

              <div className="prose max-w-none mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">หมวดหมู่:</span>
                    <span className="ml-2 text-gray-600">{product.category}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">คงเหลือ:</span>
                    <span className="ml-2 text-gray-600">{product.stock} ชิ้น</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={handleOrderClick}
                  disabled={product.stock === 0}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-medium transition-colors text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {product.stock > 0 ? '🛒 สั่งซื้อผ่าน LINE' : 'สินค้าหมด'}
                </button>
                
                <div className="text-center text-sm text-gray-500">
                  <p>💬 คลิกเพื่อติดต่อสั่งซื้อผ่าน LINE Official</p>
                  <p>📞 หรือโทร 02-xxx-xxxx</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="border-t border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">รายละเอียดสินค้า</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">คุณสมบัติ</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• ทนทานต่อสภาพอากาศ</li>
                  <li>• กันน้ำ กันฝุ่น</li>
                  <li>• ติดตั้งง่าย ถอดออกได้</li>
                  <li>• ไม่ทำลายสีเดิมของรถ</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">การดูแลรักษา</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• ล้างด้วยน้ำสะอาด</li>
                  <li>• หลีกเลี่ยงสารเคมีแรง</li>
                  <li>• เช็ดด้วยผ้านุ่ม</li>
                  <li>• ตรวจสอบขอบเป็นประจำ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">สินค้าที่เกี่ยวข้อง</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">รูปภาพสินค้า</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                    <p className="text-primary-600 font-bold">
                      ฿{relatedProduct.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}