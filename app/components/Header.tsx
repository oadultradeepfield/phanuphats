import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-base b navbar sticky top-0 z-50 backdrop-blur-sm">
      <div className="navbar-start flex items-center gap-3 pl-4">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <Image
            src="myimage.jpeg"
            alt="Phanuphat S."
            className="h-full w-full object-cover"
          />
        </div>
        <a className="text-2xl font-bold">Phanuphat S.</a>
      </div>
      <div className="navbar-end px-4 py-2">
        <a
          href="https://drive.google.com/file/d/1MbOBIRV3VBQhgRadbAJvARPpAw1u_FC6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-neutral btn-active rounded-2xl text-base"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
