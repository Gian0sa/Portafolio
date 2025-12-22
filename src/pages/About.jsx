import yoAbout from "../assets/images/yo.jpg"; 
import PageTransition from "./PageTransition";

export default function About({ isDark }) {
  const stats = [
    { label: "Habilidades en Lenguajes", value: "8+" },
    { label: "Proyectos Completados", value: "3+" },
    { label: "Año de Experiencia", value: "1" },
  ];

  const skillCategories = [
    { 
      name: "Lenguajes de Programación", 
      skills: ["Java", "JavaScript", "TypeScript", "Python", "C#", "PHP", "Kotlin"] 
    },
    { 
      name: "Bibliotecas & Frameworks", 
      skills: ["React", "Bootstrap", ".NET Core MVC", ".NET Framework", "ADO.NET", "NestJS", "Spring Boot"] 
    },
    { 
      name: "Persistencia de Datos", 
      skills: ["SQL Server", "MySQL", "PostgreSQL", "SQLite", "MongoDB", "JDBC", "JPA", "Hibernate", "Prisma ORM"] 
    },
    { 
      name: "Arquitectura & Metodologías", 
      skills: ["Clean Architecture", "Arquitectura Hexagonal", "Arquitectura en Capas", "Microservicios", "Diseño de BD", "Diagramas ER"] 
    },
    { 
      name: "Testing & Calidad", 
      skills: ["Postman", "Insomnia", "Swagger", "JUnit Jupiter", "Mockito", "Pruebas Unitarias"] 
    },
    { 
      name: "DevOps & Herramientas", 
      skills: ["Docker", "Git", "GitHub", "VS Code", "Visual Studio 2022", "Spring Tools", "Android Studio"] 
    }
  ];

  const experiences = [
    {
      role: "Desarrollador de back-end (Prácticas)",
      company: "Fundación CALMA",
      period: "oct. 2025 - actualidad",
      achievements: [
        "Arquitectura de Microservicios: Participación en la migración de plataforma monolítica a arquitecturas de microservicios escalables, implementando Arquitectura Hexagonal.",
        "Desarrollo Backend Robusto: Creación de APIs RESTful en NestJS/TypeScript con integración de Prisma ORM para gestión eficiente de bases de datos.",
        "Seguridad y Caching: Implementación de sistemas de autenticación y autorización con JWT, y uso de Redis para optimizar la latencia.",
        "Comunicación Asíncrona: Implementación de una arquitectura de eventos mediante Apache Kafka para asegurar la comunicación desacoplada.",
        "DevOps y Contenerización: Responsable de la contenerización de servicios utilizando Docker, optimizando procesos de Despliegue Continuo (CD)."
      ]
    }
  ];

  return (
    <PageTransition>
      <section className={`min-h-screen pt-32 pb-20 px-6 transition-colors duration-700 ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-[#f8f9fa] text-gray-900"
      }`}>
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* TÍTULO PRINCIPAL */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-[900] tracking-tighter uppercase">
              Pasión <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">que impulsa ideas</span>
            </h1>
          </div>

          {/* SECCIÓN BIOGRAFÍA, FOTO Y STATS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-2">
                <h3 className="text-xs font-black tracking-widest uppercase opacity-50">Biografía</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#d946ef] to-[#6366f1]"></div>
              </div>
              <div className="space-y-6 text-base md:text-lg leading-relaxed font-medium opacity-80">
                <p>
                  Hola, soy <span className="text-[#d946ef] font-bold">Gian Peer</span>, un ingeniero de software apasionado con un profundo amor por la programación, particularmente en los ámbitos del desarrollo de backend, la arquitectura de software, la computación en la nube y la inteligencia artificial.
                </p>
                <p>
                  Mi trayectoria en la ingeniería de software ha estado impulsada por una curiosidad insaciable y un fuerte deseo de estar a la vanguardia de los avances tecnológicos. Disfruto enormemente resolviendo problemas complejos y creando soluciones eficientes y escalables que no solo cumplen, sino que superan las expectativas.
                </p>
                <p>
                  Busco constantemente oportunidades para aprender y crecer, y me desenvuelvo en entornos colaborativos donde puedo aportar mi experiencia y aprender de los demás. Mi objetivo es aprovechar mis habilidades técnicas y mi capacidad de resolución de problemas para crear soluciones de software impactantes que marquen la diferencia.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center sticky top-32">
              <div className={`relative p-2 border-2 ${isDark ? 'border-white' : 'border-black'} rounded-lg shadow-[10px_10px_0px_0px_rgba(217,70,239,0.5)] transition-transform hover:scale-105 duration-500`}>
                <img src={yoAbout} alt="Gian Biografía" className="w-full max-w-[350px] rounded-sm grayscale hover:grayscale-0 transition-all duration-700 object-cover" />
              </div>
            </div>

            <div className="lg:col-span-3 space-y-12 lg:text-right">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <h4 className="text-5xl md:text-7xl font-black group-hover:text-[#d946ef] transition-colors duration-300">{stat.value}</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-black mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECCIÓN HABILIDADES (DISEÑO DE ETIQUETAS) */}
          <div className="pt-24 border-t border-current border-opacity-10">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tighter uppercase">
              Habilidades <span className="text-[#d946ef]">Técnicas</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {skillCategories.map((cat, index) => (
                <div key={index} className={`p-8 rounded-3xl border ${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"}`}>
                  <h5 className="text-[#d946ef] font-black uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-current"></span> {cat.name}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIndex) => (
                      <span key={sIndex} className={`px-3 py-1.5 rounded-lg text-xs font-bold ${isDark ? "bg-white/10 text-gray-300" : "bg-black/10 text-gray-600"}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECCIÓN EXPERIENCIA (TIMELINE) */}
          <div className="pt-24 border-t border-current border-opacity-10">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tighter uppercase">
              Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">Laboral</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-[#d946ef]">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#d946ef] shadow-[0_0_15px_rgba(217,70,239,0.5)]"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-black">{exp.role}</h3>
                      <p className="text-[#6366f1] font-bold">{exp.company}</p>
                    </div>
                    <span className={`text-sm font-bold px-4 py-1 rounded-full mt-2 md:mt-0 ${isDark ? "bg-white/10" : "bg-black/5"}`}>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {exp.achievements.map((item, aIndex) => (
                      <li key={aIndex} className="flex items-start gap-3 opacity-80 leading-relaxed font-medium">
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