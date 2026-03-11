import React, { useState } from "react";

const SKILL_LEVELS = [
  { value: "Beginner",     label: "Beginner",     desc: "0–1 yr",     emoji: "🌱" },
  { value: "Intermediate", label: "Intermediate", desc: "1–3 yrs",    emoji: "🔥" },
  { value: "Advanced",     label: "Advanced",     desc: "3+ yrs",     emoji: "⚡" },
];

const TECH_OPTIONS = [
  "React", "Next.js", "Vue.js", "Angular",
  "Node.js", "Express", "Python", "FastAPI",
  "Django", "Flask", "TypeScript", "GraphQL",
  "PostgreSQL", "MongoDB", "Redis", "Docker",
  "AWS", "Firebase", "AI/ML", "OpenAI API",
  "TailwindCSS", "Three.js",
];

const GOALS = [
  { value: "portfolio",  label: "Portfolio",      desc: "Impress recruiters",   emoji: "💼" },
  { value: "internship", label: "Internship Prep", desc: "Land your first role", emoji: "🎓" },
  { value: "hackathon",  label: "Hackathon",       desc: "Win the weekend",      emoji: "🏆" },
  { value: "startup",    label: "Startup MVP",     desc: "Validate your idea",   emoji: "🚀" },
];

function StepLabel({ number, title, complete }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      <div style={{
        width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "0.72rem", fontWeight: 700,
        background: complete ? "#16a34a" : "#f3f4f6",
        color: complete ? "#fff" : "#9ca3af",
        border: complete ? "none" : "1.5px solid #e5e7eb",
        transition: "all 0.2s ease",
      }}>
        {complete ? "✓" : number}
      </div>
      <span style={{ fontWeight: 600, fontSize: "0.85rem", color: "#374151",
        letterSpacing: "0.01em" }}>
        {title}
      </span>
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "#f3f4f6", margin: "24px 0" }} />;
}

