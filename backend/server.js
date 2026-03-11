// ============================================================
// server.js — Express backend for AI Project Idea Generator
// ============================================================

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Generate project idea route
app.post("/api/generate", (req, res) => {
  const { skillLevel, techStack, goal } = req.body;

  if (!skillLevel || !techStack || !goal) {
    return res.status(400).json({
      error: "Missing required fields",
    });
  }

  // Dummy AI-style project generator
  const projectIdea = {
    title: "AI Habit Tracker",
    description:
      "A productivity web application that helps users track daily habits and provides AI-style insights to improve consistency and productivity.",

    features: [
      "Daily habit tracking dashboard",
      "Progress analytics with charts",
      "Smart reminders and notifications",
      "Goal setting system",
      "Productivity insights"
    ],

    techStack: techStack,

    roadmap: [
      "Step 1: Build the React frontend UI",
      "Step 2: Create backend API using Node.js and Express",
      "Step 3: Implement habit tracking logic",
      "Step 4: Add analytics dashboard",
      "Step 5: Deploy the application"
    ],

    difficulty: skillLevel,

    improvements: [
      "Add mobile app support",
      "Add AI habit prediction",
      "Add community challenges"
    ]
  };

  res.json(projectIdea);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});