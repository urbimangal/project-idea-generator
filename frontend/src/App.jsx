// ============================================================
// App.jsx — Root component
// ============================================================

import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = async ({ skillLevel, techStack, goal }) => {
    setIsLoading(true);
    setError(null);
    setProject(null);
    setHasGenerated(true);

    try {
      // IMPORTANT: Call backend on port 3001
      const response = await fetch("http://localhost:3001/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          skillLevel,
          techStack,
          goal
        })
      });

      if (!response.ok) {
        throw new Error("Server error. Please try again.");
      }

      const data = await response.json();
      setProject(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f7f6f3" }}>
      
      {/* Navbar */}
      <nav
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h2 style={{ fontWeight: "600" }}>⚡ IdeaForge</h2>
        <span style={{ fontSize: "12px", color: "#16a34a" }}>
          Powered by AI
        </span>
      </nav>

      {/* Main */}
      <main
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
          padding: "0 20px"
        }}
      >
        <InputForm onGenerate={handleGenerate} isLoading={isLoading} />

        <div style={{ marginTop: "30px" }}>
          {isLoading && <p>Generating idea...</p>}

          {error && (
            <p style={{ color: "red" }}>
              Generation Failed: {error}
            </p>
          )}

          {project && <ProjectCard project={project} />}
        </div>
      </main>
    </div>
  );
}