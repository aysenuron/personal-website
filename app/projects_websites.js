const websites = [
  {
    id: 1,
    slug: "buy-and-bill-landing-page",
    thumbnail:
      "/websites/buy-and-bill-landing-page/buy-and-bill-landing-page-thumbnail.png",
    video:
      "/websites/buy-and-bill-landing-page/buy-and-bill-landing-page-video.mp4",
    className: "w-full",
    title: "Buy & Bill Landing Page",
    role: "Web Designer & Developer",
    time: "January - February 2025",
    description:
      "A conversion-focused landing page with A/B testing to determine whether healthcare providers respond better to product features or financial outcomes when evaluating inventory management software.",
    longDescription:
      "A landing page for PULSE's Buy & Bill module featuring A/B tested hero sections: Variant A emphasized product capabilities with dashboard screenshots, while Variant B led with quantified savings ($40k/month breakdown). Testing determined which value proposition drove higher engagement with the embedded ROI calculator and demo requests.",
    toolNames: ["Webflow", "GA4", "Google Tag Manager", "HubSpot"],
    features: [
      {
        heading: "Challenge",
        img: "",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "Healthcare providers evaluating inventory management solutions needed to understand how PULSE's Buy & Bill module addresses their operational challenges. The marketing team faced a strategic question: should the page lead with product capabilities or financial impact?",
          "This required designing two distinct value propositions that could be tested while maintaining consistent messaging throughout the remainder of the page. The challenge involved balancing lead generation goals with providing sufficient information for qualified prospects to self-assess fit.",
        ],
      },
      {
        heading: "Key Objectives",
        img: "",
        imgClassName: "w-1/2 lg:w-1/3",
        items: [
          "**•** Communicate product value clearly to time-constrained healthcare administrators",
          "**•** Drive engagement with the embedded ROI calculator",
          "**•** Generate qualified demo requests",
          "**•** Test messaging approaches to inform broader marketing strategy",
        ],
      },
      {
        heading: "Content Architecture",
        items: [
          "**Hero section** - Value proposition (A/B tested variant)",
          "**Why Use Pulse** - Feature benefits with icon-based visual hierarchy",
          "**Buy & Bill Lifecycle** - Process visualization explaining workflow integration",
          "**ROI Calculator** - Interactive tool embedded mid-page",
          "**Integration Partners** - Logos demonstrating ecosystem compatibility",
          "**Customer Testimonials** - Quantified savings data from existing users",
          "**Call to Action** - Demo request positioned after value establishment",
          "Each section serves a specific function in moving prospects through awareness, consideration, and decision stages.",
        ],
      },
      {
        heading: "The A/B Test",
        items: [
          "**Hypothesis:** Healthcare administrators prioritize financial outcomes over technical features when evaluating software purchases. Leading with quantified savings would outperform feature-focused messaging.",
          "**Only the hero section differed between variants.** All subsequent content remained identical to isolate the variable being tested—initial value proposition framing. This approach provided cleaner data on which messaging approach drove stronger initial engagement.",
        ],
      },
      {
        heading: "Variant A: Product-Focused",
        img: "/websites/buy-and-bill-landing-page/buy-and-bill-landing-page-thumbnail.png",
        imgClassName: "w-full h-fit my-auto lg:mr-16",
        items: [
          '**•** Headline **emphasized workflow:** "Streamline Buy & Bill"',
          "**•** Hero imagery displayed the PULSE product interface with **dashboard screenshots**",
          "**•** **Benefits listed** (claim denials reduction, appointment cancellations prevention, capital management) as outcomes of using the system",
        ],
      },
      {
        heading: "Variant B: Profit-Focused",
        img: "/websites/buy-and-bill-landing-page/buy-and-bill-landing-page-thumbnail.png",
        imgClassName: "w-full h-fit my-auto pb-4 lg:mr-16",
        items: [
          '**•** Led with **specific financial impact:** "Save $40k/month with Pulse Buy & Bill""',
          '**•** Hero section displayed a breakdown of four specific savings categories with dollar amounts. Rather than generic "save money" messaging, **Variant B displayed exact dollar amounts with visible calculation breakdowns.** This specificity served dual purposes: demonstrating confidence in the value proposition and providing verifiable claims that build trust.',
          "**•** **Visual featured healthcare provider** with calculated savings displayed prominently",
          "**•** Included disclaimer: The numbers are based on **customers' statistical data**",
        ],
      },
      {
        heading: "Technical Implementation",
        items: [
          "**Webflow Optimize Integration:** Implemented split testing using Webflow's Optimize add-on with A/B testing functionality - 50/50 traffic split between variants",
          "**HubSpot Integration:** Connected form submissions to HubSpot. Also, pipeline tracking from demo request through close",
          "**Analytics Strategy:** Tracked demo request form submissions, ROI calculator completions with email capture, and ccroll depth to specific page sections, time on page, bounce rate via GA4 and Hotjar",
        ],
      },
      {
        heading: "Results & Insights",
        items: [
          "The profit-focused variant (B) demonstrated stronger engagement metrics, particularly with ROI calculator interaction. Prospects exposed to quantified savings in the hero section showed higher likelihood of scrolling to the calculator and completing the full flow.",
          "This validated the hypothesis that healthcare decision-makers prioritize financial impact over technical capabilities in initial evaluation. Feature explanations remained important for later-stage consideration, but leading with outcomes improved top-of-funnel engagement.",
        ],
      },
    ],
    learned: [
      "**Quantification Builds Credibility:** Specific numbers with visible calculation methodology proved more persuasive than generic savings claims. The breakdown showing individual cost categories (billing accuracy, inventory loss, labor costs) demonstrated that figures derived from actual operational analysis rather than marketing exaggeration.",
      "**Isolation of Variables:** Testing only the hero section while maintaining consistency throughout the rest of the page provided interpretable data. Testing multiple changes simultaneously would have obscured which specific element drove behavioral differences.",
      `**Outcomes Before Features:** For B2B software purchases, especially in cost-sensitive healthcare environments, financial impact takes precedence over feature lists. Variant B's direct approach ("Save $40k/month") addressed the prospect's primary evaluation criterion immediately.`,
    ],
    notes: [
      "Getting demos is always tough, especially for a startup. Version A of the page didn’t bring in a single demo after two months. Version B got two — not huge numbers, but still an important difference.",
      "What I realized is that the hero section has to earn attention fast. Almost every SaaS site shows a dashboard right at the top, and people are probably tired of seeing the same thing over and over. If you’re just landing on our site, you probably don’t want to decode a product screenshot first — you want to know why it’s worth your time.",
      "That’s what worked better about Version B. It opened with savings data and a breakdown, which gave people trust that the numbers were real. Then we added a secondary button linking to the ROI calculator, so people could check the math themselves.",
      "This project taught me that a hero section doesn’t just introduce a product — it has to give people a reason to keep reading.",
      "PS This page isn’t live anymore. A few months later, the company rebranded with a new logo and site, so the old design isn’t there now.",
    ],
    type: "websites",
  },
];

export default websites;
