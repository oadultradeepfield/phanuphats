import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "@/app/data/projectData";

interface ProjectGridProps {
  projects: typeof projects;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="mx-auto grid auto-rows-fr grid-cols-1 gap-12 lg:grid-cols-2 2xl:grid-cols-3 max-w-screen-xl px-4">
      {projects.map((project, index) => (
        <div key={index} className="h-full">
          <ProjectCard
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            title={project.title}
            description={project.description}
            category={project.category}
            techStack={project.techStack}
            link={project.link}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
