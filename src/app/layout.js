// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";




import Script from "next/script";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import FloatingWhatsAppButton from "@/components/layout/FloatingWhatsAppButton";
import Footer from "@/components/layout/Footer";
import MetaPixel from "@/components/layout/MetaPixel";
import Navbar from "@/components/layout/Navbar";
import { FB_PIXEL_ID } from "@/lib/metaPixel";

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
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
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
