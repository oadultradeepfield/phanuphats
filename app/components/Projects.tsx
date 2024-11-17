"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    imageUrl: "/keepactive.jpeg",
    imageAlt: "KeepActive",
    title: "KeepActive",
    description:
      "A web app that maintains active status for user websites on free hosting by sending periodic GET requests.",
    category: "💻 Web Development",
    techStack: ["Gin", "GORM", "React", "Material UI"],
    link: "https://keepactive-frontend.vercel.app/",
  },
  {
    imageUrl: "/strassen.png",
    imageAlt: "Strassen Algorithm",
    title: "Strassen Algo.",
    description:
      "An implementation of Strassen's matrix multiplication and standard method with parallel processing capabilities.",
    category: "🦦 Pet Projects",
    techStack: ["Java", "Fork/Join framework"],
    link: "https://github.com/oadultradeepfield/parallel-and-strassen-matrix-multiplication",
  },
  {
    imageUrl: "/timeseriesviz.gif",
    imageAlt: "TimeSeriesViz",
    title: "TSViz",
    description:
      "An interactive Streamlit app for visualizing time series data, allowing real-time analysis with adjustable hyperparameters for ARIMA, Random Forest, and LightGBM.",
    category: "🤖 Machine Learning",
    techStack: ["Python", "Streamlit", "Scikit-learn"],
    link: "https://timeseriesviz.streamlit.app/",
  },
  {
    imageUrl: "/uniflixsg.jpeg",
    imageAlt: "UniFliXsg",
    title: "UniFliXsg",
    description:
      "A semantic search application using all-MiniLM-L6-v2, deployed on Hugging Face via Gradio, to recommend undergraduate programs in Singapore based on user interests and career goals.",
    category: "🤖 Machine Learning",
    techStack: ["Python", "Hugging Face", "Gradio"],
    link: "https://huggingface.co/spaces/oadultradeepfield/uniflixsg",
  },
  {
    imageUrl: "/galaxy10.png",
    imageAlt: "Galaxy10",
    title: "Galaxy10",
    description:
      "A Streamlit app for galaxy morphology classification using ConvNeXtTiny (76.80% Top-1 and 95.51% Top-3 accuracy). The model outperformed VGG16, DenseNet121, and EfficientNetV2S by 5% in accuracy.",
    category: "🤖 Machine Learning",
    techStack: ["Python", "Streamlit", "PyTorch"],
    link: "https://tao21-galaxyclassification.streamlit.app/?embed_options=light_theme",
  },
];

const categories = [
  "🌐 All Projects",
  "🦦 Pet Projects",
  "💻 Web Development",
  "🤖 Machine Learning",
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("🌐 All Projects");

  const filteredProjects =
    selectedCategory === "🌐 All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="mb-8 flex flex-col items-center p-4">
      <div className="mb-8 mt-4 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn rounded-2xl text-base hover:bg-gray-600 ${
              selectedCategory === category ? "btn-neutral" : "btn-outline"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-12 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            title={project.title}
            description={project.description}
            category={project.category}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
