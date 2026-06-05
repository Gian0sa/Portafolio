import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "./PageTransition"; 
import ProfileCard from "../components/ProfileCard";
import { Analytics } from "@vercel/analytics/react";
import { Play, Circle, RefreshCw } from "lucide-react";

// Importamos tu imagen desde la ruta exacta que se observa en image_89ff45.jpg
import mcFondo from "../assets/images/fondo.jpg";

export default function Home({ isDark }) {
  const navigate = useNavigate();
  const [gameStage, setGameStage] = useState("idle"); // "idle" | "console" | "mojang" | "generator" | "menu"
  const [progress, setProgress] = useState(0);

  // Sistema de flujo automático de carga
  useEffect(() => {
    if (gameStage === "console") {
      setTimeout(() => setGameStage("mojang"), 1000);
    } else if (gameStage === "mojang") {
      setTimeout(() => setGameStage("generator"), 1200);
    } else if (gameStage === "generator") {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setGameStage("menu"), 500);
            return 100;
          }
          const increment = Math.floor(Math.random() * 12) + 5;
          const nextProgress = prev + increment;
          return nextProgress > 100 ? 100 : nextProgress;
        });
      }, 150);
      return () => clearInterval(interval);
    }
  }, [gameStage]);

  const handleStartLoading = (e) => {
    e.preventDefault();
    if (gameStage === "idle" || gameStage === "menu") {
      setProgress(0);
      setGameStage("console");
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setProgress(0);
    setGameStage("idle");
  };

  // Renderizar la Matriz de Cubos 3D Isométricos
  const render3DGenerator = () => {
    const totalCubes = 25;
    const activeCubesCount = Math.floor(progress / 4);

    return Array(totalCubes).fill(0).map((_, index) => {
      const isActive = index < activeCubesCount;
      return (
        <div key={index} className="relative w-full h-full flex items-center justify-center [perspective:1000px] aspect-square">
          <div className={`relative w-4/5 h-4/5 transition-all duration-300 [transform-style:preserve-3d] ${
            isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"
          } [transform:rotateX(-25deg)_rotateY(45deg)]`}>
            <div className={`absolute inset-0 origin-bottom [transform:rotateX(90deg)_translateZ(10px)] ${isDark ? "bg-[#2ea85c]" : "bg-[#38c172]"} border border-black/10`}></div>
            <div className={`absolute inset-0 origin-left [transform:rotateY(90deg)_translateZ(10px)] ${isDark ? "bg-[#54351d]" : "bg-[#6d4629]"} border border-black/20`}></div>
            <div className={`absolute inset-0 [transform:translateZ(10px)] ${isDark ? "bg-[#6d4629]" : "bg-[#7e5233]"} border border-black/20 overflow-hidden`}>
              <div className={`absolute top-0 left-0 right-0 h-[3px] ${isDark ? "bg-[#2ea85c]" : "bg-[#38c172]"}`}></div>
            </div>
          </div>
        </div>
      );
    });
  };

  const particles = [
    { top: "12%", left: "15%", size: "w-1 h-1", anim: "animate-pulse" },
    { top: "25%", left: "45%", size: "w-1.5 h-1.5", anim: "animate-ping" },
    { top: "60%", left: "10%", size: "w-1.5 h-1.5", anim: "animate-pulse" },
    { top: "70%", left: "80%", size: "w-1 h-1", anim: "animate-ping" }
  ];

  return (
    <PageTransition>
      <section className={`min-h-screen flex items-center justify-center pt-28 pb-12 px-4 md:px-6 transition-colors duration-700 relative overflow-hidden ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-[#f8f9fa] text-gray-900"
      }`}>
        
        {/* FONDO DE LUCES Y PARTÍCULAS */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute w-[350px] h-[350px] rounded-full blur-[120px] mix-blend-screen opacity-20 animate-pulse bg-[#d946ef] top-[-10%] left-[-5%]" style={{ animationDuration: '8s' }}></div>
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[130px] mix-blend-screen opacity-20 animate-pulse bg-[#6366f1] bottom-[10%] right-[-5%]" style={{ animationDuration: '12s' }}></div>
          <div className="absolute inset-0 opacity-40">
            {particles.map((p, idx) => (
              <div key={idx} className={`absolute ${p.size} rounded-full ${p.anim} ${isDark ? "bg-white" : "bg-[#6366f1]"}`} style={{ top: p.top, left: p.left }}></div>
            ))}
          </div>
        </div>

        {/* INYECTAMOS ESTILOS DE LOS BOTONES DE MINECRAFT SIN AGREGAR ARCHIVOS EXTERNOS */}
        <style>{`
          .mc-btn {
            background: #5c5c5c;
            border: 2px solid #000;
            box-shadow: inset -2px -2px 0px #373737, inset 2px 2px 0px #8b8b8b;
            color: #e0e0e0;
            text-shadow: 2px 2px 0px #2a2a2a;
            image-rendering: pixelated;
          }
          .mc-btn:hover {
            background: #7ca4ff;
            border: 2px solid #000;
            box-shadow: inset -2px -2px 0px #3c5285, inset 2px 2px 0px #a4c2ff;
            color: #ffffa0;
            text-shadow: 2px 2px 0px #1e2e52;
          }
          .mc-title-shadow {
            text-shadow: 3px 3px 0px #2a1f0a;
          }
        `}</style>

        {/* CONTENEDOR MAESTRO */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* LADO IZQUIERDO: PROFILE CARD (3 Columnas) */}
          <div className="lg:col-span-3 flex justify-center items-center animate-reveal">
            <div className="scale-95 transform">
              <ProfileCard isDark={isDark} />
            </div>
          </div>

          {/* LADO DERECHO: CONTENIDO PRINCIPAL (9 Columnas) */}
          <div className="lg:col-span-9 space-y-10 text-left animate-reveal [animation-delay:200ms] w-full min-w-0">
            
            {/* BLOQUE SUPERIOR: TITULARES Y ACCIONES DE BIENVENIDA */}
            <div className="border-b border-current border-opacity-5 pb-8 space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-[900] leading-[1.1] tracking-tighter max-w-4xl">
                  Construyendo el motor de sistemas escalables <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#6366f1]">
                    con código y arquitectura moderna.
                  </span>
                </h1>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] opacity-60">
                  Ingeniería de Software & Desarrollo Backend
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => window.location.href = 'mailto:Giepeton558@gmail.com'}
                  className={`px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl ${
                    isDark ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  ¡Contáctame!
                </button>
                
                <a 
                  href="/CV_Gian_Quispe.pdf" 
                  download="CV_Gian_Quispe_Backend.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={`px-6 py-3.5 rounded-full font-black text-[9px] uppercase tracking-widest border-2 transition-all flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white ${
                    isDark ? "border-white/20 text-white" : "border-black/10 text-black"
                  }`}
                >
                  Descargar CV ↗
                </a>
              </div>
            </div>

            {/* BLOQUE INFERIOR: SOBRE MÍ VS TERMINAL / INTERFAZ MINECRAFT */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start w-full">
              
              {/* DESCRIPCIÓN SOBRE MÍ (5 Columnas) */}
              <div className="xl:col-span-5 space-y-4 text-sm md:text-base leading-relaxed font-medium opacity-70">
                <p>
                  Enfocado en el diseño y despliegue de <strong>APIs robustas y arquitecturas distribuidas</strong>. Mi prioridad es estructurar software mantenible, aislando la lógica de negocio de la infraestructura mediante la aplicación estricta de patrones limpios.
                </p>
                <p>
                  Apasionado por resolver problemas de escalabilidad mediante sistemas orientados a eventos, buscando siempre optimizar la comunicación asíncrona, mitigar cuellos de botella y garantizar la consistencia en el ciclo de vida del dato.
                </p>
              </div>

              {/* PIZARRÓN / SISTEMA ADAPTATIVO INTERACTIVO DE MINECRAFT (7 Columnas) */}
              <div className="xl:col-span-7 w-full min-w-0">
                <div className="w-full rounded-2xl border text-left overflow-hidden shadow-2xl font-mono text-xs bg-[#0d0d0d]/95 border-white/10 flex flex-col">
                  
                  {/* Cabecera del IDE */}
                  <div className="bg-zinc-900 px-4 py-3 flex items-center justify-between border-b border-zinc-800/80 select-none">
                    <div className="flex items-center gap-1.5">
                      <Circle className="w-2.5 h-2.5 fill-red-500 text-red-500" />
                      <Circle className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />
                      <Circle className="w-2.5 h-2.5 fill-green-500 text-green-500" />
                      <span className="text-[10px] text-zinc-500 ml-1.5 font-bold">minecraft_nav_system.sh</span>
                    </div>
                    
                    {gameStage === "menu" && (
                      <button 
                        onClick={handleReset}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-colors"
                      >
                        <RefreshCw className="w-2.5 h-2.5" /> Reload
                      </button>
                    )}
                  </div>

                  {/* LIENZO DE LA CONSOLA MUTABLE CON ESTILOS DINÁMICOS DE FONDO */}
                  <div 
                    className="p-0 h-[240px] flex flex-col justify-center select-none font-mono transition-all overflow-hidden relative"
                    style={{
                      backgroundColor: "black",
                      backgroundImage: gameStage === "menu" ? `url(${mcFondo})` : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  >
                    
                    {/* ESTADO 1: Consola en Espera (Idle) */}
                    {gameStage === "idle" && (
                      <div className="flex flex-col items-center justify-center h-full space-y-3 opacity-70 px-4 text-zinc-200">
                        <pre className="text-zinc-600 text-[10px] text-center">{"$ run --target=programmer_world"}</pre>
                        <button
                          onClick={handleStartLoading}
                          className="px-6 py-2 bg-green-600/10 text-green-400 border border-green-500/20 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-green-600/20 transition-all touch-manipulation"
                        >
                          Inicializar Mundo Tech
                        </button>
                      </div>
                    )}

                    {/* ESTADO 2: Logs Rápidos de Compilación */}
                    {gameStage === "console" && (
                      <div className="flex flex-col h-full justify-center space-y-1 text-[10px] text-green-400 leading-tight p-4">
                        <p>[INFO] Allocating memory segments for core portfolio routes...</p>
                        <p>[INFO] Mounting layout nodes for path definitions...</p>
                        <p className="animate-pulse text-yellow-500">[SYSTEM] Launching splash view module...</p>
                      </div>
                    )}

                    {/* ESTADO 3: Mojang Studios Splash Screen */}
                    {gameStage === "mojang" && (
                      <div className="flex flex-col items-center justify-center h-full bg-black w-full text-zinc-200 p-4">
                        <p className="text-base font-black tracking-tighter text-white uppercase transform scale-y-125">Mojang Studios</p>
                        <div className="w-full max-w-[140px] h-1 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700 mt-2">
                          <div className="bg-red-600 h-full w-4/5 animate-[pulse_1s_infinite]"></div>
                        </div>
                      </div>
                    )}

                    {/* ESTADO 4: Generador de Bloques 3D */}
                    {gameStage === "generator" && (
                      <div className="flex items-center justify-center h-full w-full gap-6 text-zinc-200 p-4">
                        <div className="grid grid-cols-5 gap-[2px] w-full max-w-[110px] aspect-square">
                          {render3DGenerator()}
                        </div>
                        <div className="text-left space-y-0.5">
                          <p className="text-[11px] font-bold text-zinc-400 tracking-wide">Cargando Chunks...</p>
                          <p className="text-[18px] font-black text-green-400">{progress}%</p>
                        </div>
                      </div>
                    )}

                    {/* ESTADO 5: INTERFAZ MENÚ DE MINECRAFT CON FILTRO OSCURO INCORPORADO */}
                    {gameStage === "menu" && (
                      <div className="flex flex-col items-center justify-between h-full w-full py-3 bg-black/40 backdrop-blur-[0.5px] animate-reveal box-border">
                        
                        {/* Título Oficial Estilizado */}
                        <div className="text-center relative pt-1">
                          <h3 className="text-yellow-500 font-black tracking-tight text-center uppercase text-sm sm:text-base mc-title-shadow [font-family:inherit]">
                            Mundo del Programador
                          </h3>
                          <span className="absolute -right-3 -bottom-2 text-[8px] text-yellow-300 font-bold uppercase tracking-widest origin-center animate-bounce block rotate-[-12deg]">
                            ¡Beta Backend!
                          </span>
                        </div>

                        {/* Contenedor de Botones Oficiales Sincronizados a Kebab-case */}
                        <div className="w-full max-w-[240px] flex flex-col gap-2.5 px-4 box-border">
                          <button 
                            onClick={() => navigate("/acerca-de")} 
                            className="w-full py-2 text-[10px] font-bold uppercase tracking-wider mc-btn rounded transition-all touch-manipulation"
                          >
                            Acerca De Mí
                          </button>
                          
                          <button 
                            onClick={() => navigate("/proyectos")} 
                            className="w-full py-2 text-[10px] font-bold uppercase tracking-wider mc-btn rounded transition-all touch-manipulation"
                          >
                            Ver Proyectos
                          </button>

                          <div className="grid grid-cols-2 gap-2 w-full">
                            <button 
                              onClick={() => navigate("/articulos")} 
                              className="w-full py-2 text-[10px] font-bold uppercase tracking-wider mc-btn rounded transition-all touch-manipulation"
                            >
                              Artículos
                            </button>
                            <button 
                              onClick={handleReset} 
                              className="w-full py-2 text-[10px] font-bold uppercase tracking-wider mc-btn rounded transition-all touch-manipulation"
                            >
                              Salir
                            </button>
                          </div>
                        </div>

                        {/* Footer de versión */}
                        <div className="w-full text-right text-[8px] text-zinc-300 font-semibold pr-4 box-border tracking-wider text-shadow">
                          Minecraft Tech v1.20.6
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      <Analytics />
    </PageTransition>
  );
}