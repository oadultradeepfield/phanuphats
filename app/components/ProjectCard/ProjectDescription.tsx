interface ProjectDescriptionProps {
  description: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
}) => <div className="mt-2 text-base">{description}</div>;

export default ProjectDescription;
