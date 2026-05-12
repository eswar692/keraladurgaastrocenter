import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  Award,
  Star,
  ArrowRight,
  Eye,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import FAQ from "../Genaral/FAQ";
import {
  company_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";
import ImageView from "../Genaral/VideoView";
import { useState } from "react";

const Home = () => {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* Ambient Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gold Glow */}
        <div className="absolute top-[-10%] left-[-5%] h-[420px] w-[420px] rounded-full bg-[#d4af37]/10 blur-[140px]" />

        {/* Purple Glow */}
        <div className="absolute right-[-5%] top-[25%] h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[130px]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-[-10%] left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[120px]" />

        {/* Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d4af37_1px,transparent_1px)] bg-[size:28px_28px]" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#050507_95%)]" />
      </div>

      {/* Main Content */}
      <section className="relative z-10 flex flex-col">
        {/* HERO */}
        <div className="relative">
          <ImageView />
        </div>

        {/* Elegant Divider */}
        <Divider />

        {/* PROBLEMS */}
        <SectionWrapper>
          <Problems />
        </SectionWrapper>

        <Divider />

        {/* ABOUT */}
        <SectionWrapper>
          <AboutAstrologer />
        </SectionWrapper>

        <Divider />

        {/* SERVICES */}
        <SectionWrapper>
          <AstrologyServices />
        </SectionWrapper>

        {/* MODERN SERVICES */}
        <SectionWrapper>
          <AstrologyServicesModern />
        </SectionWrapper>

        {/* ALL SERVICES */}
        <SectionWrapper>
          <AllServicesModern />
        </SectionWrapper>

        {/* CTA / LAST DESIGN */}
        <SectionWrapper>
          <HomeLastDesign />
        </SectionWrapper>

        {/* FAQ */}
        <SectionWrapper className="pb-24">
          <FAQ />
        </SectionWrapper>
      </section>
    </main>
  );
};

/* ───────────────── COMPONENT HELPERS ───────────────── */

const SectionWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`
        relative 
        z-10 
        w-full 
        px-4 
        sm:px-6 
        md:px-10 
        lg:px-16 
        py-14 
        md:py-20
        ${className}
      `}
    >
      <div className="mx-auto w-full max-w-[1400px]">{children}</div>
    </section>
  );
};

const Divider = () => {
  return (
    <div className="relative flex items-center justify-center py-2">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af3725] to-transparent" />

      <div className="absolute flex items-center justify-center">
        <div className="h-2 w-2 rotate-45 bg-[#d4af37]/70 shadow-[0_0_12px_rgba(212,175,55,0.7)]" />
      </div>
    </div>
  );
};

export default Home;

