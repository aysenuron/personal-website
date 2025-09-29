const apps = [
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
        heading: "Response Handling",
        img: "/web-apps/yess-chef/2.png",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "Claude's responses are conversational, not structured data. I had to parse the text response and handle various formatting inconsistencies with React Markdown.",
        ],
      },
      {
        heading: "Loading States",
        img: "/web-apps/yess-chef/1.png",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          'AI responses take 3-8 seconds, so I added a simple loading state to prevent the "is this working?" confusion.',
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
];

export default apps;
