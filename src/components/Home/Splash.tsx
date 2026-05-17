import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Icon } from "@iconify/react"
import Typed from "typed.js"

export interface SplashProps {
  name: string
  profession: string[]
  professionSuffix: string
  subtitle: string
  coverImgLink: string
  social: { icon: string; href: string; name: string }[]
}

const Splash = (props: SplashProps) => {
  const typedRef = useRef<any>(null)
  const typedInst = useRef<any>(null)
  const [termLines, setTermLines] = useState<string[]>([])

  useEffect(() => {
    typedInst.current = new Typed(typedRef.current, {
      strings: props.profession,
      smartBackspace: true,
      startDelay: 800,
      typeSpeed: 100,
      backDelay: 1200,
      backSpeed: 50,
      loop: true,
    })
    return () => typedInst.current.destroy()
  }, [props.profession])

  // Terminal animation
  useEffect(() => {
    const lines = [
      "$ whoami",
      "> Sakshi Raut — Full Stack Developer",
      "$ skills --list",
      "> React · TypeScript · Java · AWS · Docker",
      "$ ai --tools",
      "> Claude (Anthropic) · LLM Integration · Prompt Engineering",
      "$ status",
      "> Open to opportunities ✓",
    ]
    let i = 0
    const id = setInterval(() => {
      if (i < lines.length) {
        setTermLines(prev => [...prev, lines[i]])
        i++
      } else {
        clearInterval(id)
      }
    }, 600)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `linear-gradient(rgba(124,106,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,106,247,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orb */}
      <div style={{
        position: "absolute", top: "20%", right: "10%", width: 400, height: 400,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(124,106,247,0.12) 0%, transparent 70%)",
        zIndex: 0, pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="grid-cols-1 md:grid-cols-2">

          {/* Left */}
          <div style={{ animation: "fadeUp 0.7s ease forwards" }}>
            {/* AI badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "1.5rem",
              padding: "6px 14px", borderRadius: 20,
              background: "linear-gradient(90deg, rgba(124,106,247,0.12), rgba(99,214,196,0.12))",
              border: "1px solid rgba(124,106,247,0.25)",
              fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#c4bfff",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#63d6c4", boxShadow: "0 0 6px #63d6c4", flexShrink: 0 }} />
              AI-Augmented Developer · Claude + Code
            </div>

            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 1rem" }}>
              Hi, I{"'"}m{" "}
              <span style={{
                background: "linear-gradient(90deg, #e8e6f0, #7c6af7, #63d6c4)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 4s linear infinite",
              }}>
                {props.name}
              </span>
            </h1>

            <h2 style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: "rgba(232,230,240,0.5)", fontWeight: 400, margin: "0 0 1.5rem", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              I am{" "}
              <span style={{ color: "#7c6af7", fontWeight: 600 }}>
                <span ref={typedRef} />
              </span>{" "}
              {props.professionSuffix}
            </h2>

            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(232,230,240,0.6)", margin: "0 0 2rem", maxWidth: 480 }}>
              {props.subtitle}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", borderRadius: 8, background: "#7c6af7",
                color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                Contact Me <Icon icon="uil:message" />
              </a>
              <a href="assets/pdf/Sakshi_Raut_Resume_Akamai.pdf" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "11px 23px", borderRadius: 8,
                color: "#e8e6f0", fontSize: 14, fontWeight: 500, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)", transition: "border-color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(124,106,247,0.4)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"}
              >
                Resume <Icon icon="uil:file-download-alt" />
              </a>
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: "1rem" }}>
              {props.social.map((s, i) => (
                <Link key={i} href={s.href}>
                  <a target="_blank" aria-label={s.name} style={{
                    width: 38, height: 38, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.1)", color: "rgba(232,230,240,0.5)", fontSize: 18,
                    textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,106,247,0.4)"; e.currentTarget.style.color = "#7c6af7" }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(232,230,240,0.5)" }}
                  >
                    <Icon icon={s.icon} />
                  </a>
                </Link>
              ))}
            </div>
          </div>

          {/* Right — Terminal */}
          <div style={{ animation: "fadeUp 0.9s ease forwards" }} className="hidden md:block">
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(124,106,247,0.2)",
              borderRadius: 16,
              overflow: "hidden",
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              {/* Terminal header */}
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "12px 16px",
                background: "rgba(255,255,255,0.04)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                <span style={{ marginLeft: 8, fontSize: 11, color: "rgba(232,230,240,0.3)" }}>sakshi@portfolio:~</span>
              </div>

              {/* Terminal body */}
              <div style={{ padding: "1.5rem", minHeight: 280 }}>
                {termLines.filter(Boolean).map((line, i) => (
                  <div key={i} style={{
                    fontSize: 13, lineHeight: 1.8,
                    color: line[0] === "$" ? "#63d6c4" : line[0] === ">" ? "rgba(232,230,240,0.7)" : "#e8e6f0",
                    animation: "fadeUp 0.3s ease",
                  }}>
                    {line}
                  </div>
                ))}
                {termLines.length < 8 && (
                  <span style={{ fontSize: 13, color: "#63d6c4" }}>
                    {"█"}
                  </span>
                )}
              </div>
            </div>

            {/* Stats below terminal */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 16 }}>
              {[
                { label: "Years exp.", value: "3+" },
                { label: "Projects shipped", value: "12+" },
                { label: "AI tools daily", value: "Claude" },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 10, padding: "14px 16px", textAlign: "center",
                }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#7c6af7", fontFamily: "'JetBrains Mono', monospace" }}>{stat.value}</div>
                  <div style={{ fontSize: 11, color: "rgba(232,230,240,0.4)", marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
      }}>
        <a href="#about" style={{ color: "rgba(232,230,240,0.3)", textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em" }}>SCROLL</span>
          <Icon icon="uil:arrow-down" style={{ fontSize: 18, animation: "float 2s ease-in-out infinite" }} />
        </a>
      </div>
    </section>
  )
}
export default Splash