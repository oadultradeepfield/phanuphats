import Blog from "./Blog";
import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import Mail from "./Mail";

const Footer = () => {
  return (
    <footer className="text-content flex flex-col items-center gap-4 py-6 md:flex-row md:justify-between">
      <aside className="text-center md:text-left">
        <div className="text-base">
          Copyright © {new Date().getFullYear()} - All rights reserved.
        </div>
      </aside>
      <nav className="flex items-center justify-center gap-4">
        <LinkedIn />
        <GitHub />
        <Blog />
        <Mail />
      </nav>
    </footer>
  );
};

export default Footer;
