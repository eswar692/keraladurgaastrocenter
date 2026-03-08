import { Phone, MessageCircle } from "lucide-react";
import { phone_number, whatsapp_number } from "../Genaral/secrete";
import { motion } from "framer-motion";

const services = [
  {
    name: "Relationship Support",
    desc: "Consultation for understanding, rebuilding trust, and strengthening personal relationships.",
    img: "https://i.pinimg.com/1200x/3f/f5/89/3ff5895bca8970847577656ffe788eff.jpg",
  },
  {
    name: "Marriage Consultation",
    desc: "Guidance for a balanced married life, compatibility understanding, and conflict resolution.",
    img: "https://i.pinimg.com/736x/fa/ee/46/faee46287149c9a2470c20d26318fee1.jpg",
  },
  {
    name: "Legal Matter Support",
    desc: "Traditional insights to support clarity and peace of mind during legal challenges.",
    img: "https://i.pinimg.com/1200x/fb/4e/36/fb4e36b171a92fb4d391f3bc6a90e8a5.jpg",
  },
  {
    name: "Financial Well-being",
    desc: "Holistic consultation for wealth planning, investment direction, and financial stability.",
    img: "https://i.pinimg.com/736x/53/3a/25/533a25d0fd940cc5fc8b5fdaf457b14a.jpg",
  },
  {
    name: "Education Guidance",
    desc: "Traditional consultation support for students seeking focus, confidence, and academic progress.",
    img: "https://i.pinimg.com/736x/7f/8a/60/7f8a6099a523cc79342eaee0a29e92f8.jpg",
  },
  {
    name: "Career Growth",
    desc: "Clarity for job opportunities, professional direction, and career advancement.",
    img: "https://i.pinimg.com/736x/2d/21/ff/2d21ff0997bd7bdfb46491c3d13798c3.jpg",
  },
  {
    name: "Life Path Consultation",
    desc: "In-depth horoscope reading to understand personal strengths and plan life decisions confidently.",
    img: "https://i.pinimg.com/1200x/40/6d/94/406d941b9978384bd9008b1f81c613a3.jpg",
  },
];

export default function Services() {
  return (
    <div className="relative bg-slate-950 min-h-screen py-24 px-6 overflow-hidden">
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
          What We Offer
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide mt-3 leading-tight">
          Our <span className="text-yellow-400">Consultation</span> Services
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-500" />
        </div>
        <p className="text-zinc-400 mt-5 text-sm md:text-base leading-relaxed font-light">
          Explore our services designed to guide you with{" "}
          <span className="font-medium text-yellow-400">wisdom</span>,{" "}
          <span className="font-medium text-yellow-300">peace</span>, and{" "}
          <span className="font-medium text-yellow-200">clarity</span> in life.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
            viewport={{ once: true }}
            className="group bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden
            shadow-lg shadow-black/40
            hover:border-yellow-500/20 hover:shadow-yellow-500/5
            hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-transparent" />

              {/* Name badge over image */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                <h3 className="font-serif text-lg font-semibold text-white tracking-wide drop-shadow-md">
                  {service.name}
                </h3>
                <div className="w-8 h-px bg-yellow-500 mt-1.5" />
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4">
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                {service.desc}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 pt-1">
                <a href={`tel:${phone_number}`} className="flex-1">
                  <button
                    className="w-full flex items-center justify-center gap-1.5
                  bg-gradient-to-r from-yellow-500 to-yellow-400
                  text-black text-xs font-bold px-4 py-2.5 rounded-md
                  shadow-md shadow-yellow-500/20
                  hover:shadow-yellow-500/40 hover:-translate-y-0.5
                  transition-all duration-200"
                  >
                    <Phone size={13} /> Call Now
                  </button>
                </a>
                <a
                  href={`https://wa.me/${whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  aria-label={`WhatsApp us about ${service.name}`}
                >
                  <button
                    className="w-full flex items-center justify-center gap-1.5
                  bg-white/5 border border-white/10 text-white text-xs font-semibold
                  px-4 py-2.5 rounded-md
                  hover:bg-yellow-500/10 hover:border-yellow-500/30 hover:text-yellow-400 hover:-translate-y-0.5
                  transition-all duration-200"
                  >
                    <MessageCircle size={13} /> Message
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-[10px] tracking-[0.2em] uppercase text-yellow-500/50 mt-16 relative z-10"
      >
        ✦ Trusted Guidance &nbsp;•&nbsp; Calm Insights &nbsp;•&nbsp; Personal
        Clarity
      </motion.p>
    </div>
  );
}
