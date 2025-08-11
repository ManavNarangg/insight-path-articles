import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import CategoryFilter from "@/components/CategoryFilter";
import { getPostsByCategory } from "@/data/blogData";

const PathToSuccess = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredPosts = getPostsByCategory(selectedCategory);

  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Path to Success</h1>
          <p className="text-lg text-muted-foreground">
            Discover insights, strategies, and stories from successful founders and leaders.
          </p>
        </div>

        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts found in this category.</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default PathToSuccess;