import yoAbout from "../assets/images/yo.jpg"; 
import PageTransition from "./PageTransition";
import SparklesBackground from "../components/SparklesBackground";

export default function About({ isDark }) {
  const stats = [
    { label: "Tecnologías Aprendidas", value: "15+" },
    { label: "Proyectos de Impacto", value: "5+" },
    { label: "Año de Especialización", value: "1" },
  ];

  const skillCategories = [
    { 
      name: "Lenguajes de Programación", 
      skills: ["Java", "TypeScript", "JavaScript", "C#", "Python", "Kotlin", "PHP"] 
    },
    { 
      name: "Backend & Frameworks", 
      skills: ["NestJS", "Spring Boot", ".NET Core", "Node.js", "Express", "ADO.NET"] 
    },
    { 
      name: "Persistencia de Datos", 
      skills: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Redis", "Prisma ORM", "Hibernate", "JPA"] 
    },
    { 
      name: "Arquitectura & Cloud", 
      skills: ["Microservicios", "Clean Architecture", "Hexagonal", "Docker", "Apache Kafka", "IA Generativa"] 
    },
    { 
      name: "Testing & Calidad", 
      skills: ["JUnit", "Mockito", "Pruebas Unitarias", "Postman", "Swagger", "Insomnia"] 
    },
    { 
      name: "DevOps & Tools", 
      skills: ["Git", "GitHub", "CI/CD", "Linux", "VS Code", "Visual Studio", "Android Studio"] 
    }
  ];

  const experiences = [
    {
      role: "Desarrollador Web Full Stack",
      company: "Leon Autos Ford",
      period: "Jun. 2026 - Actualidad",
      achievements: [
        "Desarrollo End-to-End: Construcción de módulos interactivos de alta velocidad utilizando TypeScript con NestJS en el backend y Next.js en el frontend.",
        "Arquitectura Hexagonal: Implementación de patrones de diseño limpios desacoplados del framework para garantizar la flexibilidad y escalabilidad de la lógica de negocio.",
        "Seguridad y Caching: Aseguramiento de accesos mediante autenticación JWT y optimización de lecturas mediante Redis para la gestión del flujo de datos en caché.",
        "Base de Datos e Infraestructura: Diseño relacional estructurado con PostgreSQL (pgAdmin) y despliegue del ecosistema en servidores Linux para entornos de pruebas."
      ]
    },
    {
      role: "Desarrollador Backend (Practicante Profesional)",
      company: "Fundación CALMA",
      period: "Oct. 2025 - Jun. 2026",
      achievements: [
        "Migración Arquitectónica: Lideré la transición de módulos monolíticos a Microservicios bajo Arquitectura Hexagonal, mejorando la mantenibilidad del código en un 40%.",
        "Optimización de Consultas: Implementé NestJS con Prisma ORM y Redis para caching, logrando una reducción del 30% en la latencia de respuesta de las APIs.",
        "Mensajería Asíncrona: Configuré arquitecturas orientadas a eventos mediante Apache Kafka para garantizar una comunicación desacoplada y escalable entre servicios.",
        "Infraestructura Moderna: Estandaricé el entorno de desarrollo mediante la contenerización con Docker, facilitando flujos de Despliegue Continuo (CD)."
      ]
    }
  ];

  return (
    <PageTransition>
      <section className={`min-h-screen pt-32 pb-20 px-6 transition-colors duration-700 relative overflow-hidden ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-[#f8f9fa] text-gray-900"
      }`}>
        
        {/* ================= ECOSISTEMA DE PARTICULAS Y LUCES DE FONDO ================= */}
        <SparklesBackground isDark={isDark} />
        {/* ============================================================================= */}

        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32 relative z-10">
          
          {/* TÍTULO PRINCIPAL */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-7xl font-[900] tracking-tighter uppercase">
              Ingeniería <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">con propósito</span>
            </h1>
          </div>

          {/* SECCIÓN BIOGRAFÍA, FOTO Y STATS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* TEXTO: Aparece segundo en móvil, primero en escritorio */}
            <div className="lg:col-span-5 space-y-8 text-left order-2 lg:order-1">
              <div className="space-y-2">
                <h3 className="text-xs font-black tracking-widest uppercase opacity-50">Sobre mí</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#d946ef] to-[#6366f1]"></div>
              </div>
              <div className="space-y-6 text-base md:text-lg leading-relaxed font-medium opacity-80">
                <p>
                  Soy <span className="text-[#d946ef] font-bold">Gian Peer</span>, desarrollador de software enfocado en construir el "core" de aplicaciones modernas. Mi pasión reside en la intersección de las arquitecturas escalables, la computación distribuida y la eficiencia del backend.
                </p>
                <p>
                  Mi enfoque no es solo escribir código, sino diseñar soluciones. Me especializo en desglosar problemas complejos en sistemas modulares y eficientes, asegurando que cada línea de código aporte valor al negocio y estabilidad al usuario final.
                </p>
                <p className="hidden md:block">
                  Currently, estoy profundizando en el uso de <span className="font-bold">IA Generativa y Ciencia de Datos</span> para potenciar la lógica de negocio en entornos de microservicios.
                </p>
              </div>
            </div>

            {/* FOTO A COLOR RECONFIGURADA: Sin clase grayscale para mantener color original */}
            <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-32 order-1 lg:order-2">
              <div className={`relative p-2 border-2 ${isDark ? 'border-white' : 'border-black'} rounded-lg shadow-[10px_10px_0px_0px_rgba(217,70,239,0.5)] transition-transform hover:scale-105 duration-500`}>
                <img 
                  src={yoAbout} 
                  alt="Gian Peer" 
                  className="w-full max-w-[280px] md:max-w-[350px] rounded-sm transition-all duration-700 object-cover" 
                />
              </div>
            </div>

            {/* STATS: Aparece al final del bloque en móvil */}
            <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-8 lg:space-y-12 lg:text-right order-3">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <h4 className="text-4xl md:text-7xl font-black group-hover:text-[#6366f1] transition-colors duration-300">{stat.value}</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-black mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECCIÓN HABILIDADES */}
          <div className="pt-24 border-t border-current border-opacity-10">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-16 md:mb-20 tracking-tighter uppercase">
              Stack <span className="text-[#d946ef]">Tecnológico</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((cat, index) => (
                <div key={index} className={`p-8 rounded-3xl border transition-all hover:border-[#d946ef]/30 ${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"}`}>
                  <h5 className="text-[#d946ef] font-black uppercase text-[10px] tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-current"></span> {cat.name}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIndex) => (
                      <span key={sIndex} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                        isDark ? "bg-white/10 text-gray-300 hover:bg-[#d946ef]/20" : "bg-black/10 text-gray-600 hover:bg-[#d946ef]/10"
                      }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECCIÓN EXPERIENCIA */}
          <div className="pt-24 border-t border-current border-opacity-10">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-16 md:mb-20 tracking-tighter uppercase">
              Trayectoria <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">Profesional</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-[#d946ef]">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#d946ef] shadow-[0_0_15px_rgba(217,70,239,0.5)]"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black">{exp.role}</h3>
                      <p className="text-[#6366f1] font-bold text-base md:text-lg">{exp.company}</p>
                    </div>
                    <span className={`text-[10px] font-black px-4 py-1.5 rounded-full mt-2 md:mt-0 tracking-widest uppercase ${isDark ? "bg-white/10 text-white" : "bg-black/5 text-black"}`}>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {exp.achievements.map((item, aIndex) => (
                      <li key={aIndex} className="flex items-start gap-3 opacity-80 leading-relaxed font-medium text-sm md:text-base text-left">
                        <span className="text-[#d946ef] mt-1.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}