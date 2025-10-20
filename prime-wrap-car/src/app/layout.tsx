import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({ 
  subsets: ["latin", "thai"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Prime Wrap Car - ผู้เชี่ยวชาญด้านสีแรปรถยนต์",
  description: "ขายปลีก-ส่งสีแรปรถยนต์คุณภาพสูง บริการครบวงจร",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${kanit.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