/* ── Problems / Service Cards ── */

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROBLEMS = [
  {
    title: "Love & Relationship Guidance",
    desc: "Traditional Kerala consultation focused on emotional understanding, trust, connection, and peaceful relationship harmony.",
    img: "https://i.pinimg.com/736x/be/b8/3e/beb83e9587806f889eec5e49e351f001.jpg",
    tag: "Relationships",
  },
  {
    title: "Marriage Compatibility",
    desc: "Personalized guidance for couples seeking balance, better communication, mutual understanding, and long-term harmony.",
    img: "https://i.pinimg.com/1200x/65/57/d5/6557d5a550f751a5c29d392efed122a3.jpg",
    tag: "Marriage",
  },
  {
    title: "Career & Job Growth",
    desc: "Consultation designed to support confidence, career direction, professional growth, and important life decisions.",
    img: "https://i.pinimg.com/736x/9d/22/30/9d223074e6ba7d98a04b66feaf2750e3.jpg",
    tag: "Career",
  },
  {
    title: "Education & Concentration",
    desc: "Traditional wellness guidance to improve focus, clarity, discipline, motivation, and learning confidence.",
    img: "https://i.pinimg.com/1200x/d1/88/da/d188da345a1aa258f410cae6f82d4818.jpg",
    tag: "Education",
  },
  {
    title: "Money & Financial Stability",
    desc: "Holistic consultation to encourage financial clarity, positive thinking, balanced planning, and better decision-making.",
    img: "https://i.pinimg.com/736x/94/a8/a5/94a8a5685f1fcb8f33d6d59f1f56bc3b.jpg",
    tag: "Finance",
  },
  {
    title: "Family Peace & Harmony",
    desc: "Guidance for reducing misunderstandings, restoring emotional balance, and creating a peaceful home environment.",
    img: "https://i.pinimg.com/736x/29/da/fb/29dafb844bd06001a7430df8ef675a6c.jpg",
    tag: "Family",
  },
  {
    title: "Health & Emotional Wellness",
    desc: "Supportive consultation focused on mental peace, emotional wellness, positivity, and inner balance.",
    img: "https://i.pinimg.com/1200x/c4/b9/85/c4b985f1a8e0ef855f514a827bc9d8d0.jpg",
    tag: "Wellness",
  },
  {
    title: "Business & Professional Success",
    desc: "Traditional insights to support business growth, strategic clarity, confidence, and positive opportunities.",
    img: "https://i.pinimg.com/1200x/e3/82/9f/e3829f3f5aeeacc813cd0a0a8eebc8ac.jpg",
    tag: "Business",
  },
  {
    title: "Life Path & Future Direction",
    desc: "Discover personal strengths, meaningful direction, confidence, and clarity through traditional analysis.",
    img: "https://i.pinimg.com/736x/fe/c4/db/fec4dbd0406e4ae90d4cde684526f66b.jpg",
    tag: "Life Path",
  },
  {
    title: "Inner Peace & Self Awareness",
    desc: "Consultation designed to encourage spiritual balance, emotional clarity, positivity, and self-understanding.",
    img: "https://i.pinimg.com/736x/bd/07/98/bd07989b7867692892f45969e20442c0.jpg",
    tag: "Inner Peace",
  },
];

// ─── Motion variants ──────────────────────────────────────────────────────────

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Problems ─────────────────────────────────────────────────────────────────

