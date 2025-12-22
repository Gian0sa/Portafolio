import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer({ isDark }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`pt-20 pb-10 px-6 border-t transition-colors duration-700 ${
      isDark ? "bg-[#0a0a0a] border-white/5 text-white" : "bg-[#f8f9fa] border-black/5 text-gray-900"
    }`}>
      <div className="max-w-7xl mx-auto">
        
        {/* SECCIÓN SUPERIOR: CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-4">
            <h2 className={`text-3xl md:text-5xl font-[900] tracking-tighter uppercase ${isDark ? "text-white" : "text-gray-900"}`}>
              ¿Tienes un proyecto <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">
                en mente?
              </span>
            </h2>
            <p className={`font-medium max-w-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Estoy disponible para nuevos retos y colaboraciones en desarrollo Full Stack.
            </p>
          </div>
          
          <div className="flex md:justify-end">
            <a 
              href="mailto:giepeton558@gmail.com" 
              className={`group flex items-center gap-3 px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                isDark ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Hablemos ahora
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* SECCIÓN MEDIA: ENLACES */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b ${isDark ? "border-white/10" : "border-black/5"}`}>
          <div className="space-y-6">
            <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? "text-gray-500" : "opacity-40"}`}>Navegación</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><Link to="/" className="hover:text-[#d946ef] transition-colors">Hogar</Link></li>
              <li><Link to="/acerca de" className="hover:text-[#d946ef] transition-colors">Acerca de</Link></li>
              <li><Link to="/proyectos" className="hover:text-[#6366f1] transition-colors">Proyectos</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? "text-gray-500" : "opacity-40"}`}>Social</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="https://github.com/Gian0sa" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#d946ef] transition-colors"><Github className="w-4 h-4"/> Github</a></li>
              <li><a href="https://linkedin.com/in/gian-pee/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#6366f1] transition-colors"><Linkedin className="w-4 h-4"/> LinkedIn</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 space-y-6 md:text-right">
            <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? "text-gray-500" : "opacity-40"}`}>Contacto</h4>
            <p className={`font-bold text-lg hover:text-[#d946ef] transition-colors cursor-pointer ${isDark ? "text-white" : "text-gray-900"}`}>
              giepeton558@gmail.com
            </p>
            <p className={`text-xs font-medium italic ${isDark ? "text-gray-500" : "text-gray-400"}`}>Basado en Lima, Perú. Disponible para remoto.</p>
          </div>
        </div>

        {/* SECCIÓN INFERIOR: COPYRIGHT */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs ${
            isDark ? "bg-white text-black" : "bg-black text-white"
          }`}>
            GpQ
          </div>
          <p className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? "text-gray-500" : "opacity-40"}`}>
            © {currentYear} Gian Peer. Hecho con React & Tailwind v4.
          </p>
        </div>

      </div>
    </footer>
  );
}