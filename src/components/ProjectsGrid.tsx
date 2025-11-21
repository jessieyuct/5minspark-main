import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Coins } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

interface Project {
  id: string;
  title: string;
  artist: string;
  description: string;
  image: string;
  goal: number;
  raised: number;
  category: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-white/60 text-sm tracking-widest mb-4">FEATURED PROJECTS</div>
            <h2 className="text-white mb-4">Support Creative Innovation</h2>
            <p className="text-white/60 text-lg max-w-2xl">
              Discover groundbreaking artistic projects and earn exclusive NFT rewards while supporting the next generation of creative talent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 border border-white/10 hover:border-white/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/5">
                  {/* Image */}
                  <div className="aspect-[4/5] overflow-hidden bg-zinc-900">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-white/10 text-white/80 border-0 text-xs tracking-wider">
                        {project.category.toUpperCase()}
                      </Badge>
                      <Badge className="bg-white/10 text-white/80 border-0 text-xs tracking-wider">
                        NFT
                      </Badge>
                    </div>

                    <h4 className="text-white mb-2">{project.title}</h4>
                    
                    <div className="text-white/50 text-sm tracking-wider mb-4">
                      BY {project.artist.toUpperCase()}
                    </div>

                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Goal */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white text-lg tracking-tight">${project.goal.toLocaleString()}</div>
                          <div className="text-white/40 text-xs tracking-wider">GOAL</div>
                        </div>
                        <div className="flex items-center gap-1 text-white/60">
                          <Coins className="h-4 w-4" />
                          <span className="text-sm">{(project.goal * 10).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
