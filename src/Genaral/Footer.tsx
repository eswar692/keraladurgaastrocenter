import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import {
  address,
  company_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "./secrete";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050507] text-white border-t border-[#d4af3720]">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#d4af37_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="absolute -top-32 left-0 w-[420px] h-[420px] bg-[#d4af37]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* TOP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] border border-[#d4af3725] bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#d4af3710] via-transparent to-[#d4af3710]" />

          <div className="relative flex flex-col lg:flex-row gap-10 items-center justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#d4af37] mb-4">
                <Sparkles size={16} />
                <span className="uppercase tracking-[0.25em] text-[11px] font-semibold">
                  Spiritual Guidance
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl leading-tight font-bold font-serif">
                Find Clarity,
                <span className="text-[#d4af37]"> Balance & Peace</span>
              </h2>

              <p className="mt-5 text-white/60 leading-relaxed text-[15px] md:text-[16px] max-w-xl">
                {person_name} provides thoughtful spiritual wellness
                consultations with complete privacy, care and traditional
                experience for relationships, life direction and emotional
                balance.
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#f5e27a] text-black px-7 py-4 rounded-2xl font-semibold shadow-[0_0_40px_rgba(212,175,55,0.25)]"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-[#d4af37] font-serif">
              {company_name}
            </h2>

            <div className="w-20 h-[2px] bg-gradient-to-r from-[#d4af37] to-transparent mt-4 mb-6" />

            <p className="text-white/55 text-[15px] leading-relaxed">
              Traditional Kerala wellness guidance with responsible and
              respectful consultation methods focused on personal well-being,
              emotional clarity and life harmony.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {["Trusted", "Private", "Professional"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-[#d4af3725] bg-[#d4af370d] text-[#d4af37] text-[11px] uppercase tracking-[0.2em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact</h3>

            <div className="space-y-5">
              <a
                href={`tel:${phone_number}`}
                className="group flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#d4af3730] transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#d4af3715] flex items-center justify-center">
                  <Phone size={18} className="text-[#d4af37]" />
                </div>

                <div>
                  <p className="text-white/40 text-sm">Call Us</p>
                  <p className="text-white/80 group-hover:text-[#d4af37] transition-colors">
                    +91 {phone_number}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#d4af3730] transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#d4af3715] flex items-center justify-center">
                  <MessageCircle size={18} className="text-[#d4af37]" />
                </div>

                <div>
                  <p className="text-white/40 text-sm">WhatsApp</p>
                  <p className="text-white/80 group-hover:text-[#d4af37] transition-colors">
                    +91 {whatsapp_number}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Location</h3>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="w-11 h-11 rounded-xl bg-[#d4af3715] flex items-center justify-center mb-4">
                <MapPin size={18} className="text-[#d4af37]" />
              </div>

              <p className="text-white/70 leading-relaxed text-[15px]">
                {address.line1}
                <br />
                {address.line2}, {address.District}
                <br />
                {address.state} - {address.pincode}
                <br />
                {address.country}
              </p>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Quick Links
            </h3>

            <div className="space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#d4af3730] transition-all"
                >
                  <span className="text-white/65 group-hover:text-[#d4af37] transition-colors">
                    {item.label}
                  </span>

                  <ArrowRight
                    size={16}
                    className="text-[#d4af37] group-hover:translate-x-1 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white/35 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {company_name}. All rights reserved.
          </p>

          <a
            href="https://wa.me/918886921826"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-white/40 hover:text-[#d4af37] transition-colors"
          >
            Designed & Developed by
            <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e27a] text-black font-semibold inline-flex items-center gap-1">
              Eswar
              <ExternalLink size={12} />
            </span>
          </a>
        </div>
      </div>

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        *{
          font-family: 'Inter', sans-serif;
        }

        .font-serif{
          font-family: 'Cinzel', serif;
        }
      `}</style>
    </footer>
  );
}