const Problems = () => {
  return (
    <>
      <GlobalStyles />

      <section className="relative overflow-hidden bg-[#050507] px-5 py-24 md:px-10 md:py-32">
        {/* BACKGROUND EFFECTS */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#d4af37_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(212,175,55,0.08),transparent_70%)]" />

        <div className="absolute bottom-0 left-1/2 h-[260px] w-[500px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(212,175,55,0.05),transparent_70%)]" />

        <div className="absolute left-[-100px] top-[20%] h-[300px] w-[300px] rounded-full bg-[#d4af37]/10 blur-[140px]" />

        <div className="absolute bottom-[10%] right-[-100px] h-[260px] w-[260px] rounded-full bg-purple-500/10 blur-[120px]" />

        {/* TOP BORDER */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />

        <div className="relative mx-auto max-w-[1450px]">
          {/* ───────── HEADER ───────── */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-20"
          >
            {/* EYEBROW */}
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-[#d4af37] to-transparent" />

              <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37]/70">
                Traditional Consultation
              </span>
            </div>

            {/* TITLE ROW */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              {/* LEFT */}
              <div className="max-w-3xl">
                <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
                  Areas of
                </h2>

                <h2 className="mt-2 font-serif text-4xl font-bold leading-tight text-[#d4af37] md:text-6xl">
                  Guidance & Support
                </h2>

                <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-white/50 md:text-[16px]">
                  Every consultation is approached with care, traditional
                  understanding and personalized attention to help bring
                  emotional clarity, confidence, peace and balanced life
                  direction.
                </p>
              </div>

              {/* RIGHT COUNT */}
              <div className="flex items-center gap-5">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d4af37]/40" />

                <div className="relative">
                  <span className="font-serif text-6xl text-white/10 md:text-7xl">
                    {String(PROBLEMS.length).padStart(2, "0")}
                  </span>

                  <div className="absolute inset-0 blur-xl bg-[#d4af37]/10" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ───────── GRID ───────── */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {PROBLEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[30px] border border-white/5 bg-white/[0.03] backdrop-blur-xl"
              >
                {/* IMAGE */}
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-black/20 to-black/10" />

                  {/* TOP TAG */}
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-[#d4af3720] bg-[#d4af370d] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#d4af37] backdrop-blur-xl">
                      {item.tag}
                    </span>
                  </div>

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_65%)]" />
                </div>

                {/* CONTENT */}
                <div className="relative p-6">
                  {/* GOLD LINE */}
                  <div className="mb-5 h-px w-16 bg-gradient-to-r from-[#d4af37] to-transparent" />

                  <h3 className="text-2xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#d4af37]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-relaxed text-white/50">
                    {item.desc}
                  </p>

                  {/* BUTTON */}
                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/30">
                      Consultation
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af3720] bg-[#d4af370d] transition-all duration-300 group-hover:scale-110 group-hover:border-[#d4af3750]">
                      <svg
                        className="h-4 w-4 text-[#d4af37]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14m-6-6 6 6-6 6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* BORDER GLOW */}
                <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-transparent transition-all duration-500 group-hover:border-[#d4af3720]" />
              </motion.div>
            ))}

            {/* CTA CARD */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[30px] border border-[#d4af3720] bg-gradient-to-br from-[#d4af370f] to-transparent p-8 backdrop-blur-xl"
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_70%)]" />

              <div className="relative">
                <span className="rounded-full border border-[#d4af3725] bg-[#d4af370d] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#d4af37]">
                  Personal Guidance
                </span>

                <h3 className="mt-8 font-serif text-4xl leading-tight text-white">
                  Need
                  <br />
                  Personal
                  <span className="text-[#d4af37]"> Support?</span>
                </h3>

                <p className="mt-6 text-[15px] leading-relaxed text-white/55">
                  Speak privately and receive personalized traditional guidance
                  designed around your unique situation and life concerns.
                </p>
              </div>

              {/* BUTTON */}
              <a
                href={`https://wa.me/${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-10 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f5e27a] px-7 py-4 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-1"
              >
                Chat on WhatsApp
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

// ─── Consultation Card ────────────────────────────────────────────────────────

// ─── CTA Tile ─────────────────────────────────────────────────────────────────

// ─── Global Styles ────────────────────────────────────────────────────────────

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
  `}</style>
);

const STATS = [
  { icon: <Users size={14} />, value: "10K+", label: "Consultations" },
  { icon: <Award size={14} />, value: "75yrs", label: "Legacy" },
  { icon: <Star size={14} />, value: "4.9", label: "Rating" },
];

const AboutAstrologer = () => {
  return (
    <section className="relative overflow-hidden bg-[#050507] px-5 py-24 md:px-10 md:py-32">
      {/* ───────── BACKGROUND EFFECTS ───────── */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#d4af37_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[160px]" />

      <div className="absolute bottom-0 right-[-100px] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="absolute left-1/2 top-0 h-[240px] w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(212,175,55,0.08),transparent_70%)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
          {/* ───────── IMAGE SIDE ───────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* MAIN WRAPPER */}
            <div className="relative w-full max-w-[500px]">
              {/* OUTER GLOW */}
              <div className="absolute -inset-8 rounded-[40px] bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_70%)] blur-2xl" />

              {/* GOLD FRAME */}
              <div className="absolute -left-5 -top-5 h-24 w-24 border-l-2 border-t-2 border-[#d4af37]/40" />

              <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b-2 border-r-2 border-[#d4af37]/40" />

              {/* IMAGE CARD */}
              <div className="group relative overflow-hidden rounded-[34px] border border-[#d4af3720] bg-white/[0.03] backdrop-blur-xl">
                {/* IMAGE */}
                <img
                  src="https://i.pinimg.com/736x/a1/27/b0/a127b0dbc09393be4e51cb1d27cace81.jpg"
                  alt={`${company_name} practitioner`}
                  className="h-[620px] w-full object-cover object-top transition-transform duration-[1500ms] group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-black/10 to-transparent" />

                {/* GLASS INFO CARD */}
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-[#d4af3720] bg-black/40 p-5 backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl text-white">
                        {company_name}
                      </h3>

                      <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-[#d4af37]">
                        Traditional Kerala Practitioner
                      </p>
                    </div>

                    <div className="mt-2 h-3 w-3 rotate-45 bg-[#d4af37] shadow-[0_0_18px_rgba(212,175,55,0.8)]" />
                  </div>
                </div>
              </div>

              {/* STATS */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {STATS.map((item) => (
                  <div
                    key={item.label}
                    className="group rounded-2xl border border-[#d4af3720] bg-white/[0.03] p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af3740]"
                  >
                    <div className="mb-3 flex justify-center text-[#d4af37]">
                      {item.icon}
                    </div>

                    <h4 className="font-serif text-2xl text-white">
                      {item.value}
                    </h4>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/35">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ───────── CONTENT SIDE ───────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* EYEBROW */}
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-[#d4af37] to-transparent" />

              <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37]/70">
                About Practitioner
              </span>
            </div>

            {/* HEADING */}
            <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
              Rooted In
              <br />
              <span className="bg-gradient-to-r from-[#d4af37] to-[#f5e27a] bg-clip-text text-transparent">
                Tradition & Wisdom
              </span>
            </h2>

            {/* SUBTEXT */}
            <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/55">
              Meet{" "}
              <span className="font-semibold text-white">{company_name}</span>,
              a trusted traditional Kerala practitioner known for offering
              thoughtful guidance with care, privacy and deep understanding.
              Every consultation is approached with calmness, respect and
              personalized attention.
            </p>

            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/55">
              Through years of traditional knowledge and human-centered support,
              thousands have found emotional clarity, confidence, inner peace
              and balanced life direction through meaningful consultation.
            </p>

            {/* FEATURE PILLS */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Private Sessions",
                "Traditional Guidance",
                "Personalized Support",
                "Trusted Consultation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-[#d4af3720] bg-[#d4af370d] px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-[#d4af37]"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-5">
              {/* CALL BUTTON */}
              <motion.a
                href={`tel:${phone_number}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f5e27a] px-8 py-4 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <Phone size={18} />
                Call Now
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              {/* WHATSAPP */}
              <motion.a
                href={`https://wa.me/${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af3730] hover:bg-[#d4af370d]"
              >
                <MessageCircle size={18} className="text-[#d4af37]" />
                Chat on WhatsApp
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </div>

            {/* QUOTE */}
            <div className="relative mt-14 overflow-hidden rounded-[30px] border border-[#d4af3720] bg-white/[0.03] p-8 backdrop-blur-xl">
              <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

              <p className="font-serif text-2xl leading-relaxed text-white/85">
                “Traditional wisdom becomes most meaningful when it helps bring
                peace, confidence and clarity into everyday life.”
              </p>
            </div>
          </motion.div>
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
};

const SERVICES = [
  {
    title: "Relationship Recovery",
    desc: "Emotional challenges in relationships are common. Traditional consultation helps heal and restore understanding between partners.",
    img: "https://i.pinimg.com/1200x/56/23/3a/56233a0caad6ac1136c682118ca138f8.jpg",
    tag: "Healing",
    index: "01",
  },
  {
    title: "Partner Conflict Support",
    desc: "Traditional guidance helps ease conflicts and bring balance in relationships with your partner.",
    img: "https://i.pinimg.com/736x/da/1e/de/da1ede4ba8faa752488419d5a2802fd7.jpg",
    tag: "Balance",
    index: "02",
  },
  {
    title: "Relationship Harmony",
    desc: "Holistic consultation provides a path to resolve issues and restore harmony and trust between partners.",
    img: "https://i.pinimg.com/736x/bc/49/b6/bc49b6e04d96e9d687ea1740e4cc93ed.jpg",
    tag: "Trust",
    index: "03",
  },
  {
    title: "Family Well-being",
    desc: "Address family challenges with traditional guidance that promotes peace, harmony, and positivity at home.",
    img: "https://i.pinimg.com/736x/e7/b3/63/e7b36387a8c950dbb340455e0fdbdb1e.jpg",
    tag: "Peace",
    index: "04",
  },
];

const AstrologyServices = () => {
  return (
    <section className="relative py-24 md:py-32 px-5 md:px-10 bg-[#06060c] overflow-hidden">
      {/* ── Dot grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Ambient orbs ── */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.06), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[350px] h-[280px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.05), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
            <span
              className="text-[#d4af37]/60 tracking-[0.28em] uppercase"
              style={{ fontFamily: "monospace", fontSize: "0.6rem" }}
            >
              Our Specialties
            </span>
          </div>

          {/* Heading + count row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2
                className="text-white font-bold leading-none"
                style={{
                  fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                }}
              >
                Consultation
              </h2>
              <h2
                className="text-[#d4af37] font-bold leading-none mt-1"
                style={{
                  fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                }}
              >
                Services
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="h-px flex-1 md:w-24"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(212,175,55,0.3))",
                }}
              />
              <span
                className="text-white/15 font-light leading-none"
                style={{ fontFamily: "'Cinzel', serif", fontSize: "2.5rem" }}
              >
                {String(SERVICES.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="mt-5 max-w-lg leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Each service is rooted in Kerala's ancient traditions — tailored
            personally to bring clarity and balance to your life's most
            sensitive relationships.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-5 rounded-xl"
          style={{
            background: "rgba(212,175,55,0.04)",
            border: "1px solid rgba(212,175,55,0.1)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 flex-shrink-0" />
            <p
              className="text-white/50"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 300,
              }}
            >
              Not sure which service fits?{" "}
              <span className="text-white/70 font-medium">
                We'll guide you personally.
              </span>
            </p>
          </div>

          <motion.a
            href={`tel:${phone_number}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex-shrink-0 inline-flex items-center gap-2.5 no-underline px-6 py-3 rounded-sm font-semibold text-[0.78rem] tracking-[0.08em] uppercase text-[#06060c]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              background: "linear-gradient(135deg, #d4af37, #f5e27a)",
              boxShadow: "0 4px 20px rgba(212,175,55,0.35)",
            }}
          >
            <Phone size={13} strokeWidth={2.5} />
            Call for Guidance
            <ArrowRight
              size={12}
              strokeWidth={2.5}
              className="opacity-60 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </motion.a>
        </motion.div>
      </div>

      {/* ── Fonts (self-contained) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};

// ─── Service Card ─────────────────────────────────────────────────────────────

const ServiceCard = ({ service, idx }: { service: any; idx: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-xl cursor-pointer"
      style={{
        background: "linear-gradient(160deg, #0f0f1a 0%, #0a0a12 100%)",
        border: hovered
          ? "1px solid rgba(212,175,55,0.22)"
          : "1px solid rgba(255,255,255,0.05)",
        transition: "border-color 0.3s ease",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52 flex-shrink-0">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover will-change-transform transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
        />

        {/* Overlays */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{ background: "#06060c", opacity: hovered ? 0.1 : 0.28 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0a0a12_0%,transparent_55%)]" />

        {/* Tag pill */}
        <div className="absolute top-3 left-3">
          <span
            className="inline-block px-2.5 py-1 rounded-full text-[0.58rem] tracking-[0.15em] uppercase font-semibold"
            style={{
              fontFamily: "monospace",
              background: "rgba(6,6,12,0.75)",
              border: "1px solid rgba(212,175,55,0.22)",
              color: "rgba(212,175,55,0.8)",
              backdropFilter: "blur(8px)",
            }}
          >
            {service.tag}
          </span>
        </div>

        {/* Index number */}
        <div
          className="absolute top-3 right-3 leading-none transition-colors duration-300"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: hovered ? "rgba(212,175,55,0.35)" : "rgba(255,255,255,0.12)",
          }}
        >
          {service.index}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Animated gold accent bar */}
        <div
          className="h-px mb-3 transition-all duration-400"
          style={{
            background: "linear-gradient(90deg, #d4af37, transparent)",
            width: hovered ? "56px" : "28px",
          }}
        />

        <h3
          className="leading-snug mb-2.5 transition-colors duration-300"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.88rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            color: hovered ? "#f5e27a" : "rgba(255,255,255,0.9)",
          }}
        >
          {service.title}
        </h3>

        <p
          className="leading-relaxed flex-1 mb-5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.77rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          {service.desc}
        </p>

        {/* CTA row */}
        <a
          href={`tel:${phone_number}`}
          className="flex items-center justify-between no-underline px-4 py-2.5 rounded-lg transition-all duration-300"
          style={{
            background: hovered
              ? "rgba(212,175,55,0.12)"
              : "rgba(212,175,55,0.06)",
            border: hovered
              ? "1px solid rgba(212,175,55,0.32)"
              : "1px solid rgba(212,175,55,0.1)",
          }}
        >
          <span
            className="flex items-center gap-2 font-semibold tracking-[0.08em] uppercase"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.7rem",
              color: "#d4af37",
            }}
          >
            <Phone size={12} strokeWidth={2.5} />
            Call Now
          </span>
          <ArrowUpRight
            size={13}
            strokeWidth={2}
            className="transition-all duration-200"
            style={{
              color: hovered ? "#d4af37" : "rgba(212,175,55,0.4)",
              transform: hovered ? "translate(1px,-1px)" : "translate(0,0)",
            }}
          />
        </a>
      </div>

      {/* Inner glow border on hover */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.15)",
          opacity: hovered ? 1 : 0,
        }}
      />
    </motion.div>
  );
};

/* ── Wellness Services (image cards) ── */

const AstrologyServicesModern = () => {
  const SERVICES = [
    {
      title: "Marriage Consultation",
      img: "https://i.pinimg.com/736x/be/96/4b/be964bb4f6d6e07752fc4b363859b048.jpg",
      tag: "Marriage",
      index: "01",
      desc: "Guidance focused on emotional understanding, harmony and long-term relationship balance.",
    },
    {
      title: "Couple Conflict Support",
      img: "https://i.pinimg.com/736x/f5/b2/00/f5b200772b619765261b2a50b595ae72.jpg",
      tag: "Conflict",
      index: "02",
      desc: "Traditional consultation designed to encourage peace, communication and emotional clarity.",
    },
    {
      title: "Relationship Restoration",
      img: "https://i.pinimg.com/1200x/2f/5b/b3/2f5bb3dde2c5891188f1170b5d12260f.jpg",
      tag: "Restore",
      index: "03",
      desc: "Supportive personalized guidance to rebuild emotional connection and understanding.",
    },
    {
      title: "Financial Well-being",
      img: "https://i.pinimg.com/736x/40/99/9c/40999c10cdac6c327a1378c45be496b5.jpg",
      tag: "Wellness",
      index: "04",
      desc: "Holistic insights focused on financial confidence, clarity and positive decision making.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050507] px-5 py-24 md:px-10 md:py-32">
      {/* ───────── BACKGROUND ───────── */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#d4af37_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="absolute right-[-120px] top-0 h-[380px] w-[380px] rounded-full bg-[#d4af37]/10 blur-[140px]" />

      <div className="absolute bottom-0 left-[-120px] h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="absolute left-1/2 top-0 h-[220px] w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(212,175,55,0.08),transparent_70%)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        {/* ───────── HEADER ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* EYEBROW */}
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-[#d4af37] to-transparent" />

            <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37]/70">
              Traditional Wellness
            </span>
          </div>

          {/* TITLE */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
                Personalized
              </h2>

              <h2 className="mt-2 font-serif text-4xl font-bold leading-tight text-[#d4af37] md:text-6xl">
                Wellness Services
              </h2>

              <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-white/50 md:text-[16px]">
                Every consultation is thoughtfully designed to support emotional
                clarity, peaceful relationships, confidence and balanced life
                direction through traditional guidance.
              </p>
            </div>

            {/* COUNT */}
            <div className="flex items-center gap-5">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d4af37]/40" />

              <span className="font-serif text-6xl text-white/10 md:text-7xl">
                {String(SERVICES.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* ───────── SERVICES GRID ───────── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.03] backdrop-blur-xl"
            >
              {/* IMAGE */}
              <div className="relative h-[430px] overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-black/20 to-black/10" />

                {/* SERVICE NUMBER */}
                <div className="absolute right-5 top-5">
                  <span className="font-serif text-5xl text-white/15">
                    {service.index}
                  </span>
                </div>

                {/* TAG */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-[#d4af3720] bg-[#d4af370d] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#d4af37] backdrop-blur-xl">
                    {service.tag}
                  </span>
                </div>

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]" />
              </div>

              {/* CONTENT */}
              <div className="relative p-7">
                {/* GOLD LINE */}
                <div className="mb-5 h-px w-16 bg-gradient-to-r from-[#d4af37] to-transparent" />

                <h3 className="text-2xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#d4af37]">
                  {service.title}
                </h3>

                <p className="mt-4 text-[15px] leading-relaxed text-white/50">
                  {service.desc}
                </p>

                {/* FOOTER */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/30">
                    Consultation
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af3720] bg-[#d4af370d] transition-all duration-300 group-hover:scale-110 group-hover:border-[#d4af3750]">
                    <svg
                      className="h-4 w-4 text-[#d4af37]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m-6-6 6 6-6 6"
                      />
                    </svg>
                  </div>
                </div>

                {/* BORDER GLOW */}
                <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-transparent transition-all duration-500 group-hover:border-[#d4af3720]" />
              </div>
            </motion.div>
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
};

// ─── Service Card ─────────────────────────────────────────────────────────────

/* ── All Services (icon cards) ── */
const AllServicesModern = () => {
  const services = [
    {
      title: "Relationship Healing",
      icon: Heart,
      desc: "Traditional guidance to restore emotional balance and mutual understanding.",
      accent: "text-rose-400",
      bg: "bg-rose-500/10 border-rose-500/20",
    },
    {
      title: "Legal Matter Support",
      icon: Scale,
      desc: "Traditional insights to support clarity and peace of mind during legal challenges.",
      accent: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Family Harmony",
      icon: Users,
      desc: "Supportive consultation to improve peace and well-being in family relationships.",
      accent: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Business Direction",
      icon: Briefcase,
      desc: "Holistic insights to help with planning and professional growth.",
      accent: "text-sky-400",
      bg: "bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "Couple Well-being",
      icon: Users,
      desc: "Guidance focused on emotional well-being and togetherness.",
      accent: "text-pink-400",
      bg: "bg-pink-500/10 border-pink-500/20",
    },
    {
      title: "Traditional Rituals",
      icon: Sparkles,
      desc: "Sacred Kerala practices aimed at inner balance and personal grounding.",
      accent: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20",
    },
  ];

  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
            Full Spectrum
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide mt-2">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-500" />
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (id % 3) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-zinc-900 border border-white/5 rounded-2xl p-8 text-center
              hover:border-yellow-500/15 shadow-lg shadow-black/30
              transition-all duration-300"
            >
              <div
                className={`mx-auto mb-6 w-16 h-16 rounded-xl flex items-center justify-center border ${service.bg}`}
              >
                <service.icon className={`w-8 h-8 ${service.accent}`} />
              </div>

              <h3 className="font-serif text-xl font-semibold text-white tracking-wide mb-3">
                {service.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">
                {service.desc}
              </p>

              <a href={`tel:${phone_number}`}>
                <button
                  className="w-full py-2.5 rounded-md font-semibold text-sm text-black
                  bg-gradient-to-r from-yellow-500 to-yellow-400
                  shadow-md shadow-yellow-500/20
                  hover:shadow-yellow-500/40 hover:-translate-y-0.5
                  transition-all duration-200"
                >
                  Get in Touch
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Home Last / CTA ── */

const HomeLastDesign = () => {
  const PILLARS = [
    { icon: <Eye size={15} />, label: "Vastu Guidance" },
    { icon: <Sparkles size={15} />, label: "Horoscope Reading" },
    { icon: <Shield size={15} />, label: "Life Wellness" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050507] px-5 py-24 md:px-10 md:py-32">
      {/* ───────── BACKGROUND ───────── */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#d4af37_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="absolute left-[-100px] top-[10%] h-[400px] w-[400px] rounded-full bg-[#d4af37]/10 blur-[160px]" />

      <div className="absolute bottom-0 right-[-100px] h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="absolute left-1/2 top-0 h-[240px] w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(212,175,55,0.08),transparent_70%)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
          {/* ───────── LEFT SIDE ───────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* IMAGE WRAPPER */}
            <div className="relative">
              {/* OUTER GLOW */}
              <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.15),transparent_70%)] blur-3xl" />

              {/* ROTATING BORDER */}
              <div className="absolute inset-[-25px] rounded-full border border-[#d4af3715] animate-[spin_18s_linear_infinite]" />

              {/* SECOND RING */}
              <div className="absolute inset-[-12px] rounded-full border border-[#d4af3720]" />

              {/* GOLD DOT */}
              <div className="absolute left-1/2 top-[-24px] h-4 w-4 -translate-x-1/2 rounded-full bg-[#d4af37] shadow-[0_0_18px_rgba(212,175,55,0.8)]" />

              {/* MAIN IMAGE */}
              <div className="group relative h-[340px] w-[340px] overflow-hidden rounded-full border border-[#d4af3725] bg-white/[0.03] backdrop-blur-xl md:h-[420px] md:w-[420px]">
                <img
                  src="https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg"
                  alt={person_name}
                  className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-black/10 to-transparent" />

                {/* SHIMMER */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(212,175,55,0.18),transparent_45%)]" />

                {/* CENTER BADGE */}
                <div className="absolute bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-[#d4af3720] bg-black/40 p-4 text-center backdrop-blur-xl">
                  <h3 className="font-serif text-xl text-white">
                    {person_name}
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#d4af37]">
                    Traditional Kerala Practitioner
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ───────── RIGHT SIDE ───────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* EYEBROW */}
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-[#d4af37] to-transparent" />

              <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37]/70">
                Meet Your Guide
              </span>
            </div>

            {/* TITLE */}
            <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
              Traditional
              <br />
              <span className="bg-gradient-to-r from-[#d4af37] to-[#f5e27a] bg-clip-text text-transparent">
                Wisdom & Clarity
              </span>
            </h2>

            {/* TEXT */}
            <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/55">
              With years of traditional understanding and thoughtful guidance,
              <span className="font-semibold text-white">
                {" "}
                {person_name}
              </span>{" "}
              supports individuals seeking emotional clarity, relationship
              balance, confidence and peaceful life direction.
            </p>

            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/55">
              Every consultation is approached with care, privacy and genuine
              human understanding — combining traditional Kerala practices with
              calm and personalized support.
            </p>

            {/* PILLARS */}
            <div className="mt-10 flex flex-wrap gap-4">
              {PILLARS.map((item) => (
                <div
                  key={item.label}
                  className="group inline-flex items-center gap-3 rounded-2xl border border-[#d4af3720] bg-[#d4af370d] px-5 py-3 text-[12px] uppercase tracking-[0.18em] text-[#d4af37] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af3740]"
                >
                  <span className="text-[#d4af37]">{item.icon}</span>

                  {item.label}
                </div>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-5">
              {/* CALL */}
              <motion.a
                href={`tel:${phone_number}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f5e27a] px-8 py-4 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <Phone size={18} />
                Call Now
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              {/* WHATSAPP */}
              <motion.a
                href={`https://wa.me/${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af3730] hover:bg-[#d4af370d]"
              >
                <MessageCircle size={18} className="text-[#d4af37]" />
                Chat on WhatsApp
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </div>

            {/* TRUST LINE */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
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

            {/* QUOTE CARD */}
            <div className="relative mt-14 overflow-hidden rounded-[32px] border border-[#d4af3720] bg-white/[0.03] p-8 backdrop-blur-xl">
              <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

              <p className="font-serif text-2xl leading-relaxed text-white/85">
                “Guidance becomes meaningful when it brings confidence,
                emotional peace and clarity into everyday life.”
              </p>
            </div>
          </motion.div>
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
};
