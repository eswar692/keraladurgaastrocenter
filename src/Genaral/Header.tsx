import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { address, company_name, phone_number } from "./secrete";

const Header = () => {
  return (
    <header
      className="w-full "
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
        borderBottom: "1px solid rgba(212,175,55,0.2)",
        boxShadow: "0 4px 40px rgba(212,175,55,0.08)",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #d4af37, #f5e27a, #d4af37, transparent)",
        }}
      />
      <div className="w-full md:w-[92%] mx-auto px-4 py-3 md:py-4">
        <Logo />
      </div>
    </header>
  );
};

export default Header;

const Logo = () => {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">
      {/* Left: Logo + Info */}
      <div className="flex items-center gap-5 md:gap-7">
        {/* Logo with ornate border */}
        <div
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => setImgHovered(false)}
          style={{
            position: "relative",
            width: "68px",
            height: "68px",
            flexShrink: 0,
          }}
        >
          {/* Rotating ring */}
          <div
            style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "50%",
              background:
                "conic-gradient(from 0deg, #d4af37, #f5e27a, #d4af37, #8b6914, #d4af37)",
              animation: "spin 8s linear infinite",
              opacity: imgHovered ? 1 : 0.6,
              transition: "opacity 0.3s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "2px",
              borderRadius: "50%",
              background: "#0a0a0a",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "4px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src="https://i.pinimg.com/1200x/19/6b/2d/196b2d46fb8864dfb588c18655d4a3f1.jpg"
              alt={`${company_name} Logo`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: imgHovered ? "scale(1.12)" : "scale(1)",
                transition: "transform 0.5s ease",
              }}
            />
          </div>
        </div>

        {/* Text block */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {/* Company name */}
          <h1
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: "#fff",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
              textShadow: "0 0 30px rgba(212,175,55,0.3)",
            }}
          >
            {company_name}
          </h1>

          {/* Est. badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                height: "1px",
                width: "24px",
                background: "linear-gradient(90deg, transparent, #d4af37)",
              }}
            />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                fontSize: "0.7rem",
                color: "#d4af37",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontStyle: "italic",
              }}
            >
              Est. 1950
            </span>
            <div
              style={{
                height: "1px",
                width: "24px",
                background: "linear-gradient(90deg, #d4af37, transparent)",
              }}
            />
          </div>

          {/* Address — hidden on very small screens */}
          <p
            style={{
              fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(0.65rem, 1.2vw, 0.78rem)",
              color: "rgba(220,220,220,0.75)",
              marginTop: "4px",
              lineHeight: 1.6,
              maxWidth: "360px",
            }}
            className="hidden sm:block"
          >
            <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
              {address.line1}
            </span>
            {", "}
            {address.line2}
            <br />
            {address.District}, {address.state} – {address.pincode},{" "}
            {address.country}
            <br />
            <span
              style={{
                color: "#d4af37",
                fontWeight: 600,
                letterSpacing: "0.03em",
              }}
            >
              📞 +91 {phone_number}
            </span>
          </p>
        </div>
      </div>

      {/* Right: Menu */}
      <Menu />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Cormorant+Garamond:ital,wght@1,400&family=DM+Sans:wght@400;500&family=Outfit:wght@400;500;600&display=swap');
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Desktop nav */}
      <ul className="hidden lg:flex items-center gap-1">
        {["Home", "About", "Services", "Contact"].map((item, i) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            delay={i * 0.05}
          >
            {item}
          </NavLink>
        ))}

        {/* CTA Button */}
        <li style={{ marginLeft: "16px" }}>
          <Link
            to="/contact"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#0a0a0a",
              background: "linear-gradient(135deg, #d4af37, #f5e27a)",
              padding: "9px 22px",
              borderRadius: "4px",
              textDecoration: "none",
              boxShadow: "0 2px 16px rgba(212,175,55,0.35)",
              transition: "all 0.25s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.boxShadow =
                "0 4px 24px rgba(212,175,55,0.55)";
              (e.target as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.boxShadow =
                "0 2px 16px rgba(212,175,55,0.35)";
              (e.target as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Get in Touch
          </Link>
        </li>
      </ul>

      {/* Mobile menu toggle */}
      <button
        className="lg:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "42px",
          height: "42px",
          borderRadius: "8px",
          border: "1px solid rgba(212,175,55,0.4)",
          background: "rgba(212,175,55,0.08)",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        <MenuIcon size={20} color="#d4af37" strokeWidth={2} />
      </button>

      {open && <MobileMenu setOpen={setOpen} />}
    </div>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
  delay?: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li style={{ listStyle: "none" }}>
      <Link
        to={to}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.88rem",
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: hovered ? "#d4af37" : "rgba(255,255,255,0.8)",
          textDecoration: "none",
          padding: "8px 14px",
          borderRadius: "4px",
          position: "relative",
          transition: "color 0.25s ease",
          display: "block",
        }}
      >
        {children}
        {/* Underline */}
        <span
          style={{
            position: "absolute",
            bottom: "4px",
            left: "14px",
            right: "14px",
            height: "1px",
            background: "linear-gradient(90deg, #d4af37, #f5e27a)",
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.3s ease",
          }}
        />
      </Link>
    </li>
  );
};

const MobileMenu = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background:
          "linear-gradient(160deg, #0a0a0a 0%, #1a1a2e 60%, #0f0f0f 100%)",
        display: "flex",
        flexDirection: "column",
        padding: "28px 24px",
        animation: "slideDown 0.3s ease",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(212,175,55,0.2)",
          paddingBottom: "20px",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#d4af37",
            letterSpacing: "0.05em",
          }}
        >
          {company_name}
        </span>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid rgba(212,175,55,0.3)",
            background: "rgba(212,175,55,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <X size={18} color="#d4af37" />
        </button>
      </div>

      {/* Links */}
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          marginTop: "16px",
          padding: 0,
          listStyle: "none",
        }}
      >
        {["Home", "About", "Services", "Testimonials", "Contact"].map(
          (item, i) => (
            <li key={item} style={{ animationDelay: `${i * 0.06}s` }}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  borderRadius: "8px",
                  border: "1px solid rgba(212,175,55,0.08)",
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.88)",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(212,175,55,0.1)";
                  el.style.color = "#d4af37";
                  el.style.borderColor = "rgba(212,175,55,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.03)";
                  el.style.color = "rgba(255,255,255,0.88)";
                  el.style.borderColor = "rgba(212,175,55,0.08)";
                }}
              >
                {item}
                <span
                  style={{ color: "#d4af37", fontSize: "1.1rem", opacity: 0.6 }}
                >
                  ›
                </span>
              </Link>
            </li>
          ),
        )}
      </ul>

      {/* Bottom address */}
      <div
        style={{
          marginTop: "auto",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid rgba(212,175,55,0.15)",
          background: "rgba(212,175,55,0.04)",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.78rem",
            color: "rgba(220,220,220,0.6)",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {address.line1}, {address.line2}
          <br />
          {address.District}, {address.state} – {address.pincode}
          <br />
          <span style={{ color: "#d4af37", fontWeight: 600 }}>
            📞 +91 {phone_number}
          </span>
        </p>
      </div>
    </div>
  );
};
