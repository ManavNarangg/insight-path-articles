import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PathToSuccess = () => {
  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Path to Success</h1>
          <p className="text-lg text-muted-foreground">
            Coming soon - insights and strategies from successful founders and leaders.
          </p>
        </div>

        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">
            Content will be added here soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PathToSuccess;