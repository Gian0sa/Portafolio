import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer({ isDark }) {
  const currentYear = new Date().getFullYear();

  const particles = [
    { top: "15%", left: "10%", size: "w-1 h-1", anim: "animate-pulse", delay: "0s", color: "bg-[#d946ef]" },
    { top: "30%", left: "88%", size: "w-1.5 h-1.5", anim: "animate-ping", delay: "1.2s", color: "bg-[#6366f1]" },
    { top: "65%", left: "12%", size: "w-1 h-1", anim: "animate-pulse", delay: "0.4s", color: "bg-[#0ea5e9]" }
  ];

  return (
    <footer className={`pt-12 pb-8 px-6 border-t transition-colors duration-700 relative overflow-hidden ${
      isDark ? "bg-[#0a0a0a] border-white/5 text-white" : "bg-[#f8f9fa] border-black/5 text-gray-900"
    }`}>
      
      {/* ================= ECOSISTEMA DE PARTÍCULAS Y LUCES DE FONDO ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[240px] h-[240px] rounded-full blur-[90px] mix-blend-screen opacity-10 animate-pulse bg-[#d946ef] bottom-[-10%] left-[-5%]" style={{ animationDuration: '9s' }}></div>
        <div className="absolute w-[260px] h-[260px] rounded-full blur-[100px] mix-blend-screen opacity-10 animate-pulse bg-[#6366f1] top-[-10%] right-[-5%]" style={{ animationDuration: '13s' }}></div>

        <div className="absolute inset-0 opacity-30">
          {particles.map((p, idx) => (
            <div
              key={idx}
              className={`absolute ${p.size} rounded-full ${p.anim} ${isDark ? "bg-white" : p.color}`}
              style={{
                top: p.top,
                left: p.left,
                animationDelay: p.delay,
                animationDuration: p.anim === "animate-ping" ? "3s" : "5s"
              }}
            ></div>
          ))}
        </div>
      </div>
      {/* ============================================================================= */}

      {/* Reducimos el ancho máximo de max-w-7xl a max-w-5xl para compactar las secciones */}
      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        
        {/* SECCIÓN SUPERIOR: CTA MÁS COMPACTO */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-current border-opacity-5 pb-10">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-[900] tracking-tighter uppercase leading-none">
              ¿Tienes un proyecto{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">
                en mente?
              </span>
            </h2>
            <p className={`text-xs font-semibold ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Disponible para nuevos retos en ingeniería Backend & Cloud.
            </p>
          </div>
          
          <a 
            href="mailto:giepeton558@gmail.com" 
            className={`group flex items-center gap-2.5 px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg ${
              isDark ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Hablemos
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* SECCIÓN MEDIA: ENLACES Y CONTACTO REORGANIZADO */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          
          <div className="space-y-3">
            <h3 className={`text-[9px] font-black uppercase tracking-[0.25em] ${isDark ? "text-gray-500" : "opacity-40"}`}>Navegación</h3>
            <ul className="space-y-2.5 font-bold text-xs">
              <li><Link to="/" className="hover:text-[#d946ef] transition-colors">Hogar</Link></li>
              <li><Link to="/acerca-de" className="hover:text-[#d946ef] transition-colors">Acerca de</Link></li>
              <li><Link to="/proyectos" className="hover:text-[#6366f1] transition-colors">Proyectos</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className={`text-[9px] font-black uppercase tracking-[0.25em] ${isDark ? "text-gray-500" : "opacity-40"}`}>Social</h3>
            <ul className="space-y-2.5 font-bold text-xs">
              <li><a href="https://github.com/Gian0sa" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#d946ef] transition-colors"><Github className="w-3.5 h-3.5"/> Github</a></li>
              <li><a href="https://linkedin.com/in/gian-pee/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#6366f1] transition-colors"><Linkedin className="w-3.5 h-3.5"/> LinkedIn</a></li>
            </ul>
          </div>

          <div className="space-y-2 sm:text-right">
            <h3 className={`text-[9px] font-black uppercase tracking-[0.25em] ${isDark ? "text-gray-500" : "opacity-40"}`}>Ubicación</h3>
            <p className="font-bold text-xs">giepeton558@gmail.com</p>
            <p className={`text-[11px] font-medium italic ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              Lima, Perú. Disponible para remoto.
            </p>
          </div>
        </div>

        {/* SECCIÓN INFERIOR: COPYRIGHT CLEAN */}
        <div className="pt-4 border-t border-current border-opacity-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-zinc-500">
          <div className="flex items-center gap-3">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-[10px] ${
              isDark ? "bg-white text-black" : "bg-black text-white"
            }`}>
              GpQ
            </div>
            <span>© {currentYear} Gian Peer</span>
          </div>
          <p className="opacity-70 text-center sm:text-right">
            React & Tailwind Engine v4
          </p>
        </div>

      </div>
    </footer>
  );
}