import React from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function ProjectDetail({ activeProject, activeImageIdx, setActiveImageIdx, setActiveProject, isDark }) {
  return (
    <div className="space-y-12 animate-fadeIn text-left">
      
      {/* CABECERA DE DETALLE */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#d946ef]">
          <span className="px-2.5 py-1 rounded bg-[#d946ef]/10 border border-[#d946ef]/20">
            {activeProject.date}
          </span>
          <span className="opacity-40">•</span>
          <span>{activeProject.role}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-[900] tracking-tighter uppercase leading-none">
          {activeProject.title}
        </h1>

        <p className={`text-sm md:text-base leading-relaxed font-semibold max-w-3xl ${isDark ? "text-gray-300" : "text-gray-750"}`}>
          {activeProject.description}
        </p>

        {/* Hitos / Logros Clave */}
        <div className="flex flex-wrap gap-2 pt-2">
          {activeProject.milestones && activeProject.milestones.map((milestone, idx) => (
            <span 
              key={idx}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider border ${
                isDark 
                  ? "bg-zinc-900/80 border-white/5 text-[#0ea5e9]" 
                  : "bg-white border-black/5 text-[#6366f1] shadow-sm"
              }`}
            >
              🏆 {milestone}
            </span>
          ))}
        </div>
      </div>

      {/* GRID PRINCIPAL DE CONTENIDOS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LADO IZQUIERDO: DETALLES, RETOS Y GALERÍA (7 columnas) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* RETOS ENFRENTADOS */}
          <div className={`p-6 rounded-2xl border text-left space-y-3 relative overflow-hidden ${
            isDark ? "bg-zinc-950/60 border-amber-500/20" : "bg-white border-amber-500/10 shadow-sm"
          }`}>
            <div className="absolute top-0 left-0 w-[4px] h-full bg-amber-500"></div>
            <h2 className="text-sm font-black uppercase tracking-wider flex items-center gap-2 text-amber-500">
              ⚡ Retos Enfrentados
            </h2>
            <p className={`text-xs font-semibold leading-relaxed ${isDark ? "text-gray-400" : "text-gray-650"}`}>
              {activeProject.challenges}
            </p>
          </div>

          {/* SOLUCIONES IMPLEMENTADAS */}
          <div className={`p-6 rounded-2xl border text-left space-y-3 relative overflow-hidden ${
            isDark ? "bg-zinc-950/60 border-cyan-500/20" : "bg-white border-cyan-500/10 shadow-sm"
          }`}>
            <div className="absolute top-0 left-0 w-[4px] h-full bg-cyan-500"></div>
            <h2 className="text-sm font-black uppercase tracking-wider flex items-center gap-2 text-cyan-500">
              ✓ Soluciones Implementadas
            </h2>
            <p className={`text-xs font-semibold leading-relaxed ${isDark ? "text-gray-400" : "text-gray-650"}`}>
              {activeProject.solutions}
            </p>
          </div>

          {/* APRENDIZAJES */}
          <div className={`p-6 rounded-2xl border text-left space-y-3 relative overflow-hidden ${
            isDark ? "bg-zinc-950/60 border-[#d946ef]/20" : "bg-white border-[#d946ef]/10 shadow-sm"
          }`}>
            <div className="absolute top-0 left-0 w-[4px] h-full bg-[#d946ef]"></div>
            <h2 className="text-sm font-black uppercase tracking-wider flex items-center gap-2 text-[#d946ef]">
              ✨ Aprendizajes
            </h2>
            <p className={`text-xs font-semibold leading-relaxed ${isDark ? "text-gray-400" : "text-gray-650"}`}>
              {activeProject.learnings}
            </p>
          </div>

          {/* GALERÍA DE CAPTURAS */}
          <div className="space-y-4">
            <h2 className="text-base font-black uppercase tracking-wider">
              Galería de Capturas
            </h2>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-zinc-900">
              {activeProject.gallery && activeProject.gallery.length > 0 ? (
                <img 
                  src={activeProject.gallery[activeImageIdx]} 
                  alt={`${activeProject.title} screenshot`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full flex flex-col justify-center items-center font-mono text-xs text-zinc-500">
                  <span>No image preview</span>
                </div>
              )}
            </div>

            {/* Miniaturas */}
            {activeProject.gallery && activeProject.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {activeProject.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-24 aspect-video rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      activeImageIdx === idx 
                        ? "border-[#d946ef] scale-95" 
                        : "border-transparent opacity-65 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* LADO DERECHO: METADATOS Y ACCIONES (5 columnas) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* STACK TECNOLÓGICO */}
          <div className={`p-6 rounded-2xl border space-y-4 ${
            isDark ? "bg-zinc-950/40 border-white/5" : "bg-white border-black/5 shadow-sm"
          }`}>
            <span className="block text-[10px] font-black uppercase tracking-wider text-zinc-500">
              Stack Tecnológico
            </span>
            <div className="flex flex-wrap gap-2">
              {activeProject.tags.map(tag => (
                <span 
                  key={tag} 
                  className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded border ${
                    isDark 
                      ? "bg-zinc-900 border-white/5 text-[#d946ef]" 
                      : "bg-white border-black/5 text-[#6366f1] shadow-sm"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* BOTÓN VISITAR PROYECTO */}
          {activeProject.link ? (
            <a 
              href={activeProject.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visitar el sitio web en producción de ${activeProject.title}`}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all bg-cyan-400 hover:bg-cyan-300 text-black shadow-lg shadow-cyan-400/20 active:scale-[0.98]"
            >
              <ExternalLink className="w-4 h-4" />
              Visitar Proyecto
            </a>
          ) : (
            <a 
              href={activeProject.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver el código fuente de ${activeProject.title} en GitHub`}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
            >
              <Github className="w-4 h-4" />
              Ver Código Base
            </a>
          )}

          {/* EQUIPO DE TRABAJO */}
          {activeProject.team && activeProject.team.length > 0 && (
            <div className={`p-6 rounded-2xl border space-y-4 ${
              isDark ? "bg-zinc-950/40 border-white/5" : "bg-white border-black/5 shadow-sm"
            }`}>
              <span className="block text-[10px] font-black uppercase tracking-wider text-zinc-500">
                Equipo de Trabajo
              </span>
              <div className="space-y-3">
                {activeProject.team.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d946ef] to-[#6366f1] text-white flex items-center justify-center text-[10px] font-black uppercase shadow-inner">
                      {member.name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <div className="text-left">
                      <span className="block text-xs font-bold">{member.name}</span>
                      <span className="block text-[9px] uppercase tracking-wider opacity-50 font-semibold">{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* NAVEGACIÓN INFERIOR */}
      <div className="pt-8 border-t border-current border-opacity-10 flex items-center justify-between gap-4">
        <button
          onClick={() => setActiveProject(null)}
          aria-label="Regresar al listado general de proyectos"
          className="group flex items-center gap-2 px-6 py-3 rounded-full border border-current border-opacity-20 text-[10px] font-black uppercase tracking-widest hover:text-[#d946ef] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          Todos los Proyectos
        </button>

        {activeProject.link && (
          <a
            href={activeProject.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visitar sitio externo de ${activeProject.title}`}
            className="flex items-center gap-1.5 px-6 py-3 rounded-full bg-cyan-400 text-black text-[10px] font-black uppercase tracking-widest hover:bg-cyan-300 transition-colors shadow-md"
          >
            <span>Visitar</span>
            <span>↗</span>
          </a>
        )}
      </div>

    </div>
  );
}
