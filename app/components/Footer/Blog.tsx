import Link from "next/link";
import { FaBlog } from "react-icons/fa";

const Blog = () => {
  return (
    <Link
      href="https://blog.phanuphats.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Personal Blog"
      className="transition-colors hover:text-gray-600"
    >
      <FaBlog size={24} />
    </Link>
  );
};

export default Blog;
