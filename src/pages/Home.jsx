import yo from "../assets/images/yo.jpg";
import PageTransition from "./PageTransition"; 
import { Analytics } from "@vercel/analytics/react";

export default function Home({ isDark }) {
  return (
    <PageTransition>
      <section className={`min-h-screen flex items-center justify-center pt-24 pb-12 px-6 transition-colors duration-700 ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-[#f8f9fa] text-gray-900"
      }`}>
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO IZQUIERDO: IMAGEN Y BADGE */}
          <div className="relative flex justify-center lg:justify-start items-center animate-reveal">
            
            {/* Badge Flotante - Actualizado para alinearse con el perfil Backend */}
            <div className={`absolute -left-6 top-8 z-20 w-24 h-24 rounded-full border-2 flex flex-col items-center justify-center shadow-2xl transition-transform hover:scale-110 ${
              isDark ? "bg-[#111111] border-white/10 text-white" : "bg-white border-black/5 text-black"
            }`}>
               <span className="text-blue-500 text-lg mb-1">⚙️</span>
               <p className="text-[8px] font-black uppercase text-center leading-none">
                 Backend Dev <br /> 
                 <span className="font-medium opacity-50 italic text-[7px]">Full Stack Mindset</span>
               </p>
            </div>

            {/* Marco con Gradiente */}
            <div className="relative group w-full max-w-[320px] aspect-square rounded-[2.5rem] bg-gradient-to-br from-[#d946ef] via-[#6366f1] to-[#0ea5e9] p-1 shadow-2xl overflow-hidden">
               <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20"></div>
               
               <div className={`w-full h-full ${isDark ? "bg-[#1a1a1a]" : "bg-gray-200"} rounded-[2.3rem] overflow-hidden flex items-center justify-center p-4`}>
                 <img 
                   src={yo} 
                   alt="Gian Peer - Backend Developer" 
                   className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105" 
                 />
               </div>
            </div>
          </div>

          {/* LADO DERECHO: TEXTO OPTIMIZADO */}
          <div className="space-y-8 animate-reveal [animation-delay:200ms] text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-[900] leading-[1.1] tracking-tighter">
                Construyendo el motor <br /> de sistemas escalables <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">
                  con código y arquitectura.
                </span>
              </h1>
              <h2 className="text-lg font-bold opacity-60 uppercase tracking-[0.2em]">
                Ingeniería de Software & Backend
              </h2>
            </div>

            <p className="text-lg md:text-xl leading-relaxed max-w-xl font-medium opacity-70">
              Especializado en el desarrollo de <strong>APIs robustas y microservicios</strong>. 
              Mi enfoque combina la eficiencia del lado del servidor con arquitecturas limpias 
              para crear soluciones digitales de alto impacto.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => window.location.href = 'mailto:Giepeton558@gmail.com'}
                className={`px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl ${
                isDark ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
              }`}>
                ¡Contáctame!
              </button>
              
              <a 
                href="/CV_Gian_Quispe.pdf" 
                download="CV_Gian_Quispe_Backend.pdf"
                target="_blank"
                rel="noreferrer"
                className={`px-8 py-3 rounded-full font-black text-[11px] uppercase tracking-widest border-2 transition-all flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white ${
                  isDark ? "border-white/20 text-white" : "border-black/10 text-black"
                }`}
              >
                Descargar CV ↗
              </a>
            </div>
          </div>
        </div>
      </section>
{/* Analytics interno de Vercel */}
      <Analytics />
    </PageTransition>
  );
}