import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    return location.pathname.startsWith(path) && path !== "/";
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold blog-accent">
            InsightPath
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-blog-accent",
                  isActive("/") ? "blog-accent" : "text-muted-foreground"
                )}
              >
                Articles
              </Link>
              <Link
                to="/path-to-success"
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-blog-accent",
                  isActive("/path-to-success") ? "blog-accent" : "text-muted-foreground"
                )}
              >
                Path to Success
              </Link>
              <Link
                to="/insights"
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-blog-accent",
                  isActive("/insights") ? "blog-accent" : "text-muted-foreground"
                )}
              >
                Insights
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <div className="flex space-x-4">
              <Link
                to="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blog-accent",
                  isActive("/") ? "blog-accent" : "text-muted-foreground"
                )}
              >
                Articles
              </Link>
              <Link
                to="/path-to-success"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blog-accent",
                  isActive("/path-to-success") ? "blog-accent" : "text-muted-foreground"
                )}
              >
                Path
              </Link>
              <Link
                to="/insights"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blog-accent",
                  isActive("/insights") ? "blog-accent" : "text-muted-foreground"
                )}
              >
                Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;