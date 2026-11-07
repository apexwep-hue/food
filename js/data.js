/**
 * ============================================================================
 * CUSTOMIZATION AREA - SITE CONFIGURATION & CONTENT HUB
 * ============================================================================
 * Instructions for customization:
 * 1. EDIT BRAND COLORS & FONTS: Change the hexadecimal codes and font names in `SITE_CONFIG.theme`.
 * 2. EDIT COMPANY INFO: Update brandName, phone, whatsapp, email, address, and operating hours.
 * 3. UPDATE SOCIAL LINKS: Add full URLs or set to '#' to disable.
 * 4. EDIT MENU & CONTENT: Modify `SITE_DATA` arrays (menuItems, services, gallery, testimonials).
 * ============================================================================
 */

const SITE_CONFIG = {
  // Brand & Visual Identity
  brandName: "L'Étoile Modern Bistro",
  tagline: "Artisanal Cuisine & Specialty Coffee",
  logoText: "L'ÉTOILE",
  logoSubtext: "BISTRO & CAFÉ",
  
  // Theme Variables (Dynamic Injection)
  theme: {
    primaryColor: "#c5a059",      // Warm Gold / Brass
    primaryDark: "#a37f3a",       // Deep Brass
    secondaryColor: "#1a1e21",    // Luxury Charcoal / Slate
    accentColor: "#d96b43",       // Terracotta Accent
    backgroundColor: "#0d0f11",   // Dark Obsidian
    surfaceColor: "#14171a",      // Elevated Surface
    textColor: "#f4f4f6",         // Light Neutral
    textMuted: "#9ca3af",         // Soft Muted Gray
    fontHeading: "'Playfair Display', Georgia, serif",
    fontBody: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
  },

  // Business Profile & Contacts
  clientName: "Chef Julien Vance",
  jobTitle: "Executive Chef & Founder",
  companyName: "L'Étoile Hospitality Group",
  email: "reservations@letoile-bistro.com",
  phone: "+1 (555) 234-5678",
  whatsapp: "+15552345678",
  address: "742 Evergreen Terrace, Culinary District, NY 10001",
  mapsUrl: "https://maps.google.com",

  // Operating Hours
  workingHours: [
    { days: "Monday - Thursday", hours: "08:00 AM - 10:00 PM" },
    { days: "Friday - Saturday", hours: "08:00 AM - 11:30 PM" },
    { days: "Sunday", hours: "09:00 AM - 09:00 PM" }
  ],

  // Social Links
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tripadvisor: "https://tripadvisor.com",
    pinterest: "https://pinterest.com"
  },

  // Media Assets
  images: {
    heroBg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
    aboutBg: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    chefProfile: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    reservationBg: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
  },

  // SEO Defaults
  seo: {
    metaTitle: "L'Étoile | Fine Dining Restaurant & Specialty Café",
    metaDescription: "Experience artisanal dining, wood-fired gastronomy, and organic specialty coffee at L'Étoile Modern Bistro.",
    ogImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
  }
};

