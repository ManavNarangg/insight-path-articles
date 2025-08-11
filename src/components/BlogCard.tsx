import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogData";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  variant?: "featured" | "small" | "trending" | "insights";
  className?: string;
}

const BlogCard = ({ post, variant = "small", className }: BlogCardProps) => {
  if (variant === "trending") {
    return (
      <div className={cn("flex gap-3 p-2 hover:bg-muted/50 rounded-lg transition-colors cursor-pointer", className)}>
        <img 
          src={post.image} 
          alt={post.title}
          className="w-16 h-16 object-cover rounded-md flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium line-clamp-2 mb-1">{post.title}</h4>
          <p className="text-xs text-muted-foreground">{post.readTime}</p>
        </div>
      </div>
    );
  }

  if (variant === "insights") {
    return (
      <Card className={cn("card-shadow hover:card-shadow-hover transition-all duration-200 cursor-pointer mb-8", className)}>
        <CardContent className="p-8">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold line-clamp-2 mb-4">{post.title}</h2>
              <div className="flex items-center gap-3 text-base text-muted-foreground mb-6">
                <span className="font-medium">{post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString("en-US", { 
                  month: "long", 
                  day: "numeric" 
                })}</span>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-24 h-20 flex-shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground text-base leading-relaxed">{post.excerpt}</p>
                <button className="text-blog-accent hover:underline mt-4 font-medium">
                  Read full story →
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === "featured") {
    return (
      <Card className={cn("card-shadow hover:card-shadow-hover transition-all duration-200 cursor-pointer overflow-hidden", className)}>
        <div className="aspect-[16/9] relative">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader className="p-6">
          <Badge variant="secondary" className="w-fit mb-3 text-xs font-medium">
            {post.category}
          </Badge>
          <h2 className="text-2xl font-bold line-clamp-2 mb-3">{post.title}</h2>
          <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>By {post.author}</span>
            <span>{post.readTime}</span>
          </div>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className={cn("card-shadow hover:card-shadow-hover transition-all duration-200 cursor-pointer overflow-hidden", className)}>
      <div className="aspect-[4/3] relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <Badge variant="secondary" className="text-xs font-medium mb-2">
          {post.category}
        </Badge>
        <h3 className="font-semibold line-clamp-2 mb-2">{post.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>By {post.author}</span>
          <span>{post.readTime}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;