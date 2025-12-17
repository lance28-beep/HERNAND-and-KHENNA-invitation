"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/section";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "When and where is the wedding?",
    answer:
      "Our wedding will be on Sunday, February 8, 2026, at 4:00 PM.\n\nBoth the ceremony and reception will be held at Las Casas Filipinas de Acuzar – Quezon City (Casa Cilayko), Quezon City, Philippines.\n\nThe wedding ceremony will begin promptly at 4:00 PM, followed by a short interlude before the reception program starts at 6:00 PM. During this time, guests are welcome to relax and enjoy the beautiful surroundings of Las Casas.\n\nAs the venue is an open heritage space, it may feel warm while waiting, especially in the late afternoon. For your comfort, we kindly suggest bringing handheld fans or any personal items that help you stay cool and comfortable, so you may fully enjoy the celebration with ease.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Guest Attire:\n• Gentlemen: Barong Tagalog, slacks, or ceremonial uniform (e.g., grey duct or other formal uniform).\n• Ladies: Filipiniana gown.\n\nColors and Style: No restriction on colors except please avoid red, black, and white.\n\nFootwear: Formal shoes or heels suitable for church and reception venues.",
  },
  {
    question: "When is the RSVP deadline?",
    answer:
      "RSVP: We kindly ask that you confirm your attendance by January 22, 2026. We have reserved seats especially for you, and it would bring us great joy to celebrate together. Your response will help us finalize our guest list and seating arrangements.\n\n[RSVP_LINK]Click here to RSVP[/RSVP_LINK]",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "It is our joy to celebrate this occasion with our closest loved ones. In keeping with the intimacy of the gathering, we kindly ask that attendance be limited to those named on the invitation. We are grateful for your understanding and look forward to sharing this special day together.\n\nFor those accompanied by non‑RSVP guests, we have thoughtfully arranged a designated waiting area in the basement parking for the duration of the ceremony and reception.",
  },
  {
    question: "Are children allowed?",
    answer:
      "While we hold a special place in our hearts for your little ones, we wish to keep our celebration intimate and serene. We kindly request that the occasion be reserved for adults only.\n\nThe exception, of course, will be the children within our family and those who are part of the wedding entourage, whose presence adds joy and meaning to our day.",
  },
  {
    question: "What is your gift policy?",
    answer:
      "Your presence at our wedding is the most treasured gift. If you wish to honor us with a gift, we kindly request a cash gift as a gesture of support for our new life together.\n\nAll bank details and the QR code can be found at the bottom of the invitation for your convenience.",
  },
  {
    question: "Can I take photos during the ceremony and reception?",
    answer:
      "We would love for everyone to be fully present as we celebrate this special day. While you are welcome to take photos, we kindly ask that you remain attentive to the ceremony and reception.\n\nPlease avoid posting photos during the celebration or ahead of time—our photographers will lovingly capture the memories so you can simply enjoy the moment with us.",
  },
  {
    question: "What if I have dietary restrictions or allergies?",
    answer:
      "If you have any dietary restrictions, allergies, or special meal requests, we kindly invite you to mention them in the message field when submitting your RSVP.\n\nYou may also reach out to us directly, and we will gladly coordinate with our caterer to ensure you are comfortable and well cared for.",
  },
  {
    question: "How do I get to the venue?",
    answer:
      "Our celebration will take place at Casa Cilayko, Las Casas Filipinas de Acuzar – Quezon City, located at 134 Roosevelt Avenue, San Francisco del Monte, Quezon City, Metro Manila.\n\nGuests arriving via TNVS are kindly encouraged to use the official Las Casas Quezon City Google Maps pin to ensure a smooth and convenient drop-off at the venue. For those arriving by private car, directions and guest parking are readily available through Google Maps, with basement parking provided on-site.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, parking is available at Las Casas Filipinas de Acuzar – Quezon City for our guests. The venue offers on-site parking, including basement parking areas, with staff on hand to assist and guide vehicles upon arrival.\n\nAs parking spaces are limited, we kindly recommend arriving 20–30 minutes early to allow ample time to park, settle in comfortably, and fully enjoy every moment of the ceremony without rush or worry.",
  },
  {
    question: "What should I do if I need to cancel or update my RSVP?",
    answer:
      "If your plans change, we kindly ask that you let us know as soon as possible so we can make the necessary arrangements.\n\nYou may also update your RSVP by searching for your name in the RSVP section (Guest List) and submitting a new response. Your timely update is greatly appreciated and helps us ensure a smooth and joyful celebration for everyone.",
  },
  {
    question: "Will there be medical or safety support at the venue?",
    answer:
      "For your comfort and peace of mind, a dedicated safety officer will be on duty at Las Casas throughout the celebration.\n\nShould you require any first aid assistance, please feel free to approach any of our servers or wedding coordinators, who will be more than happy to assist you promptly and with care.",
  },
  {
    question: "Are there nearby hotel or accommodation options?",
    answer:
      "For guests seeking nearby accommodations, there are several hotel options conveniently located near Las Casas Filipinas de Acuzar – Quezon City, catering to a range of preferences and budgets.\n\nBudget‑friendly choices include Go Hotels Timog, Red Planet Timog Avenue, and Hop Inn Hotel Tomas Morato, all offering clean, comfortable stays within a short drive from the venue.\n\nFor those looking for mid‑range comfort, B Hotel Quezon City and Luxent Hotel provide stylish rooms and added amenities in the Tomas Morato and Timog areas.\n\nGuests who prefer a more upscale experience may consider Seda Vertis North, Park Inn by Radisson North EDSA, or ibis Styles Manila Araneta City, which offer refined accommodations, excellent dining options, and convenient access to major city landmarks—all within easy reach of the venue.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faq"
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-[#8C8E7C] backdrop-blur-sm pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-6 sm:mb-10 md:mb-12 px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-crimson)] font-normal text-[#FFE4E4] mb-3 sm:mb-4 md:mb-6 uppercase tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] elegant-text-shadow">
          Frequently Asked Questions
        </h2>
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
        </div>
        <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#FFE4E4]/80 font-light max-w-xl mx-auto leading-relaxed tracking-wide px-2 sm:px-4">
          Everything you need to know
        </p>
      </div>

      {/* FAQ content */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Main card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#B18B81]/30 to-[#EFC0BC]/25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

          <div className="relative elegant-card rounded-xl sm:rounded-2xl overflow-hidden border border-[#EFC0BC]/80 premium-shadow hover:border-[#B18B81] transition-all duration-300" style={{ backgroundColor: "#FFE4E4" }}>
            {/* Card content */}
            <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
              {/* FAQ items */}
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                {faqItems.map((item, index) => {
                  const isOpen = openIndex === index;
                  const contentId = `faq-item-${index}`;
                  return (
                    <div
                      key={index}
                      className="rounded-lg sm:rounded-xl border border-[#EFC0BC]/80 bg-[#FFE4E4] hover:bg-white transition-all duration-300 hover:shadow-md hover:border-[#B18B81] overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="group w-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#676B57]/50 focus-visible:ring-offset-2 transition-colors"
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                      >
                        <span className="font-[family-name:var(--font-crimson)] font-semibold text-[#676B57] pr-3 sm:pr-4 text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-[#676B57]/80 transition-colors duration-200">
                          {item.question}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-[#676B57] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[#676B57]/80`}
                          aria-hidden
                        />
                      </button>

                      <div
                        id={contentId}
                        role="region"
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 bg-white/70 border-t border-[#EFC0BC]/80">
                            {item.answer.includes("[RSVP_LINK]") ? (
                              <p className="text-[#676B57]/80 leading-relaxed text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] whitespace-pre-line">
                                {item.answer.split("[RSVP_LINK]")[0]}
                                <a
                                  href="#guest-list"
                                  className="text-[#676B57] underline font-semibold hover:text-[#676B57]/80 transition-colors inline-flex items-center gap-1"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    document
                                      .getElementById("guest-list")
                                      ?.scrollIntoView({ behavior: "smooth" });
                                  }}
                                >
                                  {
                                    item.answer.match(
                                      /\[RSVP_LINK\](.*?)\[\/RSVP_LINK\]/,
                                    )?.[1]
                                  }
                                </a>
                                {item.answer.split("[/RSVP_LINK]")[1]}
                              </p>
                            ) : (
                              <p className="text-[#676B57]/80 leading-relaxed text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] whitespace-pre-line">
                                {item.answer}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
