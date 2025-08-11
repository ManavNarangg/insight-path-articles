import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { blogPosts, getTrendingPosts } from "@/data/blogData";

const Index = () => {
  const trendingPosts = getTrendingPosts();

  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Trending Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Trending</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* All Articles Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