const SITE_DATA = {
  statistics: [
    { value: "12+", label: "Years of Culinary Excellence" },
    { value: "35+", label: "Artisanal Signature Dishes" },
    { value: "3", label: "Michelin Guide Stars" },
    { value: "98%", label: "Positive Guest Reviews" }
  ],

  services: [
    {
      id: "fine-dining",
      icon: "🍷",
      title: "À La Carte Dining",
      description: "Seasonally inspired tasting menus paired with sommelier-selected organic and biodynamic wines.",
      features: ["Seasonal Menu Updates", "Sommelier Wine Pairings", "Chef's Table Experience"]
    },
    {
      id: "specialty-cafe",
      icon: "☕",
      title: "Specialty Espresso Bar",
      description: "Single-origin micro-lot coffees roasted in-house, complemented by hand-crafted French viennoiseries.",
      features: ["Single-Origin Beans", "House-Made Pastries", "Artisanal Pour-Overs"]
    },
    {
      id: "private-events",
      icon: "✨",
      title: "Private Dining & Events",
      description: "Exclusive buyout of our private salon for corporate gatherings, weddings, and intimate celebrations.",
      features: ["Customized Menus", "Dedicated Event Manager", "AV & Sound System Included"]
    },
    {
      id: "catering",
      icon: "🍽️",
      title: "Bespoke Catering",
      description: "Bring the L'Étoile dining experience directly to your venue with full-service luxury catering.",
      features: ["On-Site Executive Chef", "Full Service Waitstaff", "Custom Bar Setup"]
    }
  ],

  menuCategories: ["All", "Starters", "Mains", "Desserts", "Specialty Coffee"],

  menuItems: [
    {
      id: "m1",
      category: "Starters",
      name: "Truffle & Forest Mushroom Soup",
      price: "$18",
      description: "Wild chanterelles, black truffle infusion, aged parmesan crisp, artisan sourdough.",
      tags: ["Vegetarian", "Chef's Pick"],
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m2",
      category: "Starters",
      name: "Seared Atlantic Sea Scallops",
      price: "$24",
      description: "Cauliflower purée, brown butter drizzle, crispy prosciutto, micro radish.",
      tags: ["Gluten-Free"],
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m3",
      category: "Mains",
      name: "Prime Dry-Aged Ribeye (12oz)",
      price: "$58",
      description: "Bone marrow butter, roasted heirloom carrots, truffle potato mousseline.",
      tags: ["Signature"],
      image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m4",
      category: "Mains",
      name: "Wild Pan-Roasted King Salmon",
      price: "$42",
      description: "Saffron risotto, charred asparagus, lemon confit emulsification.",
      tags: ["Gluten-Free"],
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m5",
      category: "Desserts",
      name: "Valrhona Dark Chocolate Soufflé",
      price: "$16",
      description: "70% dark chocolate center, Madagascar bourbon vanilla bean ice cream.",
      tags: ["Signature"],
      image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m6",
      category: "Specialty Coffee",
      name: "Geisha Single-Origin Pour Over",
      price: "$12",
      description: "Ethiopian Yirgacheffe notes of jasmine, bergamot, and sweet wild honey.",
      tags: ["Organic", "Direct Trade"],
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
    }
  ],

  gallery: [
    { id: "g1", title: "Main Dining Room Atmosphere", category: "Ambiance", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
    { id: "g2", title: "Signature Plating Artistry", category: "Culinary", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" },
    { id: "g3", title: "Espresso Bar & Pastry Corner", category: "Café", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80" },
    { id: "g4", title: "Private Wine Cellar Tasting Room", category: "Private Dining", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80" },
    { id: "g5", title: "Wood-Fired Grill Action", category: "Culinary", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80" },
    { id: "g6", title: "Outdoor Terrace Dining", category: "Ambiance", image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80" }
  ],

  testimonials: [
    {
      id: "t1",
      quote: "L'Étoile sets a new standard for modern gastronomy. The dry-aged ribeye with truffle mousseline was unforgettable.",
      author: "Eleanor Vance",
      role: "Food Critic, Michelin Guide Standard",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "t2",
      quote: "The specialty coffee lounge is my daily sanctuary. Their Geisha pour-over and freshly baked croissant are perfection.",
      author: "Marcus Sterling",
      role: "Architect & Regular Guest",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "t3",
      quote: "We hosted our corporate anniversary dinner in the private wine cellar. Impeccable service, wine pairing, and atmosphere.",
      author: "Sophia Laurent",
      role: "VP of Hospitality Group",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    }
  ],

  faqs: [
    {
      question: "Do I need a reservation in advance?",
      answer: "While we welcome walk-ins at our café and bar lounge, dinner reservations in the main dining room are highly recommended at least 3-5 days in advance."
    },
    {
      question: "Do you accommodate specific dietary restrictions?",
      answer: "Yes, our culinary team caters to vegetarian, vegan, gluten-free, and nut-allergy requirements. Please note dietary preferences when booking."
    },
    {
      question: "What is the dress code?",
      answer: "We recommend smart elegant or business casual attire. Athletic wear and beachwear are not permitted in the evening."
    },
    {
      question: "Can I host a private event or custom party?",
      answer: "Absolutely. We offer full buyout options as well as private salon bookings for intimate gatherings, complete with customized menus."
    }
  ]
};