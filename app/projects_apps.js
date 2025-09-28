const apps = [
  {
    id: 1,
    slug: "notes",
    githubLink: "https://github.com/aysenuron/cubtale",
    webLink: "https://cubtale.netlify.app/",
    img: "/websites/cubtale-screen.png",
    title: "Notes",
    description:
      "I designed and developed this landing page in React and Tailwind CSS, using Framer Motion for subtle but engaging animations.",
    longDescription:
      "Cubtale is a modern brand partnership platform landing page that showcases clean design principles and smooth user interactions. Built with React and styled using Tailwind CSS, the project demonstrates proficiency in component-based architecture and responsive design patterns.",
    toolNames: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
    features: [
      {
        heading: "Scalable Architecture",
        img: "/websites/cubtale-screen.png",
        items: ["Microservices", "Cloud native", "Auto-scaling"],
      },
      {
        img: "/websites/cubtale-screen.png",
      },
    ],
    goal: "Improve workflow efficiency, highlight software value, and test which design drives more engagement and revenue awareness",
    challenges:
      "The main challenge was creating engaging animations that enhanced rather than distracted from the content. I solved this by implementing subtle micro-interactions that guide users through the page while maintaining fast load times.",
    type: "web-apps",
  },
  {
    id: 2,
    slug: "yess-chef",
    webLink: "https://yess-chef.netlify.app/",
    githubLink: "https://github.com/aysenuron/yes-chef",
    thumbnail: "/web-apps/yess-chef/yess-chef-thumbnail.png",
    video: "/web-apps/yess-chef/yess-chef-video.mp4",
    className: "lg:w-1/4 w-1/2",
    title: "Yess, chef!",
    role: "Full-stack frontend with AI integration",
    time: "March - April 2025",
    description:
      "I designed and developed a recipe suggestion app that uses Anthropic AI to generate meal ideas from the ingredients you have.",
    longDescription:
      "Yess, Chef! is a playful web app that takes a list of ingredients from the user and generates recipe ideas using  Anthropic API. I designed and developed it as a small but complete app — from **setting up the frontend in React to integrating with Anthropic API and deploying it on Netlify.** The goal wasn’t just to practice technical skills, but to create something delightful and genuinely useful in daily life. It’s a mix of creativity, functionality, and my love for food.",
    toolNames: ["React", "Netlify", "JavaScript", "Anthropic API"],
    features: [
      {
        heading: "AI Integration",
        img: "/web-apps/yess-chef/1.png",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "Users can enter any combination of ingredients — from the everyday to the absurd — and get a recipe idea back in real time, formatted neatly in markdown for easy reading.",
        ],
      },
      {
        heading: "Real-world deployment",
        img: "/web-apps/yess-chef/3.png",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          `The app is live on Netlify, with environment variables securely handled in production. It’s **lightweight but fully functional,** showing how small projects can scale into polished portfolio pieces.`,
        ],
      },
    ],
    goal: "Create a responsive web app that generates recipes from user-provided ingredients using Anthropic API, with a simple frontend and working serverless backend on Netlify. The focus was on making the app functional, reliable, and enjoyable to use.",
    challenges: [
      "Since I'm more focused on frontend work, setting up a backend flow with serverless functions and API integrations was new territory for me. Getting the app to communicate with Anthropic API, manage environment variables securely, and handle deployment on Netlify required a lot of trial, error, and debugging.",
      "Another challenge was making the responses render cleanly in the UI — I integrated react-markdown to properly display Claude's formatted recipes. Each roadblock pushed me to explore concepts I hadn't worked with before, and solving them gave me more confidence working beyond the frontend.",
    ],
    notes: [
      `I love building apps that me and my friends actually use in everyday life. Yess, Chef! is one of those. The name, of course, comes from the infamous show **The Bear.** I’m a foodie at heart: I love cooking, eating, and experimenting with new flavors. The real reason I worked so hard to make this app actually function was simple — I wanted it for myself.`,
      "I’m not much of a backend person, but with enough persistence (and some AI assistance), I figured it out. Now, it’s a tool I use and a project that makes me smile.",
    ],
    type: "web-apps",
  },
  {
    id: 3,
    slug: "rast",
    githubLink: "https://github.com/aysenuron/employment-leaders-website",
    webLink: "https://employmentleaders.com/",
    img: "/websites/employmentLeaders-screen.png",
    title: "Rast",
    description:
      "A static website for a recruitment agency, built with vanilla HTML, CSS, and JavaScript. The design focuses on clear messaging and easy navigation, using structured sections and contrasting accents to highlight key services.",
    longDescription:
      "Employment Leaders is a professional recruitment agency website built with vanilla web technologies. The project emphasizes clean, professional design that builds trust with both job seekers and employers. The site features clear service descriptions, easy navigation, and strategic calls-to-action.",
    toolNames: ["HTML", "CSS", "JavaScript", "Netlify"],
    features: [
      {
        heading: "Scalable Architecture",
        img: "/websites/employmentLeaders-screen.png",
        items: ["Microservices", "Cloud native", "Auto-scaling"],
      },
      {
        heading: "User Experience",
        img: "/websites/employmentLeaders-screen.png",
        items: ["Clean UI", "Accessibility", "Mobile first"],
      },
    ],
    goal: "Improve workflow efficiency, highlight software value, and test which design drives more engagement and revenue awareness",
    challenges:
      "Creating an engaging design without overwhelming frameworks while ensuring cross-browser compatibility. I focused on semantic HTML, progressive enhancement, and thorough testing across different browsers and devices.",
    type: "web-apps",
  },
  {
    id: 4,
    slug: "swift",
    githubLink: "https://github.com/aysenuron/employment-leaders-website",
    webLink: "https://employmentleaders.com/",
    img: "/websites/employmentLeaders-screen.png",
    title: "Swift",
    description:
      "A static website for a recruitment agency, built with vanilla HTML, CSS, and JavaScript. The design focuses on clear messaging and easy navigation, using structured sections and contrasting accents to highlight key services.",
    longDescription:
      "Employment Leaders is a professional recruitment agency website built with vanilla web technologies. The project emphasizes clean, professional design that builds trust with both job seekers and employers. The site features clear service descriptions, easy navigation, and strategic calls-to-action.",
    toolNames: ["HTML", "CSS", "JavaScript", "Netlify"],
    features: [
      {
        heading: "Scalable Architecture",
        img: "/images/architecture.png",
        items: ["Microservices", "Cloud native", "Auto-scaling"],
      },
      {
        heading: "User Experience",
        img: "/images/ux.png",
        items: ["Clean UI", "Accessibility", "Mobile first"],
      },
    ],
    goal: "Improve workflow efficiency, highlight software value, and test which design drives more engagement and revenue awareness",
    challenges:
      "Creating an engaging design without overwhelming frameworks while ensuring cross-browser compatibility. I focused on semantic HTML, progressive enhancement, and thorough testing across different browsers and devices.",
    type: "web-apps",
  },
  {
    id: 5,
    slug: "gebetime",
    githubLink: "https://github.com/aysenuron/employment-leaders-website",
    webLink: "https://employmentleaders.com/",
    img: "/websites/employmentLeaders-screen.png",
    title: "Gebe Time",
    description:
      "A static website for a recruitment agency, built with vanilla HTML, CSS, and JavaScript. The design focuses on clear messaging and easy navigation, using structured sections and contrasting accents to highlight key services.",
    longDescription:
      "Employment Leaders is a professional recruitment agency website built with vanilla web technologies. The project emphasizes clean, professional design that builds trust with both job seekers and employers. The site features clear service descriptions, easy navigation, and strategic calls-to-action.",
    toolNames: ["HTML", "CSS", "JavaScript", "Netlify"],
    features: [
      {
        heading: "Scalable Architecture",
        items: [
          "Employment Leaders is a professional recruitment agency website built with vanilla web technologies. The project emphasizes clean, professional design that builds trust with both job seekers and employers. The site features clear service descriptions, easy navigation, and strategic calls-to-action.",
          "Employment Leaders is a professional recruitment agency website built with vanilla web technologies. The project emphasizes clean, professional design that builds trust with both job seekers and employers. The site features clear service descriptions, easy navigation, and strategic calls-to-action.",
        ],
      },
      {
        heading: "User Experience",
        img: "/images/ux.png",
        items: ["Clean UI", "Accessibility", "Mobile first"],
      },
    ],
    goal: "Improve workflow efficiency, highlight software value, and test which design drives more engagement and revenue awareness",
    challenges:
      "Creating an engaging design without overwhelming frameworks while ensuring cross-browser compatibility. I focused on semantic HTML, progressive enhancement, and thorough testing across different browsers and devices.",
    type: "web-apps",
  },
];

export default apps;
