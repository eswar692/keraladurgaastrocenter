import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
  Sparkles,
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

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full bg-slate-950">
      <ImageView />
      <Problems />
      <AboutAstrologer />
      <AstrologyServices />
      <AstrologyServicesModern />
      <AllServicesModern />
      <HomeLastDesign />
      <FAQ />
    </div>
  );
};

export default Home;

/* ── Problems / Service Cards ── */
const Problems = () => {
  const problems = [
    {
      title: "Relationship Guidance",
      desc: "Traditional consultation for emotional clarity and relationship harmony.",
      img: "https://i.pinimg.com/1200x/24/19/c7/2419c77357b4f81546c1ae8f4b4242d9.jpg",
    },
    {
      title: "Marriage Support",
      desc: "Holistic insights for better understanding and marital balance.",
      img: "https://i.pinimg.com/736x/55/d8/6c/55d86c64e6d1278d7e7d73faa0d82294.jpg",
    },
    {
      title: "Career Direction",
      desc: "Personalized consultation to navigate career growth and opportunities.",
      img: "https://i.pinimg.com/1200x/ea/4a/df/ea4adf16e1e40f3570cedaff3a8bc7c3.jpg",
    },
    {
      title: "Education & Focus",
      desc: "Traditional wellness practices to enhance concentration and learning progress.",
      img: "https://i.pinimg.com/1200x/41/04/77/41047752bbb211d5064516ee12e88fb9.jpg",
    },
    {
      title: "Financial Stability",
      desc: "Holistic insights to support financial planning and a positive mindset.",
      img: "https://i.pinimg.com/736x/5d/78/7f/5d787fd719617e594edb6b1fa0335f55.jpg",
    },
    {
      title: "Family Harmony",
      desc: "Consultation for resolving misunderstandings and improving peace at home.",
      img: "https://i.pinimg.com/736x/29/da/fb/29dafb844bd06001a7430df8ef675a6c.jpg",
    },
    {
      title: "Health & Well-being",
      desc: "Traditional guidance to support emotional and mental balance.",
      img: "https://i.pinimg.com/1200x/c4/b9/85/c4b985f1a8e0ef855f514a827bc9d8d0.jpg",
    },
    {
      title: "Business Growth",
      desc: "Holistic consultation for strategic planning and growth clarity.",
      img: "https://i.pinimg.com/1200x/e3/82/9f/e3829f3f5aeeacc813cd0a0a8eebc8ac.jpg",
    },
    {
      title: "Life Path Clarity",
      desc: "Discover strengths and direction through traditional Kerala analysis.",
      img: "https://i.pinimg.com/736x/fe/c4/db/fec4dbd0406e4ae90d4cde684526f66b.jpg",
    },
    {
      title: "Inner Well-being",
      desc: "Guidance to deepen self-awareness and inner peace.",
      img: "https://i.pinimg.com/736x/bd/07/98/bd07989b7867692892f45969e20442c0.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-zinc-900">
      {/* Section header */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
          How We Help
        </span>
        <div className="flex items-center justify-center gap-3 mt-2">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-500" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-wide">
            Areas of Consultation
          </h2>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {problems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            viewport={{ once: true }}
            className="group bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden
            shadow-lg shadow-black/40
            hover:border-yellow-500/20 hover:shadow-yellow-500/5
            transition-all duration-300"
          >
            <div className="overflow-hidden relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-serif text-lg font-semibold text-yellow-400 tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 mt-3 leading-relaxed font-light">
                {item.desc}
              </p>
              <a
                href={`https://wa.me/${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6
                px-6 py-2.5 rounded-md text-sm font-semibold
                bg-gradient-to-r from-yellow-500 to-yellow-400
                text-black shadow-md shadow-yellow-500/20
                hover:shadow-yellow-500/40 hover:-translate-y-0.5
                transition-all duration-200"
                aria-label={`WhatsApp us about ${item.title}`}
              >
                <MessageCircle size={14} /> Message Us
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ── About Astrologer ── */
const AboutAstrologer = () => {
  return (
    <section className="relative py-24 px-6 bg-zinc-900 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text */}
        <div className="space-y-6 text-center md:text-left">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full
            bg-yellow-500/10 border border-yellow-500/20
            text-yellow-400 text-xs font-semibold tracking-widest uppercase"
          >
            ✨ About {company_name}
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight">
            {company_name}
          </h2>
          <div className="w-14 h-px bg-gradient-to-r from-yellow-500 to-transparent mx-auto md:mx-0" />

          <p className="text-zinc-400 leading-relaxed text-base font-light">
            Meet{" "}
            <span className="font-semibold text-white">{company_name}</span>, a
            trusted practitioner whose knowledge is rooted in traditional Kerala
            wisdom. His guidance has helped many individuals discover{" "}
            <span className="font-medium text-yellow-400">
              clarity, balance, and confidence
            </span>
            .
          </p>

          <p className="text-zinc-400 leading-relaxed text-base font-light">
            Through personalized consultations and thoughtful insights,{" "}
            {company_name} supports people in navigating life decisions with
            calmness, awareness, and grounded understanding.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm
              bg-gradient-to-r from-yellow-500 to-yellow-400 text-black
              shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-0.5
              transition-all duration-200"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm
              bg-white/5 border border-white/10 text-white
              hover:bg-white/10 hover:border-yellow-500/30 hover:-translate-y-0.5
              transition-all duration-200"
            >
              <MessageCircle size={16} /> Chat Now
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-yellow-500/30 to-transparent blur-xl opacity-60" />
            <img
              src="https://i.pinimg.com/1200x/a2/2e/34/a22e34ab3f1765939a7825677df5861f.jpg"
              alt={`${company_name} practitioner`}
              className="relative w-full h-[420px] rounded-2xl object-cover object-top
              border border-white/10 shadow-2xl
              hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Consultation Services ── */
const AstrologyServices = () => {
  const services = [
    {
      title: "Relationship Recovery",
      desc: "Emotional challenges in relationships are common. Traditional consultation helps heal and restore understanding between partners.",
      img: "https://i.pinimg.com/1200x/56/23/3a/56233a0caad6ac1136c682118ca138f8.jpg",
    },
    {
      title: "Partner Conflict Support",
      desc: "Traditional guidance helps ease conflicts and bring balance in relationships with your partner.",
      img: "https://i.pinimg.com/736x/da/1e/de/da1ede4ba8faa752488419d5a2802fd7.jpg",
    },
    {
      title: "Relationship Harmony",
      desc: "Holistic consultation provides a path to resolve issues and restore harmony and trust between partners.",
      img: "https://i.pinimg.com/736x/bc/49/b6/bc49b6e04d96e9d687ea1740e4cc93ed.jpg",
    },
    {
      title: "Family Well-being",
      desc: "Address family challenges with traditional guidance that promotes peace, harmony, and positivity at home.",
      img: "https://i.pinimg.com/736x/e7/b3/63/e7b36387a8c950dbb340455e0fdbdb1e.jpg",
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
          Our Specialties
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-wide mt-2 mb-14">
          Consultation Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden
              hover:border-yellow-500/20 shadow-lg shadow-black/40
              transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-transparent" />
              </div>
              <div className="p-6 space-y-4 text-center">
                <h3 className="font-serif text-lg font-semibold text-yellow-400 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {service.desc}
                </p>
                <a href={`tel:${phone_number}`}>
                  <button
                    className="w-full flex items-center justify-center gap-2
                    py-2.5 px-6 rounded-md mt-2
                    bg-gradient-to-r from-yellow-500 to-yellow-400
                    text-black font-semibold text-sm
                    shadow-md shadow-yellow-500/20
                    hover:shadow-yellow-500/40 hover:-translate-y-0.5
                    transition-all duration-200"
                  >
                    <Phone size={14} /> Call Now
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Wellness Services (image cards) ── */
const AstrologyServicesModern = () => {
  const services = [
    {
      title: "Marriage Consultation",
      img: "https://i.pinimg.com/736x/be/96/4b/be964bb4f6d6e07752fc4b363859b048.jpg",
    },
    {
      title: "Couple Conflict Support",
      img: "https://i.pinimg.com/736x/f5/b2/00/f5b200772b619765261b2a50b595ae72.jpg",
    },
    {
      title: "Relationship Restoration",
      img: "https://i.pinimg.com/1200x/2f/5b/b3/2f5bb3dde2c5891188f1170b5d12260f.jpg",
    },
    {
      title: "Financial Well-being",
      img: "https://i.pinimg.com/736x/40/99/9c/40999c10cdac6c327a1378c45be496b5.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
            Wellness
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-wide mt-2">
            Wellness Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group bg-slate-950 border border-white/5 rounded-2xl overflow-hidden
              shadow-lg shadow-black/40
              hover:border-yellow-500/20 transition-all duration-300"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-serif text-base font-semibold text-yellow-400 tracking-wide">
                  {service.title}
                </h3>
                <a href={`tel:${phone_number}`}>
                  <button
                    className="mt-4 w-full flex items-center justify-center gap-2
                    bg-white/5 border border-white/10 text-white text-sm font-medium
                    py-2.5 rounded-md
                    hover:bg-yellow-500/10 hover:border-yellow-500/30 hover:text-yellow-400
                    transition-all duration-200"
                  >
                    <Phone size={13} /> Call Now
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
function HomeLastDesign() {
  return (
    <section className="relative py-24 px-6 bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-yellow-500/20 to-transparent blur-2xl" />
            <div
              className="relative w-72 h-72 md:w-88 md:h-88 rounded-full overflow-hidden
              border border-yellow-500/20 shadow-2xl shadow-black/60"
            >
              <img
                src="https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg"
                alt={person_name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 rounded-full border border-yellow-400/10" />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-yellow-500">
            Meet Your Guide
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight">
            {person_name}
          </h2>
          <div className="w-14 h-px bg-gradient-to-r from-yellow-500 to-transparent mx-auto md:mx-0" />

          <h3 className="text-base md:text-lg font-medium text-zinc-300 tracking-wide">
            Trusted Traditional Kerala Consultation
          </h3>

          <p className="text-zinc-400 leading-relaxed text-sm font-light">
            With deep understanding of{" "}
            <span className="text-yellow-400 font-medium">Vastu</span>,{" "}
            <span className="text-yellow-300 font-medium">
              horoscope interpretation
            </span>
            , and{" "}
            <span className="text-yellow-200 font-medium">
              holistic well-being consultation
            </span>
            , {person_name} provides calm, thoughtful guidance to help
            individuals move forward with clarity and confidence.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm text-black
              bg-gradient-to-r from-yellow-500 to-yellow-400
              shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-0.5
              transition-all duration-200"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm text-white
              bg-white/5 border border-white/10
              hover:bg-white/10 hover:border-yellow-500/30 hover:-translate-y-0.5
              transition-all duration-200"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>

          <p className="text-[10px] tracking-[0.18em] uppercase text-yellow-500/80 pt-1">
            ✦ Trusted Guidance &nbsp;•&nbsp; Calm Insights &nbsp;•&nbsp;
            Personal Clarity
          </p>
        </motion.div>
      </div>
    </section>
  );
}
