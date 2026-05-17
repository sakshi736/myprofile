import { Icon } from "@iconify/react"

export interface AboutProps {
  introduction: string
  resumeLink: string
}

const About = (props: AboutProps) => {
  const paragraphs = props.introduction.split("\n\n")

  const highlights = [
    { icon: "uil:react", label: "React · Angular · TypeScript" },
    { icon: "uil:server", label: "Java · Spring Boot · Node.js" },
    { icon: "uil:cloud", label: "AWS · Docker · CI/CD" },
    { icon: "uil:robot", label: "Claude AI · LLM Integration" },
  ]

  return (
    <section id="about" style={{ padding: "6rem 0 4rem", position: "relative" }}>
      {/* Section label */}
      <div style={{ textAlign: "center", marginBottom: "0.75rem" }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#7c6af7",
        }}>
          01. about
        </span>
      </div>

      <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, margin: "0 0 3rem" }}>
        About Me
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="grid-cols-1 md:grid-cols-2">

        {/* Left - text */}
        <div>
          {paragraphs.map((para, i) => (
            <p key={i} style={{
              fontSize: 15, lineHeight: 1.8,
              color: i === 0 ? "rgba(232,230,240,0.8)" : "rgba(232,230,240,0.6)",
              marginBottom: "1.25rem",
            }}>
              {para}
            </p>
          ))}

          <a
            href={props.resumeLink}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 24px", borderRadius: 8, background: "#7c6af7",
              color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none",
              marginTop: "0.5rem", transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            Download Resume
            <Icon icon="uil:file-download-alt" />
          </a>
        </div>

        {/* Right - highlights + AI callout */}
        <div>
          {/* Skill highlights grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: "1.5rem" }}>
            {highlights.map((h, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12, fontSize: 13,
                color: "rgba(232,230,240,0.7)",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(124,106,247,0.3)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
              >
                <Icon icon={h.icon} style={{ color: "#7c6af7", fontSize: 18, flexShrink: 0 }} />
                <span style={{ fontSize: 12, lineHeight: 1.4 }}>{h.label}</span>
              </div>
            ))}
          </div>

          {/* AI Callout card */}
          <div style={{
            background: "linear-gradient(135deg, rgba(124,106,247,0.08), rgba(99,214,196,0.06))",
            border: "1px solid rgba(124,106,247,0.2)",
            borderRadius: 16, padding: "1.5rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.75rem" }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: "rgba(124,106,247,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon icon="uil:robot" style={{ color: "#7c6af7", fontSize: 18 }} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#e8e6f0" }}>AI-Augmented Engineering</div>
                <div style={{ fontSize: 11, color: "rgba(232,230,240,0.4)", fontFamily: "'JetBrains Mono', monospace" }}>Powered by Claude (Anthropic)</div>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(232,230,240,0.6)", margin: 0 }}>
              I actively use Claude to accelerate development — debugging complex logic, scaffolding unit tests, drafting architecture specs, and building AI-powered tools that let non-technical users interact with systems in plain language.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About