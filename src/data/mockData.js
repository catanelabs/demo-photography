// Placeholder Mock Data for Local Photography Business Template

export const STUDIO_INFO = {
  name: "KAVIN & CO. WEDDING STORIES",
  shortName: "KAVIN & CO.",
  founderName: "Kavin Sundaram",
  tagline: "FINE ART WEDDING PHOTOGRAPHY & FILMS",
  heroQuote: "Stories that still feel alive years later.",
  heroSubtext: "Wedding photography & films crafted around the people, moments and chaos that make your day yours.",
  phone: "+91 00000 00000",
  whatsappNumber: "910000000000",
  email: "hello@kavinandco.com",
  instagram: "@kavinandco.weddings",
  address: "No. 42, ECR Main Road, Adyar, Chennai, Tamil Nadu - 600020",
  experienceYears: 10,
  weddingsCovered: 350,
  locations: ["Chennai", "Vellore", "Bangalore", "Pondicherry", "Destination"],
};

export const FEATURED_STORIES = [
  {
    id: "story-1",
    couple: "Arun × Priya",
    location: "Chennai",
    venue: "Beach Resort Venue",
    year: "2026",
    tag: "Traditional & Candid",
    coverImage: "/images/hero.jpg",
    galleryImages: [
      "/images/hero.jpg",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
    ],
    snippet: "A sun-kissed coastal wedding featuring traditional Muhurtham rituals and an energetic evening reception.",
    fullStory: "Priya and Arun wanted a wedding that honored deep cultural heritage without feeling stiff or performative. From the dawn Nadaswaram notes during the Muhurtham to the electric celebration by the beach, we captured every subtle glance and joyous burst of laughter.",
    photographerNote: "The natural golden lighting at sunrise created breathtaking soft warmth. We focused on non-intrusive 85mm prime lens portraiture to keep the couple completely present.",
    highlights: ["2-Day Coverage", "Coastal Muhurtham", "Drone Aerials", "Handcrafted Velvet Album"]
  },
  {
    id: "story-2",
    couple: "Karthik × Divya",
    location: "Vellore",
    venue: "Heritage Royal Hall",
    year: "2026",
    tag: "Heritage & Cinematic",
    coverImage: "/images/prewedding.jpg",
    galleryImages: [
      "/images/prewedding.jpg",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80"
    ],
    snippet: "Grand heritage courtyard celebrations amidst stone architecture, marigold blooms, and family laughter.",
    fullStory: "Set against historic architecture, Divya and Karthik brought together close loved ones. The energy was raw and real—family elders blessing the couple, spontaneous dancing, and quiet tender moments between ceremonies.",
    photographerNote: "Controlling ambient contrasts in heritage halls required soft off-camera lighting and candid timing.",
    highlights: ["Heritage Venue", "Cinematic 4K Film", "Live Broadcast", "3 Photographers"]
  },
  {
    id: "story-3",
    couple: "Siddarth × Meera",
    location: "Pondicherry",
    venue: "French Quarter Villa & Beach",
    year: "2026",
    tag: "Pre-Wedding & Sunset",
    coverImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80"
    ],
    snippet: "An intimate pastel session strolling through colonial lanes ending with blue hour twilight by the crashing waves.",
    fullStory: "Meera and Siddarth wanted their pre-wedding session to feel like an effortless romantic getaway rather than an awkward photo shoot.",
    photographerNote: "Zero stiff poses. We simply asked them to walk, tell stories, and enjoy the sunset while we captured candid frames.",
    highlights: ["Sunset Twilight", "Colonial Aesthetic", "Short Concept Reel"]
  }
];

