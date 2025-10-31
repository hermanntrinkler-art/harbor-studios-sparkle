import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image: string;
}

const ProjectCard = ({ title, description, link, tags, image }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border-primary/20 bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(189_94%_58%_/_0.2)]">
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        {link === "#" ? (
          <Button 
            variant="ghost" 
            className="cursor-default opacity-60"
            disabled
          >
            Coming Soon
          </Button>
        ) : (
          <Button 
            asChild
            variant="ghost" 
            className="group/btn hover:text-primary"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Visit Project 
              <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
