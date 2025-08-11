export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  trending?: boolean;
}

export const categories = [
  "All",
  "Product", 
  "Fundraising",
  "Starting Up",
  "Management",
  "Engineering",
  "PR & Marketing",
  "Must-reads",
  "People & Culture"
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Linear's Path to Product-Market Fit — Quality and Craft > Speed and Scale",
    excerpt: "Linear CEO and co-founder Karri Saarinen unpacks the $1.25B company's slow and deliberate path to product-market fit.",
    content: "Last year, Visa announced the launch of the Visa Tokenized Asset Platform, a new infrastructure designed to help banks issue and manage stablecoins and tokenized deposits...",
    category: "Product",
    author: "Karri Saarinen",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "2", 
    title: "The Founder's Guide to Building a V1 of Customer Success",
    excerpt: "A CS leader who has built the function from the ground up shares where founders should start — from how to hire to the most important metrics to track.",
    content: "A CS leader who has built the function from the ground up shares where founders should start — from how to hire to the most important metrics to track...",
    category: "Starting Up",
    author: "Sarah Chen",
    date: "2024-01-14",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
  },
  {
    id: "3",
    title: "0-$5M: How to Go From Random Wins to Repeatable Revenue", 
    excerpt: "When every deal closes differently, how do you build repeatability? First Round Partner Meka Asonye shares proven tactics from founders and revenue...",
    content: "When every deal closes differently, how do you build repeatability? First Round Partner Meka Asonye shares proven tactics from founders and revenue leaders...",
    category: "Sales",
    author: "Meka Asonye",
    date: "2024-01-13", 
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
  },
  {
    id: "4",
    title: "A Tactical Guide to Managing Up: 30 Tips from the Smartest People We Know",
    excerpt: "Founders and execs from Apple, Rippling, Carta and more share their strategies for altitude shifting as a manager.",
    content: "Founders and execs from Apple, Rippling, Carta and more share their strategies for altitude shifting as a manager...",
    category: "Management",
    author: "Multiple Contributors",
    date: "2024-01-12",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    trending: true
  },
  {
    id: "5",
    title: "40 Favorite Interview Questions from Some of the Sharpest Folks We Know",
    excerpt: "From probing emotional intelligence to testing problem-solving skills, here are the questions that reveal true potential.",
    content: "From probing emotional intelligence to testing problem-solving skills, here are the questions that reveal true potential...",
    category: "People & Culture",
    author: "First Round Team",
    date: "2024-01-11",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop",
    trending: true
  },
  {
    id: "6",
    title: "How Superhuman Built an Engine to Find Product Market Fit",
    excerpt: "Rahul Vohra shares the framework that helped Superhuman achieve product-market fit in a crowded email market.",
    content: "Rahul Vohra shares the framework that helped Superhuman achieve product-market fit in a crowded email market...",
    category: "Product",
    author: "Rahul Vohra",
    date: "2024-01-10",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    trending: true
  },
  {
    id: "7",
    title: "The Remarkable Advantage of Abundant Thinking",
    excerpt: "Why shifting from scarcity to abundance mindset can transform your startup's trajectory and team dynamics.",
    content: "Why shifting from scarcity to abundance mindset can transform your startup's trajectory and team dynamics...",
    category: "Management",
    author: "Jennifer Kim",
    date: "2024-01-09",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
    trending: true
  },
  {
    id: "8",
    title: "Radical Candor — The Surprising Secret to Being a Good Boss",
    excerpt: "Kim Scott's framework for giving feedback that actually helps people grow while maintaining strong relationships.",
    content: "Kim Scott's framework for giving feedback that actually helps people grow while maintaining strong relationships...",
    category: "Management",
    author: "Kim Scott",
    date: "2024-01-08",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
    trending: true
  },
  {
    id: "9",
    title: "Deep Dive: A Primer on Stablecoins",
    excerpt: "Last year, Visa announced the launch of the Visa Tokenized Asset Platform, a new infrastructure designed to help banks issue and manage stablecoins and tokenized deposits.",
    content: "Last year, Visa announced the launch of the Visa Tokenized Asset Platform, a new infrastructure designed to help banks issue and manage stablecoins and tokenized deposits. This week, Stripe began testing a stablecoin pilot, aiming to help companies outside the U.S., and E.U. access U.S. dollars more easily through stablecoin payments. And just today, Mastercard announced new features that allow consumers to spend stablecoins and enable merchants throughout the world to receive them.",
    category: "Product",
    author: "Chamath Palihapitiya",
    date: "2024-04-29",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop"
  },
  {
    id: "10", 
    title: "Deep Dive: The Media Landscape - Sense-Making 2.0",
    excerpt: "Last week, Elon was on Joe Rogan's podcast talking about how the Associated Press had become a propaganda and misinformation platform.",
    content: "Last week, Elon was on Joe Rogan's podcast talking about how the Associated Press had become a propaganda and misinformation platform. This week, Stripe began testing a stablecoin pilot, aiming to help companies outside the U.S., and E.U. access U.S. dollars more easily through stablecoin payments.",
    category: "Must-reads",
    author: "Chamath Palihapitiya", 
    date: "2024-03-06",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop"
  },
  {
    id: "11",
    title: "The Art of Building in Public: Lessons from Indie Hackers",
    excerpt: "How transparency and community building can accelerate your startup's growth and create loyal customers.",
    content: "How transparency and community building can accelerate your startup's growth and create loyal customers...",
    category: "PR & Marketing",
    author: "Pieter Levels",
    date: "2024-01-07",
    readTime: "8 min read", 
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "12",
    title: "Engineering Culture: Building Teams That Ship Fast and Break Nothing",
    excerpt: "How to create an engineering culture that balances speed with quality, featuring insights from top tech companies.",
    content: "How to create an engineering culture that balances speed with quality, featuring insights from top tech companies...",
    category: "Engineering",
    author: "Kelsey Hightower",
    date: "2024-01-06",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
  }
];

export const getTrendingPosts = () => blogPosts.filter(post => post.trending).slice(0, 6);
export const getFeaturedPost = () => blogPosts.find(post => post.featured) || blogPosts[0];
export const getRecentPosts = () => blogPosts.filter(post => !post.featured).slice(0, 2);
export const getInsightsPosts = () => blogPosts.filter(post => post.category === "Product" || post.category === "Must-reads").slice(0, 10);
export const getPostsByCategory = (category: string) => 
  category === "All" ? blogPosts : blogPosts.filter(post => post.category === category);