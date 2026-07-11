// ============================================================
// portfolioData.js — Centralized configuration for Yash Bhadani's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Yash Bhadani",
  firstName: "Yash",
  brandName: "Yash Bhadani",
  title: "Corporate Finance & Data Analytics Professional",
  location: "Bengaluru, India",
  phone: "+91 73219-20649",
  emails: {
    primary: "yash.bhadani25mb@ibsindia.org",
    secondary: "yash.bhadani25mb@ibsindia.org",
  },
  summary:
    "MBA candidate specializing in Finance and Marketing at ICFAI Business School, Bangalore. Passionate about corporate finance, financial planning & analysis, equity fundraising, valuation, and business intelligence. Experienced in building dynamic Excel models and Power BI reporting systems.",
  resumeUrl: "/Yash_Bhadani_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/yash-bhadani",
  linkedin: "https://www.linkedin.com/in/yash-bhadani26",
  instagram: "https://instagram.com/yash_bhadani",
};

export const heroContent = {
  greeting: "Hi, I'm Yash Bhadani",
  titleHighlight: "Corporate Finance & Data Analytics",
  subtitle:
    "I build integrated financial models, perform corporate valuations, and design interactive Power BI dashboard reports.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:yash.bhadani25mb@ibsindia.org?subject=Hiring Inquiry – Portfolio&body=Hello Yash,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Yash_Bhadani_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Yash Bhadani</span>, an MBA candidate based in Bengaluru, India, specializing in Corporate Finance and Data Analytics. I bridge the gap between financial modeling, strategic analysis, and interactive dashboard engineering to support data-driven decision making.`,
  techStack: ["MS Excel", "Power BI", "Financial Modeling"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "How I turn financial numbers and raw data into strategic insights",
  description:
    "I follow a structured, meticulous, and analytical approach to design database schemas, project cash flows, and present advisory roadmaps.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Gathering historical statements, market trends, competitor ratios, and structural MSME capital access details to establish a verified dataset.",
    },
    {
      number: "02",
      title: "Modeling",
      text: "Building integrated 3-statement projection models (FY2021–FY2035), performing DCF corporate valuations, and running dynamic scenario models.",
    },
    {
      number: "03",
      title: "Visualization",
      text: "Designing schema relationships, writing custom DAX measures, and creating visual metrics to build fast, clear Power BI dashboard reports.",
    },
    {
      number: "04",
      title: "Pitching",
      text: "Synthesizing insights and projections into institutional-grade equity fundraising decks (14-slides) and strategic business roadmaps.",
    },
  ],
  endText: "Insights Delivered!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Corporate Finance & Modeling",
      skills: [
        { name: "Financial Modeling", level: 92 },
        { name: "Corporate Valuation (DCF)", level: 88 },
        { name: "3-Statement Models", level: 90 },
        { name: "Ratio Analysis", level: 95 },
        { name: "Equity Research", level: 85 }
      ]
    },
    {
      title: "BI & Data Visualization",
      skills: [
        { name: "MS Excel (Advanced)", level: 95 },
        { name: "Power BI", level: 90 },
        { name: "DAX & Data Modeling", level: 85 },
        { name: "Dashboard Design", level: 92 },
        { name: "Interactive Reporting", level: 90 }
      ]
    },
    {
      title: "Professional & Analysis Tools",
      skills: [
        { name: "MS PowerPoint", level: 92 },
        { name: "MS Word", level: 90 },
        { name: "Bloomberg Terminal", level: 75 },
        { name: "n8n (Automation)", level: 60 }
      ]
    },
    {
      title: "Strategic Frameworks",
      skills: [
        { name: "SWOT Analysis", level: 95 },
        { name: "Porter's Five Forces", level: 92 },
        { name: "BCG Growth Matrix", level: 88 },
        { name: "Blue Ocean ERRC", level: 85 },
        { name: "McKinsey 7-S & Scorecards", level: 82 }
      ]
    },
    {
      title: "Business Analytics & Research",
      skills: [
        { name: "Competitor Benchmarking", level: 92 },
        { name: "Market Research", level: 90 },
        { name: "MSME Funding Analysis", level: 88 },
        { name: "Financial Planning & Analysis", level: 85 }
      ]
    },
    {
      title: "Personal Competencies",
      skills: [
        { name: "Analytical Thinking", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 92 },
        { name: "Project Management", level: 88 }
      ]
    }
  ]
};

