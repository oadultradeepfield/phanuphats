import Link from "next/link";

const Resume = () => {
  return (
    <div className="navbar-end py-2">
      <Link
        href="https://drive.google.com/file/d/1MbOBIRV3VBQhgRadbAJvARPpAw1u_FC6/view"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-neutral btn-active rounded-2xl px-3 py-2 text-sm sm:px-4 sm:text-base"
      >
        View Resume
      </Link>
    </div>
  );
};

export default Resume;
