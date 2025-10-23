'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ShowcaseItem } from '@/types';

export const useShowcase = () => {
  const [showcaseItems, setShowcaseItems] = useState<ShowcaseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchShowcaseItems = async () => {
    try {
      setLoading(true);
      const showcaseCollection = collection(db, 'showcase');
      const showcaseSnapshot = await getDocs(query(showcaseCollection, orderBy('createdAt', 'desc')));
      const showcaseList = showcaseSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as ShowcaseItem[];
      setShowcaseItems(showcaseList);
    } catch (err) {
      setError('Failed to fetch showcase items');
      console.error('Error fetching showcase items:', err);
    } finally {
      setLoading(false);
    }
  };

  const getShowcaseItem = async (id: string): Promise<ShowcaseItem | null> => {
    try {
      const showcaseDoc = doc(db, 'showcase', id);
      const showcaseSnapshot = await getDoc(showcaseDoc);
      if (showcaseSnapshot.exists()) {
        return {
          id: showcaseSnapshot.id,
          ...showcaseSnapshot.data(),
          createdAt: showcaseSnapshot.data().createdAt?.toDate() || new Date(),
          updatedAt: showcaseSnapshot.data().updatedAt?.toDate() || new Date(),
        } as ShowcaseItem;
      }
      return null;
    } catch (err) {
      console.error('Error fetching showcase item:', err);
      return null;
    }
  };

  const addShowcaseItem = async (showcaseData: Omit<ShowcaseItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const showcaseCollection = collection(db, 'showcase');
      const newShowcaseItem = {
        ...showcaseData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const docRef = await addDoc(showcaseCollection, newShowcaseItem);
      await fetchShowcaseItems(); // Refresh the list
      return docRef.id;
    } catch (err) {
      setError('Failed to add showcase item');
      console.error('Error adding showcase item:', err);
      throw err;
    }
  };

  const updateShowcaseItem = async (id: string, showcaseData: Partial<ShowcaseItem>) => {
    try {
      const showcaseDoc = doc(db, 'showcase', id);
      await updateDoc(showcaseDoc, {
        ...showcaseData,
        updatedAt: new Date(),
      });
      await fetchShowcaseItems(); // Refresh the list
    } catch (err) {
      setError('Failed to update showcase item');
      console.error('Error updating showcase item:', err);
      throw err;
    }
  };

  const deleteShowcaseItem = async (id: string) => {
    try {
      const showcaseDoc = doc(db, 'showcase', id);
      await deleteDoc(showcaseDoc);
      await fetchShowcaseItems(); // Refresh the list
    } catch (err) {
      setError('Failed to delete showcase item');
      console.error('Error deleting showcase item:', err);
      throw err;
    }
  };

  const getFeaturedShowcaseItems = async (): Promise<ShowcaseItem[]> => {
    try {
      const showcaseCollection = collection(db, 'showcase');
      const featuredQuery = query(
        showcaseCollection, 
        where('featured', '==', true),
        orderBy('createdAt', 'desc')
      );
      const featuredSnapshot = await getDocs(featuredQuery);
      return featuredSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as ShowcaseItem[];
    } catch (err) {
      console.error('Error fetching featured showcase items:', err);
      return [];
    }
  };

  useEffect(() => {
    fetchShowcaseItems();
  }, []);

  return {
    showcaseItems,
    loading,
    error,
    fetchShowcaseItems,
    getShowcaseItem,
    addShowcaseItem,
    updateShowcaseItem,
    deleteShowcaseItem,
    getFeaturedShowcaseItems,
  };
};