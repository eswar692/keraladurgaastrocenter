import { useState } from "react";
import { ChevronDown, Printer, Shield } from "lucide-react";
import { company_name } from "../Genaral/secrete";
import { motion } from "framer-motion";

type Section = {
  id: string;
  title: string;
  content: string;
};

const PrivacyPolicy = () => {
  const sections: Section[] = [
    {
      id: "intro",
      title: "Introduction",
      content: `Welcome to ${company_name}. This privacy policy explains how we handle the information you provide through our form.`,
    },
    {
      id: "data-we-collect",
      title: "Data We Collect",
      content:
        "We only collect the information that you voluntarily provide in our form (such as your name, email, or message). No other personal data is collected.",
    },
    {
      id: "how-we-use",
      title: "How We Use Your Data",
      content:
        "The data you submit is used solely to respond to your inquiry or request. We do not use this data for any other purpose.",
    },
    {
      id: "sharing",
      title: "Sharing & Third Parties",
      content:
        "We do not sell, rent, or share your information with third parties. Your data stays with us.",
    },
    {
      id: "security",
      title: "Security",
      content:
        "We use reasonable safeguards to keep your submitted information safe. However, no system is completely secure.",
    },
    {
      id: "contact",
      title: "Contact",
      content: `If you have questions, contact privacy@${company_name.replace(/\s+/g, "").toLowerCase()}.com`,
    },
  ];

  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    sections.reduce(
      (acc, s) => ({ ...acc, [s.id]: true }),
      {} as Record<string, boolean>,
    ),
  );

  function toggle(id: string) {
    setOpen((o) => ({ ...o, [id]: !o[id] }));
  }

  return (
    <div className="min-h-screen bg-slate-950 py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <article className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-yellow-500/10 border border-yellow-500/20">
              <Shield size={20} className="text-yellow-400" />
            </div>
          </div>
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
            Legal
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-wide mt-2">
            {company_name} —{" "}
            <span className="text-yellow-400">Privacy Policy</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-500" />
          </div>
          <p className="text-zinc-500 text-xs mt-4 tracking-wide">
            Effective date: {new Date().toLocaleDateString()}
          </p>
        </motion.header>

        {/* Sections */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-3"
        >
          {sections.map((s, idx) => (
            <div
              key={s.id}
              className={`rounded-xl border overflow-hidden transition-all duration-300
                ${
                  open[s.id]
                    ? "bg-zinc-900 border-yellow-500/20 shadow-md shadow-yellow-500/5"
                    : "bg-slate-950 border-white/5 hover:border-white/10"
                }`}
            >
              <button
                onClick={() => toggle(s.id)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                aria-label={`Toggle ${s.title}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-bold tabular-nums w-5 text-right
                    ${open[s.id] ? "text-yellow-500" : "text-zinc-600"}`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`font-serif text-base font-semibold tracking-wide transition-colors duration-200
                    ${open[s.id] ? "text-yellow-400" : "text-zinc-300 hover:text-white"}`}
                  >
                    {s.title}
                  </h3>
                </div>
                <span
                  className={`shrink-0 w-7 h-7 rounded-md flex items-center justify-center border transition-all duration-300
                  ${
                    open[s.id]
                      ? "bg-yellow-500/10 border-yellow-500/30 rotate-180"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <ChevronDown
                    size={14}
                    className={open[s.id] ? "text-yellow-400" : "text-zinc-500"}
                  />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out
                ${open[s.id] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-5">
                  <div className="w-full h-px bg-gradient-to-r from-yellow-500/30 to-transparent mb-4" />
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {s.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4
          bg-zinc-900 border border-white/5 rounded-xl px-6 py-4"
        >
          <p className="text-zinc-500 text-xs tracking-wide">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm text-black
            bg-gradient-to-r from-yellow-500 to-yellow-400
            shadow-md shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-0.5
            transition-all duration-200 w-fit"
          >
            <Printer size={14} /> Print / Save as PDF
          </button>
        </motion.footer>

        <p className="text-center text-[10px] tracking-[0.18em] uppercase text-yellow-500/40 mt-8">
          ✦ Trusted &nbsp;•&nbsp; Confidential &nbsp;•&nbsp; Respectful
        </p>
      </article>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          article, article * { visibility: visible; }
          article { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
