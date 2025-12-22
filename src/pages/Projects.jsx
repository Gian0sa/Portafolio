import PageTransition from "../pages/PageTransition.jsx";
import { Github, Code2, Rocket } from "lucide-react";

export default function Projects({ isDark }) {
  const myProjects = [
    {
    title: "MultiServicios Turísticos",
    description: "Plataforma integral de gestión y venta de servicios turísticos (Tours, Hospedaje, Transporte). Incluye Dashboard administrativo, sistema de roles (RBAC) y carrito de compras funcional.",
    tags: ["ASP.NET Core", "React", "SQL Server", "JWT", "Entity Framework","C#"],
    github: "https://github.com/Gian0sa/Proyect_MultiServicios",
    status: "Finalizado / Destacado",
    features: [
      "Arquitectura en Capas (.NET Web API)",
      "Gestión de Ventas con envío de correo automático",
      "Modelo relacional con Triggers y Checks en DB",
      "Control de sesión y persistencia de carrito"
    ]
  },
    {
      title: "API de Microservicios",
      description: "Exploración de arquitecturas desacopladas usando NestJS y Kafka. Enfocado en escalabilidad y comunicación asíncrona.",
      tags: ["NestJS", "Kafka", "Docker"],
      github: "https://github.com/Gian0sa",
      status: "En Desarrollo"
    },
    {
      title: "Próximamente",
      description: "Trabajando en nuevas soluciones de Backend y Cloud. Muy pronto estaré compartiendo más código aquí.",
      tags: ["Cloud", "DevOps", "AI"],
      isPlaceholder: true
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
              Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">Proyectos</span>
            </h1>
            <p className={`font-medium max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Una muestra de mi trayectoria técnica, desde retos académicos hasta implementaciones modernas de backend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjects.map((project, index) => (
              <div 
                key={index}
                className={`group relative p-8 rounded-[2.5rem] border transition-all duration-500 ${
                  isDark 
                    ? "bg-[#111111] border-white/5 hover:border-[#d946ef]/40" 
                    : "bg-white border-black/5 hover:shadow-2xl shadow-black/5"
                } ${project.isPlaceholder ? "border-dashed opacity-60" : ""}`}
              >
                <div className="space-y-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    isDark ? "bg-white/5" : "bg-black/5"
                  }`}>
                    {project.isPlaceholder ? <Rocket className="w-6 h-6 text-gray-500" /> : <Code2 className="w-6 h-6 text-[#d946ef]" />}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black tracking-tight">{project.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md ${
                        isDark ? "bg-white/10 text-[#d946ef]" : "bg-black/5 text-[#6366f1]"
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {!project.isPlaceholder && (
                    <div className="pt-4 flex items-center justify-between border-t border-white/5">
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-[#d946ef] transition-colors">
                        <Github className="w-4 h-4" /> Código
                      </a>
                      <span className={`text-[9px] font-bold uppercase tracking-tighter ${isDark ? "text-gray-600" : "text-gray-400"}`}>
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}