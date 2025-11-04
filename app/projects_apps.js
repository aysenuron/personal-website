const apps = [
  {
    id: 1,
    slug: "roi-calculator",
    webLink: "",
    githubLink: "https://github.com/aysenuron/ROI-Calculator",
    thumbnail: "/web-apps/roi/1.png",
    video: "/web-apps/roi/roi-video.mp4",
    className: "w-full",
    title: "Healthcare ROI Calculator",
    role: "Web Developer & Designer",
    time: "September - December 2024",
    description:
      "Transforming a complex Excel spreadsheet into an interactive 6-step web calculator for healthcare providers.",
    longDescription:
      "At Elevate Health Technologies, I designed and built an interactive ROI calculator to help healthcare providers understand potential cost savings from our inventory management system. This was my first real coding project—I started with no JavaScript experience and created a functional six-step calculator that became a key lead generation tool.",
    toolNames: ["JavaScript", "GA4", "Google Tag Manager", "HubSpot"],
    features: [
      {
        heading: "Challenges",
        img: "",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "**•** **Six sequential steps** with interdependent calculations",
          "**•** State management across all steps",
          "**•** **Email collection** integrated with HubSpot",
          "**•** User-friendly interface for healthcare providers **unfamiliar with financial terminology**",
          "**•**  **High risk of user drop-off** across six sequential steps",
          "**•** Need for **transparency in calculations** to build trust in the software ROI claims",
        ],
      },
      {
        heading: "Key UX Decisions",
        items: [
          "**Progressive Visual Feedback:** I designed a 6-step progress indicator with numbered circles and connecting lines. Active steps highlight in blue, completed steps turn green, and lines fill in to show advancement. This constant visual feedback addresses abandonment anxiety by showing users exactly where they are and how much remains.",
          "**Contextual Information Architecture:** Each step includes an orange info button that reveals explanatory text",
          "**Strategic Result Disclosure:** We positioned email collection after showing complete results. While this sacrifices some conversion, it prioritizes trust and value-first engagement—more aligned with our brand and likely to improve lead quality.",
        ],
      },
      {
        videos: ["/web-apps/roi/roi-detail.mp4"],
        vidClassName:
          "lg:w-2/3 border-gray-200 border-4 rounded-2xl drop-shadow-lg",
      },
      {
        heading: "Calculate vs. Next: Dual Pathway Navigation",
        items: [
          "This was our most debated design decision. Each step offers two progression options:",
          "**• Calculate button:** Displays the result immediately",
          "**• Next button:** Advances without showing the result",
          "Behind the scenes, both actions perform the calculation—the difference is purely presentational. This design:",
          "**•** Allows validation-seekers to see incremental progress",
          "**•** Maintains engagement by showing value building step-by-step",
        ],
      },
      {
        heading: "Analytics Strategy",
        img: "/web-apps/roi/2.png",
        imgClassName: "w-1/2 mx-auto",
        items: [
          "I implemented **tracking on all Next buttons at each step,** pushing events to Google Analytics. This allowed us to:",
          "**•** Identify **exact drop-off points**",
          "**•** Understand whether **showing results affected completion rates**",
          "**•** Measure the **full funnel** from Step 1 through email submission",
        ],
      },
      {
        heading: "Outcomes",
        img: "",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "The calculator launched successfully and served real users. While the project was later discontinued as company priorities shifted, it achieved its goal: providing transparent financial analysis to healthcare decision-makers.",
          "Personally, this project was pivotal—it sparked my journey into coding and opened the door to my current role as a web designer and developer.",
        ],
      },
    ],
    learned: [
      "**Data-informed design:** Implementing tracking wasn't about vanity metrics. It was designing with humility, acknowledging I didn't know how users would behave, and building systems to learn from them.",
      "**Trust through transparency:** Our decision to show full results before requesting emails exemplifies a principle I've carried forward: prioritizing user value over aggressive conversion often yields better long-term outcomes.",
    ],
    notes: [
      "This project was my very first time coding. Looking back at this code now, I can see approaches I'd change—perhaps using a framework for state management, more sophisticated validation, or more systematic CSS architecture. But that perspective only exists because of what this project taught me.",
      "One of the hardest parts came at the very end: collecting user emails. I didn’t know anything about setting up a backend or storing form submissions. After a lot of trial and error, I discovered that HubSpot could track non-HubSpot forms, and I hacked together a solution using their tracking code. What feels obvious to me now was a big breakthrough back then.",
      "In the end, I managed to capture both the step-by-step results and the user’s email, which let us send them a personalized PDF with their ROI breakdown and an explanation of how the calculations were made.",
      "This calculator marked my transformation from designer to developer, proving that the best learning happens when building something slightly beyond your current capabilities. It showed me that technical implementation and user experience design aren't separate disciplines—they're two aspects of the same problem-solving process.",
    ],
    type: "web-apps",
  },
  {
    id: 2,
    slug: "rast",
    thumbnail: "/web-apps/rast/thumbnail.png",
    video: "/web-apps/rast/handyman-dashboard-video.mp4",
    className: "w-full",
    title: "Rast: Service Marketplace Platform",
    role: "UX/UI Designer",
    time: "January - March 2023 (Project discontinued due to funding)",
    description:
      "Two-sided marketplace connecting handymen with urban customers seeking home services.",
    extraInfo:
      "The prototypes are in Turkish since the app was planned to launch in Turkey.",
    longDescription:
      "Designed a **two-sided marketplace platform connecting handymen and customers** in urban Turkish areas. Working alongside a UX researcher who conducted competitive analysis, I designed desktop interfaces for both sides of the platform—with primary focus on the provider dashboard as a business management tool.",
    toolNames: ["Figma"],
    features: [
      {
        heading: "Challenge",
        items: [
          "Urban handymen struggle to reach new customers at scale.",
          "Newcomers in cities struggle to find trustworthy providers.",
          "**Core problem:** Two groups who need each other can’t discover each other.",
        ],
      },
      {
        heading: "Solution: Platform Flow",
        items: [
          "**Customer path:** describe issue → get offers → compare profiles, portfolios, ratings → message → choose → pay → rate.",
          "**Provider path:** see jobs → bid → if accepted → complete → get paid → rating added to profile.",
          "All payments run in-app — no external cash.",
        ],
      },
      {
        img: "/web-apps/rast/provider-dashboard.jpg",
        items: [
          "**Provider Dashboard Design**",
          "New jobs to bid on",
          "Pending offers",
          "Active jobs",
          "Past jobs",
          "Earnings & analytics",
          "Public profile management",
        ],
      },
      {
        img: "/web-apps/rast/offers-list.jpg",
        imgClassName: "h-fit 2xl:my-8 lg:w-3/4",
      },
      {
        items: [
          "**Interactive job states chart:** A donut chart shows all job states (opportunity / active / complete / canceled). Clicking a segment filters the job list.",
          "**Dual view of jobs:** Grid for quick scanning. Table for data-dense comparison. Both share color-coded states.",
          "**Earnings analytics:** Line charts + see detail on hover.",
          "**Profile management** Image, description, portfolio, reviews — same view customers see.",
        ],
      },
      {
        videos: ["/web-apps/rast/rast-client-compressed.mp4"],
        vidClassName:
          "lg:h-fit lg:my-auto border-gray-200 border-4 rounded-2xl drop-shadow-lg",
        heading: "Customer Experience",
        items: [
          "**Posting flow:** quick initial capture → progressive detail → photos → scheduling → budget.",
          "**Bid comparison:** offers displayed as cards with trust signals (rating, portfolio, completion rate, response time).",
          "**Job tracking:** pending / active / completed — all paid in-app.",
        ],
      },
      {
        heading: "Core Features",
        items: [
          "**Provider:** dashboard, state visualization, grid/table toggle, analytics, portfolio, inline bid & messaging.",
          "**Customer:** guided posting, comparison UI, trust signals, messaging, ratings, payments.",
        ],
      },
    ],
    notes: [
      "The project was ultimately discontinued when investors dropped out. It taught me that good design work doesn't always see launch, and that's part of the reality of working in startups.",
      "Working with a UX researcher taught me how research insights translate into design decisions, particularly around competitive analysis and user flow development.",
      "Looking back, I'd approach the component organization differently (my Figma components were scattered rather than systematically organized), but the core flows and interaction patterns hold up as solid foundational work.",
    ],
    type: "web-apps",
  },
  {
    id: 3,
    slug: "yess-chef",
    webLink: "https://yess-chef.netlify.app/",
    githubLink: "https://github.com/aysenuron/yes-chef",
    thumbnail: "/web-apps/yess-chef/yess-chef-thumbnail.png",
    video: "/web-apps/yess-chef/yess-chef-video.mp4",
    className: "lg:w-1/4 w-1/2",
    title: "Yess, chef!",
    role: "Front-end Developer / UX Designer",
    time: "March - April 2025",
    description:
      "An AI-powered recipe app that suggests meals based on ingredients you already have, built with Anthropic's Claude API.",
    longDescription:
      "Yess, Chef! is a playful web app that takes a list of ingredients from the user and generates recipe ideas using  Anthropic API. I designed and developed it as a small but complete app — from **setting up the frontend in React to integrating with Anthropic API and deploying it on Netlify.** The goal wasn’t just to practice technical skills, but to create something delightful and genuinely useful in daily life. It’s a mix of creativity, functionality, and my love for food.",
    toolNames: ["React", "Netlify", "JavaScript", "Anthropic API"],
    features: [
      {
        heading: "How it Works",
        items: [
          "**•** user types ingredients",
          "**•** Netlify serverless function calls Claude",
          "**•** Claude returns a recipe suggestion",
          "**•** UI renders formatted output via react-markdown",
        ],
      },
      {
        img: "/web-apps/yess-chef/3.png",
        imgClassName: "lg:w-1/4 w-1/2",
      },
      {
        heading: "Key Design & Engineering Decisions",
        items: [
          "**Handling AI unpredictability:** Claude responses aren’t guaranteed to be structured. Displaying them as markdown was more robust than forcing JSON/arrays.",
          "**Clear async states:** AI takes ~3–8s to respond → loading states are essential for perceived reliability.",
          "**Real deployment:** Production keys stored in Netlify env vars — proving a solo developer can ship API-driven apps securely and quickly.",
        ],
      },
      {
        heading: "Challenges",
        items: [
          "Since I'm more focused on frontend work, setting up a backend flow with serverless functions and API integrations was new territory for me. Getting the app to communicate with Anthropic API, manage environment variables securely, and handle deployment on Netlify required a lot of trial, error, and debugging.",
          "Another challenge was making the responses render cleanly in the UI — I integrated react-markdown to properly display Claude's formatted recipes. Each roadblock pushed me to explore concepts I hadn't worked with before, and solving them gave me more confidence working beyond the frontend.",
        ],
      },
      {
        img: "/web-apps/yess-chef/1.png",
        imgClassName: "w-1/2",
        heading: "What I Learned",
        items: [
          "**AI Integration:** Working with AI APIs is more about handling unpredictability than complex prompt engineering. Most of the challenge is in parsing and displaying variable response formats.",
          "**React State for Async Operations:** Managing loading, success, and error states for API calls. Used a simple pattern with useState rather than over-engineering with reducers.",
          "**Practical vs. Perfect:** Initially tried to parse recipes into structured data (ingredients array, steps array, etc.) but Claude's conversational responses work better displayed as-is. Sometimes simple text rendering beats complex parsing.",
        ],
      },
    ],
    limitations: [
      "**•** No ingredient validation",
      "**•** No recipe saving or history",
      "**•** Single recipe per request (no alternatives)",
      "**•** No dietary restrictions or preferences",
    ],
    notes: [
      `I love building apps that me and my friends actually use in everyday life. Yess, Chef! is one of those. The name, of course, comes from the infamous show **The Bear.** I’m a foodie at heart: I love cooking, eating, and experimenting with new flavors. The real reason I worked so hard to make this app actually function was simple — I wanted it for myself.`,
    ],
    type: "web-apps",
  },
  {
    id: 4,
    slug: "notes",
    webLink: "https://notes-app-seven-psi.vercel.app/",
    githubLink: "https://github.com/aysenuron/notes-app",
    thumbnail: "/web-apps/notes/notes-thumbnail.png",
    video: "/web-apps/notes/notes-video-desktop.mp4",
    className: "w-full",
    title: "Notes App",
    role: "Developer & Designer",
    time: "April - May 2025",
    description:
      "A notes application with real-time filtering, tag management, and persistent state—built to practice CRUD operations and modern React patterns.",
    longDescription:
      "A note-taking app with real-time search, multi-tag filtering, and persistent filter state across navigation. I built this to practice full CRUD with a real API while solving a UX friction pattern most note apps ignore: keeping your context when jumping between filtered lists and single note views.",
    toolNames: ["React", "shadcn/ui", "Tailwind CSS", "React Router"],
    features: [
      {
        heading: "Challenge",
        items: [
          "Following foundational work in frontend development, I sought to build an application demonstrating complete **CRUD (Create, Read, Update, Delete)** operations with external API integration.",
          " The core technical challenge centered on state management: preserving filter selections when users navigate from a filtered list view into individual note details and back.",
          "**The main UX problem:**",
          "**•** most apps reset filters when you open/read a note → breaking mental context.",
          "I designed filter state to survive route changes so users stay in their current subset instead of starting over.",
        ],
      },
      {
        heading: "Design Approach",
        items: [
          "**Visual Design:** The interface draws from Bear Notes' minimalist aesthetic, prioritizing content legibility over decorative elements. A card-based grid layout presents note previews, while the editor view maintains focus on writing with minimal chrome. The color palette remains neutral, allowing user content to command attention. Typography choices emphasize readability across different note lengths and content types.",
          "**Component Architecture:** Implementation utilized shadcn/ui, a component library providing accessible, customizable base elements.",
          "**Theme System:** Light, dark, and system-preference theme modes were implemented using Tailwind CSS utilities, accommodating user environment preferences and visual accessibility needs.",
        ],
      },
      {
        heading: "Real-Time Search",
        videos: ["/web-apps/notes/notes-search.mp4"],
        imgClassName: "",
        items: [
          "Search filters on every keystroke — no submit flow.",
          "Search query syncs to URL (?search=query) → shareable + browser history friendly.",
        ],
      },
      {
        heading: "Persistent Filter State",
        items: [
          "If the user applies tag filters → open a note → go back — ...the previously selected filters remain active.",
          "This decision allows users maintain their mental model of working within a filtered subset rather than repeatedly reorienting to the full collection.",
        ],
      },
      {
        videos: ["/web-apps/notes/notes-tags.mp4"],
        vidClassName:
          "lg:w-2/3 border-gray-200 border-4 rounded-2xl drop-shadow-lg",
      },
      {
        heading: "Tag Management",
        items: [
          '**Autocomplete Prevention:** When adding tags, the input displays a filtered dropdown of existing tags as users type, preventing tag proliferation through minor variations (e.g., "work" vs "Work" vs "work-related").',
          "**Implicit Tag Lifecycle:** Rather than implementing a separate tag management interface, tags exist only while notes reference them. This reduces cognitive overhead—users manage notes, and tags manage themselves.",
        ],
      },
      {
        heading: "API Integration",
        items: [
          "MockAPI.io provides the backend endpoints for CRUD operations:",
          "**•** GET /notes - Retrieve all notes",
          "**•** POST /notes - Create new note",
          "**•** PUT /notes/:id - Update existing note",
          "**•** DELETE /notes/:id - Delete note",
          "This setup enabled practice with real API patterns—asynchronous operations, error handling, loading states—without backend development overhead.",
        ],
      },
      {
        videos: ["/web-apps/notes/notes-video-mobile.mp4"],
        vidClassName: "w-1/2 lg:w-1/4",
      },
    ],
    learned: [
      "**Component Libraries in Production Development:** Working with shadcn/ui demonstrated how professional development leverages existing solutions. Rather than building every UI element from scratch, effective development involves selecting appropriate libraries, understanding their APIs, and customizing them for specific needs.",
      "**URL as State Container:** Query parameters proved surprisingly capable for managing application state. For features like filtering, search, and view preferences, URL-based state often provides simpler implementation than state management libraries.",
    ],
    limitations: [
      "**•** User authentication for private note collections",
      "**•** Rich text editing capabilities",
      "**•** Color theme customization beyond light/dark modes",
      "**•** Note linking for connected thought documentation",
    ],
    type: "web-apps",
  },
];

export default apps;
