import Link from "next/link"
import { Icon } from "@iconify/react"

export interface FooterProps {
  name: string
  subtitle: string
  links: { link: string; title: string }[]
  social: { link: string; icon: string; name: string }[]
}

const Footer = (props: FooterProps) => {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "3rem 2rem",
      marginTop: "4rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "3rem", alignItems: "center", flexWrap: "wrap" as const, marginBottom: "2rem" }} className="grid-cols-1 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16, color: "#e8e6f0", marginBottom: 6 }}>
              <span style={{ color: "#7c6af7" }}>{"<"}</span>
              {props.name}
              <span style={{ color: "#7c6af7" }}>{"/>"}</span>
            </div>
            <div style={{ fontSize: 12, color: "rgba(232,230,240,0.35)", fontFamily: "'JetBrains Mono', monospace" }}>
              {props.subtitle}
            </div>
            <div style={{ marginTop: 8, display: "inline-flex", alignItems: "center", gap: 6,
              padding: "4px 10px", borderRadius: 20,
              background: "linear-gradient(90deg, rgba(124,106,247,0.12), rgba(99,214,196,0.12))",
              border: "1px solid rgba(124,106,247,0.2)",
              fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#c4bfff",
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#63d6c4", boxShadow: "0 0 4px #63d6c4" }} />
              AI-Augmented · Claude (Anthropic)
            </div>
          </div>

          {/* Links */}
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "1.5rem" }}>
            {props.links.map((link, i) => (
              <li key={i}>
                <a href={link.link} style={{
                  fontSize: 13, color: "rgba(232,230,240,0.4)", textDecoration: "none",
                  fontFamily: "'JetBrains Mono', monospace", transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#e8e6f0"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(232,230,240,0.4)"}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Social */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {props.social.map((s, i) => (
              <Link key={i} href={s.link}>
                <a target="_blank" aria-label={s.name} style={{
                  width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.08)", color: "rgba(232,230,240,0.4)", fontSize: 16,
                  textDecoration: "none", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,106,247,0.4)"; e.currentTarget.style.color = "#7c6af7" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(232,230,240,0.4)" }}
                >
                  <Icon icon={s.icon} />
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", textAlign: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(232,230,240,0.25)", fontFamily: "'JetBrains Mono', monospace" }}>
            © {props.name} · Built with Next.js + Tailwind CSS · AI-assisted with Claude
          </span>
        </div>
      </div>
    </footer>
  )
}
export default Footer