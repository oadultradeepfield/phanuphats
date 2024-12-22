interface ProjectTechStackProps {
  techStack: string[];
}

const ProjectTechStack: React.FC<ProjectTechStackProps> = ({ techStack }) => (
  <div className="card-actions mt-4 flex-wrap justify-end">
    {techStack.map((tech, index) => (
      <div key={index} className="badge badge-outline">
        {tech}
      </div>
    ))}
  </div>
);

export default ProjectTechStack;
