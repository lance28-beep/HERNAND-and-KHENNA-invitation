import { Section } from "@/components/section"

export function MeetTheCouple() {
  return (
    <Section
      id="meet-the-couple"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-[#8C8E7C] backdrop-blur-sm pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#FFE4E4]/80 mb-3">
            Meet the Couple and Love Story
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-crimson)] font-normal text-[#FFE4E4] uppercase tracking-[0.12em] sm:tracking-[0.15em] elegant-text-shadow mb-4 sm:mb-5">
            Meet the Couple
          </h2>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-[#FFE4E4] to-transparent" />
          </div>
        </div>

        {/* Couple Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          {/* Bride */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-7 md:p-8 border border-[#EFC0BC]/60 shadow-lg">
            <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] tracking-[0.25em] uppercase text-[#B18B81] mb-3 text-center">
              The Bride
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-[family-name:var(--font-crimson)] font-semibold text-[#676B57] mb-4 text-center">
              Khenna
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#676B57] leading-relaxed text-justify">
              Khenna is loving and selfless, the calm in the midst of chaos. She is the light that softens him—a dreamer who inspires Hernand to reach even greater heights. Her presence adds color and flavor to his life, turning ordinary moments into something extraordinary. To him, she is not just a partner, but the heart that makes life beautiful.
            </p>
          </div>

          {/* Groom */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-7 md:p-8 border border-[#EFC0BC]/60 shadow-lg">
            <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] tracking-[0.25em] uppercase text-[#B18B81] mb-3 text-center">
              The Groom
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-[family-name:var(--font-crimson)] font-semibold text-[#676B57] mb-4 text-center">
              Hernand
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#676B57] leading-relaxed text-justify">
              Hernand is a man with a sharp, analytical mind and an insatiable love for learning. Calm and composed, he carries a firm sense of responsibility and an extraordinary patience that makes him a true pillar of strength. He is the protector of her peace, the believer in her wildest dreams, and a soul whose spirit balances strength with gentleness. To her, he is both a partner and an anchor—someone who steadies her in life’s storms while inspiring her to soar.
            </p>
          </div>
        </div>

        {/* Love Story */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-7 md:p-8 border border-[#EFC0BC]/60 shadow-lg">
          <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] tracking-[0.25em] uppercase text-[#B18B81] mb-3 text-center">
            Love Story
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-[family-name:var(--font-crimson)] font-semibold text-[#676B57] mb-4 text-center">
            From Classmates to Forever
          </h3>
          <div className="space-y-4 text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#676B57] leading-relaxed max-w-3xl mx-auto">
            <p className="font-semibold text-center">
              Where it all began…
            </p>
            <p>
              Hernand and Khenna first crossed paths as classmates in college, sharing dreams and laughter before life led them on separate journeys. Hernand pursued his calling in the academy, while Khenna continued to chase her own aspirations.
            </p>
            <p>
              Years later, fate brought them back together—and what started as a simple reconnection blossomed into an unexpected love story. Their bond was effortless, their connection organic, and everything fell heavenly into place, as if the universe had been quietly writing their story all along.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}


