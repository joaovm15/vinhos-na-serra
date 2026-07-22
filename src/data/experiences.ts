export type Experience = {
  slug: string;
  name: string;
  date: string;
  format: "Presencial" | "Online";
  description: string;
};

export const experiences: Experience[] = [
  {
    slug: "degustacao-guiada-tintos",
    name: "Degustação Guiada de Tintos",
    date: "15 de agosto de 2026",
    format: "Presencial",
    description:
      "Uma jornada por nossos rótulos tintos, conduzida por nosso enólogo, com harmonização de queijos da região.",
  },
  {
    slug: "visita-a-vinicola",
    name: "Visita à Vinícola e Vinhedos",
    date: "Todos os sábados",
    format: "Presencial",
    description:
      "Caminhada pelos vinhedos em altitude, visita à cave e degustação de três rótulos selecionados.",
  },
  {
    slug: "harmonizacao-online",
    name: "Harmonização ao Vivo",
    date: "3 de setembro de 2026",
    format: "Online",
    description:
      "Encontro virtual com nosso sommelier explorando harmonizações da nossa linha de espumantes.",
  },
];