export const SERVICES = [
  {
    id: "wedding-photography",
    title: "Wedding Photography",
    tagline: "Candid moments, sacred rituals, family portraits",
    description: "Comprehensive coverage of your Muhurtham, Sangeet, and Reception. We pair non-obtrusive candid photojournalism with refined traditional group portraits so every generation is honored.",
    features: [
      "Lead Candid Specialist + Traditional Lead",
      "Full high-res edited digital library",
      "Private online client gallery",
      "Signature highlight color grading"
    ],
    icon: "camera"
  },
  {
    id: "wedding-films",
    title: "Wedding Films",
    tagline: "Cinematic trailers, documentary reels, traditional video",
    description: "We craft emotional 4K feature films that capture audio vows, family laughs, and live ambient music. Cinema-grade cameras, drone aerials, and sound design.",
    features: [
      "3-5 min Cinematic Teaser Reel",
      "15-20 min Story Feature Film",
      "Complete ceremony document film",
      "4K aerial drone footage"
    ],
    icon: "film"
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding Sessions",
    tagline: "Unscripted couple portraits in scenic locations",
    description: "A relaxed 4-6 hour session before the wedding madness starts. Beach sunsets, heritage estates, or urban streets—designed to help you feel confident in front of the camera.",
    features: [
      "Custom location scouting",
      "Concept planning & styling coordination",
      "30+ finely retouched signature art prints",
      "Instagram Announcement Reel"
    ],
    icon: "heart"
  },
  {
    id: "other-events",
    title: "Receptions & Special Functions",
    tagline: "Engagements, Babyshowers, Birthdays & Milestones",
    description: "Dedicated single-event or multi-day function coverage with fast preview delivery so you can share memories with family immediately.",
    features: [
      "4-8 hours flexible event coverage",
      "Instant 24-hour social preview photos",
      "Full family group coverage",
      "High resolution raw backup guarantee"
    ],
    icon: "calendar"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Candid-First Philosophy",
    desc: "We focus on real interactions rather than constantly pausing ceremony rituals to force fake smiles.",
    icon: "sparkles"
  },
  {
    title: "Experienced Multi-Crew Team",
    desc: "Multiple specialized photographers and videographers who sync seamlessly during high-speed ceremonies.",
    icon: "users"
  },
  {
    title: "48-Hour Preview Delivery",
    desc: "Receive 50 curated, color-graded sneak peek photographs within 48 hours of your wedding day.",
    icon: "zap"
  },
  {
    title: "Handcrafted Luxury Albums",
    desc: "Custom designed, archival flush-mount leather or linen albums printed on non-fading museum paper.",
    icon: "book"
  },
  {
    title: "Transparent Local & Travel Terms",
    desc: "Clear upfront quote covering local and travel dates with zero surprise costs.",
    icon: "shield"
  }
];

export const TESTIMONIALS = [
  {
    id: "t1",
    couple: "Priya & Arun",
    event: "Wedding · Chennai",
    date: "2026",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    text: "We barely noticed the cameras during the ceremony. When we received the photos, we remembered tender moments we had completely forgotten in the blur of the day!",
    rating: 5
  },
  {
    id: "t2",
    couple: "Divya & Karthik",
    event: "Wedding · Vellore",
    date: "2026",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    text: "The team treated our families like their own. My grandparents were so comfortable around them. Delivered our 48-hour previews so fast we could post them right away!",
    rating: 5
  },
  {
    id: "t3",
    couple: "Meera & Siddarth",
    event: "Pre-Wedding · Pondicherry",
    date: "2025",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    text: "The pre-wedding photos felt like a date, not a photoshoot. Authentic framing, gorgeous lighting, and zero cringey forced poses.",
    rating: 5
  }
];

export const FAQS = [
  {
    q: "How early should we book our wedding date?",
    a: "We usually take bookings 6 to 12 months in advance, especially for popular auspicious dates. Since we only take one major wedding per date to ensure full personal focus, early booking is recommended."
  },
  {
    q: "Do you travel outside our main city?",
    a: "Yes! We regularly travel for weddings, pre-weddings, and destination events across regions."
  },
  {
    q: "How many crew members will cover our wedding?",
    a: "Depending on your specific requirements, our team ranges from a tight 2-person team for intimate rituals to a multi-member crew (candid photo, traditional photo, cinematographers, drone operator) for grand celebrations."
  },
  {
    q: "When will we receive our photographs and films?",
    a: "You get a curated Sneak Peek Preview within 48 hours. The complete edited digital gallery is delivered within 4 to 5 weeks. Physical albums are delivered after you approve your layout design."
  },
  {
    q: "Do you provide raw unedited photographs?",
    a: "Yes! We can provide raw unedited high-resolution files on an external hard drive upon request."
  }
];

export const SERVICE_AREAS = [
  { name: "Chennai & ECR Coastal", desc: "Local Marriage Halls, Beach Resorts, City Temples", status: "Primary Base" },
  { name: "Vellore & Ranipet Region", desc: "Heritage Halls & Convention Centers", status: "Frequent Coverage" },
  { name: "Bangalore & Mysuru", desc: "Town Mandapams & Countryside Estates", status: "Frequent Coverage" },
  { name: "Destination Weddings", desc: "Palace Grounds, Eco Resorts, Beachfronts", status: "Travel Coverage" }
];

