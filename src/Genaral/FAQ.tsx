import { useState } from "react";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { person_name, phone_number } from "./secrete";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: `Can We Meet ${person_name} in Person?`,
    answer: `Yes, in-person sessions are available with prior appointment. Reach out via WhatsApp or call to schedule your visit at +91 ${phone_number}.`,
    tag: "Visits",
  },
  {
    question: "Is Phone Consultation Available?",
    answer: `Yes, you can connect via phone from anywhere in India. Our lines are open for consultations at +91 ${phone_number}.`,
    tag: "Remote",
  },
  {
    question: "What Kind of Consultation Services Are Available?",
    answer:
      "We provide Vastu, horoscope reading, career planning, marriage support, health well-being, and business direction consultations — each tailored to your personal situation.",
    tag: "Services",
  },
  {
    question: "What Kind of Products Are Available?",
    answer:
      "Traditional Kerala wellness products, gemstones, and well-being items are available for purchase during or after your consultation session.",
    tag: "Products",
  },
  {
    question: "Are Learning Sessions Offered?",
    answer:
      "Yes, traditional knowledge learning sessions are offered for different levels — from beginners to those with prior interest in Kerala practices.",
    tag: "Learning",
  },
  {
    question: "What Is Covered in the Learning Sessions?",
    answer:
      "We cover horoscope reading, palmistry basics, and traditional Kerala knowledge practices in structured, personalized sessions.",
    tag: "Curriculum",
  },
];
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#050507] px-5 py-24 md:px-10 md:py-32">
      {/* ───────── BACKGROUND ───────── */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#d4af37_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="absolute left-1/2 top-0 h-[220px] w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(212,175,55,0.08),transparent_70%)]" />

      <div className="absolute right-[-120px] top-[20%] h-[360px] w-[360px] rounded-full bg-[#d4af37]/10 blur-[140px]" />

      <div className="absolute bottom-0 left-[-100px] h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[980px]">
        {/* ───────── HEADER ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          {/* EYEBROW */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-[#d4af37] to-transparent" />

            <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37]/70">
              Frequently Asked Questions
            </span>

            <div className="h-px w-10 bg-gradient-to-l from-[#d4af37] to-transparent" />
          </div>

          {/* TITLE */}
          <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
            Questions &
            <br />
            <span className="bg-gradient-to-r from-[#d4af37] to-[#f5e27a] bg-clip-text text-transparent">
              Helpful Answers
            </span>
          </h2>

          {/* TEXT */}
          <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-white/50 md:text-[16px]">
            Everything you may want to know before starting your consultation.
            Clear answers, private guidance and personalized support designed to
            help you feel comfortable and confident.
          </p>
        </motion.div>

        {/* ───────── FAQ LIST ───────── */}
        <div className="space-y-5">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              viewport={{ once: true }}
              className={`
                group
                overflow-hidden
                rounded-[30px]
                border
                backdrop-blur-xl
                transition-all
                duration-500
                ${
                  openIndex === index
                    ? "border-[#d4af3735] bg-[linear-gradient(180deg,#0d0d12,rgba(255,255,255,0.03))]"
                    : "border-white/5 bg-white/[0.03]"
                }
              `}
            >
              {/* QUESTION BUTTON */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left"
              >
                {/* LEFT */}
                <div className="flex min-w-0 items-center gap-5">
                  {/* NUMBER */}
                  <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-[#d4af3720] bg-[#d4af370d]">
                    <span className="font-serif text-lg text-[#d4af37]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0">
                    {/* TAG */}
                    <span className="mb-2 inline-flex rounded-full border border-[#d4af3720] bg-[#d4af370d] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#d4af37]">
                      {faq.tag}
                    </span>

                    {/* QUESTION */}
                    <h3
                      className={`
                        text-lg
                        font-semibold
                        leading-snug
                        transition-colors
                        duration-300
                        md:text-xl
                        ${openIndex === index ? "text-[#f5e27a]" : "text-white"}
                      `}
                    >
                      {faq.question}
                    </h3>
                  </div>
                </div>

                {/* ICON */}
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    transition-all
                    duration-500
                    ${
                      openIndex === index
                        ? "rotate-180 border-[#d4af3735] bg-[#d4af370d]"
                        : "border-white/10 bg-white/[0.03]"
                    }
                  `}
                >
                  <ChevronDown
                    size={18}
                    className={`
                      transition-colors
                      duration-300
                      ${
                        openIndex === index ? "text-[#d4af37]" : "text-white/40"
                      }
                    `}
                  />
                </div>
              </button>

              {/* ANSWER */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-7">
                      {/* SEPARATOR */}
                      <div className="mb-6 h-px w-full bg-gradient-to-r from-[#d4af3725] to-transparent" />

                      {/* ANSWER */}
                      <p className="pl-[68px] text-[15px] leading-relaxed text-white/55 md:text-[16px]">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* ───────── CTA CARD ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-[36px] border border-[#d4af3720] bg-[linear-gradient(180deg,rgba(212,175,55,0.06),rgba(255,255,255,0.02))] p-8 backdrop-blur-xl md:p-10"
        >
          {/* GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_70%)]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* TEXT */}
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-8 bg-gradient-to-r from-[#d4af37] to-transparent" />

                <span className="text-[10px] uppercase tracking-[0.28em] text-[#d4af37]">
                  Need Personal Help?
                </span>
              </div>

              <h3 className="font-serif text-3xl leading-tight text-white md:text-4xl">
                Still Have Questions?
              </h3>

              <p className="mt-5 text-[15px] leading-relaxed text-white/55 md:text-[16px]">
                Speak directly for personalized guidance, private consultation
                and detailed support based on your unique situation.
              </p>
            </div>

            {/* BUTTON */}
            <motion.a
              href={`https://wa.me/${phone_number}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f5e27a] px-8 py-4 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* TRUST LINE */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {[
            "Trusted Guidance",
            "Private Consultation",
            "Personalized Support",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-[#d4af3720] bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/50"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* GOOGLE FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

        *{
          font-family:'Inter',sans-serif;
        }

        .font-serif{
          font-family:'Cinzel',serif;
        }
      `}</style>
    </section>
  );
}
