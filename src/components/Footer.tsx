const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2024 InsightPath. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-blog-accent transition-colors"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-blog-accent transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-blog-accent transition-colors"
            >
              Newsletter
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-blog-accent transition-colors"
            >
              RSS Feed
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;