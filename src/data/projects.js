// ============================================================
//  EDITÁ ESTE ARCHIVO CON TUS PROYECTOS REALES
// ============================================================

const projects = [
  {
    id: "unplan",
    name: "Un Plan",
    shortDesc: {
      en: "A SaaS for events and commerce in cities.",
      es: "Un servicio de eventos y comercios en ciudades.",
    },
    longDesc: {
      en: "Un Plan is a full-stack platform built with React, Node.js, and PostgreSQL. It includes dashboards for salespeople and a mobile-first design. Configured and deployed on a Donweb server.",
      es: "Un Plan es una plataforma full-stack construida con React, Node.js y PostgreSQL. Incluye dashboards para vendedores y diseño mobile-first. Configurada y desplegada en servidor Donweb.",
    },
    stack: ["React", "Node.js", "PostgreSQL", "CI/CD", "AWS", "Tailwind CSS", "Figma"],
    url: "https://unplanenjunin.com.ar/",
    status: null, // null | "archived" | "wip"
    year: "2025",
  },
  {
    id: "tenvio",
    name: "Tenvío",
    shortDesc: {
      en: "A cross-platform platform that connects senders with travelers to facilitate package delivery.",
      es: "Multiplataforma de viajes colaborativos que facilita el envío de paquetes mediante la conexión entre remitentes y viajeros.",
    },
    longDesc: {
      en: "Tenvío emerged from the need for a more flexible and collaborative way to send packages. Built with Angular and Ionic for mobile, and an Angular + Firebase (Firestore) backoffice, it is deployed on iOS and Android and currently live in production. The entire infrastructure is centralized, synchronized, and deployed on Amazon Web Services, ensuring scalability and high availability.",
      es: "Tenvío surge de la necesidad de una forma más flexible y colaborativa de enviar paquetes. Está construida con Angular e Ionic para mobile y cuenta con un backoffice en Angular y Firebase (Firestore). Desplegada en iOS y Android, actualmente se encuentra operativa. oda la infraestructura se encuentra centralizada, sincronizada y desplegada en Amazon Web Services",
    },
    stack: ["Angular", "Ionic", "Firebase", "Firestore", "AWS", "Android Studio", "xCode", "Figma"],
    url: "https://tenvio.com.ar/",
    status: null,
    year: "2025",
  },
  {
    id: "mundi",
    name: "Mundi Guía",
    shortDesc: {
      en: "It is a personal project that brings together travel information organized by country, region and theme.",
      es: "Es un proyecto personal que reúne información de viajes organizada por país, región y temática.",
    },
    longDesc: {
      en: "The idea was born from years of traveling the world and collecting data, stories, and useful tips that sometimes don't appear in traditional guidebooks. Developed with React and Docusaurus, the site offers a smooth and engaging browsing experience, with a responsive design that adapts to any device.",
      es: "La idea nació de años recorriendo el mundo y recopilando datos, historias y consejos útiles que a veces no aparecen en las guías tradicionales. Desarrollado con React y Docusaurus, el sitio ofrece una experiencia de navegación fluida y atractiva, con un diseño responsive que se adapta a cualquier dispositivo.",
    },
    stack: ["React", "Tailwind", "Docusaurus", "TypeScript", "Node.js", "GitHub Pages", "Figma"],
    url: "https://mundiguia.com/",
    status: null,
    year: "2025",
  },
]

export default projects
