import PageTransition from "./PageTransition";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export default function Articles({ isDark }) {
  const articles = [
    {
      title: "Dominando la Arquitectura Hexagonal en .NET",
      excerpt: "Descubre cómo separar la lógica de negocio de la infraestructura para crear aplicaciones mantenibles y testeables.",
      date: "20 Dic, 2025",
      readTime: "8 min lectura",
      category: "Arquitectura",
      link: "#"
    },
    {
      title: "Microservicios con NestJS y Kafka",
      excerpt: "Una guía práctica sobre la comunicación asíncrona entre servicios utilizando sistemas de mensajería modernos.",
      date: "15 Dic, 2025",
      readTime: "12 min lectura",
      category: "Backend",
      link: "#"
    }
  ];

  return (
    <PageTransition>
      <section className={`min-h-screen pt-32 pb-20 px-6 ${isDark ? "bg-[#0a0a0a] text-white" : "bg-[#f8f9fa] text-gray-900"}`}>
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-[900] tracking-tighter uppercase italic">
              Ideas & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">Código</span>
            </h1>
            <p className="opacity-60 font-medium">Compartiendo mi proceso, desafíos y aprendizajes en el desarrollo de software.</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {articles.map((art, index) => (
              <div key={index} className={`group p-8 rounded-[2rem] border transition-all duration-500 ${isDark ? "bg-[#111111] border-white/5 hover:border-[#d946ef]/30" : "bg-white border-black/5 hover:shadow-xl"}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d946ef]">{art.category}</span>
                    <h3 className="text-2xl md:text-3xl font-black group-hover:text-[#6366f1] transition-colors">{art.title}</h3>
                    <p className="opacity-60 text-sm max-w-2xl">{art.excerpt}</p>
                    <div className="flex items-center gap-4 text-[10px] font-bold opacity-40 uppercase">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {art.readTime}</span>
                      <span>{art.date}</span>
                    </div>
                  </div>
                  <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isDark ? "bg-white/5 group-hover:bg-white group-hover:text-black" : "bg-black/5 group-hover:bg-black group-hover:text-white"}`}>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}