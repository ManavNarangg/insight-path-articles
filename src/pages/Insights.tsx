import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getInsightsPosts } from "@/data/blogData";

const Insights = () => {
  const insightsPosts = getInsightsPosts();

  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Deep Dives</h1>
          <p className="text-lg text-muted-foreground">
            In-depth analysis and insights on the latest trends in technology, business, and innovation.
          </p>
        </div>

        <div className="space-y-6">
          {insightsPosts.map((post) => (
            <BlogCard key={post.id} post={post} variant="insights" />
          ))}
        </div>

        {insightsPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No insights available at the moment.</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Insights;