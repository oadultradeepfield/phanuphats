"use client";

import { useState } from "react";
import CategoryButton from "./CategoryButton";
import ProjectGrid from "./ProjectGrid";
import { projects, categories } from "@/app/data/projectData";

const ProjectList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("🌐 All Projects");

  const filteredProjects =
    selectedCategory === "🌐 All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="mb-8 mt-4 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
};

export default ProjectList;
