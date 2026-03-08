import { company_name } from "../Genaral/secrete";
import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

const sections = (company: string) => [
  {
    num: "01",
    title: `About ${company}`,
    content: `${company} provides genuine business services and guidance as described on this website. We strive to keep all information transparent, accurate, and up to date.`,
    highlight: false,
  },
  {
    num: "02",
    title: "Use of Our Services",
    list: [
      "You will use our services only for lawful purposes",
      "You will not misuse or attempt to disrupt our website",
      "You will not copy or resell our content without permission",
    ],
    highlight: false,
  },
  {
    num: "03",
    title: "WhatsApp Communication & User Consent",
    content: `By submitting your contact details, you explicitly agree (opt-in) to receive messages from ${company} via WhatsApp. These messages may include service-related updates, responses to inquiries, or important notifications.`,
    note: `You may opt out at any time by replying "STOP".`,
    highlight: true,
  },
  {
    num: "04",
    title: "Data Usage",
    content: `Any personal data shared with us is handled responsibly and in accordance with our Privacy Policy. We do not sell or misuse your personal information.`,
    highlight: false,
  },
  {
    num: "05",
    title: "Intellectual Property",
    content: `All content on this website, including text, graphics, and branding, belongs to ${company} unless stated otherwise. Unauthorized use is prohibited.`,
    highlight: false,
  },
  {
    num: "06",
    title: "Limitation of Liability",
    content: `${company} shall not be held liable for any direct or indirect damages arising from the use of our website or services.`,
    highlight: false,
  },
  {
    num: "07",
    title: "Changes to These Terms",
    content: `We may update these Terms & Conditions from time to time. Continued use of our services indicates acceptance of the updated terms.`,
    highlight: false,
  },
  {
    num: "08",
    title: "Contact Us",
    content: `If you have any questions regarding these Terms & Conditions, please contact us via the details provided on our Contact page.`,
    highlight: false,
  },
];

const TermsAndConditions = () => {
  const items = sections(company_name);

  return (
    <main className="min-h-screen bg-slate-950 py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-yellow-500/10 border border-yellow-500/20">
              <ScrollText size={20} className="text-yellow-400" />
            </div>
          </div>
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
            Legal
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-wide mt-2">
            Terms &amp; <span className="text-yellow-400">Conditions</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-500" />
          </div>
          <p className="text-zinc-500 text-xs mt-4 tracking-wide">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Intro card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-zinc-900 border border-white/5 rounded-2xl px-8 py-6 mb-6 shadow-lg shadow-black/30"
        >
          <div className="w-full h-px bg-gradient-to-r from-yellow-500/40 to-transparent mb-5" />
          <p className="text-zinc-400 text-sm leading-relaxed font-light">
            Welcome to{" "}
            <span className="font-semibold text-white">{company_name}</span>. By
            accessing or using our website, services, or communicating with us
            via WhatsApp, you agree to be bound by these Terms &amp; Conditions.
            Please read them carefully.
          </p>
          <div className="w-full h-px bg-gradient-to-r from-yellow-500/40 to-transparent mt-5" />
        </motion.div>

        {/* Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-3"
        >
          {items.map((s) => (
            <div
              key={s.num}
              className={`rounded-xl border px-6 py-5 transition-all duration-200
                ${
                  s.highlight
                    ? "bg-yellow-500/5 border-yellow-500/25 shadow-md shadow-yellow-500/5"
                    : "bg-zinc-900 border-white/5 hover:border-white/10"
                }`}
            >
              {/* Title row */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-bold tabular-nums ${s.highlight ? "text-yellow-500" : "text-zinc-600"}`}
                >
                  {s.num}
                </span>
                <h2
                  className={`font-serif text-base font-semibold tracking-wide
                  ${s.highlight ? "text-yellow-400" : "text-white"}`}
                >
                  {s.title}
                </h2>
                {s.highlight && (
                  <span className="ml-auto text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-yellow-500/15 border border-yellow-500/30 text-yellow-400">
                    Important
                  </span>
                )}
              </div>

              <div className="w-8 h-px bg-gradient-to-r from-yellow-500/40 to-transparent mb-3" />

              {/* List */}
              {"list" in s && s.list && (
                <ul className="space-y-1.5">
                  {s.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-zinc-400 text-sm font-light leading-relaxed"
                    >
                      <span className="text-yellow-500 mt-0.5 shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Content */}
              {"content" in s && s.content && (
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {s.content}
                </p>
              )}

              {/* Highlight note */}
              {"note" in s && s.note && (
                <p className="mt-3 text-yellow-400 text-sm font-semibold tracking-wide">
                  {s.note}
                </p>
              )}
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-zinc-900 border border-white/5 rounded-xl px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
        >
          <p className="text-zinc-500 text-xs tracking-wide">
            By using our services, you acknowledge that you have read and agree
            to these terms.
          </p>
          <p className="text-zinc-600 text-xs shrink-0">
            © {new Date().getFullYear()} {company_name}
          </p>
        </motion.div>

        <p className="text-center text-[10px] tracking-[0.18em] uppercase text-yellow-500/40 mt-8">
          ✦ Trusted &nbsp;•&nbsp; Confidential &nbsp;•&nbsp; Respectful
        </p>
      </div>
    </main>
  );
};

export default TermsAndConditions;
