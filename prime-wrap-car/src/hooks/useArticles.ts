'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Article } from '@/types';

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const articlesCollection = collection(db, 'articles');
      const articlesSnapshot = await getDocs(query(articlesCollection, orderBy('createdAt', 'desc')));
      const articlesList = articlesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as Article[];
      setArticles(articlesList);
    } catch (err) {
      setError('Failed to fetch articles');
      console.error('Error fetching articles:', err);
    } finally {
      setLoading(false);
    }
  };

  const getArticle = async (id: string): Promise<Article | null> => {
    try {
      const articleDoc = doc(db, 'articles', id);
      const articleSnapshot = await getDoc(articleDoc);
      if (articleSnapshot.exists()) {
        return {
          id: articleSnapshot.id,
          ...articleSnapshot.data(),
          createdAt: articleSnapshot.data().createdAt?.toDate() || new Date(),
          updatedAt: articleSnapshot.data().updatedAt?.toDate() || new Date(),
        } as Article;
      }
      return null;
    } catch (err) {
      console.error('Error fetching article:', err);
      return null;
    }
  };

  const addArticle = async (articleData: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const articlesCollection = collection(db, 'articles');
      const newArticle = {
        ...articleData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const docRef = await addDoc(articlesCollection, newArticle);
      await fetchArticles(); // Refresh the list
      return docRef.id;
    } catch (err) {
      setError('Failed to add article');
      console.error('Error adding article:', err);
      throw err;
    }
  };

  const updateArticle = async (id: string, articleData: Partial<Article>) => {
    try {
      const articleDoc = doc(db, 'articles', id);
      await updateDoc(articleDoc, {
        ...articleData,
        updatedAt: new Date(),
      });
      await fetchArticles(); // Refresh the list
    } catch (err) {
      setError('Failed to update article');
      console.error('Error updating article:', err);
      throw err;
    }
  };

  const deleteArticle = async (id: string) => {
    try {
      const articleDoc = doc(db, 'articles', id);
      await deleteDoc(articleDoc);
      await fetchArticles(); // Refresh the list
    } catch (err) {
      setError('Failed to delete article');
      console.error('Error deleting article:', err);
      throw err;
    }
  };

  const getPublishedArticles = async (): Promise<Article[]> => {
    try {
      const articlesCollection = collection(db, 'articles');
      const publishedQuery = query(
        articlesCollection, 
        where('published', '==', true),
        orderBy('createdAt', 'desc')
      );
      const publishedSnapshot = await getDocs(publishedQuery);
      return publishedSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as Article[];
    } catch (err) {
      console.error('Error fetching published articles:', err);
      return [];
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return {
    articles,
    loading,
    error,
    fetchArticles,
    getArticle,
    addArticle,
    updateArticle,
    deleteArticle,
    getPublishedArticles,
  };
};