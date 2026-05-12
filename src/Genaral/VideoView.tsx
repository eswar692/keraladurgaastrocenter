import { phone_number, whatsapp_number, company_name } from "./secrete";
import { Phone, MessageCircle, Sparkles, ArrowRight } from "lucide-react";

import { motion } from "framer-motion";

const ImageView = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* BACKGROUND IMAGE */}
      <motion.img
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        src="https://i.pinimg.com/1200x/cd/9f/20/cd9f20cc6b731b518752360f4f18088b.jpg"
        alt={`${company_name} Banner`}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* DARK OVERLAYS */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#050507]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/60" />

      {/* GOLD GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#d4af37_1px,transparent_1px)] bg-[size:30px_30px]" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-[10%] left-[10%] h-[300px] w-[300px] rounded-full bg-[#d4af37]/10 blur-[120px]" />

      <div className="absolute bottom-[5%] right-[10%] h-[260px] w-[260px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-70" />

      {/* CONTENT */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-5">
        <div className="max-w-5xl text-center">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d4af3725] bg-[#d4af370f] px-5 py-2 backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-[#d4af37]" />

            <span className="text-[10px] uppercase tracking-[0.28em] text-[#d4af37] font-semibold">
              Traditional Kerala Consultation
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]"
          >
            <span className="text-white drop-shadow-2xl">{company_name}</span>

            <br />

            <span className="bg-gradient-to-r from-[#d4af37] to-[#f5e27a] bg-clip-text text-transparent">
              Spiritual Wellness
            </span>
          </motion.h1>

          {/* DIVIDER */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />

            <div className="h-2 w-2 rotate-45 bg-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.8)]" />

            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </motion.div>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mx-auto mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-white/60 font-light"
          >
            Personalized traditional guidance focused on emotional balance,
            relationship clarity, positive energy, confidence and peaceful life
            decisions with complete privacy and respectful consultation.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-5"
          >
            {/* CALL BUTTON */}
            <a
              href={`tel:${phone_number}`}
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f5e27a] px-8 py-4 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(212,175,55,0.45)]"
            >
              <Phone size={18} />
              Call Now
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* WHATSAPP BUTTON */}
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af3730] hover:bg-[#d4af370d]"
            >
              <MessageCircle size={18} className="text-[#d4af37]" />
              Chat on WhatsApp
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* TRUST TAGS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            {[
              "Trusted Guidance",
              "100% Private",
              "Respectful Consultation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-[#d4af3720] bg-[#d4af370d] px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-[#d4af37]"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050507] to-transparent" />

      {/* FLOATING BLUR */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/5 blur-[180px]" />

      {/* FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

        *{
          font-family:'Inter',sans-serif;
        }

        .font-serif{
          font-family:'Cinzel',serif;
        }
      `}</style>
    </section>
  );
};

export default ImageView;
