# ⚡ Project Idea Generator for Developers

> Generate personalized, resume-worthy software project ideas using AI — based on your skill level, tech stack, and goals.

---

## 📁 Project Structure

```
ai-project-generator/
│
├── backend/                     # Node.js + Express API
│   ├── server.js                # Main server file
│   └── package.json             # Backend dependencies
│
├── frontend/                    # React + Tailwind CSS UI
│   ├── public/
│   │   └── index.html           # HTML entry point
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx       # Page header / hero section
│   │   │   ├── InputForm.jsx    # Form: skill level, tech, goal
│   │   │   └── ProjectCard.jsx  # Displays the generated idea
│   │   ├── App.jsx              # Root component + state management
│   │   ├── index.js             # React entry point
│   │   └── index.css            # Global styles + Tailwind
│   ├── tailwind.config.js       # Tailwind configuration
│   └── package.json             # Frontend dependencies
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone or download the project

```bash
cd ai-project-generator
```

### 2. Start the Backend

```bash
cd backend
npm install
npm start
# ✅ Backend runs on http://localhost:3001
```

### 3. Start the Frontend

Open a **new terminal window**:

```bash
cd frontend
npm install
npm start
# ✅ Frontend runs on http://localhost:3000
```

### 4. Open the App

Visit **http://localhost:3000** in your browser.

---

## 🔑 How the API Key Works

The Anthropic API key is **injected automatically** by the proxy layer — you don't need to add it manually to any file.

If you're running this outside the hosted environment, add your key to the backend `server.js`:

```js
headers: {
  "Content-Type": "application/json",
  "x-api-key": "sk-ant-YOUR_KEY_HERE",
  "anthropic-version": "2023-06-01",
},
```

---

## 🛠 Tech Stack

| Layer    | Technology              |
|----------|-------------------------|
| Frontend | React 18, Tailwind CSS  |
| Backend  | Node.js, Express        |
| AI       | Anthropic Claude API    |
| Fonts    | Syne, Space Mono        |

---

## ✨ Features

- 🎯 **3-step input form** — skill level, tech stack, goal
- ⚡ **AI-generated ideas** — unique, tailored to your profile
- 📋 **Structured output** — title, description, features, roadmap
- 📋 **Copy to clipboard** — one-click export of your idea
- 🎨 **Dark terminal UI** — professional dev-tool aesthetic
- 📱 **Responsive** — works on mobile and desktop

---

## 🧩 How It Works

1. User fills out the form (skill level + tech stack + goal)
2. Frontend sends a POST request to `/api/generate`
3. Backend builds a structured prompt and calls the Claude API
4. Claude returns a JSON object with the full project idea
5. Frontend renders the idea in a styled `ProjectCard`

---

## 📦 Available Scripts

### Backend
| Command       | Description              |
|---------------|--------------------------|
| `npm start`   | Start the Express server |
| `npm run dev` | Start with nodemon (auto-reload) |

### Frontend
| Command      | Description                |
|--------------|----------------------------|
| `npm start`  | Start React dev server     |
| `npm build`  | Build for production       |
