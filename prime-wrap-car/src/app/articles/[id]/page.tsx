'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Article } from '@/types';
import { useArticles } from '@/hooks/useArticles';



export default function ArticleDetailPage() {
  const params = useParams();
  const { getArticle, articles } = useArticles();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      if (params?.id) {
        try {
          const articleData = await getArticle(params.id as string);
          setArticle(articleData);
        } catch (error) {
          console.error('Error loading article:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadArticle();
  }, [params?.id, getArticle]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">กำลังโหลดบทความ...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">ไม่พบบทความ</h1>
          <Link href="/articles" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            กลับไปหน้าบทความ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Link href="/articles" className="text-gray-700 hover:text-primary-600">
                  บทความ
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500 line-clamp-1">{article.title}</span>
              </div>
            </li>
          </ol>
        </nav>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Article Header */}
          <div className="h-64 md:h-96 bg-gray-200 overflow-hidden">
            {article.image && article.image !== '/placeholder-article.jpg' ? (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500 text-lg">รูปภาพบทความ</span>
              </div>
            )}
          </div>

          <div className="p-8">
            {/* Article Meta */}
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>{article.author}</span>
              <span className="mx-2">•</span>
              <time>{article.createdAt.toLocaleDateString('th-TH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</time>
              <span className="mx-2">•</span>
              <span>อ่าน 5 นาที</span>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share Buttons */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-lg font-semibold mb-4">แชร์บทความนี้</h3>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  <span>📘</span>
                  <span>Facebook</span>
                </button>
                <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                  <span>💬</span>
                  <span>LINE</span>
                </button>
                <button className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                  <span>🔗</span>
                  <span>คัดลอกลิงก์</span>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">บทความที่เกี่ยวข้อง</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles
              .filter(a => a.id !== article.id && a.published)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link 
                  key={relatedArticle.id}
                  href={`/articles/${relatedArticle.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">รูปภาพบทความ</span>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {relatedArticle.createdAt.toLocaleDateString('th-TH')}
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-primary-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">สนใจสินค้าของเรา?</h2>
          <p className="text-primary-100 mb-6">
            ดูสินค้า Wrap รถยนต์คุณภาพสูงของเรา หรือติดต่อสอบถามข้อมูลเพิ่มเติม
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              ดูสินค้าทั้งหมด
            </Link>
            <a 
              href="https://line.me/ti/p/@primewrapcar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              💬 ติดต่อผ่าน LINE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}