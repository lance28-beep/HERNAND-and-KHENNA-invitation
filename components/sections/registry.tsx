 "use client";

import { useState } from "react";
import Image from "next/image";

import { Section } from "@/components/section";
import { Smartphone, Banknote } from "lucide-react";

const paymentMethods = [
  {
    id: "bdo",
    label: "BDO",
    description: "Direct bank transfer via BDO",
    accent: "from-[#E6CFC9] to-[#BCCFC0]", // subtle accent, kept for visual consistency
    Icon: Banknote,
  },
  {
    id: "gcash",
    label: "GCash",
    description: "Instant transfer via GCash",
    accent: "from-[#BCCFC0] to-[#8EA58B]",
    Icon: Smartphone,
  },
  {
    id: "bpi",
    label: "BPI",
    description: "Direct bank transfer via BPI",
    accent: "from-[#8EA58B] to-[#6B9B7A]",
    Icon: Banknote,
  },
] as const;

type PaymentId = (typeof paymentMethods)[number]["id"];

const qrImageByMethod: Record<PaymentId, string> = {
  bdo: "/QR/BDO.png",
  gcash: "/QR/Gcash.png",
  bpi: "/QR/BPI.png",
};

export function Registry() {
  const [activeMethod, setActiveMethod] = useState<PaymentId>("bdo");

  const activeDetails = paymentMethods.find(
    (method) => method.id === activeMethod,
  );

  return (
    <Section
      id="registry"
      className="relative overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#FFE4E4]/70" />
          <div className="w-1.5 h-1.5 bg-[#FFE4E4] rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#FFE4E4]/80 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#FFE4E4] rounded-full" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#FFE4E4]/70" />
        </div>

        {/* Title: Crimson Text, 400, 36px, 40px line-height */}
        <h2 className="font-[family-name:var(--font-crimson)] font-normal text-[28px] sm:text-[32px] md:text-[36px] lg:text-[36px] leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[40px] text-[#FFE4E4] mb-2 sm:mb-3 md:mb-4">
          GIFT GUIDE
        </h2>

        {/* Body: Crimson Text, 300, 18px, 29px line-height (scaled slightly down on smaller screens) */}
        <p className="font-[family-name:var(--font-crimson)] font-light text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[29px] lg:leading-[29px] text-[#FFE4E4]/90 max-w-2xl mx-auto px-2">
          Your presence is the greatest gift. Should you wish to give, cash
          gifts are preferred over boxed items, and a monetary gift to help us
          begin our new life together would mean so much to us.
        </p>

        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-1.5 h-1.5 bg-[#FFE4E4] rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#FFE4E4]/80 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#FFE4E4] rounded-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative bg-[#FFE4E4]/95 backdrop-blur-md border border-[#EFC0BC]/80 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-4 sm:p-6 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-[#EFC0BC]/25 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-5 sm:mb-6">
              {paymentMethods.map(({ id, label, description, Icon }) => {
                const isActive = id === activeMethod;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveMethod(id)}
                    className={`relative rounded-xl border-2 px-4 py-3 flex items-center gap-3 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      isActive
                        ? "border-[#676B57] text-[#676B57] shadow-lg bg-white"
                        : "border-[#676B57]/30 bg-white/80 hover:border-[#676B57]/50 hover:shadow-md text-[#676B57]/80"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <div className="text-left">
                      <p className="text-sm font-semibold tracking-wide uppercase font-[family-name:var(--font-crimson)]">
                        {label}
                      </p>
                      <p className="text-[11px] text-[#676B57]/70 font-[family-name:var(--font-crimson)]">
                        {description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {activeDetails && (
              <div className="relative bg-white/95 rounded-xl sm:rounded-2xl border-2 border-dashed border-[#676B57]/30 p-5 sm:p-6 md:p-8 text-center shadow-[0_6px_24px_rgba(0,0,0,0.15)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFE4E4] px-3 py-1 rounded-full shadow-sm border-2 border-[#676B57]/30 text-xs font-semibold tracking-[0.2em] text-[#676B57] uppercase font-[family-name:var(--font-crimson)]">
                  {activeDetails.label}
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 border-2 border-dashed border-[#676B57]/30 rounded-xl sm:rounded-2xl flex items-center justify-center bg-white relative overflow-hidden">
                    <Image
                      src={qrImageByMethod[activeMethod]}
                      alt={`${activeDetails.label} QR code`}
                      fill
                      sizes="256px"
                      className="object-contain p-4"
                    />
                  </div>
                  <p className="text-sm sm:text-base text-[#676B57] max-w-md font-[family-name:var(--font-crimson)]">
                    Tap the buttons above to switch between payment options.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-[#FFE4E4]/90 italic font-[family-name:var(--font-crimson)]">
            Thank you from the bottom of our hearts.
          </p>
        </div>
      </div>
    </Section>
  );
}
