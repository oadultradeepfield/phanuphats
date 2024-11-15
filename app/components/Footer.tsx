import { FaLinkedin, FaMedium } from "react-icons/fa";
import { IoLogoGithub, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="text-content flex flex-col items-center gap-4 p-6 md:flex-row md:justify-between">
      <aside className="text-center md:text-left">
        <p className="text-base">
          Copyright © {new Date().getFullYear()} - All rights reserved.
        </p>
      </aside>
      <nav className="flex items-center justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/phanuphats/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="transition-colors hover:text-gray-600"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/oadultradeepfield"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="transition-colors hover:text-gray-600"
        >
          <IoLogoGithub size={24} />
        </a>
        <a
          href="https://medium.com/@oadultradeepfield"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium Profile"
          className="transition-colors hover:text-gray-600"
        >
          <FaMedium size={24} />
        </a>
        <a
          href="mailto:phanuphat.srisukhawasu@gmail.com"
          aria-label="Email Contact"
          className="transition-colors hover:text-gray-600"
        >
          <IoMdMail size={24} />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
