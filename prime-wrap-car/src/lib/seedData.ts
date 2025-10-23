import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Product, Article, ShowcaseItem } from '@/types';

const sampleProducts: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    name: 'สี Wrap Matt Black',
    description: 'สี Wrap สีดำด้าน คุณภาพพรีเมียม ทนทาน กันน้ำ เหมาะสำหรับรถทุกรุ่น ให้ลุคที่หรูหราและทันสมัย',
    price: 2500,
    images: ['/placeholder-product.jpg'],
    category: 'Matt',
    stock: 10,
    featured: true,
  },
  {
    name: 'สี Wrap Gloss White',
    description: 'สี Wrap สีขาวเงา เพิ่มความหรูหราให้รถ ผิวเรียบเงา ทำความสะอาดง่าย',
    price: 2800,
    images: ['/placeholder-product.jpg'],
    category: 'Gloss',
    stock: 8,
    featured: true,
  },
  {
    name: 'สี Wrap Carbon Fiber',
    description: 'ลายคาร์บอนไฟเบอร์ สำหรับคนที่ชอบความสปอร์ต ดูแข็งแกร่งและทันสมัย',
    price: 3500,
    images: ['/placeholder-product.jpg'],
    category: 'Special',
    stock: 5,
    featured: false,
  },
  {
    name: 'สี Wrap Metallic Silver',
    description: 'สีเงินโลหะที่สะท้อนแสงสวยงาม เพิ่มความหรูหราให้รถ',
    price: 3200,
    images: ['/placeholder-product.jpg'],
    category: 'Metallic',
    stock: 6,
    featured: true,
  },
];

const sampleArticles: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'วิธีการดูแลรักษาสี Wrap รถยนต์ให้ทนทาน',
    content: `
      <h2>การดูแลรักษาสี Wrap รถยนต์</h2>
      <p>การดูแลรักษาสี Wrap รถยนต์ที่ถูกต้องจะช่วยให้สีคงความสวยงามและทนทานยาวนานขึ้น ต่อไปนี้เป็นเทคนิคที่แนะนำ:</p>
      
      <h3>1. การล้างทำความสะอาด</h3>
      <p>ควรล้างรถด้วยน้ำสะอาดเป็นประจำ หลีกเลี่ยงการใช้สารเคมีที่แรงเกินไป ใช้สบู่ล้างรถที่อ่อนโยน</p>
      
      <h3>2. การเช็ดแห้ง</h3>
      <p>ใช้ผ้านุ่มหรือผ้าไมโครไฟเบอร์ในการเช็ดแห้ง หลีกเลี่ยงการใช้ผ้าหยาบที่อาจทำให้เกิดรอยขีดข่วน</p>
      
      <h3>3. การตรวจสอบขอบ</h3>
      <p>ตรวจสอบขอบของ Wrap เป็นประจำ หากพบว่ามีการลอกหรือยกขึ้น ควรนำไปซ่อมแซมทันที</p>
      
      <h3>4. หลีกเลี่ยงความร้อนจัด</h3>
      <p>หลีกเลี่ยงการจอดรถในที่ที่มีแสงแดดจัดเป็นเวลานาน เพราะอาจทำให้สีซีดจางได้</p>
    `,
    excerpt: 'เทคนิคการดูแลรักษาสี Wrap ให้คงความสวยงามและทนทานยาวนาน',
    image: '/placeholder-article.jpg',
    author: 'Prime Wrap Car',
    published: true,
  },
  {
    title: 'เทรนด์สี Wrap รถยนต์ปี 2024',
    content: `
      <h2>เทรนด์สี Wrap รถยนต์ที่กำลังมาแรงในปี 2024</h2>
      <p>ปี 2024 เป็นปีที่เต็มไปด้วยสีสันและลวดลายใหม่ๆ ที่น่าสนใจสำหรับการ Wrap รถยนต์</p>
      
      <h3>1. สีด้าน (Matte Colors)</h3>
      <p>สีด้านยังคงได้รับความนิยมอย่างต่อเนื่อง โดยเฉพาะสีดำด้าน สีขาวด้าน และสีเทาด้าน</p>
      
      <h3>2. สีโลหะ (Metallic)</h3>
      <p>สีโลหะที่ให้ความรู้สึกหรูหราและทันสมัย เช่น สีเงิน สีทอง และสีทองแดง</p>
      
      <h3>3. ลายคาร์บอนไฟเบอร์</h3>
      <p>ลายคาร์บอนไฟเบอร์ยังคงเป็นที่นิยมสำหรับคนที่ชอบลุคสปอร์ต</p>
    `,
    excerpt: 'อัพเดทเทรนด์สีและลวดลายใหม่ๆ ที่กำลังได้รับความนิยมในปี 2024',
    image: '/placeholder-article.jpg',
    author: 'Prime Wrap Car',
    published: true,
  },
  {
    title: 'ข้อดีของการ Wrap รถเทียบกับการพ่นสี',
    content: `
      <h2>เปรียบเทียบการ Wrap รถกับการพ่นสี</h2>
      <p>หลายคนสงสัยว่าควรเลือก Wrap รถหรือพ่นสีดี บทความนี้จะเปรียบเทียบข้อดีข้อเสียของทั้งสองวิธี</p>
      
      <h3>ข้อดีของการ Wrap รถ</h3>
      <ul>
        <li>ถอดออกได้โดยไม่ทำลายสีเดิม</li>
        <li>ติดตั้งเร็วกว่าการพ่นสี</li>
        <li>มีลวดลายและสีให้เลือกมากมาย</li>
        <li>ปกป้องสีเดิมของรถ</li>
      </ul>
      
      <h3>ข้อดีของการพ่นสี</h3>
      <ul>
        <li>ทนทานกว่าในระยะยาว</li>
        <li>ซ่อมแซมง่ายกว่า</li>
        <li>ราคาถูกกว่าสำหรับสีพื้นฐาน</li>
      </ul>
    `,
    excerpt: 'เปรียบเทียบข้อดีข้อเสียระหว่างการ Wrap รถกับการพ่นสีแบบดั้งเดิม',
    image: '/placeholder-article.jpg',
    author: 'Prime Wrap Car',
    published: true,
  },
];

