import { IoMdMail } from "react-icons/io";

const Mail = () => {
  return (
    <a
      href="mailto:phanuphat.srisukhawasu@gmail.com"
      aria-label="Email Contact"
      className="transition-colors hover:text-gray-600"
    >
      <IoMdMail size={24} />
    </a>
  );
};

export default Mail;
