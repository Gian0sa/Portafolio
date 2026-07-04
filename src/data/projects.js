import React from "react";
import { ExternalLink, Layers, Cpu } from "lucide-react";
import imgAfgDigital from "../assets/images/afg_digital/afg_digital.webp";
import imgLhShop from "../assets/images/lh_shop/lh_shop.webp";
import imgPortafolio from "../assets/images/portafolio/portafolio.webp";
import imgKemak from "../assets/images/kemak/kemak.webp";
import imgKemakDashboard from "../assets/images/kemak/dashboard.webp";
import imgKemakProductos from "../assets/images/kemak/productos.webp";
import imgKemakVisual from "../assets/images/kemak/visual_usuario.webp";
import imgAutonet from "../assets/images/autonet/autonet.webp";
import imgAutonetListado from "../assets/images/autonet/listado.webp";

export const myProjects = [
  {
    id: "lh-shop",
    title: "LH Shop - E-commerce",
    date: "Noviembre 2025 - Diciembre 2025",
    role: "Fullstack Developer",
    description: "Plataforma de retail optimizada para SEO y alta conversión. Indexación dinámica de cientos de productos mediante Sitemaps automáticos.",
    tags: ["Next.js 15", "Tailwind CSS", "SEO", "Vercel"],
    milestones: ["SEO Score de 100", "Sitemaps Dinámicos", "Mobile First"],
    challenges: "Garantizar la máxima velocidad de carga e indexación en Google Search Console para un catálogo dinámico y cambiante sin incurrir en altos costos de procesamiento.",
    solutions: "Implementación de generación estática incremental (ISR) junto con un sistema modular y reutilizable para la sincronización dinámica de Sitemaps.",
    learnings: "Dominio de las herramientas de auditoría Lighthouse y optimizaciones profundas de Core Web Vitals en Next.js.",
    team: [{ name: "Gian Peer Quispe", role: "Fullstack Developer" }],
    github: "https://github.com/Gian0sa/Zapatillas_LH",
    link: "https://zapatillas-lh.vercel.app/",
    status: "Producción / SEO Live",
    features: [
      "Indexación dinámica (Sitemap.ts) para Google Search Console",
      "Arquitectura DRY para gestión unificada de catálogo",
      "Optimización Mobile-First con carga progresiva",
      "Integración automática con WhatsApp Business API"
    ],
    image: imgLhShop,
    gallery: [imgLhShop],
    icon: React.createElement(ExternalLink, { className: "w-4 h-4 text-[#6366f1]" })
  },
  {
    id: "afg-digital",
    title: "AFG Digital",
    date: "Agosto 2025 - Octubre 2025",
    role: "Frontend Developer",
    description: "Plataforma institucional interactiva diseñada para la consultora AFG Digital. Foco en interfaces de alta performance, animaciones fluidas y accesibilidad.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    milestones: ["Interfaces Fluidas", "Lazy Loading Modular", "SEO Optimizado"],
    challenges: "Crear una experiencia visual premium y fluida con animaciones complejas que no penalicen el rendimiento de carga inicial en dispositivos de gama baja.",
    solutions: "División del código (code-splitting) con Lazy Loading y optimización del ciclo de renderizado de Framer Motion mediante triggers de intersección.",
    learnings: "Diseño adaptativo premium (glassmorphism) y control preciso del rendimiento de animaciones en navegadores modernos.",
    team: [{ name: "Gian Peer Quispe", role: "Frontend Developer" }],
    github: "https://github.com/Gian0sa",
    link: "https://afg-digital.vercel.app/",
    status: "Producción / Live",
    features: [
      "UI interactiva premium con Framer Motion",
      "Estructura SEO y metadatos optimizados",
      "Secciones modulares con carga diferida (lazy load)",
      "Diseño adaptativo con soporte para modo oscuro"
    ],
    image: imgAfgDigital,
    gallery: [imgAfgDigital],
    icon: React.createElement(Layers, { className: "w-4 h-4 text-[#d946ef]" })
  },
  {
    id: "portafolio",
    title: "Portafolio",
    date: "Marzo 2026 - Abril 2026",
    role: "Fullstack Developer",
    description: "Portafolio profesional interactivo con temática geek y consola interactiva de Minecraft. Una experiencia interactiva de gamificación para mostrar habilidades técnicas.",
    tags: ["React 19", "Vite", "Tailwind v4", "Framer Motion", "Router v7"],
    milestones: ["Render Isometrico 3D", "Minecraft Console Simulation", "Transiciones Suaves"],
    challenges: "Renderizar y simular de forma reactiva una interfaz isométrica interactiva en tiempo real sin congelar el hilo principal del navegador.",
    solutions: "Uso de hooks personalizados para desacoplar el estado de renderizado y optimización de renderizados condicionales en React 19.",
    learnings: "Manipulación de interfaces complejas, gamificación Web y optimizaciones nativas de Tailwind CSS v4.",
    team: [{ name: "Gian Peer Quispe", role: "Fullstack Developer" }],
    github: "https://github.com/Gian0sa/portafolio",
    link: "https://gianpedev-portafolio.vercel.app/",
    status: "Producción / Live",
    features: [
      "Consola interactiva de carga de chunks 3D isométrica",
      "Transiciones de página fluidas y optimizadas",
      "Sistema de scroll y navegación adaptativo",
      "Ecosistema de micropartículas animadas en fondo"
    ],
    image: imgPortafolio,
    gallery: [imgPortafolio],
    icon: React.createElement(Cpu, { className: "w-4 h-4 text-[#6366f1]" })
  },
  {
    id: "kemak-erp",
    title: "KEMAK ERP v4.0",
    date: "Enero 2026 - Marzo 2026",
    role: "Backend Architect & Developer",
    description: "Sistema Enterprise diseñado para optimizar y digitalizar procesos en una pequeña empresa en crecimiento, migrando sus operaciones manuales a un entorno digital unificado. Soporta de forma integral las 3 líneas de negocio que maneja la empresa. Construido bajo Arquitectura Hexagonal para aislar la lógica de negocio, utiliza PostgreSQL con Prisma ORM para garantizar la integridad relacional de los datos, Redis para almacenamiento en caché de alta velocidad, servicios de Google Auth para un inicio de sesión seguro y Next.js con Tailwind CSS para una interfaz fluida, ultra-rápida y adaptable.",
    tags: ["Next.js", "PostgreSQL", "Prisma ORM", "Hexagonal Architecture", "Redis", "Google Auth", "Tailwind CSS", "Groq AI"],
    milestones: ["Arquitectura Hexagonal", "Migración Digital Exitosa", "Multinegocio Sincronizado"],
    challenges: "Integrar 3 tipos de negocios con reglas comerciales distintas en un único sistema y migrar de manera transparente los datos que antes se llevaban a mano en cuadernos y hojas de cálculo.",
    solutions: "Implementación de una arquitectura limpia hexagonal estructurada en módulos independientes (core de dominio aislado) con adaptadores para base de datos y endpoints API. Se diseñó un middleware con Redis para la sincronización rápida del inventario compartido y autenticación federada segura con Google Auth.",
    learnings: "Estructuración avanzada en arquitectura hexagonal, modelado de dominios enriquecidos e integración fluida de pipelines de IA generativa (Llama 3 RAG) aplicados a reportes de negocio.",
    team: [{ name: "Gian Peer Quispe", role: "Arquitecto / Desarrollador Backend" }],
    github: "https://github.com/Gian0sa/Proyect_Kemak",
    link: "https://proyect-kemak-front.vercel.app/mayorista",
    status: "MVP / Architecture",
    features: [
      "Arquitectura Hexagonal (Puertos y Adaptadores) para desacoplamiento total del core",
      "Migración completa de procesos manuales a flujos digitales unificados",
      "Gestión integral adaptada a las 3 líneas de negocio principales de la empresa",
      "Prisma ORM y PostgreSQL para integridad de datos relacionales y transacciones seguras",
      "Caché y sesiones optimizadas con Redis de baja latencia",
      "Autenticación segura federada con Google Auth y JWT",
      "Asistente KEMAK AI: Chatbot inteligente integrado con Groq API (Llama 3)"
    ],
    image: imgKemak,
    gallery: [imgKemak, imgKemakDashboard, imgKemakProductos, imgKemakVisual],
    icon: React.createElement(Cpu, { className: "w-4 h-4 text-[#d946ef]" })
  },
 /* {
    id: "autonet",
    title: "AutoNet",
    date: "Mayo 2026 - Junio 2026",
    role: "Backend Architect & Developer",
    description: "Plataforma integral de compra, venta y tasación de vehículos en el mercado peruano, equipada con inteligencia artificial y automatizaciones.",
    tags: ["Next.js 15", "NestJS", "PostgreSQL", "Prisma ORM", "Groq AI", "Tailwind CSS v4"],
    milestones: ["OCR Tarjetas Vehiculares", "Chatbot Inteligente", "Seguridad Multirrol"],
    challenges: "Facilitar el registro rápido de vehículos reduciendo los errores de tipeo manual que hacían los usuarios en los formularios de publicación.",
    solutions: "Desarrollo de un servicio OCR backend integrado con NestJS para leer fotos de las Tarjetas de Identificación Vehicular (TIVe) y auto-completar el formulario.",
    learnings: "Diseño de microservicios e integraciones con SDKs de IA para reconocimiento y parseado inteligente de imágenes en entornos productivos.",
    team: [{ name: "Gian Peer Quispe", role: "Arquitecto / Desarrollador Backend" }],
    github: "https://github.com/Gian0sa",
    link: "https://web.autonet.pe/",
    status: "Producción / Live",
    features: [
      "Buscador Inteligente con comparador técnico de vehículos en tiempo real",
      "Asistente Virtual con IA (Llama 3 en Groq) para recomendaciones",
      "Publicación rápida con OCR de Tarjeta de Identificación Vehicular (TIVe)",
      "Dashboard multirrol para concesionarios, moderación, reportes y publicidad"
    ],
    image: imgAutonet,
    gallery: [imgAutonet, imgAutonetListado],
    icon: React.createElement(ExternalLink, { className: "w-4 h-4 text-[#6366f1]" })
  }*/
];