export const seedProducts = async () => {
  try {
    const productsCollection = collection(db, 'products');
    
    for (const product of sampleProducts) {
      await addDoc(productsCollection, {
        ...product,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    
    console.log('Products seeded successfully');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

export const seedArticles = async () => {
  try {
    const articlesCollection = collection(db, 'articles');
    
    for (const article of sampleArticles) {
      await addDoc(articlesCollection, {
        ...article,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    
    console.log('Articles seeded successfully');
  } catch (error) {
    console.error('Error seeding articles:', error);
  }
};

const sampleShowcaseItems: Omit<ShowcaseItem, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'BMW Series 3 - Matt Black',
    description: 'การติดตั้งสี Wrap สีดำด้านบน BMW Series 3 ให้ลุคที่หรูหราและสปอร์ต พร้อมความทนทานที่เหนือกว่า',
    image: '/placeholder-showcase.jpg',
    beforeImage: '/placeholder-before.jpg',
    category: 'Sedan',
    featured: true,
  },
  {
    title: 'Honda Civic - Carbon Fiber',
    description: 'ลายคาร์บอนไฟเบอร์บนฝากระโปรงและหลังคา เพิ่มความสปอร์ตให้กับ Honda Civic',
    image: '/placeholder-showcase.jpg',
    category: 'Sedan',
    featured: true,
  },
  {
    title: 'Toyota Fortuner - Gloss White',
    description: 'สีขาวเงาบน Toyota Fortuner ให้ความรู้สึกสะอาดตาและหรูหรา',
    image: '/placeholder-showcase.jpg',
    category: 'SUV',
    featured: false,
  },
  {
    title: 'Mazda CX-5 - Metallic Blue',
    description: 'สีน้ำเงินโลหะที่สวยงามบน Mazda CX-5 โดดเด่นและทันสมัย',
    image: '/placeholder-showcase.jpg',
    category: 'SUV',
    featured: true,
  },
  {
    title: 'Mercedes-Benz C-Class - Chrome',
    description: 'สีโครเมียมที่หรูหราและโดดเด่นบน Mercedes-Benz C-Class',
    image: '/placeholder-showcase.jpg',
    category: 'Luxury',
    featured: false,
  },
  {
    title: 'Ford Ranger - Camo Pattern',
    description: 'ลายพรางทหารบน Ford Ranger สำหรับคนที่ชอบความแตกต่าง',
    image: '/placeholder-showcase.jpg',
    category: 'Pickup',
    featured: false,
  },
];

export const seedShowcase = async () => {
  try {
    const showcaseCollection = collection(db, 'showcase');
    
    for (const item of sampleShowcaseItems) {
      await addDoc(showcaseCollection, {
        ...item,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    
    console.log('Showcase items seeded successfully');
  } catch (error) {
    console.error('Error seeding showcase items:', error);
  }
};

export const seedAllData = async () => {
  await seedProducts();
  await seedArticles();
  await seedShowcase();
};