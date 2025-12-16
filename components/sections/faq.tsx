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
      "Our wedding will be on Sunday, February 8, 2026 at 4:00 PM.\n\nBoth the ceremony and reception will be held at Las Casas Quezon City, Quezon City, Philippines.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Guest Attire:\n• Ladies: Filipiniana-inspired silhouettes in any shade you love, kindly avoiding red, white, and black.\n• Gentlemen: Barong Tagalog or grey duct uniforms in your preferred tone.\n\nPrincipal Sponsors:\n• Ninangs: Champagne or Gold long gowns.\n• Ninongs: Barong Tagalog & Black Slacks.\n\nThese guidelines follow our Attire Guidelines section and help keep the look of the celebration cohesive and elegant.",
  },
  {
    question: "When is the RSVP deadline?",
    answer:
      "Please confirm your attendance by January 25, 2026. We have reserved seats for you, and we look forward to celebrating with you. Your response helps us finalize our guest list and seating arrangements.\n\n[RSVP_LINK]Click here to RSVP[/RSVP_LINK]",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "Invitation Only: As we celebrate this moment with our closest loved ones, we kindly ask that attendance be limited to those named on the invitation. Thank you for your understanding and cooperation.",
  },
  {
    question: "Are children allowed?",
    answer:
      "Adults-Only Event: We love your little ones, but to keep the celebration intimate, we kindly request an adults-only event.\n\nChildren in our family and the entourage are the exception.",
  },
  {
    question: "What is your gift policy?",
    answer:
      "Gift Policy: We kindly ask for no boxed gifts.\n\nYour presence is the most precious gift we could ask for. Monetary gifts are welcome but never expected; if you wish to give, you may use the details in our Gift Guide section.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "Photo Policy: We'd love for everyone to be fully present.\n\nPlease avoid posting photos during the celebration or ahead of time—our photographers will take care of the memories so you can simply enjoy the day with us.",
  },
  {
    question: "What if I have dietary restrictions or allergies?",
    answer:
      "Please mention any dietary restrictions, allergies, or special meal requirements in the message field when you submit your RSVP.\n\nYou may also reach out to us directly so we can coordinate with our caterer and make sure you are comfortable and well-fed.",
  },
  {
    question: "How do I get to the venue?",
    answer:
      "You can use the 'Get Directions' button in the Event Details section to open Google Maps for Las Casas Quezon City.\n\nThe venue address is Las Casas Quezon City, Quezon City, Philippines.",
  },
  {
    question: "Is there parking available?",
    answer:
      "The venue has parking available for guests.\n\nWe recommend arriving 15–20 minutes early so you can find parking, settle in comfortably, and not miss any part of the ceremony.",
  },
  {
    question: "What should I do if I need to cancel or update my RSVP?",
    answer:
      "If your plans change, please let us know as soon as possible.\n\nYou can also update your RSVP by searching for your name in the RSVP section (Guest List) and submitting a new response.",
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
