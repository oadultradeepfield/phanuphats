import ProjectImage from "./ProjectImage";
import ProjectHeader from "./ProjectHeader";
import ProjectDescription from "./ProjectDescription";
import ProjectTechStack from "./ProjectTechStack";
import { Category } from "@/app/data/projectData";
import Link from "next/link";

interface ProjectCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  category: Category;
  techStack: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  category,
  techStack = [],
  link,
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="card h-full w-96 transform border-2 border-[#e0e0e0] bg-base-100 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl">
        <ProjectImage imageUrl={imageUrl} imageAlt={imageAlt} />
        <div className="card-body flex flex-col p-6">
          <div className="flex-grow">
            <ProjectHeader title={title} category={category} />
            <ProjectDescription description={description} />
          </div>
          <ProjectTechStack techStack={techStack} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
