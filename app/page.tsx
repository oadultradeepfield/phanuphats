import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const Page = () => {
  return (
    <div
      className="flex min-h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('background.svg')",
        backgroundColor: "rgba(255, 255, 255, 0.65)",
        backgroundBlendMode: "overlay",
      }}
    >
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
