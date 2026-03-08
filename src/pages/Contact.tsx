import { Phone, MessageCircle, MapPin } from "lucide-react";
import Form from "../Genaral/Form";
import {
  address,
  company_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-slate-950 min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/4 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
          Reach Out
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide mt-3 leading-tight">
          Contact <span className="text-yellow-400">{company_name}</span>
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-500" />
        </div>
        <p className="text-zinc-400 mt-5 text-sm leading-relaxed max-w-xl mx-auto font-light">
          We are here to support you on your personal journey. Reach out via{" "}
          <span className="font-medium text-yellow-400">WhatsApp</span>,{" "}
          <span className="font-medium text-yellow-400">Phone</span>, or fill
          the form below to connect with us directly.
        </p>
      </motion.div>

      {/* Grid: Info + Form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {/* Contact Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-zinc-900 border border-white/5 rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/40 flex flex-col gap-6"
        >
          <div>
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
              Contact
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-2 tracking-wide">
              Get in Touch
            </h3>
            <div className="w-10 h-px bg-gradient-to-r from-yellow-500 to-transparent mt-3" />
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed font-light">
            Whether you are looking for clarity about{" "}
            <span className="text-yellow-400 font-medium">career</span>,{" "}
            <span className="text-yellow-400 font-medium">relationships</span>,
            or{" "}
            <span className="text-yellow-400 font-medium">life planning</span>,
            our consultations are here to help.
          </p>

          {/* Address */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <MapPin size={15} className="text-yellow-400 mt-0.5 shrink-0" />
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              <span className="text-white font-medium block mb-0.5">
                {company_name}
              </span>
              {address.line1}, {address.line2}
              <br />
              {address.District}, {address.state} – {address.pincode},{" "}
              {address.country}
            </p>
          </div>

          {/* Phone */}
          <a
            href={`tel:${phone_number}`}
            className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5
            hover:bg-yellow-500/5 hover:border-yellow-500/20 transition-all duration-200 group"
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-yellow-500/10 border border-yellow-500/20 shrink-0">
              <Phone size={15} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-zinc-500 text-[10px] tracking-widest uppercase">
                Phone
              </p>
              <p className="text-white text-sm font-medium group-hover:text-yellow-400 transition-colors">
                {phone_number}
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5
            hover:bg-yellow-500/5 hover:border-yellow-500/20 transition-all duration-200 group"
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-yellow-500/10 border border-yellow-500/20 shrink-0">
              <MessageCircle size={15} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-zinc-500 text-[10px] tracking-widest uppercase">
                WhatsApp
              </p>
              <p className="text-white text-sm font-medium group-hover:text-yellow-400 transition-colors">
                {whatsapp_number}
              </p>
            </div>
          </a>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm text-black
              bg-gradient-to-r from-yellow-500 to-yellow-400
              shadow-md shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-0.5
              transition-all duration-200"
            >
              <Phone size={13} /> Call Now
            </a>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm text-white
              bg-white/5 border border-white/10
              hover:bg-white/10 hover:border-yellow-500/30 hover:-translate-y-0.5
              transition-all duration-200"
            >
              <MessageCircle size={13} /> Chat Now
            </a>
          </div>

          <p className="text-[10px] tracking-[0.16em] uppercase text-yellow-500/50">
            ✦ Trusted &nbsp;•&nbsp; Confidential &nbsp;•&nbsp; Respectful
          </p>
        </motion.div>

        {/* Form Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="bg-zinc-900 border border-white/5 rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/40"
        >
          <div className="mb-8">
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
              Book Session
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-2 tracking-wide">
              Book a Session
            </h3>
            <div className="w-10 h-px bg-gradient-to-r from-yellow-500 to-transparent mt-3" />
          </div>
          <Form />
        </motion.div>
      </div>

      {/* Services Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 max-w-5xl mx-auto relative z-10"
      >
        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 md:p-12 shadow-xl shadow-black/40 text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-8 opacity-30" />

          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
            What We Offer
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-wide mt-3 mb-6">
            Our Consultation Services
          </h3>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light max-w-3xl mx-auto">
            Offering detailed{" "}
            <span className="text-yellow-400 font-medium">
              palmistry sessions
            </span>
            ,{" "}
            <span className="text-yellow-400 font-medium">
              horoscope analysis
            </span>
            ,{" "}
            <span className="text-yellow-400 font-medium">
              personal well-being reviews
            </span>
            , and{" "}
            <span className="text-yellow-400 font-medium">
              Vastu consultations
            </span>
            . Gain clarity and direction through personalized traditional Kerala
            insights into{" "}
            <span className="text-white font-medium italic">
              relationships, career, financial planning, and personal well-being
            </span>
            .
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mt-8 opacity-30" />
        </div>
      </motion.div>
    </div>
  );
}
