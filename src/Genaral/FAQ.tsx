import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { person_name, phone_number } from "./secrete";

const faqs = [
  {
    question: `Can We Meet ${person_name} in Person?`,
    answer: `Yes, in-person sessions are available with prior appointment. 📲 WhatsApp: ${phone_number}`,
  },
  {
    question: "Is Phone Consultation Available?",
    answer: `Yes, you can connect via phone from anywhere in India. 📞 Phone: ${phone_number}`,
  },
  {
    question: "What Kind of Consultation Services Are Available?",
    answer:
      "We provide Vastu, horoscope reading, career planning, marriage support, health well-being, and business direction consultations.",
  },
  {
    question: "What Kind of Products Are Available?",
    answer:
      "Traditional Kerala wellness products, gemstones, and well-being items are available.",
  },
  {
    question: "Are Learning Sessions Offered?",
    answer:
      "Yes, traditional knowledge learning sessions are offered for different levels.",
  },
  {
    question: "What Is Covered in the Learning Sessions?",
    answer:
      "We cover horoscope reading, palmistry basics, and traditional Kerala knowledge practices.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 bg-zinc-900 text-white overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      {/* Glows */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
            Got Questions?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide mt-3">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-500" />
          </div>
          <p className="text-zinc-400 mt-5 text-sm font-light max-w-md mx-auto leading-relaxed">
            Clear answers to help you understand our consultation process.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border overflow-hidden transition-all duration-300
                  ${
                    isOpen
                      ? "bg-zinc-800 border-yellow-500/25 shadow-lg shadow-yellow-500/5"
                      : "bg-slate-950 border-white/5 hover:border-white/10"
                  }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left gap-4"
                >
                  <span
                    className={`font-serif text-base md:text-lg font-medium tracking-wide transition-colors duration-200
                    ${isOpen ? "text-yellow-400" : "text-zinc-200 hover:text-white"}`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-md flex items-center justify-center border transition-all duration-300
                    ${
                      isOpen
                        ? "bg-yellow-500/10 border-yellow-500/30 rotate-180"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <ChevronDown
                      size={15}
                      className={isOpen ? "text-yellow-400" : "text-zinc-400"}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-yellow-500/30 to-transparent mb-4" />
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href={`https://wa.me/${phone_number}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="inline-flex items-center gap-3
            px-8 py-3.5 rounded-md font-semibold text-sm text-black
            bg-gradient-to-r from-yellow-500 to-yellow-400
            shadow-lg shadow-yellow-500/20
            hover:shadow-yellow-500/40 hover:-translate-y-0.5
            transition-all duration-200"
          >
            <MessageCircle size={17} />
            Chat With Us
          </a>
        </div>

        <p className="text-center text-[10px] tracking-[0.18em] uppercase text-yellow-500/50 mt-8">
          ✦ Trusted Guidance &nbsp;•&nbsp; Calm Insights &nbsp;•&nbsp; Personal
          Clarity
        </p>
      </div>
    </section>
  );
}
