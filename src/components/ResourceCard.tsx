import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen } from "lucide-react";
import { Resource } from "@/data/pathToSuccessData";

interface ResourceCardProps {
  resource: Resource;
  variant?: "featured" | "default";
}

const ResourceCard = ({ resource, variant = "default" }: ResourceCardProps) => {
  const isFeatured = variant === "featured";
  
  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      isFeatured ? "md:col-span-2 lg:col-span-1" : ""
    }`}>
      <CardContent className="p-0">
        <div className={`relative overflow-hidden rounded-t-lg ${isFeatured ? "h-48" : "h-32"}`}>
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge variant={resource.type === "book" ? "default" : "secondary"}>
              {resource.type}
            </Badge>
          </div>
        </div>
        
        <div className="p-4 space-y-3">
          <div className="space-y-2">
            <h3 className={`font-semibold leading-tight text-foreground ${
              isFeatured ? "text-lg" : "text-base"
            }`}>
              {resource.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {resource.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">{resource.author}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                {resource.type === "article" ? (
                  <>
                    <Clock className="w-3 h-3" />
                    <span>{resource.readTime}</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-3 h-3" />
                    <span>{resource.pages} pages</span>
                  </>
                )}
              </div>
            </div>
            
            <Button size="sm" variant="outline">
              Read {resource.type === "book" ? "More" : "Article"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;