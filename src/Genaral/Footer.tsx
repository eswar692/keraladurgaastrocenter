import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import useInViewOnce from "./InView";
import {
  address,
  company_name,
  person_name,
  phone_number,
  website_url,
  whatsapp_number,
} from "./secrete";

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.2);

  return (
    <motion.footer className="relative mt-2 w-full overflow-hidden text-white z-[999] bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-950">
      {/* Top shimmer line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-60" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-indigo-700/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main content grid */}
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* ── ABOUT ── */}
        <div className="flex flex-col gap-4">
          <SectionLabel>About Us</SectionLabel>
          <h2 className="font-serif text-2xl font-bold text-white tracking-wide leading-snug">
            {company_name}
          </h2>
          <div className="w-10 h-px bg-gradient-to-r from-yellow-500 to-transparent" />
          <p className="text-sm leading-relaxed text-zinc-400 font-light">
            <span className="text-white font-medium">{company_name}</span>{" "}
            offers traditional Kerala wellness consultations rooted in years of
            experience and responsible practice.{" "}
            <span className="text-yellow-400 font-medium">{person_name}</span>{" "}
            provides thoughtful sessions focused on clarity, balance, and
            personal well-being across relationships, career, and life planning.
          </p>
          <p className="text-[10px] tracking-[0.18em] uppercase text-yellow-500/80 mt-1">
            ✦ Trusted &nbsp;•&nbsp; Confidential &nbsp;•&nbsp; Respectful
          </p>
        </div>

        {/* ── CONTACT ── */}
        <div className="flex flex-col gap-4">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-serif text-2xl font-bold text-white tracking-wide leading-snug">
            Get in Touch
          </h2>
          <div className="w-10 h-px bg-gradient-to-r from-yellow-500 to-transparent" />

          <div className="flex flex-col gap-3 mt-1">
            <ContactRow
              icon={
                <Phone size={14} className="text-yellow-400 mt-0.5 shrink-0" />
              }
            >
              <span className="text-zinc-300 text-sm tracking-wide">
                {phone_number}
              </span>
            </ContactRow>

            <ContactRow
              icon={
                <MessageCircle
                  size={14}
                  className="text-yellow-400 mt-0.5 shrink-0"
                />
              }
            >
              <span className="text-zinc-300 text-sm tracking-wide">
                {whatsapp_number}
              </span>
            </ContactRow>

            <ContactRow
              icon={
                <MapPin size={14} className="text-yellow-400 mt-0.5 shrink-0" />
              }
            >
              <span className="text-zinc-300 text-sm leading-relaxed">
                <span className="text-white font-medium">{address.line1}</span>
                <br />
                {address.line2}, {address.District}
                <br />
                {address.state} – {address.pincode}, {address.country}
              </span>
            </ContactRow>
          </div>

          <a
            href={`tel:${phone_number}`}
            className="mt-2 inline-flex items-center gap-2 w-fit px-5 py-2.5 rounded-md
            bg-gradient-to-r from-yellow-500 to-yellow-400
            text-black text-xs font-bold uppercase tracking-widest
            shadow-lg shadow-yellow-500/20
            hover:shadow-yellow-500/40 hover:-translate-y-0.5
            transition-all duration-200"
          >
            <Phone size={13} /> Call Us Today
          </a>
        </div>

        {/* ── POLICIES ── */}
        <div className="flex flex-col gap-4">
          <SectionLabel>Legal</SectionLabel>
          <h2 className="font-serif text-2xl font-bold text-white tracking-wide leading-snug">
            Support & Policies
          </h2>
          <div className="w-10 h-px bg-gradient-to-r from-yellow-500 to-transparent" />

          <ul className="flex flex-col gap-1 mt-1">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Contact Us", href: "/contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-zinc-400
                  border border-transparent
                  hover:text-yellow-400 hover:bg-yellow-500/5 hover:border-yellow-500/20
                  transition-all duration-200"
                >
                  <ChevronRight size={13} className="opacity-40" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <CopyRightAndContact />
    </motion.footer>
  );
}

/* ── Reusable sub-components ── */

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    <div className="w-4 h-px bg-gradient-to-r from-yellow-500 to-transparent" />
    <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
      {children}
    </span>
  </div>
);

const ContactRow = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3">
    {icon}
    <div>{children}</div>
  </div>
);

const CopyRightAndContact = () => (
  <div className="border-t border-white/5 bg-black/30 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Left — dev credit */}
      <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
        <span className="text-xs text-zinc-500 tracking-wide">
          Designed &amp; Developed by
        </span>
        <a
          href="https://wa.me/918886921826?text=Hello%2C%20I%20found%20your%20contact%20via%20the%20website"
          aria-label="Contact Eswar on WhatsApp"
        >
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
            bg-gradient-to-r from-yellow-500 to-yellow-400
            text-black text-xs font-bold tracking-wide
            shadow-md shadow-yellow-500/20
            hover:shadow-yellow-500/40 hover:scale-105
            transition-all duration-200 cursor-pointer"
          >
            Eswar <ExternalLink size={10} />
          </span>
        </a>
      </div>

      {/* Right — copyright */}
      <p className="text-xs text-zinc-500 tracking-wide text-center md:text-right">
        © {new Date().getFullYear()}{" "}
        <a
          href={website_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 font-medium hover:text-yellow-300 transition-colors duration-200"
        >
          {company_name}
        </a>{" "}
        • All Rights Reserved
      </p>
    </div>
  </div>
);
