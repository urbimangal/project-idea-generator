import React, { useState } from "react";

const DIFFICULTY_COLORS = {
  Beginner: { bg: "rgba(0,255,136,0.1)", border: "rgba(0,255,136,0.3)", text: "#00ff88" },
  Intermediate: { bg: "rgba(255,165,0,0.1)", border: "rgba(255,165,0,0.3)", text: "#ffa500" },
  Advanced: { bg: "rgba(255,60,60,0.1)", border: "rgba(255,60,60,0.3)", text: "#ff3c3c" }
};

function Section({ label, children }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <p style={{ fontWeight: "600", marginBottom: "10px" }}>{label}</p>
      {children}
    </div>
  );
}

export default function ProjectCard({ project }) {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const features = project.features || [];
  const roadmap = project.roadmap || [];
  const improvements = project.improvements || [];

  const techStack = Array.isArray(project.techStack)
    ? project.techStack
    : project.techStack
    ? project.techStack.split(",")
    : [];

  const handleCopy = () => {
    const text = `
PROJECT IDEA: ${project.title}

${project.description}

FEATURES:
${features.map((f, i) => `${i + 1}. ${f}`).join("\n")}

TECH STACK:
${techStack.join(", ")}

ROADMAP:
${roadmap.map((r, i) => `${i + 1}. ${r}`).join("\n")}

DIFFICULTY: ${project.difficulty}

IMPROVEMENTS:
${improvements.map((i) => `• ${i}`).join("\n")}
`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const diffColors =
    DIFFICULTY_COLORS[project.difficulty] || DIFFICULTY_COLORS.Intermediate;

  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "12px",
        border: "1px solid #ccc",
        marginTop: "20px",
        background: "#111",
        color: "white"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <span
            style={{
              background: diffColors.bg,
              border: `1px solid ${diffColors.border}`,
              color: diffColors.text,
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "12px"
            }}
          >
            {project.difficulty}
          </span>

          <h2 style={{ marginTop: "10px" }}>{project.title}</h2>
        </div>

        <button onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <p style={{ marginTop: "10px" }}>{project.description}</p>

      <Section label="Features">
        <ul>
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </Section>

      <Section label="Tech Stack">
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {techStack.map((t, i) => (
            <span key={i} style={{ border: "1px solid #444", padding: "4px 8px" }}>
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section label="Roadmap">
        <ol>
          {roadmap.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ol>
      </Section>

      {improvements.length > 0 && (
        <Section label="Future Improvements">
          <ul>
            {improvements.map((imp, i) => (
              <li key={i}>{imp}</li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}