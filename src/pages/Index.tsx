import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getFeaturedPost, getRecentPosts, getTrendingPosts } from "@/data/blogData";

const Index = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts();
  const trendingPosts = getTrendingPosts();

  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Section - Recent Posts */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Recent</h2>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} variant="small" />
                ))}
              </div>
            </div>
          </div>

          {/* Center Section - Featured Post */}
          <div className="lg:col-span-6">
            <BlogCard post={featuredPost} variant="featured" />
          </div>

          {/* Right Section - Trending */}
          <div className="lg:col-span-3">
            <div>
              <h2 className="text-lg font-semibold mb-4">Trending</h2>
              <div className="space-y-3">
                {trendingPosts.map((post) => (
                  <BlogCard key={post.id} post={post} variant="trending" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
