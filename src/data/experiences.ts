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
      "Uma jornada por rótulos tintos selecionados de vinícolas brasileiras, conduzida por nosso sommelier, com harmonização de queijos da região.",
  },
  {
    slug: "visita-a-adega",
    name: "Visita Guiada à Adega",
    date: "Todos os sábados",
    format: "Presencial",
    description:
      "Um passeio pelo nosso acervo de mais de 1.300 rótulos, com degustação de três vinhos selecionados pelo nosso sommelier.",
  },
  {
    slug: "harmonizacao-online",
    name: "Harmonização ao Vivo",
    date: "3 de setembro de 2026",
    format: "Online",
    description:
      "Encontro virtual com nosso sommelier explorando harmonizações da nossa seleção de espumantes brasileiros.",
  },
];
