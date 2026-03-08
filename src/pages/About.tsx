import {
  phone_number,
  whatsapp_number,
  person_name,
  company_name,
} from "../Genaral/secrete";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Star,
  Award,
  Users,
  BookOpen,
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Star,
      label: "Years of Experience",
      value: "20+",
      accent: "text-yellow-400",
      bg: "bg-yellow-500/10 border-yellow-500/20",
    },
    {
      icon: Users,
      label: "Clients Helped",
      value: "5000+",
      accent: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Award,
      label: "Trusted Practice",
      value: "Kerala",
      accent: "text-sky-400",
      bg: "bg-sky-500/10 border-sky-500/20",
    },
    {
      icon: BookOpen,
      label: "Services Offered",
      value: "10+",
      accent: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 py-24 px-6 overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
            Our Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide mt-3 leading-tight">
            About <span className="text-yellow-400">{company_name}</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-500" />
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {highlights.map(({ icon: Icon, label, value, accent, bg }) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-3 p-5 rounded-xl border bg-zinc-900 ${bg} transition-all duration-300 hover:-translate-y-1`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center border ${bg}`}
              >
                <Icon size={18} className={accent} />
              </div>
              <span className={`font-serif text-2xl font-bold ${accent}`}>
                {value}
              </span>
              <span className="text-zinc-500 text-xs text-center tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="bg-zinc-900 border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/50"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-10 opacity-40" />

          <div className="space-y-6 text-zinc-400 text-base leading-relaxed font-light">
            <p>
              <span className="font-semibold text-yellow-400 text-lg">
                {person_name}
              </span>{" "}
              is a trusted and respected traditional Kerala practitioner with
              decades of experience. With deep knowledge of ancient Kerala
              practices and a genuine commitment to helping others, he has
              established himself as a reliable consultant to individuals and
              families across India.
            </p>

            <div className="w-12 h-px bg-gradient-to-r from-yellow-500 to-transparent" />

            <p>
              Through his extensive experience and thoughtful approach,{" "}
              <span className="font-medium text-white">{person_name}</span>{" "}
              offers a wide range of services including horoscope reading, Vastu
              consultation, palmistry, and phone consultations. His knowledge
              spans traditional Kerala practices, holistic well-being, and
              personal development, making him a respected and trusted name in
              his field.
            </p>

            <div className="w-12 h-px bg-gradient-to-r from-yellow-500 to-transparent" />

            <p>
              Known for his{" "}
              <span className="font-semibold text-yellow-400">clarity</span> and
              thoughtful insights,{" "}
              <span className="font-medium text-white">{person_name}</span> has
              built a loyal following of clients who value the positive
              direction and confidence his consultations bring to their lives.
            </p>

            <div className="w-12 h-px bg-gradient-to-r from-yellow-500 to-transparent" />

            <p>
              If you are looking for a trusted and experienced consultant, we
              welcome you to get in touch.
            </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mt-10 mb-8 opacity-40" />

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md font-semibold text-sm text-black
              bg-gradient-to-r from-yellow-500 to-yellow-400
              shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-0.5
              transition-all duration-200"
            >
              <Phone size={15} /> Call Now
            </a>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md font-semibold text-sm text-white
              bg-white/5 border border-white/10
              hover:bg-white/10 hover:border-yellow-500/30 hover:-translate-y-0.5
              transition-all duration-200"
            >
              <MessageCircle size={15} /> Chat on WhatsApp
            </a>
          </div>

          <p className="text-center text-[10px] tracking-[0.18em] uppercase text-yellow-500/60 mt-6">
            ✦ Trusted Guidance &nbsp;•&nbsp; Calm Insights &nbsp;•&nbsp;
            Personal Clarity
          </p>
        </motion.div>
      </div>
    </section>
  );
}
