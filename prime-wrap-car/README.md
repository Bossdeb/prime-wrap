# Prime Wrap Car - เว็บไซต์ขายสีแรปรถยนต์

เว็บไซต์สำหรับขายปลีก-ส่งสีแรปรถยนต์ "Prime Wrap Car" ที่สร้างด้วย Next.js, Firebase และ Tailwind CSS

## 🚀 เทคโนโลยีที่ใช้

- **Next.js 15** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Firebase** - Database & Authentication
- **Responsive Design** - รองรับทุกอุปกรณ์

## 🎨 ฟีเจอร์หลัก

- **หน้าแรก** - Hero section, แสดงสินค้าแนะนำ, บริการ
- **หน้าสินค้า** - แสดงสินค้าทั้งหมดพร้อมระบบกรอง
- **ระบบนำทาง** - เมนูที่ใช้งานง่าย รองรับมือถือ
- **ธีมสีขาว-น้ำเงิน** - ดีไซน์สวยงาม เป็นมืออาชีพ
- **Responsive** - ใช้งานได้ทุกอุปกรณ์

## 📦 การติดตั้ง

1. Clone โปรเจค
```bash
git clone <repository-url>
cd prime-wrap-car
```

2. ติดตั้ง dependencies
```bash
npm install
```

3. ตั้งค่า Firebase
- สร้างโปรเจค Firebase ใหม่
- เปิดใช้งาน Firestore Database
- คัดลอก config ไปใส่ใน `src/lib/firebase.ts`

4. รันเว็บไซต์
```bash
npm run dev
```

เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

## 🏗️ โครงสร้างโปรเจค

```
prime-wrap-car/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout หลัก
│   │   ├── page.tsx            # หน้าแรก
│   │   ├── products/
│   │   │   └── page.tsx        # หน้าสินค้า
│   │   └── globals.css         # CSS หลัก
│   ├── components/
│   │   ├── Header.tsx          # เมนูนำทาง
│   │   ├── Hero.tsx            # Hero section
│   │   ├── ProductShowcase.tsx # แสดงสินค้าแนะนำ
│   │   ├── Services.tsx        # บริการ
│   │   └── Footer.tsx          # Footer
│   └── lib/
│       └── firebase.ts         # Firebase config
```

## 🎯 การพัฒนาต่อ

### เพิ่มหน้าใหม่
1. สร้างไฟล์ใน `src/app/[page-name]/page.tsx`
2. เพิ่มลิงก์ในเมนู (`Header.tsx`)

### เพิ่มคอมโพเนนต์ใหม่
1. สร้างไฟล์ใน `src/components/`
2. Import และใช้งานในหน้าที่ต้องการ

### ตั้งค่า Firebase
1. แก้ไข `src/lib/firebase.ts`
2. เพิ่ม Firebase config ของคุณ
3. เปิดใช้งานบริการที่ต้องการ

## 📱 หน้าที่มีอยู่

- **/** - หน้าแรก
- **/products** - หน้าสินค้าทั้งหมด
- **/services** - บริการ (ยังไม่ได้สร้าง)
- **/gallery** - ผลงาน (ยังไม่ได้สร้าง)
- **/contact** - ติดต่อ (ยังไม่ได้สร้าง)

## 🎨 การปรับแต่งสี

แก้ไขสีในไฟล์ `src/app/globals.css`:
- สีหลัก: `bg-blue-600`
- สีรอง: `bg-gray-50`
- สีข้อความ: `text-gray-900`

## 📞 การติดต่อ

หากต้องการความช่วยเหลือหรือมีคำถาม สามารถติดต่อได้ที่:
- อีเมล: info@primewrapcar.com
- โทร: 02-xxx-xxxx

---

สร้างด้วย ❤️ โดย Prime Wrap Car Team