export const categories = [
  "🌐 All Projects",
  "🌟 Pet Projects",
  "🤖 ML/AI",
  "💻 Web Dev",
] as const;

export type Category = (typeof categories)[number];

export const projects: {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  category: Category;
  techStack: string[];
  link: string;
}[] = [
  {
    imageUrl: "/images/n_bodies.webp",
    imageAlt: "Generalized N-Body Simulation",
    title: "N-Body Sim.",
    description:
      "A C++ program that simulates the motion of N objects under Newton's law of gravitation approximated with the fourth-order Runge-Kutta method.",
    category: "🌟 Pet Projects",
    techStack: ["C++", "Python"],
    link: "https://github.com/oadultradeepfield/generalized-n-body-simulation",
  },
  {
    imageUrl: "/images/olympliance.webp",
    imageAlt: "Olympliance",
    title: "Olympliance",
    description:
      "A web forum created for students to discuss Science Olympiad problems in preparation for competitions, developed as part of the CVWO Assignment for AY2024/25.",
    category: "💻 Web Dev",
    techStack: ["React TS", "Go", "PostgreSQL", "Docker"],
    link: "https://olympliance.netlify.app/",
  },
  {
    imageUrl: "/images/galaxy10_anomaly_detection.webp",
    imageAlt: "Galaxy10 Anomaly Detection",
    title: "Anomalous Galaxies",
    description:
      "A PyTorch pipeline for training and identifying anomalous galaxies from Galaxy10 DECals using ResNet50, autoencoders, K-means clustering, and DBSCAN.",
    category: "🤖 ML/AI",
    techStack: ["Python", "PyTorch", "Kaggle"],
    link: "https://github.com/oadultradeepfield/galaxy10-anomaly-detection",
  },
  {
    imageUrl: "/images/strassen.webp",
    imageAlt: "Strassen Algorithm",
    title: "Strassen Algo.",
    description:
      "An implementation of Strassen's matrix multiplication and standard method with parallel processing capabilities.",
    category: "🌟 Pet Projects",
    techStack: ["Java", "Fork/Join framework"],
    link: "https://github.com/oadultradeepfield/parallel-and-strassen-matrix-multiplication",
  },
  {
    imageUrl: "/images/deephcc.webp",
    imageAlt: "DeepHCC",
    title: "DeepHCC",
    description:
      "A YOLOv5m-based model for real-time particle detection in cloud chambers (F1: 86.24%, 61 FPS), designed as an innovative tool for physics education.",
    category: "🤖 ML/AI",
    techStack: ["Python", "OpenCV", "PyTorch"],
    link: "https://iopscience.iop.org/article/10.1088/1742-6596/2653/1/012007",
  },
  {
    imageUrl: "/images/timeseriesviz.webp",
    imageAlt: "TimeSeriesViz",
    title: "TSViz",
    description:
      "An interactive Streamlit app for visualizing time series data, allowing real-time analysis with adjustable hyperparameters for ARIMA, Random Forest, and LightGBM.",
    category: "💻 Web Dev",
    techStack: ["Python", "Streamlit", "Docker", "GCP"],
    link: "https://tsviz-k6hhpljmkq-as.a.run.app/",
  },
];
