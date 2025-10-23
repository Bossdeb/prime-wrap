# Prime Wrap Car - เว็บไซต์ขายสี Wrap รถยนต์

เว็บแอปพลิเคชัน Next.js + Firebase สำหรับขายสี Wrap รถยนต์ พร้อมระบบจัดการสินค้า บทความ และ Admin

## คุณสมบัติ

- 🎨 หน้าแรกแสดงสินค้าแนะนำ
- 📦 หน้าสินค้าพร้อมระบบกรองตามหมวดหมู่
- 📝 ระบบบทความ
- 🖼️ หน้าแสดงผลงาน (Showcase)
- 👨‍💼 ระบบ Admin สำหรับจัดการเนื้อหา
- 🔗 ระบบจัดการรูปภาพผ่าน URL
- 🖼️ Image Gallery และ Preview
- 💬 ปุ่มสั่งซื้อผ่าน LINE Official
- 📱 Responsive Design
- 🔥 Firebase Firestore Database

## เทคโนโลยีที่ใช้

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Database**: Firebase Firestore
- **Font**: Kanit (รองรับภาษาไทย)
- **Styling**: Tailwind CSS (สีธีม: ขาว-น้ำเงิน)

## การติดตั้ง

1. Clone repository
```bash
git clone <repository-url>
cd prime-wrap-car
```

2. ติดตั้ง dependencies
```bash
npm install
```

3. ตั้งค่า Firebase
   - สร้างโปรเจกต์ใน [Firebase Console](https://console.firebase.google.com)
   - เปิดใช้งาน Firestore Database
   - คัดลอกไฟล์ `.env.local.example` เป็น `.env.local`
   - ใส่ Firebase configuration ในไฟล์ `.env.local`

4. รันโปรเจกต์
```bash
npm run dev
```

## ไฟล์ Environment Variables (.env.local)

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# LINE Official Account
NEXT_PUBLIC_LINE_OFFICIAL_ID=@primewrapcar
```

## การใช้งาน Admin

1. เข้าสู่ระบบ Admin ที่ `/admin`
   - Email: `admin@primewrapcar.com`
   - Password: `admin123`

2. เพิ่มข้อมูลตัวอย่าง:
   - ไปที่หน้า "ข้อมูลตัวอย่าง" ใน Admin
   - คลิก "เพิ่มทั้งหมด" เพื่อเพิ่มสินค้าและบทความตัวอย่าง

3. จัดการเนื้อหา:
   - จัดการสินค้า: เพิ่ม แก้ไข ลบสินค้า (ใส่ URL รูปภาพได้หลายรูป)
   - จัดการบทความ: เขียน แก้ไข เผยแพร่บทความ (ใส่ URL รูปปก)
   - จัดการผลงาน: เพิ่ม แก้ไข ลบผลงาน (ใส่ URL รูปก่อน/หลัง)

4. แหล่งรูปภาพแนะนำ:
   - Google Drive (แชร์เป็น Public)
   - Imgur
   - Unsplash
   - หรือเว็บไซต์อื่นๆ ที่มี direct image URL

## โครงสร้างโปรเจกต์

```
src/
├── app/                    # Next.js App Router
│   ├── admin/             # หน้า Admin
│   ├── articles/          # หน้าบทความ
│   ├── products/          # หน้าสินค้า
│   └── showcase/          # หน้าผลงาน
├── components/            # React Components
├── hooks/                 # Custom Hooks สำหรับ Firebase
├── lib/                   # Firebase config และ utilities
└── types/                 # TypeScript type definitions
```

## Firebase Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // อนุญาตให้อ่านข้อมูลสินค้าและบทความที่เผยแพร่แล้ว
    match /products/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /articles/{document} {
      allow read: if resource.data.published == true;
      allow write: if request.auth != null;
    }
    
    match /showcase/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## การปรับแต่ง

### เปลี่ยนสีธีม
แก้ไขไฟล์ `tailwind.config.ts` และ `src/app/globals.css`

### เปลี่ยน LINE Official ID
แก้ไขในไฟล์ `.env.local` และอัพเดท URL ในไฟล์ต่างๆ

### เพิ่มหมวดหมู่สินค้า
แก้ไขใน Admin form และ filter components

## การ Deploy

1. Build โปรเจกต์
```bash
npm run build
```

2. Deploy ไปยัง Vercel, Netlify หรือ hosting อื่นๆ
3. ตั้งค่า Environment Variables ใน hosting platform
4. อัพเดท Firebase Security Rules สำหรับ production

## License

MIT License