import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";

const GitHub = () => {
  return (
    <Link
      href="https://github.com/oadultradeepfield"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Profile"
      className="transition-colors hover:text-gray-600"
    >
      <IoLogoGithub size={24} />
    </Link>
  );
};

export default GitHub;
