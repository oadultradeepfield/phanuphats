import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ProjectList from "./components/ProjectList/ProjectList";

const Page = () => {
  return (
    <div
      className="flex min-h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('background.svg')",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(255, 255, 255, 0.65)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="flex-grow">
          <Hero />
          <ProjectList />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
