"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    imageUrl: "/n_bodies.webp",
    imageAlt: "Generalized N-Body Simulation",
    title: "N-Body Sim.",
    description:
      "The previous 3-Body Simulation program in C++ generalized to an N-Body simulation, with support for both spherical and Cartesian coordinate systems.",
    category: "🌟 Pet Projects",
    techStack: ["C++", "Python"],
    link: "https://github.com/oadultradeepfield/generalized-n-body-simulation",
  },
  {
    imageUrl: "/three_body_simulation.webp",
    imageAlt: "Three Body Simulation",
    title: "3-Body Sim.",
    description:
      "A C++ program that simulates the motion of three objects under Newton's law of gravitation approximated with the fourth-order Runge-Kutta method.",
    category: "🌟 Pet Projects",
    techStack: ["C++", "Python"],
    link: "https://github.com/oadultradeepfield/three-body-simulation",
  },
  {
    imageUrl: "/galaxy10_anomaly_detection.webp",
    imageAlt: "Galaxy10 Anomaly Detection",
    title: "Anomalous Galaxies",
    description:
      "A PyTorch pipeline for training and identifying anomalous galaxies from Galaxy10 DECals using ResNet50, autoencoders, K-means clustering, and DBSCAN.",
    category: "🤖 ML/AI",
    techStack: ["Python", "PyTorch", "Kaggle Notebook"],
    link: "https://github.com/oadultradeepfield/galaxy10-anomaly-detection",
  },
  {
    imageUrl: "/strassen.png",
    imageAlt: "Strassen Algorithm",
    title: "Strassen Algo.",
    description:
      "An implementation of Strassen's matrix multiplication and standard method with parallel processing capabilities.",
    category: "🌟 Pet Projects",
    techStack: ["Java", "Fork/Join framework"],
    link: "https://github.com/oadultradeepfield/parallel-and-strassen-matrix-multiplication",
  },
  {
    imageUrl: "/deephcc.jpeg",
    imageAlt: "DeepHCC",
    title: "DeepHCC",
    description:
      "A YOLOv5m-based model for real-time particle detection in cloud chambers (F1: 86.24%, 61 FPS), designed as an innovative tool for physics education.",
    category: "🤖 ML/AI",
    techStack: ["Python", "OpenCV", "PyTorch"],
    link: "https://iopscience.iop.org/article/10.1088/1742-6596/2653/1/012007",
  },
  {
    imageUrl: "/timeseriesviz.webp",
    imageAlt: "TimeSeriesViz",
    title: "TSViz",
    description:
      "An interactive Streamlit app for visualizing time series data, allowing real-time analysis with adjustable hyperparameters for ARIMA, Random Forest, and LightGBM.",
    category: "🤖 ML/AI",
    techStack: ["Python", "Streamlit", "Scikit-learn"],
    link: "https://timeseriesviz.streamlit.app/",
  },
  {
    imageUrl: "/uniflixsg.jpeg",
    imageAlt: "UniFliXsg",
    title: "UniFliXsg",
    description:
      "A semantic search application using all-MiniLM-L6-v2, deployed on Hugging Face via Gradio, to recommend undergraduate programs in Singapore based on user interests and career goals.",
    category: "🤖 ML/AI",
    techStack: ["Python", "Hugging Face", "Gradio"],
    link: "https://huggingface.co/spaces/oadultradeepfield/uniflixsg",
  },
  {
    imageUrl: "/promptpp.webp",
    imageAlt: "Prompt++",
    title: "Prompt++",
    description:
      "A web app that generates customized prompts from templates for LLMs in tasks like content creation, code generation, etc.",
    category: "💻 Web Dev",
    techStack: ["Next.js", "Tailwind CSS", "daisyUI"],
    link: "https://promptpp.vercel.app/",
  },
  {
    imageUrl: "/keepactive.jpeg",
    imageAlt: "KeepActive",
    title: "KeepActive",
    description:
      "A web app that maintains active status for user websites on free hosting by sending periodic GET requests.",
    category: "💻 Web Dev",
    techStack: ["Gin", "GORM", "React", "Material UI"],
    link: "https://keepactive-frontend.vercel.app/",
  }
];

const categories = [
  "🌐 All Projects",
  "🌟 Pet Projects",
  "🤖 ML/AI",
  "💻 Web Dev",
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

      <div className="grid auto-rows-fr grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div key={index} className="h-full">
            <ProjectCard
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
              category={project.category}
              techStack={project.techStack}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
