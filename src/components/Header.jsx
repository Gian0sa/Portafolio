import { useState } from "react";
import { Github, Linkedin, Moon, Sun, Menu, X, Facebook, Instagram } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header({ isDark, setIsDark }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Hogar", path: "/" },
    { name: "Acerca de", path: "/acerca-de" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Artículos", path: "/articulos" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 w-full z-[1000] transition-all duration-300 border-b ${
      isDark ? "bg-[#111111] border-white/10 text-white" : "bg-white border-black/5 text-gray-900"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* IZQUIERDA: LOGO CORPORATIVO */}
        <Link to="/" className="group flex items-center gap-3">
        
          <div className={`w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm transition-all duration-500 shadow-lg ${
            isDark ? "bg-white text-black" : "bg-black text-white"
          }`}>
            GpQ
          </div>
          <span className={`text-xs hidden md:inline font-black uppercase tracking-widest ${isDark ? "opacity-30" : "opacity-40"}`}>
            Desarrollador Backend / Full Stack
          </span>
        </Link>

        {/* CENTRO: NAVEGACIÓN ESCRITORIO */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full transition-colors ${
                isActive(item.path) 
                  ? (isDark ? "bg-white text-black" : "bg-black text-white") 
                  : (isDark ? "hover:bg-white/5 text-gray-300" : "hover:bg-black/5 text-gray-600")
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* DERECHA: ACCIONES Y BOTÓN MÓVIL */}
        <div className="flex items-center gap-3">
          {/* REDES SOCIALES ESCRITORIO */}
          <div className="hidden sm:flex items-center gap-2.5 mr-2">
            <a href="https://github.com/Gian0sa" target="_blank" rel="noreferrer" className={`opacity-70 hover:opacity-100 transition-opacity ${isDark ? "text-white" : "text-black"}`}>
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/gian-pee/" target="_blank" rel="noreferrer" className="bg-[#0A66C2] p-1.5 rounded-lg hover:scale-110 transition-transform flex items-center justify-center">
              <Linkedin className="w-4 h-4 text-white fill-current" />
            </a>
            <a href="https://www.facebook.com/gian.peer" target="_blank" rel="noreferrer" className="bg-[#1877F2] p-1.5 rounded-lg hover:scale-110 transition-transform flex items-center justify-center">
              <Facebook className="w-4 h-4 text-white fill-current" />
            </a>
            <a href="https://www.instagram.com/gian_.pr/" target="_blank" rel="noreferrer" className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-1.5 rounded-lg hover:scale-110 transition-transform flex items-center justify-center">
              <Instagram className="w-4 h-4 text-white" />
            </a>
          </div>

          <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-full transition-colors ${isDark ? "hover:bg-white/10 text-yellow-400" : "hover:bg-black/5 text-gray-600"}`}>
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Botón Menú Móvil */}
          <button 
            className="md:hidden p-2 ml-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5 text-[#d946ef]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL SÓLIDO (Despliega desde el Header) */}
      <div className={`md:hidden absolute top-16 left-0 w-full transition-all duration-300 transform origin-top shadow-2xl ${
        isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
      } ${isDark ? "bg-[#161616] border-b border-white/5" : "bg-white border-b border-black/5"}`}>
        <nav className="flex flex-col items-end p-6 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-xl font-black uppercase tracking-tight pr-4 w-full text-right ${
                isActive(item.path) 
                  ? "text-[#d946ef]" 
                  : (isDark ? "text-gray-300" : "text-gray-600")
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="flex gap-3 pt-6 border-t border-current border-opacity-5 w-full justify-end pr-4 items-center">
            <a href="https://github.com/Gian0sa" target="_blank" rel="noreferrer" className={`opacity-70 hover:opacity-100 transition-opacity ${isDark ? "text-white" : "text-black"}`}>
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/gian-pee/" target="_blank" rel="noreferrer" className="bg-[#0A66C2] p-1.5 rounded-lg flex items-center justify-center">
              <Linkedin className="w-4 h-4 text-white fill-current" />
            </a>
            <a href="https://www.facebook.com/gian.peer" target="_blank" rel="noreferrer" className="bg-[#1877F2] p-1.5 rounded-lg flex items-center justify-center">
              <Facebook className="w-4 h-4 text-white fill-current" />
            </a>
            <a href="https://www.instagram.com/gian_.pr/" target="_blank" rel="noreferrer" className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-1.5 rounded-lg flex items-center justify-center">
              <Instagram className="w-4 h-4 text-white" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}