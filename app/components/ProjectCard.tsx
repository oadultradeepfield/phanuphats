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
    <div className="card w-96 border-2 border-[#e0e0e0] bg-base-100 shadow-lg transition-all duration-300 hover:shadow-xl">
      <figure className="h-48">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        </a>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">
          {title}
          <div className="badge badge-neutral">{category}</div>
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
  );
};

export default ProjectCard;
