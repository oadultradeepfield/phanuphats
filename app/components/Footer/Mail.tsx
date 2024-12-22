import { IoMdMail } from "react-icons/io";
import Link from "next/link";

const Mail = () => {
  return (
    <Link
      href="mailto:phanuphat.srisukhawasu@gmail.com"
      aria-label="Email Contact"
      className="transition-colors hover:text-gray-600"
    >
      <IoMdMail size={24} />
    </Link>
  );
};

export default Mail;
