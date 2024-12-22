import { FaLinkedin } from "react-icons/fa";

const LinkedIn = () => {
  return (
    <a
      href="https://www.linkedin.com/in/phanuphats/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
      className="transition-colors hover:text-gray-600"
    >
      <FaLinkedin size={24} />
    </a>
  );
};

export default LinkedIn;
