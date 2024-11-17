import Image from "next/image";

interface ProjectCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  category: string;
  techStack?: string[];
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
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="card w-96 transform border-2 border-[#e0e0e0] bg-base-100 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl">
        <figure className="h-54">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">
            {title}
            <div className="badge badge-neutral py-3">{category}</div>
          </h2>
          <div className="mb-3 text-base">{description}</div>
          <div className="card-actions justify-end">
            {techStack.map((tech, index) => (
              <div key={index} className="badge badge-outline">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
