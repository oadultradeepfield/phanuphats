import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const LinkedIn = () => {
  return (
    <Link
      href="https://www.linkedin.com/in/phanuphats/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
      className="transition-colors hover:text-gray-600"
    >
      <FaLinkedin size={24} />
    </Link>
  );
};

export default LinkedIn;
