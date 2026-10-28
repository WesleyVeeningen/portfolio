// All personal content lives here. Edit this file, reload the page, done.
window.PORTFOLIO = {
  name: "Wesley Veeningen",
  role: "Data Science & AI student",
  location: "Rotterdam, NL",
  // The hero tagline cycles through these with a scramble effect.
  taglines: [
    "turning data into decisions.",
    "building things with AI.",
    "learning by shipping.",
  ],

  links: {
    github: "https://github.com/WesleyVeeningen",
    linkedin: "https://www.linkedin.com/in/wesley-veeningen-5120ab2b6",
    email: "w.veeningen@outlook.com",
  },

  about: [
    "Hi, I'm Wesley, 20, and a first-year Data Science & AI student at Hogeschool Rotterdam. I started out in software development at Grafisch Lyceum Rotterdam and during an internship at .VDMi/, and now I'm moving from building apps to understanding the data behind them.",
    "Most evenings and weekends you'll find me behind the bar at 1NUL8. Hospitality taught me things a classroom doesn't: staying calm when it's busy, reading people quickly and working as one team.",
    "I'm happiest where code meets AI, like StudyBuddy, a tutor that answers questions from your own course material.",
  ],

  // Picked from github.com/WesleyVeeningen. `featured` makes a card span the full row.
  projects: [
    {
      name: "StudyBuddy",
      description:
        "Upload course material and study it with an AI tutor: chat with citations, generated quizzes and spaced-repetition flashcards, in English and Dutch.",
      tech: ["TypeScript", "Next.js", "RAG", "pgvector", "AI SDK"],
      repo: "https://github.com/WesleyVeeningen/studybuddy",
      demo: "https://studybuddy-weld-three.vercel.app",
      year: "2026",
      featured: true,
    },
    {
      name: "Commutable",
      description:
        "Find a home that gives you time back. Add the places you travel to every week (work, school, gym, friends), each with a transport mode and trips per week, and Commutable colours the map by total weekly travel time from every spot. Click anywhere to drop a pin and see that spot's weekly total with a per-place breakdown.",
      tech: ["Python", "Pygame"],
      repo: "https://github.com/WesleyVeeningen/platform-gimma",
      year: "2025",
    },
    {
      name: "Todo CLI",
      description:
        "A terminal todo app with JSON storage, a clean package layout and pytest tests. Small, but built properly.",
      tech: ["Python", "argparse", "pytest"],
      repo: "https://github.com/WesleyVeeningen/Todo-App-Python",
      year: "2026",
    },
    {
      name: "Vrije Opdracht",
      description:
        "A Next.js web app with sign-up, login and a user dashboard, backed by PocketBase and shipped with Docker.",
      tech: ["Next.js", "PocketBase", "Docker"],
      repo: "https://github.com/WesleyVeeningen/vrije-opdracht",
      year: "2024",
    },
    {
      name: "Food Comparer",
      description:
        "Compare food items side by side and see their nutritional values, pulled live from the Spoonacular API.",
      tech: ["Node.js", "Express", "Tailwind"],
      repo: "https://github.com/WesleyVeeningen/Food-Comapairer",
      year: "2024",
    },
  ],

  // Newest first.
  timeline: [
    {
      period: "2026 to now",
      title: "BSc Applied Data Science & AI",
      place: "Hogeschool Rotterdam",
      text: "First year. Statistics, Python, machine learning and working with real datasets.",
      type: "study",
    },
    {
      period: "2025 to 2026",
      title: "BSc Computer Software Engineering",
      place: "Hogeschool Rotterdam",
      text: "One year of software engineering before switching to Data Science & AI.",
      type: "study",
    },
    {
      period: "Aug 2024 to now",
      title: "Bartender",
      place: "1NUL8, Rotterdam",
      text: "Part-time behind the bar. Fast service on busy nights, talking with every kind of guest and keeping the team in sync.",
      type: "work",
    },
    {
      period: "Aug 2024 to Jun 2025",
      title: "Web development intern",
      place: ".VDMi/, Rotterdam",
      text: "Eleven months working on real client websites with a professional dev team.",
      type: "work",
    },
    {
      period: "2022 to 2025",
      title: "Software Development (MBO)",
      place: "Grafisch Lyceum Rotterdam",
      text: "Where it started: HTML, CSS, JavaScript, PHP and Node.js.",
      type: "study",
    },
  ],

  skills: {
    Languages: ["Python", "TypeScript", "JavaScript", "SQL", "PHP", "HTML & CSS"],
    "Data & AI": ["LLM APIs", "RAG & embeddings", "pgvector", "pandas", "NumPy", "Data visualisation"],
    Tools: ["Git", "Next.js", "Node.js", "Tailwind", "PostgreSQL", "Docker", "Vercel"],
  },

  spokenLanguages: "Dutch (native) · English (fluent)",
};
