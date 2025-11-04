const research = [
  {
    id: 1,
    slug: "there-used-to-be-a-movie-theater-here",
    researchLink:
      "https://www.tasarimile.net/there-used-to-be-a-movie-theater-here/",
    thumbnail: "/research/cinema/thumbnail.jpg",
    video: "/research/cinema/sinema-video.mp4",
    className: "w-full",
    title: "There Used to Be a Movie Theater Here",
    role: "Researcher & Designer",
    time: "August 2021",
    description:
      "Sticker intervention marking lost cinemas in Buca's historic district. QR codes linked to interactive map with historical photos and stories.",
    longDescription: `The project traces the cultural history of movie theaters between 1950-1990 in the historical area currently under protection in Buca. The project is the first phase of a larger research project, and rather than leaning on a discourse of nostalgia for old movie theaters, it aims to address urban memory as an immaterial and active part of the ongoing social production of space.`,
    toolNames: [],
    features: [
      {
        heading: "Stickers as Urban Markers",
        items: [
          'The core of the project was a guerrilla mapping intervention: we placed stickers reading "BURADA ESKİDEN SİNEMA VARDI" (There Used to Be a Movie Theater Here) with QR codes on buildings that once housed cinemas. Scanning the code took people to an interactive Google Map showing all former theater locations, with historical photos and stories for each site.',
          "**The stickers themselves became the project.** Some were removed within hours—a bank took theirs down the next day, a grocery store removed it immediately. These removals were as meaningful as the stickers that stayed, revealing tensions around who controls urban memory and which histories are welcome in commercial spaces.",
          "Other shop owners embraced them. Several remembered their buildings had been cinemas and shared stories we hadn't uncovered in our research. The stickers became conversation starters, prompting intergenerational exchanges about neighborhood history. Even people who just glanced at them in passing became participants—suddenly aware that the mundane storefront they walked by daily had once been a site of community gathering.",
          "**Field Research:** We conducted walking tours through Buca's protected historic district, researching former cinema locations through archival materials and interviews with long-time residents. Each site was photographed and documented, capturing how these spaces had transformed—theaters now housing shops, apartments, or standing abandoned.",
        ],
      },
      {
        img: "/research/cinema/1.jpg",
        imgClassName: "w-full",
      },
      {
        heading: "Design Approach",
        items: [
          "The stickers functioned as minimal, **low-tech interventions that activated maximum engagement.** Unlike a static exhibition that required people to visit a specific location, the stickers met people where they already were—on their daily routes through the neighborhood.",
          "We weren't trying to preserve these cinemas or advocate for their restoration. Instead, we asked: How does acknowledging a building's past change how we experience it in the present? The project treated urban memory not as something lost but as something continuously produced through everyday interaction with place.",
        ],
      },
      {
        img: "/research/cinema/2.jpg",
        imgClassName: "w-full",
      },
      {
        heading: "Impact & Reception",
        items: [
          "**Exhibition Opening:** We presented the research at Buca Kent Evi through photography, mapping visualizations, and archival materials, followed by an outdoor film screening that temporarily recreated the communal cinema experience these spaces once provided.",
          "The interactive map became a tool for continued exploration beyond the exhibition, allowing people to discover these sites on their own and contribute their own memories and stories.",
        ],
      },
    ],
    notes: [
      "This project happened in August 2021—scorching Izmir heat, still wearing masks indoors at the tail end of COVID. Walking through Buca all day, placing stickers, getting rejected by some shops and welcomed by others, was exhausting but also super fun.",
      "It taught me that effective design doesn't require sophisticated technology—a sticker with a QR code created layers of interaction from passive noticing to active engagement. The removals weren't failures; they were valuable data about who controls urban memory. Shop owners who remembered their buildings as cinemas became collaborators, contributing stories we never would have found otherwise.",
      'Unlike apps that require downloads or websites that need searching, the stickers worked because people stumbled upon them during their daily routines. **Creating "findable" rather than "searchable"** information—designing interventions that meet people where they already are—has shaped how I think about location-based design ever since.',
    ],
    extraInfo:
      "Exhibition & Mapping Project | Buca, Izmir | Collaboration with Derya Özkan | Part of tasarım ile / with design",
    type: "research",
  },
  {
    id: 2,
    slug: "neighborhood-kulturpark",
    thumbnail: "/research/kulturpark/thumbnail.png",
    img: "/research/kulturpark/thumbnail.png",
    className: "w-full",
    title: "Neighborhood Kulturpark: Aya Katerina Church Installation",
    role: "Designer & Ideation",
    time: "December 2023",
    description:
      "Low-tech AR experience making visible a church lost in Izmir's 1922 fire. Transparent panels align with the historical site when viewed from a specific angle, layering past and present.",
    longDescription: `This public installation revealed the ghost of Aya Katerina Church, Izmir's largest church before the devastating 1922 fire, by overlaying its historical footprint onto the landscape of Mahalle Kültürpark where it once stood.
Created during a workshop at İyi Tasarım (Good Design Izmir), Izmir's annual design week featuring workshops, panels, and public interventions, this project aimed to restore visibility to the cultural heritage lost in the 1922 fire that destroyed much of the city's pre-fire urban fabric.`,
    toolNames: [],
    features: [
      {
        img: "/research/kulturpark/4.png",
        imgClassName: "w-1/2",
        heading: "Historical Context",
        items: [
          "In 1922, a devastating fire swept through Izmir, destroying much of the city's Armenian and Greek quarters.",
          "**Aya Katerina Church, built in 1857, was one of the casualties.** It wasn't just a religious building; the church gave its name to the entire neighborhood.",
          "After the fire, **the destroyed area was gradually transformed into Kültürpark** in the 1930s—a massive public park that erased the previous street grid and settlement patterns.",
        ],
      },
      {
        heading: "Analog Augmented Reality",
        items: [
          "We created a **low-tech AR experience** using transparent acrylic panels printed with a photograph of the church's facade. The magic happened through precise positioning—**when you stood at the designated viewing point and looked through the panel, the church image aligned perfectly with its actual historical location in the landscape behind it.** The transparency allowed current reality (palm trees, park visitors, modern buildings) to show through the historical image, creating a layered view of past and present occupying the same space.",
        ],
      },
      {
        img: "/research/kulturpark/2.png",
        imgClassName: "w-full lg:w-2/3",
      },
      {
        heading: "Impact",
        items: [
          `The installation was up for several days during İyi Tasarım, creating conversations among park visitors about Izmir's lost architectural heritage.`,
        ],
      },
    ],
    notes: [
      `This project crystallized something I love about public installations—they're not static objects to be passively consumed but experiences that are reproduced with every interaction. Each person who found the viewing angle, saw the church align, and experienced that "aha" moment was actively participating in revealing this lost history. The installation didn't just tell people about Aya Katerina; it required them to physically position themselves, to search for the right angle, to discover the church for themselves.`,
      "I'm drawn to projects like this—ones that need human participation to complete them, where the design creates conditions for experience rather than delivering a finished message.",
    ],
    type: "research",
    extraInfo: "Workshop Project | İyi Tasarım_8 Design Week, Izmir",
  },
];

export default research;
