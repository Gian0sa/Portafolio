import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Project from "./pages/Projects";
import Articles from "./pages/Articles";
function AnimatedRoutes({ isDark }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home isDark={isDark} />} />
        <Route path="/acerca-de" element={<About isDark={isDark} />} />
        <Route path="/proyectos" element={<Project isDark={isDark} />} />
        <Route path="/articulos" element={<Articles isDark={isDark} />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-[#0a0a0a]" : "bg-[#f8f9fa]"}`}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main>
          <AnimatedRoutes isDark={isDark} />
        </main>
        <Footer isDark={isDark} />
      </div>
    </Router>
  );
}