import React from "react";
import { Layers } from "lucide-react";

export default function ProjectList({ myProjects, setActiveProject, setActiveImageIdx, isDark }) {
  return (
    <>
      {/* CABECERA */}
      <div className="text-left space-y-4 max-w-2xl border-l-2 border-current pl-6 border-opacity-20">
        <h1 className="text-4xl md:text-6xl font-[900] tracking-tighter uppercase leading-none">
          Ingeniería <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">
            Aplicada & Core.
          </span>
        </h1>
        <p className="opacity-65 text-xs sm:text-sm font-semibold tracking-wide">
          Soluciones scalables basadas en Clean Architecture, sistemas de mensajería orientados a eventos y optimización SEO masiva.
        </p>
      </div>

      {/* LISTA DE PROYECTOS TIPO ESQUEMA */}
      <div className="divide-y divide-current divide-opacity-10 border-t border-b border-current border-opacity-10">
        {myProjects.map((project, index) => (
          <div 
            key={index}
            onClick={() => { 
              setActiveProject(project); 
              setActiveImageIdx(0); 
            }}
            className="group py-10 first:pt-6 last:pb-6 flex flex-col gap-6 transition-all duration-300 relative cursor-pointer"
          >
            {/* Cabecera del Item */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                  isDark ? "bg-zinc-900/60 border-white/10" : "bg-zinc-100 border-black/5"
                }`}>
                  {project.icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#d946ef]">
                  {project.status}
                </span>
              </div>
              
              <span className="text-[10px] font-mono font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                [NODE_0{index + 1}]
              </span>
            </div>

            {/* Contenido Desglosado */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* LADO IZQUIERDO: IMAGEN O DIAGRAMA (5 columnas) */}
              <div className="md:col-span-5 w-full">
                {project.image ? (
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 group-hover:border-[#d946ef]/30 transition-all duration-500 shadow-md">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                  </div>
                ) : (
                  /* Diagrama esquemático visual para proyectos backend sin screenshot */
                  <div className={`relative aspect-video w-full overflow-hidden rounded-xl border flex flex-col justify-between p-4 font-mono text-[9px] ${
                    isDark 
                      ? "bg-zinc-950/80 border-white/5 text-zinc-400 shadow-inner" 
                      : "bg-zinc-100 border-black/5 text-zinc-600 shadow-sm"
                  }`}>
                    <div className="flex justify-between items-center border-b border-current border-opacity-10 pb-2">
                      <span className="text-[8px] font-bold tracking-widest text-[#d946ef]">[SYSTEM_SCHEMATIC]</span>
                      <span className="animate-pulse text-green-500 font-bold">● ACTIVE</span>
                    </div>
                    <div className="flex items-center justify-around my-auto gap-1">
                      <div className={`p-1.5 rounded border border-dashed flex flex-col items-center gap-1 text-[8px] ${isDark ? "bg-zinc-900 border-white/10" : "bg-white border-black/10"}`}>
                        <span>Gateway</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      </div>
                      <div className="flex flex-col gap-0.5 items-center">
                        <span className="h-[1px] w-4 border-t border-dashed border-current border-opacity-30"></span>
                      </div>
                      <div className={`p-1.5 rounded border border-dashed flex flex-col items-center gap-1 text-[8px] ${isDark ? "bg-zinc-900 border-white/10" : "bg-white border-black/10"}`}>
                        <span>Broker</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      </div>
                      <div className="flex flex-col gap-0.5 items-center">
                        <span className="h-[1px] w-4 border-t border-dashed border-current border-opacity-30"></span>
                      </div>
                      <div className={`p-1.5 rounded border border-dashed flex flex-col items-center gap-1 text-[8px] ${isDark ? "bg-zinc-900 border-white/10" : "bg-white border-black/10"}`}>
                        <span>Db Cluster</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      </div>
                    </div>
                    <div className="text-[7px] flex justify-between opacity-50">
                      <span>CPU: ~14%</span>
                      <span>LATENCY: 12ms</span>
                    </div>
                  </div>
                )}
              </div>

              {/* LADO DERECHO: TEXTO Y ESPECIFICACIONES (7 columnas) */}
              <div className="md:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <h2 className="text-xl md:text-2xl font-black group-hover:text-[#6366f1] transition-colors leading-tight">
                    {project.title}
                  </h2>
                  <p className={`text-xs sm:text-sm leading-relaxed font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {project.description}
                  </p>
                </div>

                {/* CAJA DE ESPECIFICACIONES CON COLORES FIJOS DE CONTRASTE */}
                <div className={`p-4 rounded-xl border ${
                  isDark 
                    ? "bg-[#111111]/60 border-white/5 text-zinc-300" 
                    : "bg-zinc-50 border-black/5 text-zinc-700"
                }`}>
                  <span className="block text-[8px] font-black uppercase tracking-widest text-zinc-500 mb-2.5">Especificaciones del Sistema</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs font-semibold">
                        <span className="text-[#d946ef] mt-0.5 select-none">•</span>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 2 && (
                      <li className="text-[10px] font-bold text-[#6366f1] mt-1 list-none flex items-center gap-1">
                        Ver más detalles ↗
                      </li>
                    )}
                  </ul>
                </div>
              </div>

            </div>

            {/* Pie del Item: Etiquetas y Enlaces */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${
                    isDark 
                      ? "bg-zinc-950/60 border-white/5 text-[#d946ef]" 
                      : "bg-white border-black/5 text-[#6366f1] shadow-sm"
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 font-mono text-[10px] font-black uppercase tracking-wider">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Repositorio en GitHub de ${project.title}`}
                  className="flex items-center gap-1.5 hover:text-[#d946ef] transition-colors group/link"
                >
                  <span>Repository</span>
                  <span className="text-zinc-500 group-hover/link:text-[#d946ef] transition-colors">↗</span>
                </a>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Sitio web en producción de ${project.title}`}
                    className="flex items-center gap-1.5 hover:text-[#6366f1] transition-colors group/link"
                  >
                    <span>Production</span>
                    <span className="text-zinc-500 group-hover/link:text-[#6366f1] transition-colors">↗</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CONTROL DE ARQUITECTURA GENERAL */}
      <div className={`p-6 sm:p-8 rounded-xl border border-current border-opacity-10 text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
        isDark ? "bg-zinc-950/40" : "bg-zinc-50"
      }`}>
        <div className="space-y-1">
          <h2 className="text-sm font-black uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#6366f1]" />
            Enfoque de Desarrollo
          </h2>
          <p className="text-[11px] opacity-60 font-semibold max-w-xl leading-normal">
            Todos los proyectos expuestos siguen estándares rigurosos de código limpio, desacoplamiento modular mediante contenedores y persistencia optimizada. El código fuente está completamente documentado y disponible para auditorías técnicas.
          </p>
        </div>
        
        <div className={`px-3 py-1.5 rounded text-[9px] font-black uppercase tracking-widest border border-current border-opacity-20 self-start sm:self-center ${
          isDark ? "bg-zinc-900 text-zinc-400" : "bg-white text-zinc-600"
        }`}>
          Production Ready
        </div>
      </div>
    </>
  );
}
