const websites = [
  {
    id: 1,
    slug: "buy-and-bill-landing-page",
    thumbnail:
      "/websites/buy-and-bill-landing-page/buy-and-bill-landing-page-thumbnail.png",
    video:
      "/websites/buy-and-bill-landing-page/buy-and-bill-landing-page-video.mp4",
    className: "w-full",
    title: "Buy & Bill Landing Page - A/B Testing",
    role: "Web Designer & Developer",
    time: "January - February 2025",
    description:
      "A conversion-focused landing page with A/B testing to determine whether healthcare providers respond better to product features or financial outcomes when evaluating inventory management software.",
    toolNames: ["Webflow", "GA4", "Google Tag Manager", "HubSpot"],
    features: [
      {
        heading: "Overview",
        items: [
          "I designed two hero variants for the same landing page:",
          "**A** → product-first (interface, features)",
          "**B** → profit-first ($40k/month breakdown)",
          "All other page content remained identical. The test measured which framing drove higher engagement with the embedded ROI calculator + demo requests.",
        ],
      },
      {
        heading: "Challenge",
        img: "",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "Healthcare providers evaluating inventory management solutions needed to understand how PULSE's Buy & Bill module addresses their operational challenges. The marketing team faced a strategic question: should the page lead with **product capabilities or financial impact?**",
          "This required two distinct hero sections — while keeping downstream messaging consistent.",
        ],
      },
      {
        heading: "Key Objectives",
        img: "",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "**•** Communicate product value clearly to **time-constrained healthcare providers**",
          "**•** Drive engagement with the embedded **ROI calculator**",
          "**•** Generate **qualified demo requests**",
          "**•** **Test messaging approaches** to inform broader marketing strategy",
        ],
      },
      {
        heading: "Content Architecture",
        items: [
          "Hero (A/B variant)",
          "Why Pulse (feature benefits)",
          "Buy & Bill lifecycle visualization",
          "ROI Calculator",
          "Integration partners",
          "Testimonials w/ quantified savings",
          "CTA (demo)",
        ],
      },
      {
        heading: "Variant A: Product-Focused",
        img: "/websites/buy-and-bill-landing-page/buy-and-bill-landing-page-a.png",
        imgClassName: "w-full h-fit my-auto py-4 lg:mr-16",
        items: [
          "**•** Headline **emphasized workflow**",
          "**•** Hero imagery displayed the PULSE product interface with **dashboard screenshots**",
          "**•** **Benefits listed** as outcomes of using the system",
        ],
      },
      {
        heading: "Variant B: Profit-Focused",
        img: "/websites/buy-and-bill-landing-page/buy-and-bill-landing-page-thumbnail.png",
        imgClassName: "w-full h-fit my-auto pb-4 lg:mr-16",
        items: [
          "**•** Led with **specific financial impact**",
          '**•** Rather than generic "save money" messaging, **Variant B displayed exact dollar amounts with visible calculation breakdowns.** This specificity served dual purposes: demonstrating confidence in the value proposition and providing verifiable claims that build trust.',
          "**•** **Visual featured healthcare provider** with calculated savings displayed prominently",
          "**•** Included disclaimer: The numbers are based on **customers' statistical data**",
        ],
      },
      {
        heading: "Technical Implementation",
        items: [
          "**Webflow Optimize:** Implemented split testing using Webflow's Optimize add-on with A/B testing functionality - 50/50 traffic split between variants",
          "**HubSpot Integration:** Connected form submissions to HubSpot. Also, pipeline tracking from demo request through close",
          "**Analytics Strategy:** Tracked demo request form submissions, ROI calculator completions with email capture, and bounce rate via GA4",
        ],
      },
      {
        heading: "Results",
        img: "/websites/buy-and-bill-landing-page/chart.png",
        imgClassName: "w-full h-fit my-auto p-16",
        items: [
          "Chart uses placeholder values to protect company confidentiality.",
          "In our test **the profit-focused variant -B- outperformed the product-focused variant -A- on demo requests** (relative uplift shown).",
        ],
      },
      {
        heading: "Tracking & Analytics Challenges",
        items: [
          "Webflow Optimize tracked test performance within its own dashboard, showing views and conversion rates for each variant. However, this data remained isolated—HubSpot and Google Analytics couldn't attribute which variant drove specific demo requests because both versions used the same button elements and destinations.",
          "Since Webflow Optimize was a newly released feature at the time, we implemented a verification system to ensure accurate cross-platform tracking:",
          "**Dual-Path Attribution System:**",
          `**•** Created two separate "Schedule a Demo" form pages (Version A and Version B)`,
          "**•** Built separate demo request forms for each version in HubSpot",
          "**•** Variant A button → Demo Page A → Form A",
          "**•** Variant B button → Demo Page B → Form B",
          "**•** Buttons appeared identical to users but had different technical implementations",
          "This parallel tracking system allowed HubSpot to show exactly which variant each demo request originated from, providing verification against Webflow's native metrics.",
          `**Discrepancy Discovery:** When comparing data sources, Webflow Optimize's reported "conversions" exceeded the actual number of users who reached the demo scheduling pages. This suggested Webflow's conversion tracking captured broader engagement events (potentially button interactions, scroll depth, or other engagement signals) rather than strictly measuring demo form page visits.`,
        ],
      },
    ],
    learned: [
      "Quantified outcomes outperform dashboard-first messaging in cost-sensitive B2B healthcare",
      "Isolating a single variable makes test results interpretable",
      "Hero framing sets expectation — people want reason → then product",
    ],
    notes: [
      "Getting demos is always tough, especially for a startup. Version A of the page didn’t bring in a single demo after two months. Version B got a few — not huge numbers, but still an important difference. (I cannot display the real numbers due to company confidentiality.)",
      "What I realized is that the hero section has to earn attention fast. Almost every SaaS site shows a dashboard right at the top, and people are probably tired of seeing the same thing over and over. If you’re just landing on our site, you probably don’t want to decode a product screenshot first — you want to know why it’s worth your time.",
      "That’s what worked better about Version B. It opened with savings data and a breakdown, which gave people trust that the numbers were real. Then we added a secondary button linking to the ROI calculator, so people could check the math themselves.",
      "PS This page isn’t live anymore. A few months later, the company rebranded with a new logo and site, so the old design isn’t there now.",
    ],
    type: "websites",
  },
  {
    id: 2,
    slug: "cubtale",
    thumbnail: "/websites/cubtale/thumbnail.png",
    video: "/websites/cubtale/cubtale.mp4",
    className: "w-full",
    title: "Cubtale Landing Page",
    role: "Web Designer & Developer",
    time: "April 2025",
    webLink: "https://cubtale.netlify.app/",
    githubLink: "https://github.com/aysenuron/cubtale",
    description:
      "A sponsor-focused landing page for Cubtale, a baby care tracking app.",
    toolNames: ["React", "Framer Motion", "Netlify"],
    features: [
      {
        heading: "Overview",
        items: [
          "Cubtale is a baby care tracking app that helps parents across the US navigate the everyday rhythms of infant care—feeding schedules, sleep patterns, diaper changes, and all the small but significant moments that make up early parenthood. Cubtale approached me to create a landing page targeting potential brand sponsors. The page needed to communicate the app's reach and value proposition while reflecting its warm, parent-friendly brand identity.",
          "The Cubtale team reached out to me to design and develop a landing page—not for parents, but **for potential sponsors and brand partners.** They wanted to showcase the app's reach and demonstrate how brands could integrate meaningfully into these daily caregiving touchpoints where parents are already paying attention.",
        ],
      },
      {
        heading: "Outcome",
        items: [
          "Working with content and brand guidelines provided by Cubtale, I built a focused landing page using **React and Framer Motion.** The challenge was to create something sponsor-facing while maintaining the **warmth and approachability** that defines Cubtale's existing brand identity. I incorporated **LottieFiles animations to add personality and movement** without overwhelming the message, keeping the page light and engaging.",
          "My focus was ensuring the landing page felt like a natural extension of the app's established visual language—soft color palette, gentle micro-animations, and an overall sense of cuteness and care. The result is a **conversion-focused page** that speaks to brands while staying true to Cubtale's core aesthetic.",
        ],
      },
    ],
    type: "websites",
  },
  {
    id: 3,
    slug: "employment-leaders",
    thumbnail: "/websites/employment-leaders/thumbnail.png",
    video: "/websites/employment-leaders/employment-leaders.mp4",
    className: "w-full",
    title: "Employment Leaders Website",
    role: "Web Designer & Developer",
    time: "February 2025",
    webLink: "https://employmentleaders.com/",
    githubLink: "https://github.com/aysenuron/employment-leaders-website",
    description:
      "A single-page website for a US-based recruitment firm with over 35 years of industry experience.",
    toolNames: ["HTML", "CSS", "JavaScript", "Netlify"],
    features: [
      {
        heading: "Overview",
        items: [
          "Employment Leaders is a strategic recruitment firm based in the United States, founded by Steve Hutton in 1989.",
          "The owner reached out to me requesting a simple, single-page website for the company. He wanted something straightforward that could effectively communicate their services, expertise, and long-standing reputation without unnecessary complexity.",
        ],
      },
      {
        heading: "Outcome",
        items: [
          "This project came to me when I was first learning to code, so I built it using **basic HTML, CSS, and JavaScript**—keeping things simple and focused on fundamentals. I focused on a minimal, clean design that reflects the company's established presence and professional approach. Given that Employment Leaders was founded in 1989 and maintains a more traditional, relationship-driven business model, I selected a **serif typeface** that feels both old-school and classy—honoring their decades of experience while keeping the overall aesthetic modern and refined.",
          "The single-page layout presents their areas of expertise, notable achievements, client testimonials, and company history in a digestible, scrollable format. The design prioritizes **readability and credibility,** letting their impressive track record and client relationships speak for themselves. I deployed the site using Netlify.",
        ],
      },
    ],
    type: "websites",
  },
];

export default websites;
