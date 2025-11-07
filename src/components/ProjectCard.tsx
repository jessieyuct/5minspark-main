import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  goal: number;
  raised: number;
  backers: number;
  daysLeft: number;
  creator: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const percentage = Math.min((project.raised / project.goal) * 100, 100);
  const isFullyFunded = percentage >= 100;

  return (
    <Card 
      className="overflow-hidden bg-black border-white/10 hover:border-white/30 transition-all cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
        <ImageWithFallback
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white border-white/20 text-xs tracking-wider">
          {project.category.toUpperCase()}
        </Badge>
      </div>
      <div className="p-6">
        <h3 className="text-white mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-white/50 text-sm mb-6 line-clamp-2">{project.description}</p>
        <div className="space-y-3">
          <Progress value={percentage} className="h-1 bg-white/10" />
          <div className="flex justify-between items-end">
            <div>
              <div className="text-white text-2xl tracking-tight">${(project.raised / 1000).toFixed(1)}k</div>
              <div className="text-white/40 text-xs tracking-wide">OF ${(project.goal / 1000).toFixed(0)}K GOAL</div>
            </div>
            <div className="text-right">
              {isFullyFunded ? (
                <div className="text-white text-sm tracking-wide">FUNDED</div>
              ) : (
                <>
                  <div className="text-white text-lg">{project.daysLeft}</div>
                  <div className="text-white/40 text-xs tracking-wide">DAYS LEFT</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
