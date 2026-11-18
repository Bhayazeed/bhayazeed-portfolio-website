/* =========================================================
   CONTENT — edit this file to update your portfolio.
   You never need to touch index.html or main.js for content.

   Tips:
   - To add a project/experience: copy one { ... } block,
     paste it, and change the text. Mind the commas.
   - Leave a field as "" (empty) or [] to hide it.
   ========================================================= */

window.CONTENT = {
  profile: {
    name: "M. Bhayaziid Amalin",
    role: "Software & AI Engineer",
    focus: "AI-powered backends · RAG & LLM systems · Speech recognition",
    location: "Pekanbaru, Riau, Indonesia",
    availability: "Open to entry-level roles across Indonesia",
    summary:
      "Informatics Engineering graduate (Cum Laude) and Bangkit Academy Distinction Graduate. " +
      "I build AI-powered backend systems — RAG chatbots, LLM pipelines, and speech recognition " +
      "for low-resource languages — and ship them as APIs and working apps. " +
      "Currently a Research Implementation Assistant at Tensaitech.",
    photo: "photo.jpg", // put your photo in this folder with this name. Hidden automatically if missing.
  },

  // Three facts a recruiter should remember after 10 seconds.
  highlights: [
    { value: "3.88 / 4.00", label: "GPA · Cum Laude, Universitas Islam Riau" },
    { value: "3rd Place", label: "AIICS 2026 · JARVIS PESISIR" },
    { value: "100% Recall@5", label: "RAG chatbot over 94 BPS Riau publications" },
  ],

  links: {
    cv: "CV_M_Bhayaziid_Amalin.pdf", // must match the PDF file name in this folder
    email: "mbhayaziidamalin@gmail.com",
    github: "https://github.com/Bhayazeed",
    linkedin: "https://www.linkedin.com/in/m-bhayaziid-amalin-b8839a2a0",
  },

  experience: [
    {
      title: "Research Implementation Assistant",
      org: "Tensaitech",
      place: "Pekanbaru · Full-time, On-site",
      period: "Jun 2026 – Present",
      points: [
        "Implemented methods and ran experiments for 2 submitted research papers on LLM-based decision models, benchmarking new methods against established baselines.",
        "Built LLM experiment pipelines with LangChain and LangGraph, evaluating open-weight models including Gemma and Llama.",
        "Turned research ideas into working prototypes and demo applications, and produced custom visualizations of experimental results for the papers.",
      ],
      tags: ["LLMs", "LangChain", "LangGraph", "Gemma", "Llama", "Python"],
      link: null,
    },
    {
      title: "Laboratory Teaching Assistant",
      org: "Informatics Engineering, Universitas Islam Riau",
      place: "Pekanbaru",
      period: "Feb 2025 – Present",
      points: [
        "Taught 10 practicum classes of 30–40 students each (350+ students in total) across six courses: Database Systems II (SQL), Design & Analysis of Algorithms (Python), Probability & Statistics, Operating Systems, Graph Databases, and Machine Translation.",
        "Guided students through hands-on exercises, graded assignments, and helped them debug their code and queries.",
      ],
      tags: ["SQL", "Python", "Algorithms", "Teaching"],
      link: null,
    },
    {
      title: "AI & Software Development Intern",
      org: "Badan Pusat Statistik (BPS) Provinsi Riau",
      place: "Pekanbaru",
      period: "Jul 2025 – Sep 2025",
      points: [
        "Built a full-stack AI chatbot that turns 94 official BPS Riau statistical publications into a searchable knowledge base using Retrieval-Augmented Generation (RAG).",
        "Added a reranking layer and evaluated retrieval on 100 manually verified questions, reaching 100% Recall@5.",
        "Served the pipeline through a FastAPI REST API and built a Vue.js interface with an admin dashboard.",
      ],
      tags: ["RAG", "FastAPI", "Vue.js", "FAISS"],
      link: null,
    },
    {
      title: "Head of Research & Technology Division",
      org: "GROOT — Robotics & Automation Group, Universitas Islam Riau",
      place: "Pekanbaru",
      period: "May 2024 – May 2025",
      points: [
        "Led the division's robotics and embedded-systems work with ESP32, Arduino, sensors, and automation logic.",
        "Rebuilt the lab's website (wireless.uir.ac.id) using Vue.js.",
        "Mentored participants at the Arduino Fundamentals Workshop (Pelatihan Dasar Arduino) Batch 3, and guided division members through ESP32 mini-projects.",
      ],
      tags: ["Leadership", "ESP32", "Arduino", "Vue.js"],
      link: { label: "wireless.uir.ac.id", url: "https://wireless.uir.ac.id" },
    },
    {
      title: "Machine Learning Path — Distinction Graduate",
      org: "Bangkit Academy (led by Google, GoTo & Traveloka)",
      place: "Remote",
      period: "Sep 2024 – Dec 2024",
      points: [
        "Graduated with Distinction after 900+ learning hours across 12 courses (scores 86–97/100).",
        "Machine Learning Engineer in a 7-person capstone team building Glusity, a diabetes & obesity risk prediction app (see Projects).",
      ],
      tags: ["TensorFlow", "Machine Learning"],
      link: null,
    },
  ],

  projects: [
    {
      name: "JARVIS PESISIR",
      badge: "3rd Place · AIICS 2026",
      role: "Speech Researcher & Developer",
      summary: "A voice assistant that understands the Coastal Riau Malay dialect.",
      details:
        "Extended an open-source JARVIS voice assistant (which controls the computer by voice) to work in Indonesian and the Coastal Riau Malay dialect. " +
        "Integrated my fine-tuned Wav2Vec 2.0 speech-to-text model from my thesis, local LLMs via Ollama (Gemma 4), and Indonesian text-to-speech. " +
        "Bronze medal at AIICS 2026, Liga Talenta Mahasiswa Indonesia, LLDIKTI Region XVII.",
      tags: ["Python", "Wav2Vec 2.0", "Ollama", "Gemma 4", "PyQt6"],
      links: [{ label: "Code", url: "https://github.com/Bhayazeed/Jarvis-Pesisir" }],
    },
    {
      name: "BPS Riau RAG Chatbot",
      badge: "100% Recall@5",
      role: "AI & Software Development Intern",
      summary: "Question answering over 94 official statistical publications.",
      details:
        "Extracted text and complex tables from PDFs (PyMuPDF, Camelot, EasyOCR), indexed them with multilingual embeddings and FAISS, " +
        "and added reranking. Served via FastAPI with a Vue.js chat interface and admin dashboard.",
      tags: ["RAG", "FAISS", "FastAPI", "Vue.js", "OCR"],
      links: [],
    },
    {
      name: "MentoraAI",
      badge: "",
      role: "Full-Stack & AI Developer",
      summary: "An AI examiner for practising thesis defenses by voice.",
      details:
        "FastAPI + WebSocket backend for a real-time voice conversation between a student and an AI examiner: PDF proposal parsing, " +
        "speech-to-text, context-aware LLM prompting, and text-to-speech. Demoed live at TECHNO FEST UIR.",
      tags: ["FastAPI", "WebSockets", "LLM", "STT / TTS"],
      links: [{ label: "Code", url: "https://github.com/Bhayazeed/MentoraAI_Backend" }],
    },
    {
      name: "Glusity",
      badge: "Bangkit Capstone",
      role: "Machine Learning Engineer · 7-person team",
      summary: "Diabetes & obesity risk prediction app.",
      details:
        "Built two chained TensorFlow models — obesity (92% accuracy) feeding diabetes risk (90% accuracy). " +
        "Integrated the models into a FastAPI service and used the Gemini API on Google Cloud Vertex AI to generate personalized recommendations from the predictions.",
      tags: ["TensorFlow", "FastAPI", "Vertex AI", "Gemini API"],
      links: [{ label: "Code", url: "https://github.com/Bhayazeed/C242-PS006" }],
    },
    {
      name: "Pose Duel Battle",
      badge: "",
      role: "Developer",
      summary: "A real-time motion-matching game.",
      details: "Webcam-based game that tracks body pose in real time.",
      tags: ["OpenCV", "MediaPipe", "Pygame"],
      links: [],
    },
  ],

  skills: [
    { group: "Programming", items: ["Python", "SQL", "JavaScript / TypeScript", "C#", "C++"] },
    { group: "AI & Machine Learning", items: ["TensorFlow", "PyTorch", "Hugging Face Transformers", "Wav2Vec 2.0", "Speech Recognition", "NLP", "OpenCV", "MediaPipe"] },
    { group: "LLM & Retrieval", items: ["LangChain", "LangGraph", "RAG", "FAISS", "Gemma / Llama", "Vertex AI (Gemini API)"] },
    { group: "Backend & Web", items: ["FastAPI", "REST APIs", "WebSockets", "Vue.js", "MySQL"] },
    { group: "Tools", items: ["Git & GitHub", "Docker", "Linux", "Postman", "ESP32 / Arduino"] },
  ],

  education: [
    {
      degree: "Bachelor of Engineering (S.T.), Informatics Engineering",
      school: "Universitas Islam Riau",
      period: "Graduated Nov 2026",
      note: "Cum Laude · GPA 3.88 / 4.00",
      thesis: {
        title: "Adaptation of Automatic Speech Recognition for Riau Malay Coastal Dialect Based on Low-Resource Using the Wav2Vec 2.0 Model",
        points: [
          "Fine-tuned Wav2Vec 2.0 with Hugging Face Transformers (CTC training) for a low-resource dialect.",
          "Designed a cross-domain ablation (formal vs. social-media speech, 2×2 train/test) with speaker-disjoint splits.",
        ],
      },
    },
  ],

  achievements: [
    "3rd Place (Bronze Medal), AIICS 2026 — Liga Talenta Mahasiswa Indonesia, LLDIKTI Region XVII (Jun 2026)",
    "Bangkit Academy 2024, Machine Learning Path — Distinction Graduate (Jan 2025)",
    "DeepLearning.AI TensorFlow Developer Professional Certificate, Coursera (Nov 2024)",
    "Machine Learning Specialization — DeepLearning.AI & Stanford University, Coursera (Oct 2024)",
  ],

  languages: ["Indonesian (native)", "English (TOEFL ITP Prediction: 570)"],
};
