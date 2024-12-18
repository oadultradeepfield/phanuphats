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
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="card h-full w-96 transform border-2 border-[#e0e0e0] bg-base-100 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl">
        {/* Image container with 3:2 aspect ratio */}
        <figure className="relative w-full pt-[66.67%]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="absolute left-0 top-0 object-cover"
          />
        </figure>
        {/* Flexible height content container */}
        <div className="card-body flex flex-col p-6">
          <div className="flex-grow">
            <div className="mb-2 flex items-start justify-between gap-2">
              <h2 className="card-title text-2xl">{title}</h2>
              <div className="badge badge-neutral shrink-0 py-3">
                {category}
              </div>
            </div>
            <div className="mt-2 text-base">{description}</div>
          </div>
          <div className="card-actions mt-4 flex-wrap justify-end">
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
