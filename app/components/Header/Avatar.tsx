import Image from "next/image";

const Avatar = () => {
  return (
    <div className="navbar-start flex items-center gap-3">
      <div className="h-10 w-10 overflow-hidden rounded-full">
        <Image
          src="/myimage.webp"
          alt="Phanuphat S."
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
      <a className="xs:text-xl font-bold sm:text-2xl">Phanuphat S.</a>
    </div>
  );
};

export default Avatar;