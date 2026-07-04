"use client";

import { useEffect, useState } from "react";
import "./AnnouncementBar.css";

const ANNOUNCEMENT_ARRAY = [
  "🎉 10% Off on prepaid orders!",
  "🚚 Free Shipping on orders above Rs 3,000!",
  "⭐ Sold to over 22000+ satisfied customers!",
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % ANNOUNCEMENT_ARRAY.length;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const currentAnnouncement = ANNOUNCEMENT_ARRAY[currentIndex];

  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <p key={currentIndex} className="announcement-text">
          {currentAnnouncement}
        </p>
      </div>
    </div>
  );
}
