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
      "At Elevate Health Technologies, the marketing team needed an interactive ROI calculator for healthcare providers. The goal was to let prospects enter their operational data across multiple steps and instantly see how much time and cost they could save using our solutions. This project was my first real step into coding. I started with no prior experience in JavaScript, but through trial, error, and lots of learning, I designed and built a fully functional, six-step ROI calculator that became a key part of our lead generation strategy.",
    toolNames: [
      "Webflow",
      "JavaScript",
      "GA4",
      "Google Tag Manager",
      "HubSpot",
    ],
    features: [
      {
        heading: "Challenge",
        img: "",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "My manager approached me with an Excel spreadsheet containing sophisticated financial calculations for healthcare providers considering PULSE, our inventory management system. The task: build an **interactive ROI calculator** that could guide doctors and healthcare facilities through a **multi-step process**, performing calculations at each stage and **accumulating results** across six steps.",
          "**Complex Calculations:** The calculator wasn’t a simple form. Each step included multiple inputs, specific calculations, and dependencies across later steps. Standard form builders (Typeform, HubSpot, etc.) couldn't handle the mathematical complexity or state management",
          "**User Experience for a Healthcare Audience:** The inputs (like shipment volume, staff costs, or time saved per unit) weren’t always obvious to a doctor or clinic manager. Without guidance, the tool risked losing credibility or confusing users.",
          "**Engagement & Conversion:** The team debated how much to show upfront. Should users see their step-by-step results or only the final ROI after submitting an email? Balancing transparency with lead capture was critical.",
        ],
      },
      {
        heading: "Technical Constraints",
        img: "",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "**•** Six sequential steps, each with unique calculations",
          "**•** Steps 1-4 required **individual calculations** that would accumulate in Step 5",
          "**•** Step 6 needed to **incorporate all previous results** plus new inputs about training staff",
          "**•** Must **maintain calculation state across the entire flow,** even when users skip viewing intermediate results",
          "**•** Final step required **email collection** and external results page integration",
        ],
      },
      {
        heading: "User Considerations",
        img: "/web-apps/roi/1.png",
        imgClassName: "w-full py-6",
        items: [
          "**•** Primary audience: **healthcare providers** unfamiliar with complex financial terminology",
          "**•** **High risk of user drop-off** across six sequential steps",
          "**•** Need for **transparency in calculations** to build trust in the software ROI claims",
          "**•** Balancing information disclosure with **lead generation goals**",
        ],
      },
      {
        heading: "Key UX Decisions",
        img: "",
        imgClassName: "",
        items: [
          "**Progressive Visual Feedback:** I designed a 6-step progress indicator with numbered circles and connecting lines. Active steps highlight in blue, completed steps turn green, and lines fill in to show advancement. This constant visual feedback addresses abandonment anxiety by showing users exactly where they are and how much remains.",
          "**Contextual Information Architecture:** Each step includes an orange info button that reveals explanatory text",
          "**Strategic Result Disclosure:** We positioned email collection after showing complete results. While this sacrifices some conversion, it prioritizes trust and value-first engagement—more aligned with our brand and likely to improve lead quality.",
        ],
      },
      {
        heading: "Calculate vs. Next: Dual Pathway Navigation",
        img: "",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "This was our most debated design decision. Each step offers two progression options:",
          "**• Calculate button:** Displays the result immediately",
          "**• Next button:** Advances without showing the result",
          "Behind the scenes, both actions perform the calculation—the difference is purely presentational. This design:",
          "**•** Gives users control over their pacing",
          "**•** Allows validation-seekers to see incremental progress",
          "**•** Lets efficiency-focused users move quickly",
          "**•** Maintains engagement by showing value building step-by-step",
        ],
      },
      {
        heading: "Analytics Strategy",
        img: "/web-apps/roi/2.png",
        imgClassName: "w-1/2 mx-auto",
        items: [
          "I implemented tracking on all Next buttons at each step, pushing events to Google Analytics. This allowed us to:",
          "**•** Identify exact drop-off points",
          "**•** Understand whether showing results affected completion rates",
          "**•** Measure the full funnel from Step 1 through email submission",
        ],
      },
      {
        heading: "Key Features",
        img: "",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "**Auto-formatting inputs:** Numbers display with thousand separators as users type",
          "**Field validation:** Required inputs checked before step progression",
          "**Smart recalculation:** Step 5 automatically populates even if users skipped Calculate buttons",
          "**Responsive design:** Media queries adapt layout for mobile/tablet healthcare providers",
          "**Integration:** HubSpot tracking and external results page",
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
      "**Problem decomposition:** Breaking <build a calculator> into manageable pieces—navigation system, calculation logic, input handling, visual feedback—made an overwhelming task achievable.",
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
    slug: "yess-chef",
    webLink: "https://yess-chef.netlify.app/",
    githubLink: "https://github.com/aysenuron/yes-chef",
    thumbnail: "/web-apps/yess-chef/yess-chef-thumbnail.png",
    video: "/web-apps/yess-chef/yess-chef-video.mp4",
    className: "lg:w-1/4 w-1/2",
    title: "Yess, chef!",
    role: "Front-end Developer / Designer",
    time: "March - April 2025",
    description:
      "An AI-powered recipe app that suggests meals based on ingredients you already have, built with Anthropic's Claude API.",
    longDescription:
      "Yess, Chef! is a playful web app that takes a list of ingredients from the user and generates recipe ideas using  Anthropic API. I designed and developed it as a small but complete app — from **setting up the frontend in React to integrating with Anthropic API and deploying it on Netlify.** The goal wasn’t just to practice technical skills, but to create something delightful and genuinely useful in daily life. It’s a mix of creativity, functionality, and my love for food.",
    toolNames: ["React", "Netlify", "JavaScript", "Anthropic API"],
    features: [
      {
        heading: "Response Handling",
        img: "/web-apps/yess-chef/2.png",
        imgClassName: "w-1/2",
        items: [
          "Claude's responses are conversational, not structured data. I had to parse the text response and handle various formatting inconsistencies with React Markdown.",
        ],
      },
      {
        heading: "Loading States",
        img: "/web-apps/yess-chef/1.png",
        imgClassName: "w-1/2",
        items: [
          'AI responses take 3-8 seconds, so I added a simple loading state to prevent the "is this working?" confusion.',
        ],
      },
      {
        heading: "Real-world deployment",
        img: "/web-apps/yess-chef/3.png",
        imgClassName: "w-1/2",
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
    learned: [
      "**AI Integration:** Working with AI APIs is more about handling unpredictability than complex prompt engineering. Most of the challenge is in parsing and displaying variable response formats.",
      "**React State for Async Operations:** Managing loading, success, and error states for API calls. Used a simple pattern with useState rather than over-engineering with reducers.",
      "**Practical vs. Perfect:** Initially tried to parse recipes into structured data (ingredients array, steps array, etc.) but Claude's conversational responses work better displayed as-is. Sometimes simple text rendering beats complex parsing.",
    ],
    limitations: [
      '**•** No ingredient validation (you can type "random access memories")',
      "**•** No recipe saving or history",
      "**•** Single recipe per request (no alternatives)",
      "**•** No dietary restrictions or preferences",
    ],
    notes: [
      `I love building apps that me and my friends actually use in everyday life. Yess, Chef! is one of those. The name, of course, comes from the infamous show **The Bear.** I’m a foodie at heart: I love cooking, eating, and experimenting with new flavors. The real reason I worked so hard to make this app actually function was simple — I wanted it for myself.`,
      "I’m not much of a backend person, but with enough persistence (and some AI assistance), I figured it out. Now, it’s a tool I use and a project that makes me smile.",
    ],
    type: "web-apps",
  },
  {
    id: 3,
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
      "A note-taking application featuring real-time search, multi-tag filtering, and persistent filter state across navigation. Built to practice full CRUD operations with API integration while solving a common UX challenge: maintaining user context when navigating between filtered lists and individual items.",
    toolNames: ["React", "shadcn/ui", "Tailwind CSS", "React Router"],
    features: [
      {
        heading: "Challenge",
        img: "",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "Following foundational work in frontend development, I sought to build an application demonstrating complete CRUD (Create, Read, Update, Delete) operations with external API integration. The core technical challenge centered on state management: preserving filter selections when users navigate from a filtered list view into individual note details and back.",
          "Standard implementations typically reset filters on navigation, forcing users to reselect their criteria each time. This creates unnecessary friction in the user experience and breaks the mental model of maintaining working context.",
          "**Technical objectives:**",
          "**•** Implement full CRUD operations with asynchronous API calls",
          "**•** Integrate a component library for production-ready UI elements",
          "**•** Solve filter persistence across route changes",
          "**•** Handle loading states, error conditions, and data validation",
        ],
      },
      {
        heading: "Design Approach",
        img: "",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "**Visual Design:** The interface draws from Bear Notes' minimalist aesthetic, prioritizing content legibility over decorative elements. A card-based grid layout presents note previews, while the editor view maintains focus on writing with minimal chrome. The color palette remains neutral, allowing user content to command attention. Typography choices emphasize readability across different note lengths and content types.",
          "**Component Architecture:** Implementation utilized shadcn/ui, a component library providing accessible, customizable base elements.",
          "**Theme System:** Light, dark, and system-preference theme modes were implemented using Tailwind CSS utilities, accommodating user environment preferences and visual accessibility needs.",
        ],
      },
      {
        heading: "Real-Time Search",
        video: "/web-apps/notes/notes-search.mp4",
        vidClassName: "w-full",
        img: "",
        imgClassName: "",
        items: [
          "Search filtering occurs on every keystroke without requiring form submission. As users type, the note list updates immediately to show matching results. The URL reflects the current search query (?search=query), enabling shareable search states and proper browser history integration.",
          "This pattern reduces interaction friction by eliminating the commit required with traditional search forms. Users can refine queries incrementally and course-correct immediately upon seeing results.",
        ],
      },
      {
        heading: "Persistent Filter State",
        video: "",
        vidClassName: "",
        img: "",
        imgClassName: "",
        items: [
          "The most significant UX challenge addressed filter state management across navigation. When users:",
          "1- Apply tag filters to the note list",
          "2- Open a specific note",
          "3- Return to the list view",
          "...the previously selected filters remain active, preserving their working context.",
          "This decision allows users maintain their mental model of working within a filtered subset rather than repeatedly reorienting to the full collection.",
        ],
      },
      {
        heading: "Tag Management",
        video: "/web-apps/notes/notes-tags.mp4",
        vidClassName: "w-full",
        items: [
          '**Autocomplete Prevention:** When adding tags, the input displays a filtered dropdown of existing tags as users type. This prevents tag proliferation through minor variations (e.g., "work" vs "Work" vs "work-related"), maintaining a clean taxonomy without requiring manual curation.',
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
        video: "/web-apps/notes/notes-video-mobile.mp4",
        vidClassName: "w-1/2 lg:w-1/4",
      },
    ],
    learned: [
      "**Component Libraries in Production Development:** Working with shadcn/ui demonstrated how professional development leverages existing solutions. Rather than building every UI element from scratch, effective development involves selecting appropriate libraries, understanding their APIs, and customizing them for specific needs. This mirrors real-world development practices more accurately than building everything from first principles.",
      "**URL as State Container:** Query parameters proved surprisingly capable for managing application state. For features like filtering, search, and view preferences, URL-based state often provides simpler implementation than state management libraries while offering additional benefits (shareability, browser history integration).",
    ],
    limitations: [
      "**•** User authentication for private note collections",
      "**•** Rich text editing capabilities",
      "**•** Color theme customization beyond light/dark modes",
      "**•** Note linking for connected thought documentation",
    ],
    notes: [
      "This was one of the first apps I built entirely on my own (front end + logic + design). It taught me how to connect state, UI, and persistence in a coherent, maintainable way. It also reminded me that even simple apps require care in design and error handling.",
    ],
    type: "web-apps",
  },
];

export default apps;
