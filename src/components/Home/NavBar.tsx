import Link from "next/link"
import { Icon } from "@iconify/react"
import { useState, useEffect } from "react"

export interface NavBarDataProps {
  title: string
  links: { name: string; href: string; icon: string }[]
}

interface NavBarProps extends NavBarDataProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const NavBar = (props: NavBarProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s",
        background: scrolled
          ? "rgba(10,10,15,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(124,106,247,0.15)" : "1px solid transparent",
      }}
    >
      <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", height: 64, display: "flex", alignItems: "center", gap: "2rem" }}>
        {/* Logo */}
        <Link href="/">
          <a style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: "#e8e6f0", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#7c6af7" }}>{"<"}</span>
            {props.title}
            <span style={{ color: "#7c6af7" }}>{"/>"}</span>
          </a>
        </Link>

        {/* Desktop Links */}
        <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: "0 0 0 auto", padding: 0 }} className="hidden md:flex">
          {props.links.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <a style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: "rgba(232,230,240,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#e8e6f0")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(232,230,240,0.5)")}
                >
                  <span style={{ color: "#7c6af7" }}>0{i + 1}. </span>
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href="assets/pdf/Sakshi_Raut_Resume_Akamai.pdf"
          className="hidden md:flex"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            padding: "6px 16px",
            border: "1px solid rgba(124,106,247,0.4)",
            borderRadius: 6,
            color: "#7c6af7",
            textDecoration: "none",
            transition: "all 0.2s",
            letterSpacing: "0.05em",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(124,106,247,0.12)"
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent"
          }}
        >
          Resume ↗
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMobileOpen(p => !p)}
          style={{ background: "none", border: "none", color: "#e8e6f0", fontSize: 22, cursor: "pointer" }}
          aria-label="Toggle mobile menu"
        >
          <Icon icon={mobileOpen ? "uil:times" : "uil:bars"} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ background: "rgba(10,10,15,0.97)", borderTop: "1px solid rgba(124,106,247,0.15)", padding: "1.5rem 2rem" }}>
          {props.links.map((link, i) => (
            <div key={i} style={{ marginBottom: "1rem" }}>
              <Link href={link.href}>
                <a
                  onClick={() => setMobileOpen(false)}
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: "rgba(232,230,240,0.7)", textDecoration: "none" }}
                >
                  <span style={{ color: "#7c6af7" }}>0{i + 1}. </span>{link.name}
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
export default NavBar