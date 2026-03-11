import React from "react";

export default function Header() {
  return (
    <header className="text-center py-16 px-4 relative">
      {/* Decorative background glow */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(0,255,136,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Label chip */}
      <div
        className="inline-flex items-center gap-2 px-4 py-1 rounded-full mb-6"
        style={{
          background: "rgba(0, 255, 136, 0.08)",
          border: "1px solid rgba(0, 255, 136, 0.2)",
          fontFamily: "Space Mono, monospace",
          fontSize: "0.7rem",
          color: "var(--accent)",
          letterSpacing: "0.1em",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--accent)",
            display: "inline-block",
            animation: "pulse-glow 2s ease-in-out infinite",
          }}
        />
        AI-POWERED · DEVELOPER TOOL
      </div>

      {/* Main heading */}
      <h1
        className="text-5xl font-extrabold mb-4 leading-tight"
        style={{
          fontFamily: "Syne, sans-serif",
          background: "linear-gradient(135deg, #e8e8f0 0%, #00ff88 50%, #ff6b35 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Project Idea
        <br />
        Generator
      </h1>

      {/* Subtitle */}
      <p
        className="text-lg max-w-lg mx-auto"
        style={{
          color: "var(--muted)",
          fontFamily: "Syne, sans-serif",
          fontWeight: 400,
          lineHeight: 1.7,
        }}
      >
        Generate impressive, resume-worthy project ideas tailored to your
        skill level and tech stack — powered by AI.
      </p>

      {/* Stats row */}
      <div className="flex justify-center gap-8 mt-8">
        {[
          { number: "∞", label: "Unique Ideas" },
          { number: "1-3", label: "Weeks to Build" },
          { number: "100%", label: "AI Generated" },
        ].map(({ number, label }) => (
          <div key={label} className="text-center">
            <p
              className="text-2xl font-bold"
              style={{ color: "var(--accent)", fontFamily: "Space Mono, monospace" }}
            >
              {number}
            </p>
            <p
              className="text-xs"
              style={{ color: "var(--muted)", fontFamily: "Space Mono, monospace", marginTop: "2px" }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
}