// Brand New Content Creation Data (Repurposed for Analytics & Research Showcase)
export const contentCreation = {
  badge: "Analytics & Reports",
  heading: "Interactive Dashboards & Corporate Reports",
  description: "Beyond core numbers, I build comprehensive visual dashboards and structured corporate research reports.",
  categories: [
    {
      title: "Blinkit Sales Dashboard",
      description: "Interactive Power BI sales intelligence report tracking grocery checkout values, customer satisfaction, and channel logs.",
      stats: "Power BI Report",
      icon: "📊",
      link: "/Blinkit_Dashboard_Report.pbix"
    },
    {
      title: "Healthcare patient Dashboard",
      description: "Operational reporting dashboard mapping hospital patient flow, demographics, diagnostics billing, and specialty analytics.",
      stats: "Power BI Report",
      icon: "🏥",
      link: "/healthcare Dashboard.pbix"
    },
    {
      title: "Equity Fundraising Deck",
      description: "A 14-slide investor-ready presentation structuring a 100Cr+ agri-processing to branded FMCG migration thesis.",
      stats: "Investor Pitch Deck",
      icon: "💼",
      link: "/25BSOCBL0650__Yash bhadani.pdf"
    },
    {
      title: "Integrated Excel Projections",
      description: "15-year forward forecasts and DCF valuation model tracking consolidated cash flows and scenario metrics.",
      stats: "Excel Financial Model",
      icon: "📈",
      link: "/AWL_model_25BSOCBL0650.xlsx"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "Participated in Manthan Fest (Finance Vertical)",
    description: "Competed in the intra-college management fest, resolving real-world corporate finance cases, capital structuring dilemmas, and treasury management plans.",
    role: "Finance Competitor",
    badge: "Case Study"
  },
  {
    title: "Participated in Data Trail: Decode & Discover",
    description: "Analyzed data tables, identified operational patterns, and constructed analysis summaries as part of a club-led data challenge.",
    role: "Data Analytics Competitor",
    badge: "Analytics"
  },
  {
    title: "Participated in the Marketing Launchpad",
    description: "Mapped out a detailed go-to-market plan, budgeting price points, channel logistics, and customer acquisition campaigns.",
    role: "Marketing Strategist",
    badge: "Marketing"
  },
  {
    title: "Finance Foundation Challenge",
    description: "Engaged in corporate planning and analysis simulation, forecasting cash generation metrics conducted by the Alpha Finance Club.",
    role: "Participant",
    badge: "Corporate Finance"
  },
  {
    title: "Runner-up, E-sports (BGMI) — IBS Bangalore",
    description: "Coordinated strategy, map rotations, and real-time team calls in competitive, high-pressure match lobbies.",
    role: "Team Tactician",
    badge: "E-sports"
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "IRESH Consultants, Pune (Bangalore Office)",
    role: "Consulting & Finance Intern",
    duration: "12 Weeks (Summer Internship)",
    skills: ["Financial Modeling", "Corporate Valuation (DCF)", "Competitor Benchmarking", "MSME Capital Access Research", "Strategic Frameworks"],
    tech: ["MS Excel", "MS PowerPoint", "Bloomberg", "Porter's 5 Forces", "BCG Matrix"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Analytical Thinking", icon: "🧠", desc: "Decomposing complex business numbers and data sets into logical and modular projection models." },
  { name: "Communication", icon: "💬", desc: "Translating complex corporate finance data, tables, and valuations into simple, board-ready insights." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working seamlessly with consultants, data analysts, and corporate guides to align models and assumptions." },
  { name: "Problem Solving", icon: "🧩", desc: "Formulating structural fixes for working capital loops and adjusting capital layouts." },
  { name: "Negotiation", icon: "🗣️", desc: "Aligning peer company metrics and presenting valuation thresholds for investor discussions." },
  { name: "Time Management", icon: "⏰", desc: "Balancing intensive B-School courses, case challenges, and live consulting project files." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to master new modeling frameworks, compliance regulations, and reporting tools." },
  { name: "Leadership", icon: "👑", desc: "Guiding team analysis segments, coordinating deliverables, and ensuring task alignment." }
];

export const projects = [
  {
    id: "equity-fundraising",
    number: "01",
    badge: "🚀 Live Consultancy Engagement",
    title: "Equity Fundraising Projections & Pitch Deck",
    description:
      "A comprehensive project associate deliverable for IRESH Consultants. Built an integrated 3-statement model (FY2021–FY2035) with DCF valuation, scenario analysis, and peer benchmarking. Synthesized findings into a 14-slide investor pitch deck for ABC Company's INR 100 Crore+ edible-oil-to-FMCG migration strategy.",
    techTags: [
      "MS Excel",
      "Financial Modeling",
      "DCF Valuation",
      "Strategic Frameworks",
      "Investor Pitch Deck",
      "Bloomberg",
      "agri-processing",
      "FMCG",
    ],
    links: {
      github: "https://github.com/yashbhadani",
      demo: "/25BSOCBL0650__Yash bhadani.pdf",
    },
    isFlagship: true,
  },
  {
    id: "blinkit-dashboard",
    number: "02",
    badge: "📊 Power BI Analytics",
    title: "Blinkit Sales Analysis Dashboard",
    description:
      "An interactive sales intelligence reporting system built in Power BI. Integrated database tables mapping grocery transactions, customer profiles, and outlet trends. Written custom DAX metrics to track revenue margins and optimize distribution logs.",
    techTags: ["Power BI", "DAX", "Data Modeling", "MS Excel", "Dashboard Design"],
    links: {
      github: "https://github.com/yashbhadani",
      demo: "/Blinkit_Dashboard_Report.pbix",
    },
    isFlagship: false,
  },
  {
    id: "healthcare-dashboard",
    number: "03",
    badge: "🏥 Healthcare Reporting",
    title: "Healthcare Patients Operations Dashboard",
    description:
      "A clinical operations dashboard designed to monitor patient distributions. Visualizes patient admission trends, demographics, billing diagnostics, department workloads, and clinical outcomes to support resource allocations and patient flow.",
    techTags: ["Power BI", "Data Analytics", "MS Excel", "Data Visualization"],
    links: {
      github: "https://github.com/yashbhadani",
      demo: "/healthcare Dashboard.pbix",
    },
    isFlagship: false,
  },
  {
    id: "equity-research",
    number: "04",
    badge: "📈 Sector Research",
    title: "Agri-Processing Sector Equity Research & Valuation",
    description:
      "In-depth market research and valuation report of public players in the agri-processing domain. Details market sizing (INR 26 Lakh Crore TAM), import dependencies, and EBITDA-to-PAT margins across edible oil vs. branded food processing companies.",
    techTags: ["Financial Analysis", "Equity Research", "Valuation", "Ratio Analysis", "Market Research"],
    links: {
      github: "https://github.com/yashbhadani",
      demo: "/Equity research report.pdf",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Bloomberg Finance Fundamentals",
      issuer: "Bloomberg",
      icon: "💻",
    },
    {
      name: "Bloomberg Market Concept",
      issuer: "Bloomberg",
      icon: "📈",
    },
    {
      name: "Bloomberg Spreadsheet Analysis",
      issuer: "Bloomberg",
      icon: "📊",
    },
    {
      name: "Financial Modelling / 2023",
      issuer: "Academic/Industry",
      icon: "📉",
    },
    {
      name: "Advanced Excel Workshop",
      issuer: "Professional Certificate",
      icon: "📅",
    },
  ],
  viewAllUrl:
    "https://drive.google.com/drive/folders/1ObdGWtVSx8SsfR4AcbCySSd9LFXcAs9f?usp=sharing",
};

export const education = {
  degree: "MBA – Finance & Marketing",
  institution: "ICFAI Business School, Bangalore",
  cgpa: "8.87",
  graduation: "2027",
  twelfth: "12th Commerce – 73%",
  tenth: "10th CBSE – 75.83%",
};

export const educationList = [
  {
    degree: "MBA – Finance & Marketing",
    institution: "ICFAI Business School, Bangalore (IFHE)",
    duration: "2025 - 2027",
    score: "8.87 CGPA (Sem 1 & 2)",
    details: "Focusing on corporate finance, data-driven financial modeling, analytics, and competitor ratio analysis."
  },
  {
    degree: "B.Com (Hons) – Accounting & Finance",
    institution: "Jagannath Jain College, Koderma (Vinoba Bhave University)",
    duration: "2020 - 2023",
    score: "7.24 CGPA / 72.4%",
    details: "In-depth courses in corporate accounting, financial planning and analysis, audit, and tax systems."
  },
  {
    degree: "Class XII – Commerce",
    institution: "Grizzly Vidyalaya, Telaiya Dam, Koderma (CBSE)",
    duration: "2020",
    score: "73%",
    details: "Specialized in economics, business management, and corporate financial principles."
  },
  {
    degree: "Class X",
    institution: "Sacred Heart School, Jhumri Telaiya (CBSE)",
    duration: "2018",
    score: "75.83%",
    details: "Standard secondary curriculum with focus on mathematics and analytical studies."
  }
];

export const footerContent = {
  taglines: [
    "Corporate Finance & Data Analytics",
    "Financial Modeling · Power BI · Excel",
    "Strategic Advisory & Valuations",
  ],
  credential: "MBA Finance (8.87 CGPA) · B.Com (Hons)",
  copyright: `© ${new Date().getFullYear()} Yash Bhadani | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
