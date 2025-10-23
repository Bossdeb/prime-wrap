'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Product } from '@/types';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(query(productsCollection, orderBy('createdAt', 'desc')));
      const productsList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as Product[];
      setProducts(productsList);
    } catch (err) {
      setError('Failed to fetch products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const getProduct = async (id: string): Promise<Product | null> => {
    try {
      const productDoc = doc(db, 'products', id);
      const productSnapshot = await getDoc(productDoc);
      if (productSnapshot.exists()) {
        return {
          id: productSnapshot.id,
          ...productSnapshot.data(),
          createdAt: productSnapshot.data().createdAt?.toDate() || new Date(),
          updatedAt: productSnapshot.data().updatedAt?.toDate() || new Date(),
        } as Product;
      }
      return null;
    } catch (err) {
      console.error('Error fetching product:', err);
      return null;
    }
  };

  const addProduct = async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const productsCollection = collection(db, 'products');
      const newProduct = {
        ...productData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const docRef = await addDoc(productsCollection, newProduct);
      await fetchProducts(); // Refresh the list
      return docRef.id;
    } catch (err) {
      setError('Failed to add product');
      console.error('Error adding product:', err);
      throw err;
    }
  };

  const updateProduct = async (id: string, productData: Partial<Product>) => {
    try {
      const productDoc = doc(db, 'products', id);
      await updateDoc(productDoc, {
        ...productData,
        updatedAt: new Date(),
      });
      await fetchProducts(); // Refresh the list
    } catch (err) {
      setError('Failed to update product');
      console.error('Error updating product:', err);
      throw err;
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      const productDoc = doc(db, 'products', id);
      await deleteDoc(productDoc);
      await fetchProducts(); // Refresh the list
    } catch (err) {
      setError('Failed to delete product');
      console.error('Error deleting product:', err);
      throw err;
    }
  };

  const getFeaturedProducts = async (): Promise<Product[]> => {
    try {
      const productsCollection = collection(db, 'products');
      const featuredQuery = query(
        productsCollection, 
        where('featured', '==', true),
        orderBy('createdAt', 'desc')
      );
      const featuredSnapshot = await getDocs(featuredQuery);
      return featuredSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as Product[];
    } catch (err) {
      console.error('Error fetching featured products:', err);
      return [];
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    fetchProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    getFeaturedProducts,
  };
};