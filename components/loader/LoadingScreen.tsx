import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1000); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#FFE4E4]" />

      <div className="relative flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Glow halos */}
          <div className="absolute w-40 h-40 rounded-full bg-[#EFC0BC]/40 blur-3xl animate-pulse" />
          <div className="absolute w-28 h-28 rounded-full bg-[#B18B81]/30 blur-2xl animate-ping" />

          {/* Outer decorative rings */}
          <div className="absolute w-32 h-32 rounded-full border border-[#676B57]/60 animate-ping" />
          <div className="absolute w-26 h-26 rounded-full border border-[#8C8E7C]/60 animate-[spin_7s_linear_infinite]" />
          <div className="absolute w-22 h-22 rounded-full border-t-2 border-b-2 border-[#B18B81]/80 animate-[spin_12s_linear_infinite_reverse]" />

          {/* Monogram */}
          <div className="flex flex-col items-center justify-center z-10">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
              <Image
                src="/monogram/clien-monogram.png"
                alt="Hernand & Khenna Monogram"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#676B57] animate-pulse drop-shadow"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 700 }}
          >
            Loading Invitation
          </p>
        </div>
      </div>
    </div>
  );
};