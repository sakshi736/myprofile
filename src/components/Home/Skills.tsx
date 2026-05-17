import { Icon } from "@iconify/react"
import { SkillItemProps } from "./Skills/SkillItem"

export interface SkillListProps {
  icon: string
  title: string
  subtitle: string
  skills: SkillItemProps[]
}

export interface SkillsProps {
  skillLists: SkillListProps[]
}

const Skills = (props: SkillsProps) => {
  return (
    <section id="skills" style={{ padding: "5rem 0" }}>
      <div style={{ textAlign: "center", marginBottom: "0.75rem" }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#7c6af7",
        }}>02. skills</span>
      </div>
      <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, margin: "0 0 0.75rem" }}>
        Technical Skills
      </h2>
      <p style={{ textAlign: "center", color: "rgba(232,230,240,0.4)", marginBottom: "3rem", fontSize: 14 }}>
        Tools and technologies I work with daily
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
        {props.skillLists.map((list, i) => {
          const isAI = list.title.toLowerCase().includes("ai") || list.title.toLowerCase().includes("claude")
          return (
            <div key={i} style={{
              background: isAI
                ? "linear-gradient(135deg, rgba(124,106,247,0.08), rgba(99,214,196,0.05))"
                : "rgba(255,255,255,0.02)",
              border: isAI ? "1px solid rgba(124,106,247,0.25)" : "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16, padding: "1.5rem",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,106,247,0.3)"; e.currentTarget.style.transform = "translateY(-3px)" }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = isAI ? "rgba(124,106,247,0.25)" : "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)" }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.25rem" }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                  background: isAI ? "rgba(124,106,247,0.2)" : "rgba(255,255,255,0.06)",
                }}>
                  <Icon icon={list.icon} style={{ color: "#7c6af7", fontSize: 18 }} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#e8e6f0", display: "flex", alignItems: "center", gap: 6 }}>
                    {list.title}
                    {isAI && (
                      <span style={{
                        fontSize: 9, padding: "2px 6px", borderRadius: 10,
                        background: "rgba(99,214,196,0.15)", color: "#63d6c4",
                        fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em",
                      }}>NEW</span>
                    )}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(232,230,240,0.35)" }}>{list.subtitle}</div>
                </div>
              </div>

              {/* Skills list */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {list.skills.map((skill, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Icon icon={skill.icon} style={{ fontSize: 20, flexShrink: 0, width: 24 }} />
                    <span style={{ fontSize: 13, color: "rgba(232,230,240,0.7)", flex: 1 }}>{skill.title}</span>
                    <div style={{ width: 60, height: 2, borderRadius: 2, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                      <div style={{
                        height: "100%", borderRadius: 2,
                        background: "linear-gradient(90deg, #7c6af7, #63d6c4)",
                        width: `${70 + (j % 3) * 10}%`,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Skills