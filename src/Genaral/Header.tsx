import { X, Phone, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { address, company_name, phone_number } from "./secrete";

const NAV_ITEMS = ["Home", "About", "Services", "Contact"] as const;
const MOBILE_NAV_ITEMS = [
  "Home",
  "About",
  "Services",
  "Testimonials",
  "Contact",
] as const;

// ─── Header ───────────────────────────────────────────────────────────────────

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <GlobalStyles />
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
              : "bg-white border-b border-slate-200"
          }
        `}
      >
        {/* Top utility strip */}
        <TopStrip />

        {/* Main header row */}
        <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-[70px] gap-6">
            <LogoBlock />
            <DesktopNav />
            <MobileToggle />
          </div>
        </div>
      </header>

      {/* Push content below fixed header */}
      <div className="h-[100px] md:h-[106px]" />
    </>
  );
};

export default Header;

// ─── Top Strip ────────────────────────────────────────────────────────────────

const TopStrip = () => (
  <div className="bg-slate-900 px-5 md:px-10 py-1.5">
    <div className="max-w-[1400px] mx-auto flex items-center justify-between">
      <span className="text-[0.65rem] text-slate-400 tracking-widest uppercase font-mono">
        Est. 1950 &nbsp;·&nbsp; 75 Years of Excellence
      </span>
      <a
        href={`tel:+91${phone_number}`}
        className="flex items-center gap-1.5 group no-underline"
      >
        <Phone
          size={10}
          className="text-slate-400 group-hover:text-white transition-colors duration-200"
          strokeWidth={2}
        />
        <span className="font-mono text-[0.65rem] text-slate-400 group-hover:text-white transition-colors duration-200 tracking-wider">
          +91 {phone_number}
        </span>
      </a>
    </div>
  </div>
);

// ─── Logo Block ───────────────────────────────────────────────────────────────

const LogoBlock = () => (
  <Link
    to="/"
    className="flex items-center gap-3.5 no-underline group flex-shrink-0"
  >
    {/* Logo badge */}
    <div
      className="
        flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-lg
        bg-slate-900
        flex items-center justify-center
        group-hover:bg-slate-700
        transition-colors duration-200
      "
    >
      {/* Replace with your actual logo/icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="text-white"
      >
        <rect
          x="2"
          y="2"
          width="7"
          height="7"
          rx="1"
          fill="currentColor"
          opacity="0.9"
        />
        <rect
          x="11"
          y="2"
          width="7"
          height="7"
          rx="1"
          fill="currentColor"
          opacity="0.5"
        />
        <rect
          x="2"
          y="11"
          width="7"
          height="7"
          rx="1"
          fill="currentColor"
          opacity="0.5"
        />
        <rect
          x="11"
          y="11"
          width="7"
          height="7"
          rx="1"
          fill="currentColor"
          opacity="0.9"
        />
      </svg>
    </div>

    {/* Text */}
    <div className="flex flex-col">
      <span
        className="
          text-slate-900 font-semibold leading-tight
          group-hover:text-slate-600
          transition-colors duration-200
        "
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
          letterSpacing: "-0.01em",
        }}
      >
        {company_name}
      </span>
      <span className="hidden md:flex items-center gap-1 mt-0.5 text-slate-400">
        <MapPin size={9} strokeWidth={2} className="flex-shrink-0" />
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.63rem",
            letterSpacing: "0.02em",
          }}
        >
          {address.District}, {address.state}
        </span>
      </span>
    </div>
  </Link>
);

// ─── Desktop Nav ──────────────────────────────────────────────────────────────

const DesktopNav = () => {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {NAV_ITEMS.map((item) => {
        const to = item === "Home" ? "/" : `/${item.toLowerCase()}`;
        const active = location.pathname === to;
        return (
          <DesktopNavLink key={item} to={to} active={active}>
            {item}
          </DesktopNavLink>
        );
      })}

      {/* Divider */}
      <div className="w-px h-5 bg-slate-200 mx-3" />

      {/* CTA */}
      <Link
        to="/contact"
        className="
          flex items-center gap-2 no-underline
          px-5 py-2 rounded-lg
          bg-slate-900 text-white
          text-[0.8rem] font-medium tracking-[0.02em]
          hover:bg-slate-700
          transition-colors duration-200
        "
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        Get in touch
        <ArrowRight size={13} strokeWidth={2} />
      </Link>
    </nav>
  );
};

// ─── Desktop NavLink ──────────────────────────────────────────────────────────

const DesktopNavLink = ({
  to,
  children,
  active,
}: {
  to: string;
  children: React.ReactNode;
  active: boolean;
}) => (
  <Link
    to={to}
    className={`
      relative px-4 py-2 rounded-md no-underline
      text-[0.82rem] font-medium tracking-[0.01em]
      transition-all duration-150
      ${
        active
          ? "text-slate-900 bg-slate-100"
          : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
      }
    `}
    style={{ fontFamily: "'Outfit', sans-serif" }}
  >
    {children}
    {active && (
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-slate-900" />
    )}
  </Link>
);

// ─── Mobile Toggle ────────────────────────────────────────────────────────────

const MobileToggle = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="
          flex flex-col items-center justify-center gap-[5px]
          w-10 h-10 rounded-lg
          border border-slate-200 bg-white
          hover:bg-slate-50 hover:border-slate-300
          transition-all duration-150 active:scale-95
        "
        aria-label="Open menu"
      >
        <span className="block w-[18px] h-[1.5px] bg-slate-900 rounded-full" />
        <span className="block w-[18px] h-[1.5px] bg-slate-900 rounded-full" />
        <span className="block w-[11px] h-[1.5px] bg-slate-900 rounded-full self-start ml-[3px]" />
      </button>

      {open && <MobileMenu setOpen={setOpen} />}
    </div>
  );
};

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

const MobileMenu = ({ setOpen }: { setOpen: (v: boolean) => void }) => {
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] flex animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Slide-in panel */}
      <div
        className="
          relative ml-auto w-full max-w-[300px] h-full flex flex-col
          bg-white border-l border-slate-200
          shadow-xl
          animate-slide-in-right
        "
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div>
            <p
              className="text-slate-900 font-semibold leading-tight"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
              }}
            >
              {company_name}
            </p>
            <p className="text-slate-400 text-[0.62rem] tracking-widest uppercase font-mono mt-0.5">
              Est. 1950
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="
              w-8 h-8 rounded-lg flex items-center justify-center
              border border-slate-200
              hover:bg-slate-50 hover:border-slate-300
              transition-all duration-150 active:scale-90
            "
            aria-label="Close menu"
          >
            <X size={14} className="text-slate-500" strokeWidth={2} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-3 overflow-y-auto">
          <ul className="space-y-0.5 list-none p-0 m-0">
            {MOBILE_NAV_ITEMS.map((item, i) => {
              const to = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const active = location.pathname === to;
              return (
                <MobileNavItem
                  key={item}
                  item={item}
                  to={to}
                  active={active}
                  delay={i}
                  setOpen={setOpen}
                />
              );
            })}
          </ul>

          {/* CTA */}
          <div className="mt-3 pt-3 border-t border-slate-100">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="
                flex items-center justify-center gap-2 w-full py-3
                rounded-lg no-underline
                bg-slate-900 text-white
                font-medium text-[0.85rem] tracking-[0.02em]
                hover:bg-slate-700
                active:scale-[0.98] transition-all duration-150
              "
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Get in touch
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </nav>

        {/* Address card */}
        <div className="px-3 pb-5">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-slate-400 text-[0.62rem] tracking-widest uppercase font-mono mb-2">
              Location
            </p>
            <p
              className="text-slate-600 leading-relaxed"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
              }}
            >
              <span className="text-slate-900 font-medium">
                {address.line1}
              </span>
              {", "}
              {address.line2}
              <br />
              {address.District}, {address.state} – {address.pincode}
            </p>
            <a
              href={`tel:+91${phone_number}`}
              className="
                flex items-center gap-1.5 mt-2.5 no-underline
                text-slate-900 hover:text-slate-600
                transition-colors duration-150
              "
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 500,
              }}
            >
              <Phone size={11} strokeWidth={2} />
              +91 {phone_number}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Mobile Nav Item ──────────────────────────────────────────────────────────

const MobileNavItem = ({
  item,
  to,
  active,
  delay,
  setOpen,
}: {
  item: string;
  to: string;
  active: boolean;
  delay: number;
  setOpen: (v: boolean) => void;
}) => (
  <li
    className="animate-slide-up"
    style={{
      animationDelay: `${delay * 0.04 + 0.05}s`,
      animationFillMode: "both",
      opacity: 0,
    }}
  >
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className={`
        flex items-center justify-between px-3 py-3 rounded-lg no-underline
        transition-all duration-150
        ${
          active
            ? "bg-slate-100 text-slate-900"
            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-[3px] h-4 rounded-full transition-all duration-150 ${
            active ? "bg-slate-900" : "bg-slate-200"
          }`}
        />
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.9rem",
            fontWeight: active ? 600 : 400,
            letterSpacing: "0.01em",
          }}
        >
          {item}
        </span>
      </div>
      <ChevronRight
        size={14}
        strokeWidth={1.5}
        className={`transition-all duration-150 ${
          active ? "text-slate-900" : "text-slate-300"
        }`}
      />
    </Link>
  </li>
);

// ─── Global Styles ────────────────────────────────────────────────────────────

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

    @keyframes fadeIn       { from { opacity: 0 } to { opacity: 1 } }
    @keyframes slideUp      { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
    @keyframes slideInRight { from { opacity: 0; transform: translateX(20px) } to { opacity: 1; transform: translateX(0) } }

    .animate-fade-in        { animation: fadeIn 0.2s ease forwards; }
    .animate-slide-up       { animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    .animate-slide-in-right { animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  `}</style>
);
