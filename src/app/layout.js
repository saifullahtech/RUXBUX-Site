// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";




import AnnouncementBar from "@/components/layout/AnnouncementBar";
import FloatingWhatsAppButton from "@/components/layout/FloatingWhatsAppButton";
import Footer from "@/components/layout/Footer";
import MetaPixel from "@/components/layout/MetaPixel";
import Navbar from "@/components/layout/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "RUXBUX",
  description: "ECOMMERCE PLATFORM FOR THE FUTURE",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <MetaPixel />
        <AnnouncementBar />
        <div className="sticky top-0 z-[1000]">
          <Navbar />
        </div>
        {children}
        <FloatingWhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
