const cc = [
  {
    id: 1,
    slug: "creative-coding-experiments",
    thumbnail: "/creative-coding/cc/cc1-thumbnail.png",
    video: "/creative-coding/cc/bike.mp4",
    className: "w-full",
    title: "Creative Coding Experiments",
    role: "Creative Programmer",
    time: "September - October 2025",
    description:
      "A collection of sketches exploring p5.js fundamentals, audio reactivity, and computational design.",
    longDescription:
      "I started with Daniel Shiffman's Coding Train beginner course, learning p5.js fundamentals through playful experiments. Later, I took Tim Rodenbröker's course, diving deeper into computational design principles. These sketches represent my learning journey—from basic shape manipulation to audio-reactive visualizations and image processing.",
    toolNames: ["p5.js"],
    features: [
      {
        videos: [
          "/creative-coding/cc/red-blue-circle.mp4",
          "/creative-coding/cc/3-dots.mp4",
        ],
        vidClassName: "w-full",
      },
      {
        items: [
          "There's something deeply satisfying about writing code that creates something beautiful and surprising.",
        ],
      },
      {
        videos: [
          "/creative-coding/cc/time.mp4",
          "/creative-coding/cc/stardust.mp4",
        ],
        vidClassName: "w-full",
      },
      {
        items: [
          "**Code as creative medium:** Programming isn't just functional—it's a way to think, experiment, and express ideas visually.",
        ],
      },
      {
        videos: [
          "/creative-coding/cc/rotating-circles.mp4",
          "/creative-coding/cc/rotating-squares.mp4",
        ],
        vidClassName: "w-full",
      },
      {
        items: [
          "**Iterative experimentation:** The best discoveries came from playing with parameters, breaking things, and following curiosity rather than planning everything upfront.",
        ],
      },
      {
        videos: [
          "/creative-coding/cc/dancing-patterns-1.mp4",
          "/creative-coding/cc/dancing-patterns-2.mp4",
        ],
        vidClassName: "w-full",
      },
      {
        items: [
          "Living in İzmir means frequent encounters with pelicans around the city. I've been photographing them for a while, and it felt natural to bring these images into my creative coding experiments.",
        ],
      },
      {
        videos: ["/creative-coding/cc/pelican-1.mp4"],
        vidClassName: "w-2/3",
      },
      {
        items: [
          "**Cursor Zoom Effect:** Created an interactive magnifying glass that follows the mouse, letting viewers explore details of pelican feathers and textures up close.",
        ],
      },
      {
        videos: ["/creative-coding/cc/pelican-2.mp4"],
        vidClassName: "w-2/3",
      },
      {
        items: [
          "**Pixelation:** Wrote code to break down the photographs into varying pixel sizes, creating mosaic-like interpretations.",
        ],
      },
      {
        videos: ["/creative-coding/cc/pelican-3.mp4"],
        vidClassName: "w-2/3",
      },
      {
        items: [
          "**ASCII Art Conversion:** Transformed pelican images into ASCII characters, mapping brightness values to different symbols.",
        ],
      },
    ],
    notes: [
      "This project was my very first time coding. Looking back at this code now, I can see approaches I'd change—perhaps using a framework for state management, more sophisticated validation, or more systematic CSS architecture. But that perspective only exists because of what this project taught me.",
      "One of the hardest parts came at the very end: collecting user emails. I didn’t know anything about setting up a backend or storing form submissions. After a lot of trial and error, I discovered that HubSpot could track non-HubSpot forms, and I hacked together a solution using their tracking code. What feels obvious to me now was a big breakthrough back then.",
    ],
    type: "creative-coding",
  },
];

export default cc;
