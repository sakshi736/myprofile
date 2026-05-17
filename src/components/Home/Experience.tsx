import { Icon } from "@iconify/react"
import { ExperienceListProps } from "./Experience/ExperienceList"

export interface ExperienceProps {
  Experiencelists: ExperienceListProps[]
}

const Experience = (props: ExperienceProps) => {
  return (
    <section id="experience" style={{ padding: "5rem 0" }}>
      <div style={{ textAlign: "center", marginBottom: "0.75rem" }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#7c6af7",
        }}>
          04. experience
        </span>
      </div>
      <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, margin: "0 0 3.5rem" }}>
        Work Experience
      </h2>

      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute", left: 0, top: 12, bottom: 0,
          width: 1,
          background: "linear-gradient(to bottom, #7c6af7, transparent)",
        }} className="hidden md:block" />

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {props.Experiencelists.map((exp, i) => {
            const isAI = exp.companyName.toLowerCase().includes("ai") || i === 0 || i === 1
            return (
              <div key={i} style={{ display: "flex", gap: "2rem", paddingLeft: 0 }} className="md:pl-10">
                {/* Dot */}
                <div style={{
                  position: "absolute", left: -5, marginTop: 4,
                  width: 10, height: 10, borderRadius: "50%",
                  background: "#7c6af7",
                  border: "2px solid #0a0a0f",
                  boxShadow: "0 0 0 2px #7c6af7",
                  flexShrink: 0,
                }} className="hidden md:block" />

                <div style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16, padding: "1.5rem",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(124,106,247,0.25)"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" as const, gap: 8, marginBottom: "1rem" }}>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 4px", color: "#e8e6f0" }}>
                        {exp.title}
                      </h3>
                      <div style={{ fontSize: 12, color: "rgba(232,230,240,0.4)", fontFamily: "'JetBrains Mono', monospace" }}>
                        {exp.companyName}
                      </div>
                    </div>
                    {isAI && (
                      <div style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "4px 10px", borderRadius: 20,
                        background: "linear-gradient(90deg, rgba(124,106,247,0.15), rgba(99,214,196,0.15))",
                        border: "1px solid rgba(124,106,247,0.25)",
                        fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#c4bfff",
                        flexShrink: 0,
                      }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#63d6c4", boxShadow: "0 0 4px #63d6c4" }} />
                        AI-augmented
                      </div>
                    )}
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {exp.Workexperience.map((point, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{
                          width: 5, height: 5, borderRadius: "50%", background: "#7c6af7",
                          marginTop: 8, flexShrink: 0,
                        }} />
                        <span style={{
                          fontSize: 13, lineHeight: 1.65,
                          color: point.details.toLowerCase().includes("claude") || point.details.toLowerCase().includes("ai-")
                            ? "rgba(196,191,255,0.9)"
                            : "rgba(232,230,240,0.6)",
                        }}>
                          {point.details}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Experience