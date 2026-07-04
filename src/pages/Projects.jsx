import { useState, useEffect } from "react";
import PageTransition from "./PageTransition"; 
import { Analytics } from "@vercel/analytics/react"; 
import SparklesBackground from "../components/SparklesBackground";
import ProjectDetail from "../components/ProjectDetail";
import ProjectList from "../components/ProjectList";
import { myProjects } from "../data/projects";

export default function Projects({ isDark }) {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Auto-scroll to top when project detail is opened or closed
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeProject]);

  return (
    <PageTransition>
      <section className={`min-h-screen pt-32 pb-20 px-6 transition-colors duration-700 relative overflow-hidden ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-[#f8f9fa] text-gray-900"
      }`}>
        {/* BACKGROUND ANIMADO */}
        <SparklesBackground isDark={isDark} />

        {/* CONTENEDOR CENTRAL */}
        <div className="max-w-4xl mx-auto space-y-20 relative z-10">
          
          {activeProject ? (
            <ProjectDetail 
              activeProject={activeProject}
              activeImageIdx={activeImageIdx}
              setActiveImageIdx={setActiveImageIdx}
              setActiveProject={setActiveProject}
              isDark={isDark}
            />
          ) : (
            <ProjectList 
              myProjects={myProjects}
              setActiveProject={setActiveProject}
              setActiveImageIdx={setActiveImageIdx}
              isDark={isDark}
            />
          )}

        </div>
      </section>
      <Analytics />
    </PageTransition>
  );
}
