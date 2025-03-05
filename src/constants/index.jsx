import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";


import user1 from "../assets/profile-pictures/user4.jpg";
import user2 from "../assets/profile-pictures/user5.jpg";
import user3 from "../assets/profile-pictures/user6.jpg";

import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLock, FaFileContract } from 'react-icons/fa';


export const navItems = [
  { href: "hero", label: "Inicio" },
  { href: "features", label: "Servicios" },
  { href: "workflow", label: "Nosotros" },
  
  { href: "testimonials", label: "Expertos en IT" },
];

export const testimonials = [
  {
    user: "Ingeniero de campo",
    company: "Fernando Alvarado",
    image: user1,
    text: "Como ingeniero de campo, mi misión es asegurar que cada sistema funcione al máximo. Me enfoco en soluciones personalizadas, garantizando un servicio impecable y tecnologías sin fallos.",
  },
  {
    user: "Lider de proyectos IT",
    company: "Alberto Mendoza",
    image: user2,
    text: "Como líder de proyectos IT, mi misión es coordinar y ejecutar soluciones tecnológicas eficientes. Me enfoco en optimizar procesos, garantizando que cada proyecto se complete con éxito y precisión",
  },
  {
    user: "Asesor de IT",
    company: "Leticia Torres",
    image: user3,
    text: "Como asesor de IT, mi misión es ofrecer soluciones estratégicas que impulsen el crecimiento tecnológico. Me enfoco en brindar orientación precisa para optimizar cada sistema y mejorar su rendimiento.",
  },

];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Soporte tecnico",
    description:
      "Asegura el rendimiento continuo de tus sistemas con un mantenimiento preventivo diseñado para anticipar problemas antes de que ocurran.",
  },
  {
    icon: <Fingerprint />,
    text: "Hardware de Alta Calidad",
    description:
      "Equipamos tu negocio con hardware confiable y de alto rendimiento, optimizado para satisfacer todas tus necesidades tecnológicas.",
  },
  {
    icon: <ShieldHalf />,
    text: "Reparaciones de emergencia",
    description:
      "Recupera la funcionalidad de tus equipos con nuestro servicio de reparaciones eficientes, minimizando el tiempo de inactividad",
  },
  {
    icon: <BatteryCharging />,
    text: "Redes Confiables y Seguras",
    description:
      "Construimos y mantenemos redes robustas y seguras que garantizan la conectividad y el rendimiento óptimo de tu infraestructura tecnológica.",
  },
  {
    icon: <PlugZap />,
    text: "Impresoras y Periféricos",
    description:
      "Soporte para tus impresoras y periféricos, desde la instalación hasta la configuración",
  },
  {
    icon: <GlobeLock />,
    text: "Desarrolo de proyectos IT",
    description:
      "Proyectos innovadores y a la medida que impulsan el crecimiento de tu negocio y mejoran la eficiencia de tus operaciones.",
  },
];

export const checklistItems = [
  {
    title: "Asistencia personalizada",
    description:
      "Adaptamos nuestros servicios a las necesidades específicas de cada cliente.",
  },
  {
    title: "Soporte Rápido y Eficaz",
    description:
      "Resolvemos problemas de manera ágil, minimizando el tiempo de inactividad",
  },
  {
    title: "Compromiso con la Calidad",
    description:
      "Ofrecemos un servicio de alta calidad que asegura la satisfacción total de nuestros clientes.",
  },
  {
    title: "Expertos en el campo",
    description:
      "Contamos con un equipo de expertos en tecnología que garantizan la excelencia en cada proyecto.",
  },
];

export const pricingOptions = [
  {
    title: "Particulares",    
    features: [
      "Asistencia en local",
      "Reparaciones y cotizaciones",
      "Soporte remoto",
      
    ],
    image: client1,
  },
  {
    title: "Negocios",
    features: [
      "Redes y servicios de IT",
      "Asistencia y visitas programadas",
      "Tecnologias para tu negocio",
    ],
    image: client2,
  },
  {
    title: "Empresas",
    features: [
      "Soporte personalizado",
      "Proyectos a la medida",
      "Soluciones innovadoras",
    ],
    image: client3,
  },
];

/* Algo */
export const resourcesLinks = [
  { href: "tel:3324508102", text: "33-24-50-81-02", icon: <FaPhone color="var(--color-icons-services)"/> },
  { href: "mailto:soporte@recoveryandhardware.com", text: "soporte@recoveryandhardware.com", icon: <FaEnvelope color="var(--color-icons-services)"/> },
];

export const platformLinks = [
  { href: "#", text: "Facebook", icon: <FaFacebook color="var(--color-icons-services)"/> },
  { href: "#", text: "Instagram", icon: <FaInstagram color="var(--color-icons-services)"/> },
];

export const communityLinks = [
  { href: "#", text: "Aviso de privacidad", icon: <FaLock color="var(--color-icons-services)"/> },
  { href: "#", text: "Términos y condiciones", icon: <FaFileContract color="var(--color-icons-services)"/> },
];
