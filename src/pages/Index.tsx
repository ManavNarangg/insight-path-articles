import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { blogPosts, getTrendingPosts, getFeaturedPost, getRecentPosts } from "@/data/blogData";

const Index = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts();
  const trendingPosts = getTrendingPosts();

  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Featured Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 lg:h-[600px]">
          {/* Left Section - Two Recent Posts */}
          <div className="lg:col-span-3 space-y-6 h-full">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} variant="small" />
            ))}
          </div>

          {/* Center Section - Featured Post */}
          <div className="lg:col-span-6 h-full">
            <BlogCard post={featuredPost} variant="featured" />
          </div>

          {/* Right Section - Trending List */}
          <div className="lg:col-span-3 h-full">
            <h3 className="text-lg font-semibold mb-4">Trending</h3>
            <div className="space-y-3">
              {trendingPosts.map((post) => (
                <BlogCard key={post.id} post={post} variant="trending" />
              ))}
            </div>
          </div>
        </div>

        {/* All Articles Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
