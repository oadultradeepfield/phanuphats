import { IoLogoGithub } from "react-icons/io";

const GitHub = () => {
  return (
    <a
      href="https://github.com/oadultradeepfield"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Profile"
      className="transition-colors hover:text-gray-600"
    >
      <IoLogoGithub size={24} />
    </a>
  );
};

export default GitHub;
