import PageTransition from "../pages/PageTransition.jsx";
import { Github, Code2, Rocket, ExternalLink, Database, Cpu } from "lucide-react";

export default function Projects({ isDark }) {
  const myProjects = [
    {
      title: "KEMAK ERP v4.0",
      description: "Sistema Enterprise con IA Contextual (RAG) para gestión de inventarios y eventos. Arquitectura desacoplada y seguridad multicapa.",
      tags: [".NET 8", "PostgreSQL", "Next.js", "Groq AI", "JWT"],
      github: "https://github.com/Gian0sa/Proyect_Kemak",
      status: "MVP / Architecture",
      features: [
        "Clean Architecture con Repository & Unit of Work",
        "KEMAK AI: Chatbot con Llama 3.3 (Groq API) y lógica RAG",
        "Sistema de Roles (RBAC) avanzado para Admin y Personal",
        "Validación de seguridad mediante Middlewares JWT"
      ],
      icon: <Cpu className="w-6 h-6 text-[#d946ef]" />
    },
    {
      title: "LH Shop - E-commerce",
      description: "Plataforma de retail optimizada para SEO y alta conversión. Indexación dinámica de cientos de productos mediante Sitemaps automáticos.",
      tags: ["Next.js 15", "Tailwind CSS", "SEO", "Vercel"],
      github: "https://github.com/Gian0sa/Zapatillas_LH",
      link: "https://zapatillas-lh.vercel.app/", // Tu link desplegado
      status: "Producción / SEO Live",
      features: [
        "Indexación dinámica (Sitemap.ts) para Google Search Console",
        "Arquitectura DRY para gestión unificada de ropa y calzado",
        "Optimización Mobile-First con carga progresiva",
        "Integración automática con WhatsApp Business API"
      ],
      icon: <ExternalLink className="w-6 h-6 text-[#6366f1]" />
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
      icon: <Database className="w-6 h-6 text-gray-500" />
    }
  ];

  return (
    <PageTransition>
      <section className={`min-h-screen pt-32 pb-20 px-6 transition-colors duration-700 ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-[#f8f9fa] text-gray-900"
      }`}>
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-[900] tracking-tighter uppercase">
              Ingeniería <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">Aplicada</span>
            </h1>
            <p className={`font-medium max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Soluciones escalables que integran Inteligencia Artificial, optimización SEO y arquitecturas empresariales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {myProjects.map((project, index) => (
              <div 
                key={index}
                className={`group relative p-10 rounded-[3rem] border transition-all duration-500 ${
                  isDark 
                    ? "bg-[#111111] border-white/5 hover:border-[#d946ef]/40" 
                    : "bg-white border-black/5 hover:shadow-2xl shadow-black/5"
                }`}
              >
                <div className="flex flex-col h-full justify-between space-y-8">
                  <div className="space-y-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      isDark ? "bg-white/5" : "bg-black/5"
                    }`}>
                      {project.icon}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-3xl font-black tracking-tight">{project.title}</h3>
                        <span className={`text-[10px] font-black px-3 py-1 rounded-full border ${isDark ? "border-white/10 text-gray-500" : "border-black/10 text-gray-400"}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className={`text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        {project.description}
                      </p>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-medium opacity-70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#d946ef]" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-lg ${
                          isDark ? "bg-white/5 text-[#d946ef]" : "bg-black/5 text-[#6366f1]"
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 flex items-center gap-6 border-t border-white/5">
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-[#d946ef] transition-all hover:translate-x-1">
                        <Github className="w-4 h-4" /> Source Code
                      </a>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-[#6366f1] transition-all hover:translate-x-1">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}