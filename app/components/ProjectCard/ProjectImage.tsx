import Image from "next/image";

interface ProjectImageProps {
  imageUrl: string;
  imageAlt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ imageUrl, imageAlt }) => (
  <figure className="relative w-full pt-[66.67%]">
    <Image
      src={imageUrl}
      alt={imageAlt}
      fill
      className="absolute left-0 top-0 object-cover"
    />
  </figure>
);

export default ProjectImage;
