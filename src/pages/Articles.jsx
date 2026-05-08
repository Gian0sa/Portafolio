import PageTransition from "./PageTransition";
import { BookOpen, Clock, ArrowRight, Brain, Database, Terminal } from "lucide-react";

export default function Articles({ isDark }) {
  const learningNotes = [
    {
      title: "PIT561: Database Administrator (DBA) con Oracle 19c",
      excerpt: "Especialización en administración de instancias Oracle, gestión de almacenamiento, seguridad y optimización de base de datos relacional empresarial.",
      date: "En curso - 2026",
      readTime: "9na Edición UNI",
      category: "Databases",
      icon: <Database className="w-5 h-5 text-[#d946ef]" />,
      link: "#"
    },
    {
      title: "PIT608: Machine Learning con Python",
      excerpt: "Implementación de modelos de aprendizaje supervisado y no supervisado. Análisis predictivo aplicado a problemas de ingeniería de software.",
      date: "En curso - 2026",
      readTime: "IA Research",
      category: "Data Science",
      icon: <Brain className="w-5 h-5 text-[#6366f1]" />,
      link: "#"
    },
    {
      title: "PIT621: Programación en Python Intermedio",
      excerpt: "Desarrollo avanzado de scripts, manejo de estructuras de datos complejas y automatización de procesos bajo estándares del CTIC UNI.",
      date: "En curso - 2026",
      readTime: "Core Python",
      category: "Programación",
      icon: <Terminal className="w-5 h-5 text-[#d946ef]" />,
      link: "#"
    }
  ];

  return (
    <PageTransition>
      <section className={`min-h-screen pt-32 pb-20 px-6 transition-colors duration-700 ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-[#f8f9fa] text-gray-900"
      }`}>
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* CABECERA */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-[900] tracking-tighter uppercase italic">
              Ideas & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">Especialización</span>
            </h1>
            <p className="opacity-60 font-medium max-w-2xl mx-auto italic">
              Documentando mi especialización técnica en el Programa de Innovación Tecnológica (PIT) del CTIC - UNI.
            </p>
          </div>

          {/* LISTA DE ARTÍCULOS / CURSOS */}
          <div className="grid grid-cols-1 gap-6">
            {learningNotes.map((art, index) => (
              <div 
                key={index} 
                className={`group p-8 rounded-[2.5rem] border transition-all duration-500 ${
                  isDark 
                    ? "bg-[#111111] border-white/5 hover:border-[#d946ef]/30" 
                    : "bg-white border-black/5 hover:shadow-2xl shadow-black/5"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-6">
                    {/* Icono dinámico */}
                    <div className={`hidden md:flex w-14 h-14 rounded-2xl items-center justify-center transition-all ${
                      isDark ? "bg-white/5" : "bg-black/5"
                    }`}>
                      {art.icon}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d946ef]">
                          {art.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-500 opacity-30"></span>
                        <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">CTIC UNI</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black group-hover:text-[#6366f1] transition-colors leading-tight">
                        {art.title}
                      </h3>

                      <p className="opacity-60 text-sm max-w-2xl leading-relaxed">
                        {art.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-[10px] font-bold opacity-40 uppercase">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3"/> {art.readTime}
                        </span>
                        <span>{art.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Botón de acción */}
                  <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                    isDark 
                      ? "bg-white/5 group-hover:bg-white group-hover:text-black" 
                      : "bg-black/5 group-hover:bg-black group-hover:text-white"
                  }`}>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* BADGE DE ESTADO ACADÉMICO */}
          <div className={`p-10 rounded-[3rem] border-2 border-dashed border-opacity-20 flex flex-col items-center text-center space-y-6 ${
            isDark ? "border-white bg-white/5" : "border-black bg-black/5"
          }`}>
            <div className="space-y-2">
              <h4 className="text-xl font-black italic">Aprendizaje Continuo</h4>
              <p className="text-xs opacity-60 font-medium max-w-sm">
                Actualmente cursando la 9na Edición del PIT 2026. Próximamente publicaré resúmenes técnicos de cada módulo finalizado.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-70">Enfoque: Oracle 19c & Machine Learning</span>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}