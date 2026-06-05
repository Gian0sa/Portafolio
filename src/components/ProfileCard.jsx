import { Mail, Phone, GraduationCap } from "lucide-react";
import yo from "../assets/images/yo.jpg";

export default function ProfileCard({ isDark }) {
  const birthDate = new Date("2003-10-15"); 
  const calculateAge = (birthday) => {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div className="relative flex flex-col items-center pt-24 w-full max-w-[320px]">
      
      <style>{`
        /* Animación del cable - más orgánica y fluida */
        @keyframes swayCable {
          0% {
            transform: perspective(1000px) rotateY(-2deg) skewX(-1deg) translateX(0px);
          }
          25% {
            transform: perspective(1000px) rotateY(3deg) skewX(1.5deg) translateX(3px);
          }
          50% {
            transform: perspective(1000px) rotateY(-2deg) skewX(-1deg) translateX(0px);
          }
          75% {
            transform: perspective(1000px) rotateY(-4deg) skewX(-2deg) translateX(-4px);
          }
          100% {
            transform: perspective(1000px) rotateY(-2deg) skewX(-1deg) translateX(0px);
          }
        }

        /* Animación de la tarjeta - movimiento natural del viento */
        @keyframes floatWindy {
          0% {
            transform: translate(0px, 0px) rotateZ(-1deg);
          }
          15% {
            transform: translate(2px, -6px) rotateZ(0.5deg);
          }
          30% {
            transform: translate(-1px, -4px) rotateZ(-0.5deg);
          }
          45% {
            transform: translate(3px, -8px) rotateZ(1deg);
          }
          60% {
            transform: translate(-2px, -2px) rotateZ(-0.8deg);
          }
          75% {
            transform: translate(1px, -6px) rotateZ(0.3deg);
          }
          90% {
            transform: translate(-1.5px, -3px) rotateZ(-0.6deg);
          }
          100% {
            transform: translate(0px, 0px) rotateZ(-1deg);
          }
        }

        /* Efecto de brillo suave del cable */
        @keyframes glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        /* Partículas cayendo por el cable */
        @keyframes particleFlow {
          0% {
            transform: translateY(0px) opacity: 1;
          }
          100% {
            transform: translateY(200px);
            opacity: 0;
          }
        }

        /* Energía fluyendo por el cable */
        @keyframes energyFlow {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 0% 100%;
          }
        }

        /* Chispa en la punta */
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animated-profile-card {
          animation: floatWindy 8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
          will-change: transform;
        }

        .animated-cable {
          animation: swayCable 7s ease-in-out infinite;
          will-change: transform;
        }

        .cable-glow {
          animation: glow 4s ease-in-out infinite;
        }

        .particle {
          animation: particleFlow 3s ease-in infinite;
        }

        .energy-cable {
          background: linear-gradient(180deg, 
            transparent 0%, 
            #6366f1 10%, 
            #0ea5e9 50%, 
            #d946ef 90%, 
            transparent 100%);
          background-size: 100% 200%;
          animation: energyFlow 3s ease-in-out infinite;
        }

        .sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
      `}</style>

      {/* CABLE/TIRANTE ARRIBA - Con efectos creativos */}
      <div 
        className={`absolute top-[-220px] bottom-[85%] w-[3px] z-0 origin-top animated-cable energy-cable ${
          isDark 
            ? "shadow-[0_0_20px_#0ea5e9]" 
            : "shadow-[0_0_15px_#6366f1]"
        }`}
      ></div>

      {/* Partículas flotantes en el cable */}
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 z-5">
        <div className="particle w-1 h-1 rounded-full bg-[#d946ef] opacity-70" style={{ animationDelay: "0s" }}></div>
      </div>
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 z-5">
        <div className="particle w-1 h-1 rounded-full bg-[#0ea5e9] opacity-70" style={{ animationDelay: "0.8s" }}></div>
      </div>
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 z-5">
        <div className="particle w-1 h-1 rounded-full bg-[#6366f1] opacity-70" style={{ animationDelay: "1.6s" }}></div>
      </div>

      {/* Nodo de conexión INFERIOR (debajo del target) */}
      <div className={`absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-20 ${
        isDark 
          ? "bg-gradient-to-br from-[#d946ef] to-[#0ea5e9] shadow-[0_0_20px_#d946ef,0_0_30px_#0ea5e9]" 
          : "bg-gradient-to-br from-[#6366f1] to-[#0ea5e9] shadow-[0_0_15px_#6366f1]"
      } sparkle`}></div>

      {/* Línea de energía secundaria */}
      <div 
        className={`absolute top-[-220px] bottom-[85%] w-[1.5px] z-[-1] origin-top animated-cable blur-md ${
          isDark 
            ? "bg-gradient-to-b from-[#d946ef]/30 via-[#0ea5e9]/40 to-transparent" 
            : "bg-gradient-to-b from-[#6366f1]/20 via-[#0ea5e9]/30 to-transparent"
        }`}
      ></div>

      {/* TARJETA INTERACTIVA - Flotando suavemente */}
      <div
        className={`w-full rounded-[2.5rem] border p-6 space-y-6 relative z-10 shadow-2xl backdrop-blur-md transform-gpu animated-profile-card transition-all hover:shadow-2xl ${
          isDark 
            ? "bg-[#111111]/90 border-white/10 text-white shadow-black/50" 
            : "bg-white/90 border-black/5 text-gray-900 shadow-black/10"
        }`}
      >
        {/* Contenedor de la Foto */}
        <div className="relative w-full aspect-square rounded-[2rem] bg-gradient-to-br from-[#d946ef] via-[#6366f1] to-[#0ea5e9] p-[3px] overflow-hidden group shadow-lg">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
          <div className={`w-full h-full rounded-[1.8rem] overflow-hidden flex items-center justify-center ${
            isDark ? "bg-[#1a1a1a]" : "bg-gray-100"
          }`}>
            <img 
              src={yo} 
              alt="Gian Peer Quispe" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
            />
          </div>
        </div>

        {/* Información de Perfil */}
        <div className="space-y-4 text-center">
          <div className="space-y-1">
            <h3 className="text-xl font-[900] tracking-tight leading-tight">
              Gian Peer Quispe
            </h3>
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#d946ef]">
              Backend Developer & Architect
            </p>
          </div>

          {/* Separador */}
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#d946ef] to-[#6366f1] mx-auto"></div>

          {/* Datos Esenciales */}
          <div className="space-y-3 pt-1 text-left text-xs font-semibold opacity-85">
            
            {/* CARRERA */}
            <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
              <GraduationCap className="w-4 h-4 text-[#6366f1] flex-shrink-0" />
              <div className="truncate">
                <span className="block text-[9px] uppercase tracking-wider opacity-40 font-bold leading-none mb-0.5">Carrera</span>
                <span className="font-bold text-xs">Computación e Informática</span>
              </div>
            </div>

            {/* CORREO */}
            <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
              <Mail className="w-4 h-4 text-[#6366f1] flex-shrink-0" />
              <div className="truncate">
                <span className="block text-[9px] uppercase tracking-wider opacity-40 font-bold leading-none mb-0.5">Correo</span>
                <span className="font-bold text-xs truncate block">Giepeton558@gmail.com</span>
              </div>
            </div>

            {/* TELÉFONO */}
            <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
              <Phone className="w-4 h-4 text-[#6366f1] flex-shrink-0" />
              <div>
                <span className="block text-[9px] uppercase tracking-wider opacity-40 font-bold leading-none mb-0.5">Teléfono</span>
                <span className="font-bold text-xs">+51 934569954</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}