export default function InputForm({ onGenerate, isLoading }) {
  const [skillLevel,    setSkillLevel]    = useState("");
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [goal,          setGoal]          = useState("");

  const toggleTech = (tech) =>
    setSelectedTechs(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );

  const handleSubmit = () => {
    if (!skillLevel || selectedTechs.length === 0 || !goal) return;
    onGenerate({ skillLevel, techStack: selectedTechs.join(", "), goal });
  };

  const stepsComplete = [!!skillLevel, selectedTechs.length > 0, !!goal];
  const allComplete   = stepsComplete.every(Boolean);

  const progress = (stepsComplete.filter(Boolean).length / 3) * 100;

  return (
    <div className="fade-up" style={{
      background: "#ffffff",
      borderRadius: 20,
      border: "1px solid #e5e7eb",
      boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
      overflow: "hidden",
    }}>

      {/* ── Card Header ───────────────────────────────────── */}
      <div style={{ padding: "24px 28px 20px", borderBottom: "1px solid #f3f4f6" }}>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.45rem",
          fontWeight: 400, color: "#0f172a", marginBottom: 4 }}>
          Configure your idea
        </h2>
        <p style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 400 }}>
          3 quick steps — takes under a minute
        </p>

        {/* Progress bar */}
        <div style={{ marginTop: 16, height: 4, borderRadius: 999,
          background: "#f3f4f6", overflow: "hidden" }}>
          <div style={{
            height: "100%", borderRadius: 999,
            background: "linear-gradient(90deg, #16a34a, #34d399)",
            width: `${progress}%`,
            transition: "width 0.4s cubic-bezier(0.22,1,0.36,1)",
          }} />
        </div>
        <p style={{ fontSize: "0.7rem", color: "#9ca3af", marginTop: 6, textAlign: "right" }}>
          {stepsComplete.filter(Boolean).length} of 3 complete
        </p>
      </div>

      {/* ── Form Body ─────────────────────────────────────── */}
      <div style={{ padding: "24px 28px 28px" }}>

        {/* Step 1: Skill Level */}
        <StepLabel number="1" title="Your Skill Level" complete={stepsComplete[0]} />
        <div style={{ display: "flex", gap: 10 }}>
          {SKILL_LEVELS.map(({ value, label, desc, emoji }) => {
            const active = skillLevel === value;
            return (
              <button
                key={value}
                onClick={() => setSkillLevel(value)}
                style={{
                  flex: 1, padding: "12px 8px", borderRadius: 12,
                  cursor: "pointer", textAlign: "center",
                  border: active ? "1.5px solid #16a34a" : "1.5px solid #e5e7eb",
                  background: active ? "#f0fdf4" : "#fafafa",
                  transition: "all 0.18s ease",
                  outline: "none",
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = "#86efac"; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = "#e5e7eb"; }}
              >
                <span style={{ display: "block", fontSize: "1.2rem", marginBottom: 4 }}>{emoji}</span>
                <span style={{ display: "block", fontSize: "0.82rem", fontWeight: 600,
                  color: active ? "#15803d" : "#374151" }}>{label}</span>
                <span style={{ display: "block", fontSize: "0.7rem", color: "#9ca3af",
                  marginTop: 2 }}>{desc}</span>
              </button>
            );
          })}
        </div>

        <Divider />

        {/* Step 2: Tech Stack */}
        <StepLabel number="2" title="Your Tech Stack" complete={stepsComplete[1]} />
        <p style={{ fontSize: "0.78rem", color: "#9ca3af", marginBottom: 12, marginTop: -6 }}>
          Pick everything you're comfortable with
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {TECH_OPTIONS.map(tech => {
            const sel = selectedTechs.includes(tech);
            return (
              <button
                key={tech}
                onClick={() => toggleTech(tech)}
                style={{
                  padding: "5px 12px", borderRadius: 999, cursor: "pointer",
                  fontSize: "0.78rem", fontWeight: 500, outline: "none",
                  border: sel ? "1.5px solid #16a34a" : "1.5px solid #e5e7eb",
                  background: sel ? "#f0fdf4" : "#fafafa",
                  color: sel ? "#15803d" : "#6b7280",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={e => { if (!sel) { e.currentTarget.style.borderColor = "#d1fae5"; e.currentTarget.style.color = "#374151"; }}}
                onMouseLeave={e => { if (!sel) { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#6b7280"; }}}
              >
                {sel && <span style={{ marginRight: 4 }}>✓</span>}
                {tech}
              </button>
            );
          })}
        </div>
        {selectedTechs.length > 0 && (
          <p style={{ fontSize: "0.72rem", color: "#16a34a", marginTop: 10, fontWeight: 600 }}>
            {selectedTechs.length} selected
          </p>
        )}

        <Divider />

        {/* Step 3: Goal */}
        <StepLabel number="3" title="Your Goal" complete={stepsComplete[2]} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {GOALS.map(({ value, label, desc, emoji }) => {
            const active = goal === value;
            return (
              <button
                key={value}
                onClick={() => setGoal(value)}
                style={{
                  padding: "14px 12px", borderRadius: 12, textAlign: "left",
                  cursor: "pointer", outline: "none",
                  border: active ? "1.5px solid #16a34a" : "1.5px solid #e5e7eb",
                  background: active ? "#f0fdf4" : "#fafafa",
                  transition: "all 0.18s ease",
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = "#86efac"; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = "#e5e7eb"; }}
              >
                <span style={{ display: "block", fontSize: "1.1rem", marginBottom: 5 }}>{emoji}</span>
                <span style={{ display: "block", fontSize: "0.82rem", fontWeight: 600,
                  color: active ? "#15803d" : "#374151", marginBottom: 2 }}>{label}</span>
                <span style={{ display: "block", fontSize: "0.7rem", color: "#9ca3af" }}>{desc}</span>
              </button>
            );
          })}
        </div>

        {/* ── Generate Button ──────────────────────────────── */}
        <button
          onClick={handleSubmit}
          disabled={!allComplete || isLoading}
          style={{
            marginTop: 28, width: "100%", padding: "14px 20px",
            borderRadius: 12, border: "none", cursor: allComplete && !isLoading ? "pointer" : "not-allowed",
            fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.01em",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            transition: "all 0.2s ease",
            background: allComplete && !isLoading
              ? "linear-gradient(135deg, #16a34a 0%, #059669 100%)"
              : "#f3f4f6",
            color: allComplete && !isLoading ? "#fff" : "#9ca3af",
            boxShadow: allComplete && !isLoading
              ? "0 4px 14px rgba(22,163,74,0.3)"
              : "none",
          }}
          onMouseEnter={e => {
            if (allComplete && !isLoading) {
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(22,163,74,0.4)";
              e.currentTarget.style.transform  = "translateY(-1px)";
            }
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = allComplete && !isLoading
              ? "0 4px 14px rgba(22,163,74,0.3)" : "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {isLoading ? (
            <>
              <span className="spinner" style={{ borderColor: "rgba(255,255,255,0.3)", borderTopColor: "#fff" }} />
              Generating your idea…
            </>
          ) : (
            <>⚡ Generate Project Idea</>
          )}
        </button>

        {!allComplete && !isLoading && (
          <p style={{ textAlign: "center", marginTop: 10, fontSize: "0.75rem", color: "#9ca3af" }}>
            Complete all 3 steps above to continue
          </p>
        )}
      </div>
    </div>
  );
}
