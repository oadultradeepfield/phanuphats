interface ProjectHeaderProps {
  title: string;
  category: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, category }) => (
  <div className="mb-2 flex items-start justify-between gap-2">
    <h2 className="card-title text-2xl">{title}</h2>
    <div className="badge badge-neutral shrink-0 py-3">{category}</div>
  </div>
);

export default ProjectHeader;
