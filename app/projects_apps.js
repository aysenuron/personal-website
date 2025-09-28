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
];

export default apps;
