import PageTransition from "./PageTransition"; 
import { Analytics } from "@vercel/analytics/react"; 
import { Github, ExternalLink, Cpu, Database, Layers } from "lucide-react";

export default function Projects({ isDark }) {
  const myProjects = [
    {
      title: "KEMAK ERP v4.0",
      description: "Sistema Enterprise con IA Contextual (RAG) para gestión de inventarios y eventos. Arquitectura desacoplada y seguridad multicapa.",
      tags: [".NET 8", "PostgreSQL", "Next.js", "Groq AI", "JWT"],
      github: "https://github.com/Gian0sa/Proyect_Kemak",
      link: "https://proyect-kemak-front.vercel.app/mayorista",
      status: "MVP / Architecture",
      features: [
        "Clean Architecture con Repository & Unit of Work",
        "KEMAK AI: Chatbot con Llama 3.3 (Groq API) y lógica RAG",
        "Sistema de Roles (RBAC) avanzado para Admin y Personal",
        "Validación de seguridad mediante Middlewares JWT"
      ],
      icon: <Cpu className="w-4 h-4 text-[#d946ef]" />
    },
    {
      title: "LH Shop - E-commerce",
      description: "Plataforma de retail optimizada para SEO y alta conversión. Indexación dinámica de cientos de productos mediante Sitemaps automáticos.",
      tags: ["Next.js 15", "Tailwind CSS", "SEO", "Vercel"],
      github: "https://github.com/Gian0sa/Zapatillas_LH",
      link: "https://zapatillas-lh.vercel.app/",
      status: "Producción / SEO Live",
      features: [
        "Indexación dinámica (Sitemap.ts) para Google Search Console",
        "Arquitectura DRY para gestión unificada de ropa y calzado",
        "Optimización Mobile-First con carga progresiva",
        "Integración automática con WhatsApp Business API"
      ],
      icon: <ExternalLink className="w-4 h-4 text-[#6366f1]" />
    },
    {
      title: "Microservices Ecosystem",
      description: "Arquitectura distribuida explorando la comunicación asíncrona y el desacoplamiento de servicios críticos.",
      tags: ["NestJS", "Apache Kafka", "Docker", "Redis"],
      github: "https://github.com/Gian0sa",
      status: "En Desarrollo",
      features: [
        "Event-Driven Architecture con Kafka",
        "Contenerización con Docker Compose",
        "Estrategias de Caching con Redis",
        "Documentación técnica con Swagger"
      ],
      icon: <Database className="w-4 h-4 text-zinc-400" />
    }
  ];

  const particles = [
    { top: "15%", left: "6%", size: "w-[1px] h-[1px]", anim: "animate-pulse" },
    { top: "35%", left: "90%", size: "w-[2px] h-[2px]", anim: "animate-ping" },
    { top: "68%", left: "12%", size: "w-[1px] h-[1px]", anim: "animate-pulse" },
    { top: "82%", left: "82%", size: "w-[1.5px] h-[1.5px]", anim: "animate-pulse" }
  ];

  return (
    <PageTransition>
      <section className={`min-h-screen pt-32 pb-20 px-6 transition-colors duration-700 relative overflow-hidden ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-[#f8f9fa] text-gray-900"
      }`}>
        
        {/* BACKGROUND ANIMADO */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute w-[350px] h-[350px] rounded-full blur-[140px] mix-blend-screen opacity-10 bg-[#d946ef] top-[5%] left-[-5%]" style={{ animationDuration: '11s' }}></div>
          <div className="absolute w-[350px] h-[350px] rounded-full blur-[140px] mix-blend-screen opacity-10 bg-[#6366f1] bottom-[10%] right-[-5%]" style={{ animationDuration: '15s' }}></div>

          <div className="absolute inset-0 opacity-25">
            {particles.map((p, idx) => (
              <div 
                key={idx} 
                className={`absolute ${p.size} rounded-full ${p.anim} ${isDark ? "bg-white" : "bg-[#6366f1]"}`} 
                style={{ top: p.top, left: p.left }}
              ></div>
            ))}
          </div>
        </div>

        {/* CONTENEDOR CENTRAL */}
        <div className="max-w-4xl mx-auto space-y-20 relative z-10">
          
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
                className="group py-10 first:pt-6 last:pb-6 flex flex-col gap-6 transition-all duration-300 relative"
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-5 space-y-3">
                    <h3 className="text-2xl font-black group-hover:text-[#6366f1] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* CAJA DE ESPECIFICACIONES CON COLORES FIJOS DE CONTRASTE */}
                  <div className={`lg:col-span-7 p-5 rounded-xl border ${
                    isDark 
                      ? "bg-[#111111]/60 border-white/5 text-zinc-300" 
                      : "bg-zinc-50 border-black/5 text-zinc-700"
                  }`}>
                    <span className="block text-[8px] font-black uppercase tracking-widest text-zinc-500 mb-3">Especificaciones del Sistema</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-semibold">
                          <span className="text-[#d946ef] mt-0.5 select-none">•</span>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
              <h4 className="text-sm font-black uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#6366f1]" />
                Enfoque de Desarrollo
              </h4>
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

        </div>
      </section>
      <Analytics />
    </PageTransition>
  );
}
