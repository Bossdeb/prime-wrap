export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  beforeImage?: string;
  category: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}
