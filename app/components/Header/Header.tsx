import Avatar from "./Avatar";
import Resume from "./Resume";

const Header = () => {
  return (
    <div className="bg-base b navbar sticky top-0 z-50 backdrop-blur-sm">
      <Avatar />
      <Resume />
    </div>
  );
};

export default Header;
