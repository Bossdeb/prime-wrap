'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Article } from '@/types';
import { useArticles } from '@/hooks/useArticles';

export default function ArticlesPage() {
  const { getPublishedArticles } = useArticles();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const publishedArticles = await getPublishedArticles();
        setArticles(publishedArticles);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">กำลังโหลดบทความ...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">บทความ</h1>
          <p className="text-xl text-gray-600">ความรู้และเทคนิคเกี่ยวกับการ Wrap รถยนต์</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Articles */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-48 md:h-full bg-gray-200 overflow-hidden">
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
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{article.author}</span>
                        <span className="mx-2">•</span>
                        <time>{article.createdAt.toLocaleDateString('th-TH')}</time>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600">
                        <Link href={`/articles/${article.id}`}>
                          {article.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <Link 
                        href={`/articles/${article.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        อ่านต่อ
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Popular Articles */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">บทความยอดนิยม</h3>
                <div className="space-y-4">
                  {articles.slice(0, 3).map((article, index) => (
                    <div key={article.id} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white text-sm rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                      <div>
                        <Link 
                          href={`/articles/${article.id}`}
                          className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2"
                        >
                          {article.title}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">
                          {article.createdAt.toLocaleDateString('th-TH')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">หมวดหมู่</h3>
                <div className="space-y-2">
                  <Link href="/articles?category=tips" className="block text-gray-600 hover:text-blue-600">
                    เทคนิคและคำแนะนำ
                  </Link>
                  <Link href="/articles?category=trends" className="block text-gray-600 hover:text-blue-600">
                    เทรนด์และแฟชั่น
                  </Link>
                  <Link href="/articles?category=maintenance" className="block text-gray-600 hover:text-blue-600">
                    การดูแลรักษา
                  </Link>
                  <Link href="/articles?category=comparison" className="block text-gray-600 hover:text-blue-600">
                    เปรียบเทียบสินค้า
                  </Link>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-600 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-4">รับข่าวสารใหม่</h3>
                <p className="text-blue-100 text-sm mb-4">
                  สมัครรับข่าวสารและเทคนิคใหม่ๆ เกี่ยวกับการ Wrap รถยนต์
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="อีเมลของคุณ"
                    className="w-full px-3 py-2 rounded text-gray-900"
                  />
                  <button className="w-full bg-white text-blue-600 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                    สมัครสมาชิก
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
