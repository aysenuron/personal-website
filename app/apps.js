const apps = [
    {
      id: 1,
      emoji: "🍳",
      title: "An app that generates recipes based on given ingredients.",
      description: "Yess, Chef!, a recipe suggestion app that uses Claude AI to help users decide what to cook based on the ingredients they have at home. I built the front end with React and handled API communication through a serverless function on Netlify. This project helped me explore working with AI integrations and managing environment variables in a serverless setup.",
      toolNames: ["React", "CSS", "Claude AI", "Netlify"],
      githubLink: "https://github.com/aysenuron/yes-chef",
      webLink: "https://yess-chef.netlify.app/"
    },
    {
      id: 2,
      emoji: "🐳",
      title: "A Chrome extension that loads a dashboard on every new tab.", 
      description: `A custom Chrome extension where each time I open a new tab, I'm greeted by a serene whale photograph fetched via the Unsplash API, along with live updates for the current weather, exchange rates, and time. The goal of this project was to explore API integration, Chrome extension architecture, and local development workflows.`,
      toolNames: ["HTML", "CSS", "JavaScript", "REST APIs", "Netlify"],
      githubLink: "https://github.com/aysenuron/chrome-new-tab-dashboard"
    },
    {
      id: 3,
      emoji: "🎬",
      title: "Watchlist app but you can only keep 10 films on the list at a time.",
      description: "A lightweight JavaScript app that uses the TMDb REST API to let users search for movies, preview posters, and build a personalized watchlist (up to 10 movies). The app leverages local storage to persist data and allows users to manage their list by removing watched titles. Built entirely with vanilla JavaScript and DOM manipulation for a seamless client-side experience.",
      toolNames: ["HTML", "CSS",  "JavaScript", "REST APIs", "Browser APIs (Local Storage)", "Netlify"],
      githubLink: "https://github.com/aysenuron/izle",
      webLink: "https://izle.netlify.app/"
    },
    {
      id: 4,
      emoji: "😻",
      title: "Cat meal tracker app that logs food type and amount with timestamp.",
      description: "Cat Meal Tracker is a simple front-end application to help pet owners track their cat’s daily dry and wet food portions. It features interactive controls, real-time updates, and local storage to preserve data throughout the day, resetting automatically each night for a fresh start. Designed for personal use with my own pet, the app offers a clean and intuitive interface that makes meal tracking effortless.",
      toolNames: ["HTML", "CSS",  "JavaScript", "Browser APIs (Local Storage)", "Netlify"],
      githubLink: "https://github.com/aysenuron/daily-cat-meal-tracker",
      webLink: "https://aysenuron.github.io/daily-cat-meal-tracker/"
    }
  ];

  export default apps;