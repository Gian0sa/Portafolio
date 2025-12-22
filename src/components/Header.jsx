import { Github, Linkedin, Moon, Sun, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ isDark, setIsDark }) {
  const location = useLocation();

  const navItems = [
    { name: "Hogar", path: "/" },
    { name: "Acerca de", path: "/acerca de" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Artículos", path: "/articulos" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      isDark ? "bg-[#111111]/80 border-white/10 text-white" : "bg-white/80 border-black/5 text-gray-900"
    } backdrop-blur-xl`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-bold tracking-tight transition-all hover:opacity-100 ${
                location.pathname === item.path 
                ? "opacity-100 border-b-2 border-current pb-1" 
                : "opacity-50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="group cursor-pointer">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-lg transition-all duration-500 group-hover:rotate-[360deg] shadow-2xl ${
              isDark ? "bg-white text-black" : "bg-black text-white shadow-black/20"
            }`}>
              GpQ
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className={`hidden lg:flex items-center px-4 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest ${
            isDark ? "bg-white text-black" : "bg-black text-white"
          }`}>
            Encuéntrame En:
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/Gian0sa" target="_blank" rel="noreferrer"><Github className="w-5 h-5 opacity-70" /></a>
            <a href="https://linkedin.com/in/gian-pee/" target="_blank" rel="noreferrer" className="bg-[#0A66C2] p-1.5 rounded-lg"><Linkedin className="w-4 h-4 text-white fill-current" /></a>
            <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-full ${isDark ? "text-yellow-400" : "text-gray-600"}`}>
              {isDark ? <Sun className="w-5 h-5 fill-current" /> : <Moon className="w-5 h-5 fill-current" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}