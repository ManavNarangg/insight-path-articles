export interface Resource {
  id: string;
  title: string;
  description: string;
  type: "article" | "book";
  author: string;
  readTime?: string;
  pages?: number;
  image: string;
  category: string;
  featured?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
  gradient: string;
}

export const pathToSuccessCollections: Collection[] = [
  {
    id: "leadership",
    title: "If you're seeking to improve as a leader:",
    description: "Essential reads for developing leadership skills and building high-performing teams.",
    gradient: "from-purple-100 to-pink-100",
    resources: [
      {
        id: "leadership-1",
        title: "The 5 Levels of Leadership",
        description: "John C. Maxwell's proven roadmap for developing influence and leading at the highest level.",
        type: "book",
        author: "John C. Maxwell",
        pages: 304,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
        category: "Leadership",
        featured: true
      },
      {
        id: "leadership-2", 
        title: "How to Give Feedback That Actually Helps People Grow",
        description: "A comprehensive guide to giving constructive feedback that drives performance and development.",
        type: "article",
        author: "Kim Scott",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
        category: "Management"
      },
      {
        id: "leadership-3",
        title: "Building High-Performance Teams in Remote Environments", 
        description: "Strategies for creating collaborative and productive teams in distributed work settings.",
        type: "article",
        author: "Patrick Lencioni",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop",
        category: "Team Building"
      }
    ]
  },
  {
    id: "entrepreneurship",
    title: "If you're thinking about starting a company:",
    description: "Advice for pressure-testing ideas, finding co-founders, and taking the entrepreneur's leap.",
    gradient: "from-blue-100 to-purple-100",
    resources: [
      {
        id: "startup-1",
        title: "The Lean Startup",
        description: "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
        type: "book", 
        author: "Eric Ries",
        pages: 336,
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
        category: "Entrepreneurship",
        featured: true
      },
      {
        id: "startup-2",
        title: "The Complete Guide to Finding Your Co-Founder",
        description: "Everything you need to know about finding, evaluating, and partnering with a co-founder.",
        type: "article",
        author: "Anna Vital",
        readTime: "15 min read", 
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop",
        category: "Co-founders"
      },
      {
        id: "startup-3",
        title: "Zero to One",
        description: "Notes on startups, or how to build the future by creating something entirely new.",
        type: "book",
        author: "Peter Thiel",
        pages: 224,
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
        category: "Innovation"
      }
    ]
  },
  {
    id: "growth",
    title: "If you're looking to scale your business:",
    description: "Strategic insights for growing sustainable businesses and managing rapid expansion.",
    gradient: "from-green-100 to-blue-100",
    resources: [
      {
        id: "growth-1",
        title: "Blitzscaling",
        description: "The lightning-fast path to building massively valuable companies.",
        type: "book",
        author: "Reid Hoffman",
        pages: 336,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        category: "Scaling",
        featured: true
      },
      {
        id: "growth-2",
        title: "The Growth Hacker's Guide to Customer Acquisition",
        description: "Proven strategies for finding and acquiring customers at scale.",
        type: "article", 
        author: "Sean Ellis",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
        category: "Marketing"
      },
      {
        id: "growth-3",
        title: "Scaling Teams",
        description: "Strategies for building and managing teams during periods of rapid growth.",
        type: "book",
        author: "Alexander Grosse",
        pages: 288,
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
        category: "Team Management"
      }
    ]
  }
];

export const getFeaturedResources = (): Resource[] => {
  return pathToSuccessCollections
    .flatMap(collection => collection.resources)
    .filter(resource => resource.featured);
};

export const getAllResources = (): Resource[] => {
  return pathToSuccessCollections.flatMap(collection => collection.resources);
};

export const getResourcesByType = (type: "article" | "book"): Resource[] => {
  return getAllResources().filter(resource => resource.type === type);
};