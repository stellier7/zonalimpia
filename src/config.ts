export type ServiceId =
  | "express"
  | "corporativa"
  | "oficinas"
  | "post-construccion"
  | "pisos"
  | "vidrios"
  | "fumigacion"
  | "especiales"
  | "educativos";

export type Service = {
  id: ServiceId;
  name: string;
  shortDescription: string;
  image: string;
  whatsappMessage: string;
};

export type HomePlan = {
  id: "semanal" | "quincenal" | "mensual";
  name: string;
  bullets: string[];
  price?: string;
};

export type Review = {
  name: string;
  source: "Facebook";
  quote?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BeforeAfterPair = {
  before: string;
  after: string;
  alt: string;
};

export type PricingConfig =
  | { enabled: false }
  | {
      enabled: true;
      plans: Partial<Record<HomePlan["id"], string>>;
    };

export type SiteConfig = {
  businessName: string;
  tagline: string;
  phoneDisplay: string;
  phoneE164: string;
  whatsappNumber: string;
  email: string;
  facebook: string;
  instagram: string;
  websiteDisplay: string;
  owner: string;
  ownerTitle: string;
  experienceClaim: string;
  hours: string;
  siteUrl: string;
  areasServed: string[];
  pricing: PricingConfig;
  services: Service[];
  homePlans: HomePlan[];
  postConstructionIncludes: string[];
  expressHowItWorks: string;
  expressAreas: string[];
  expressTasks: string[];
  specialServices: string[];
  conditions: string[];
  clients: string[];
  values: string[];
  audiences: { name: string; icon: AudienceIcon }[];
  benefits: { title: string; description: string; icon: BenefitIcon }[];
  gallery: GalleryImage[];
  beforeAfter: BeforeAfterPair[];
  reviews: Review[];
  images: {
    hero: string;
    heroMobile: string;
    parallax1: string;
    parallax2: string;
    owner: string;
    logo: string;
    issa: string;
  };
  nav: { href: string; label: string }[];
  trustChips: string[];
  credit: string;
  labels: {
    quoteWhatsApp: string;
    quoteWhatsAppLong: string;
    quoteCta: string;
    callCta: string;
    seeServices: string;
    recommends: string;
    viaFacebook: string;
    seeFacebookPage: string;
    otherZoneChip: string;
  };
  copy: {
    seoTitle: string;
    seoDescription: string;
    heroTitle: string;
    heroSubtitle: string;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesSubtitle: string;
    homeEyebrow: string;
    homeTitle: string;
    homeSubtitle: string;
    expressEyebrow: string;
    expressTitle: string;
    expressSubtitle: string;
    expressAreasTitle: string;
    expressTasksTitle: string;
    specialEyebrow: string;
    specialTitle: string;
    specialSubtitle: string;
    conditionsEyebrow: string;
    conditionsTitle: string;
    postEyebrow: string;
    postTitle: string;
    postSubtitle: string;
    postIncludesTitle: string;
    audiencesEyebrow: string;
    audiencesTitle: string;
    whyEyebrow: string;
    whyTitle: string;
    whySubtitle: string;
    clientsEyebrow: string;
    clientsTitle: string;
    clientsSubtitle: string;
    galleryEyebrow: string;
    galleryTitle: string;
    gallerySubtitle: string;
    beforeAfterTitle: string;
    beforeAfterSubtitle: string;
    coverageEyebrow: string;
    coverageTitle: string;
    coverageSubtitle: string;
    reviewsEyebrow: string;
    reviewsTitle: string;
    reviewsSubtitle: string;
    aboutEyebrow: string;
    aboutP1: string;
    aboutP2: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaSubtitle: string;
    formTitle: string;
    formSubtitle: string;
  };
  defaultWhatsAppMessage: string;
  keywords: string[];
};

export type AudienceIcon =
  | "plazas"
  | "oficinas"
  | "casas"
  | "locales"
  | "colegios"
  | "clinicas";

export type BenefitIcon =
  | "personal"
  | "horarios"
  | "presupuesto"
  | "productos";

const expressPlanBullets = [
  "Barrer y trapear",
  "Limpieza de baños general",
  "Limpieza húmeda de superficies",
  "Sacudido con plumero o microfibra",
  "Limpieza de barandales en gradas",
  "Recolección de basura",
] as const;

export const CONFIG: SiteConfig = {
  businessName: "Zona Limpia",
  tagline: "Comprometidos con tu empresa y el medio ambiente",
  phoneDisplay: "+(504) 3184-5847",
  phoneE164: "+50431845847",
  whatsappNumber: "50431845847",
  email: "fcruzzl@zonalimpiahn.com",
  facebook: "https://www.facebook.com/zonalimpiahn",
  instagram: "https://www.instagram.com/zonalimpia.hn/",
  websiteDisplay: "www.zonalimpiahn.com",
  owner: "Fernando Cruz",
  ownerTitle: "Gerente Comercial",
  experienceClaim:
    "Miembros activos de ISSA — altos estándares de calidad en limpieza profesional",
  hours: "Horarios flexibles · Cotiza por WhatsApp",
  siteUrl: "https://www.zonalimpiahn.com",
  areasServed: ["Tegucigalpa", "San Pedro Sula", "Honduras"],
  pricing: { enabled: false },
  services: [
    {
      id: "express",
      name: "Limpieza Express",
      shortDescription:
        "Limpieza enfocada a tareas domésticas: baños, salas, comedor, cocina, gradas, habitaciones y balcones.",
      image: "/images/services/hogar.webp",
      whatsappMessage: "Hola Zona Limpia, quiero cotizar: Limpieza Express",
    },
    {
      id: "corporativa",
      name: "Limpieza corporativa",
      shortDescription:
        "Sistemas de limpieza para empresas, con técnicas actualizadas y personal capacitado.",
      image: "/images/services/corporativa.webp",
      whatsappMessage:
        "Hola Zona Limpia, quiero cotizar: Limpieza corporativa",
    },
    {
      id: "oficinas",
      name: "Oficinas y locales comerciales",
      shortDescription:
        "Espacios de trabajo limpios, ordenados y presentables para tu equipo y tus clientes.",
      image: "/images/services/oficinas.webp",
      whatsappMessage:
        "Hola Zona Limpia, quiero cotizar: Limpieza de oficinas y locales",
    },
    {
      id: "post-construccion",
      name: "Limpieza profunda post construcción",
      shortDescription:
        "Eliminamos polvo, residuos y suciedad para que el espacio quede limpio y seguro para habitar o trabajar.",
      image: "/images/services/post-construccion.webp",
      whatsappMessage:
        "Hola Zona Limpia, quiero cotizar: Limpieza profunda post construcción",
    },
    {
      id: "pisos",
      name: "Fregado y pulido de pisos",
      shortDescription:
        "Recuperamos el brillo y la presentación de tus pisos con acabado profesional.",
      image: "/images/services/pisos.webp",
      whatsappMessage:
        "Hola Zona Limpia, quiero cotizar: Fregado y pulido de pisos",
    },
    {
      id: "vidrios",
      name: "Limpieza profunda de ventanas",
      shortDescription:
        "Ventanas y vidrios transparentes, sin marcas ni residuos.",
      image: "/images/services/vidrios.webp",
      whatsappMessage:
        "Hola Zona Limpia, quiero cotizar: Limpieza profunda de ventanas",
    },
    {
      id: "fumigacion",
      name: "Fumigación o control de plagas",
      shortDescription:
        "Control de plagas para hogares y negocios, con trato profesional y discreto.",
      image: "/images/services/fumigacion.webp",
      whatsappMessage:
        "Hola Zona Limpia, quiero cotizar: Fumigación o control de plagas",
    },
    {
      id: "especiales",
      name: "Servicios especiales",
      shortDescription:
        "Aspirado general, limpieza profunda, bodegas, lavado a presión, terrazas y más el día de tu visita.",
      image: "/images/services/especiales.webp",
      whatsappMessage:
        "Hola Zona Limpia, quiero cotizar: Servicios especiales",
    },
    {
      id: "educativos",
      name: "Centros educativos y clínicas",
      shortDescription:
        "Limpieza para colegios, hospitales y clínicas con estándares de higiene exigentes.",
      image: "/images/services/banos.webp",
      whatsappMessage:
        "Hola Zona Limpia, quiero cotizar: Limpieza para centros educativos o clínicas",
    },
  ],
  homePlans: [
    {
      id: "semanal",
      name: "Semanal",
      bullets: [...expressPlanBullets],
    },
    {
      id: "quincenal",
      name: "Quincenal",
      bullets: [...expressPlanBullets],
    },
    {
      id: "mensual",
      name: "Mensual",
      bullets: [...expressPlanBullets],
    },
  ],
  postConstructionIncludes: [
    "Residencias y apartamentos",
    "Oficinas",
    "Locales comerciales",
    "Edificios",
    "Reducción de riesgos de salud y polvo",
    "Mejora de la calidad del aire",
    "Aspecto profesional y protección de materiales",
  ],
  expressHowItWorks:
    "Nuestro servicio de limpieza express consiste en realizar una limpieza enfocada a las tareas domésticas. La finalidad de la limpieza es eliminar la suciedad acumulada en las diferentes áreas del hogar.",
  expressAreas: [
    "Baños",
    "Salas",
    "Comedor",
    "Cocina",
    "Gradas",
    "Habitaciones",
    "Balcones",
  ],
  expressTasks: [...expressPlanBullets],
  specialServices: [
    "Limpieza profunda de ventanas o vidrios",
    "Fumigación o control de plagas",
    "Aspirado general de la casa",
    "Pulido y abrillantado de piso",
    "Limpieza profunda",
    "Limpieza profunda de bodegas",
    "Lavado a presión",
    "Limpieza de terraza o área social",
  ],
  conditions: [
    "Todas las áreas deben estar completamente ordenadas. (Objetos de valor debidamente guardados; ropa, utensilios, zapatos y materiales en general mal colocados en suelo o superficies).",
    "No incluye limpieza para mascotas ni nada relacionado a las mismas.",
    "Este paquete no incluye limpieza profunda de equipo de cocina.",
    "No incluye servicio de niñera.",
    "Es necesario que un representante del hogar esté presente en los días que se realice la limpieza.",
  ],
  clients: [
    "Aldeas Infantiles SOS Internacional",
    "Banrural",
    "ibex.",
    "HC Honduras Constructores",
    "Davivienda",
    "Coello Arquitectos",
    "Adecco",
    "Elliott Dover Christian School",
    "Laticrete",
    "Micah Project",
    "Hospital Militar",
  ],
  values: [
    "Mejora continua",
    "Confiabilidad",
    "Conciencia social",
    "Conciencia ecológica",
  ],
  audiences: [
    { name: "Empresas y oficinas", icon: "oficinas" },
    { name: "Viviendas", icon: "casas" },
    { name: "Locales comerciales", icon: "locales" },
    { name: "Centros educativos", icon: "colegios" },
    { name: "Hospitales y clínicas", icon: "clinicas" },
    { name: "Edificios y apartamentos", icon: "plazas" },
  ],
  benefits: [
    {
      title: "Personal capacitado",
      description:
        "Selección rigurosa con pruebas MOSS y HTP, antidoping y evaluación de antecedentes policiales y judiciales.",
      icon: "personal",
    },
    {
      title: "Nos adaptamos a ti",
      description:
        "Limpieza express semanal, quincenal, mensual o como lo prefieras. Horarios flexibles.",
      icon: "horarios",
    },
    {
      title: "Cotización a tu medida",
      description:
        "El costo depende del tamaño y condición de la propiedad. Te ofrecemos una cotización clara.",
      icon: "presupuesto",
    },
    {
      title: "Estándares ISSA",
      description:
        "Miembros activos de ISSA. Promovemos la limpieza como inversión en salud, medio ambiente y productividad.",
      icon: "productos",
    },
  ],
  gallery: [
    {
      src: "/images/gallery/01.webp",
      alt: "Espacio comercial impecable después de la limpieza",
      width: 800,
      height: 600,
    },
    {
      src: "/images/gallery/02.webp",
      alt: "Equipo Zona Limpia en servicio de vidrios",
      width: 800,
      height: 1000,
    },
    {
      src: "/images/gallery/03.webp",
      alt: "Limpieza profesional de ventanas",
      width: 800,
      height: 1000,
    },
    {
      src: "/images/gallery/04.webp",
      alt: "Especialistas en detalles — limpieza profunda",
      width: 800,
      height: 600,
    },
    {
      src: "/images/gallery/05.webp",
      alt: "Personal capacitado en uniformes Zona Limpia",
      width: 800,
      height: 1000,
    },
    {
      src: "/images/gallery/06.webp",
      alt: "Resultado de limpieza post construcción",
      width: 800,
      height: 600,
    },
    {
      src: "/images/gallery/07.webp",
      alt: "Ambiente limpio y profesional",
      width: 800,
      height: 600,
    },
    {
      src: "/images/gallery/08.webp",
      alt: "Detalle de acabados después de la limpieza",
      width: 800,
      height: 600,
    },
    {
      src: "/images/gallery/09.webp",
      alt: "Superficies y acabados brillantes",
      width: 800,
      height: 600,
    },
    {
      src: "/images/gallery/10.webp",
      alt: "Espacios listos para habitar o trabajar",
      width: 800,
      height: 600,
    },
    {
      src: "/images/gallery/11.webp",
      alt: "Limpieza Express — altos estándares de calidad",
      width: 800,
      height: 1000,
    },
    {
      src: "/images/gallery/12.webp",
      alt: "Servicios especiales en superficies del hogar",
      width: 800,
      height: 600,
    },
  ],
  beforeAfter: [],
  reviews: [],
  images: {
    hero: "/images/hero.webp",
    heroMobile: "/images/hero-mobile.webp",
    parallax1: "/images/parallax-1.webp",
    parallax2: "/images/parallax-2.webp",
    owner: "/images/owner.webp",
    logo: "/logo.png",
    issa: "/issa.png",
  },
  nav: [
    { href: "#servicios", label: "Servicios" },
    { href: "#express", label: "Express" },
    { href: "#galeria", label: "Galería" },
    { href: "#clientes", label: "Clientes" },
    { href: "#contacto", label: "Contacto" },
  ],
  trustChips: [
    "Miembros activos ISSA",
    "Limpieza Express y corporativa",
    "Honduras",
  ],
  credit: "Sitio web por IAGO Digital",
  labels: {
    quoteWhatsApp: "Cotiza por WhatsApp",
    quoteWhatsAppLong: "Cotizar por WhatsApp",
    quoteCta: "Cotizar",
    callCta: "Llamar",
    seeServices: "Ver servicios",
    recommends: "Lo recomienda",
    viaFacebook: "vía Facebook",
    seeFacebookPage: "Ver nuestra página en Facebook",
    otherZoneChip: "¿Otra zona? Consúltanos",
  },
  copy: {
    seoTitle:
      "Zona Limpia | Limpieza Express y profesional en Honduras",
    seoDescription:
      "Zona Limpia Honduras: limpieza express, corporativa y post construcción. Miembros ISSA. Cotiza con Fernando Cruz al +(504) 3184-5847.",
    heroTitle: "Limpieza Express",
    heroSubtitle:
      "¡Asegura altos estándares de calidad en tu limpieza!",
    servicesEyebrow: "Nuestros servicios",
    servicesTitle: "Lo que hacemos por ti",
    servicesSubtitle:
      "Servicios generales y especiales. Nos adaptamos a tus necesidades — platiquemos.",
    homeEyebrow: "Planes",
    homeTitle: "¡Nos adaptamos a ti!",
    homeSubtitle:
      "Puedes solicitar nuestro servicio de limpieza express de manera semanal, quincenal, mensual o como lo prefieras.",
    expressEyebrow: "¿Cómo funciona?",
    expressTitle: "Limpieza Express para tu hogar",
    expressSubtitle:
      "Se asignará un auxiliar de limpieza para las áreas clave de tu casa.",
    expressAreasTitle: "Áreas de limpieza",
    expressTasksTitle: "Tareas a realizarse",
    specialEyebrow: "Servicios especiales",
    specialTitle: "Suma extras el día de tu visita",
    specialSubtitle:
      "¿Qué tal una limpieza express + una limpieza profunda de ventanas? Agrega servicios especiales por un costo adicional.",
    conditionsEyebrow: "Condiciones",
    conditionsTitle: "Antes de tu visita",
    postEyebrow: "Post construcción",
    postTitle: "Limpieza profunda post construcción",
    postSubtitle:
      "Esencial para eliminar suciedad y polvo, logrando espacios limpios y seguros para habitar o trabajar. Transformación en cada rincón.",
    postIncludesTitle: "Servicio especializado en",
    audiencesEyebrow: "A quién servimos",
    audiencesTitle: "Espacios que dejamos impecables",
    whyEyebrow: "¿Por qué Zona Limpia?",
    whyTitle: "Calidad + limpieza",
    whySubtitle:
      "Diseñamos sistemas de limpieza con técnicas actualizadas y recurso humano capacitado. Evaluamos presencialmente nuestras áreas de trabajo y reducimos tu impacto ambiental.",
    clientsEyebrow: "Nuestros clientes",
    clientsTitle: "Empresas que confían en nosotros",
    clientsSubtitle:
      "Acompañamos a organizaciones en Honduras con estándares profesionales de limpieza.",
    galleryEyebrow: "Galería",
    galleryTitle: "Resultados que se notan",
    gallerySubtitle:
      "Mira nuestros trabajos. Arrastra con el dedo o el mouse, o toca una foto para verla completa.",
    beforeAfterTitle: "Antes / Después",
    beforeAfterSubtitle: "Arrastra el control para comparar.",
    coverageEyebrow: "Cobertura",
    coverageTitle: "Servimos en Honduras",
    coverageSubtitle:
      "Atendemos hogares y empresas. Si estás en otra zona, escríbenos y te confirmamos disponibilidad.",
    reviewsEyebrow: "Redes",
    reviewsTitle: "Síguenos en Facebook e Instagram",
    reviewsSubtitle:
      "Zona Limpia Honduras · @zonalimpia.hn",
    aboutEyebrow: "Contacto comercial",
    aboutP1:
      "En Zona Limpia / INSEMEP promovemos la limpieza como una inversión en la salud humana, el medio ambiente y una mejora en términos generales. Aumenta la productividad de tus empleados y ahorra en reparaciones con un ambiente limpio, agradable y fresco.",
    aboutP2:
      "Sólo el 1% de los adultos afirman que una mala limpieza no afecta la percepción sobre las empresas. Cotiza con nosotros en",
    ctaEyebrow: "Contáctanos",
    ctaTitle: "¿Listo para altos estándares de limpieza?",
    ctaSubtitle:
      "Escríbenos por WhatsApp, llámanos o envía un correo. Fernando Cruz, Gerente Comercial.",
    formTitle: "Solicita tu cotización",
    formSubtitle:
      "Completa el formulario y te abrimos WhatsApp con tu mensaje listo.",
  },
  defaultWhatsAppMessage:
    "Hola Zona Limpia, quiero cotizar un servicio de limpieza",
  keywords: [
    "Zona Limpia",
    "Zona Limpia Honduras",
    "limpieza express Honduras",
    "limpieza profesional Honduras",
    "limpieza post construcción",
    "limpieza corporativa Tegucigalpa",
    "ISSA limpieza Honduras",
  ],
};
