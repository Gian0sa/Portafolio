import PageTransition from "./PageTransition";
import { Clock, ArrowRight, Brain, Database, Terminal as TermIcon } from "lucide-react";

export default function Articles({ isDark }) {
  const learningNotes = [
    {
      title: "PIT561: Database Administrator (DBA) con Oracle 19c",
      excerpt: "Especialización en administración de instancias Oracle, gestión de almacenamiento, seguridad y optimización de base de datos relacional empresarial.",
      date: "En curso - 2026",
      readTime: "9na Edición UNI",
      category: "Databases",
      icon: <Database className="w-4 h-4 text-[#d946ef]" />,
      link: "#"
    },
    {
      title: "PIT608: Machine Learning con Python",
      excerpt: "Implementación de modelos de aprendizaje supervisado y no supervisado. Análisis predictivo aplicado a problemas de ingeniería de software.",
      date: "En curso - 2026",
      readTime: "IA Research",
      category: "Data Science",
      icon: <Brain className="w-4 h-4 text-[#6366f1]" />,
      link: "#"
    },
    {
      title: "PIT621: Programación en Python Intermedio",
      excerpt: "Desarrollo avanzado de scripts, manejo de estructuras de datos complejas y automatización de procesos bajo estándares del CTIC UNI.",
      date: "En curso - 2026",
      readTime: "Core Python",
      category: "Programación",
      icon: <TermIcon className="w-4 h-4 text-[#d946ef]" />,
      link: "#"
    }
  ];

  // Configuración de micropartículas estructuradas (simulando ruido de terminal o nodos de datos)
  const particles = [
    { top: "10%", left: "5%", size: "w-[1px] h-[1px]", anim: "animate-pulse" },
    { top: "28%", left: "85%", size: "w-[2px] h-[2px]", anim: "animate-ping" },
    { top: "65%", left: "15%", size: "w-[1px] h-[1px]", anim: "animate-pulse" },
    { top: "85%", left: "75%", size: "w-[1.5px] h-[1.5px]", anim: "animate-pulse" }
  ];

  return (
    <PageTransition>
      <section className={`min-h-screen pt-32 pb-20 px-6 transition-colors duration-700 relative overflow-hidden ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-[#f8f9fa] text-gray-900"
      }`}>
        
        {/* ENTORNO DE LUCES Y RUIDO DE FONDO (Sutil y corporativo) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute w-[300px] h-[300px] rounded-full blur-[140px] mix-blend-screen opacity-10 bg-[#6366f1] top-[5%] right-[-5%]" style={{ animationDuration: '10s' }}></div>
          <div className="absolute w-[300px] h-[300px] rounded-full blur-[140px] mix-blend-screen opacity-10 bg-[#d946ef] bottom-[15%] left-[-5%]" style={{ animationDuration: '14s' }}></div>

          <div className="absolute inset-0 opacity-20">
            {particles.map((p, idx) => (
              <div 
                key={idx} 
                className={`absolute ${p.size} rounded-full ${p.anim} ${isDark ? "bg-white" : "bg-[#6366f1]"}`} 
                style={{ top: p.top, left: p.left }}
              ></div>
            ))}
          </div>
        </div>

        {/* CONTENEDOR CENTRAL COMPACTO (Estilo Editorial) */}
        <div className="max-w-4xl mx-auto space-y-20 relative z-10">
          
          {/* CABECERA MINIMALISTA (Rompe la simetría clásica) */}
          <div className="text-left space-y-4 max-w-2xl border-l-2 border-current pl-6 border-opacity-20">
            <h1 className="text-4xl md:text-6xl font-[900] tracking-tighter uppercase leading-none">
              Especialización <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">
                & Notas Técnicas.
              </span>
            </h1>
            <p className="opacity-60 text-xs sm:text-sm font-semibold tracking-wide">
              Documentando mi formación avanzada dentro del Programa de Innovación Tecnológica (PIT) en el CTIC - UNI.
            </p>
          </div>

          {/* ESTRUCTURA DE LOGS TÉCNICOS (Adiós a las megatarjetas redondeadas de la IA) */}
          <div className="divide-y divide-current divide-opacity-10 border-t border-b border-current border-opacity-10">
            {learningNotes.map((art, index) => (
              <div 
                key={index} 
                className="group py-8 first:pt-4 last:pb-4 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300"
              >
                <div className="flex items-start gap-5 min-w-0">
                  {/* Pequeño indicador del stack, sin marcos inflados */}
                  <div className={`mt-1 w-8 h-8 rounded-lg flex items-center justify-center border ${
                    isDark ? "bg-zinc-900/50 border-white/10" : "bg-zinc-100 border-black/5"
                  }`}>
                    {art.icon}
                  </div>

                  <div className="space-y-2 min-w-0">
                    <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-500">
                      <span className="text-[#d946ef]">{art.category}</span>
                      <span>•</span>
                      <span>CTIC UNI</span>
                    </div>

                    {/* El título no cambia de tamaño exageradamente, se mantiene elegante */}
                    <h3 className={`text-xl md:text-2xl font-black group-hover:text-[#6366f1] transition-colors leading-tight truncate`}>
                      {art.title}
                    </h3>

                    <p className="opacity-70 text-xs sm:text-sm max-w-3xl leading-relaxed font-medium">
                      {art.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-[9px] font-bold opacity-40 uppercase tracking-wider pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3"/> {art.readTime}
                      </span>
                      <span>{art.date}</span>
                    </div>
                  </div>
                </div>

                {/* Botón plano de acción, reacciona al hover de toda la fila */}
                <button className={`w-10 h-10 rounded-md border flex items-center justify-center transition-all flex-shrink-0 ${
                  isDark 
                    ? "border-white/10 group-hover:bg-white group-hover:text-black group-hover:border-white" 
                    : "border-black/10 group-hover:bg-black group-hover:text-white group-hover:border-black"
                }`}>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            ))}
          </div>

          {/* BADGE DE CONTROL ACADÉMICO (Estilo consola del sistema, no un banner publicitario) */}
          <div className={`p-6 sm:p-8 rounded-xl border border-current border-opacity-10 text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
            isDark ? "bg-zinc-950/40" : "bg-zinc-50"
          }`}>
            <div className="space-y-1">
              <h4 className="text-sm font-black uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                Estado Académico Activo
              </h4>
              <p className="text-[11px] opacity-60 font-semibold max-w-xl leading-normal">
                Cursando actualmente la 9na Edición del PIT 2026. La consola liberará los reportes técnicos detallados y scripts de automatización conforme se completen las evaluaciones de Oracle 19c y los entornos distribuidos de Machine Learning.
              </p>
            </div>
            
            <div className={`px-3 py-1.5 rounded text-[9px] font-black uppercase tracking-widest border border-current border-opacity-20 self-start sm:self-center ${
              isDark ? "bg-zinc-900 text-zinc-400" : "bg-white text-zinc-600"
            }`}>
              PIT-2026 Engine
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}