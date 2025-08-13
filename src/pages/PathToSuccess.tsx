import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ResourceCard from "@/components/ResourceCard";
import { pathToSuccessCollections, getFeaturedResources } from "@/data/pathToSuccessData";
import { ArrowRight, Star } from "lucide-react";

const PathToSuccess = () => {
  const featuredResources = getFeaturedResources();

  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Path to Success</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Curated resources, insights, and strategies from successful founders, leaders, and industry experts to guide your journey.
          </p>
        </div>

        {/* Featured Resources */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Featured Reads</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} variant="featured" />
            ))}
          </div>
        </section>

        {/* Collections */}
        <section className="space-y-12">
          {pathToSuccessCollections.map((collection, index) => (
            <div key={collection.id} className="space-y-6">
              <div className={`rounded-xl p-8 bg-gradient-to-r ${collection.gradient}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-3">
                    <Badge variant="outline" className="w-fit">
                      Collection
                    </Badge>
                    <h2 className="text-2xl font-bold text-foreground">
                      {collection.title}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                      {collection.description}
                    </p>
                  </div>
                  <Button variant="outline" className="w-fit">
                    View all resources
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collection.resources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PathToSuccess;