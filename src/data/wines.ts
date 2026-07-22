export type Wine = {
  slug: string;
  name: string;
  type: string;
  grape: string;
  region: string;
  vintage: string;
  description: string;
  tastingNotes: string;
  pairing: string;
  servingTemp: string;
  featured?: boolean;
};

export const wines: Wine[] = [
  {
    slug: "encosta-tinto-reserva",
    name: "Encosta Tinto Reserva",
    type: "Tinto",
    grape: "Merlot",
    region: "Serra Gaúcha",
    vintage: "2021",
    description:
      "Colhido nas encostas mais altas da propriedade, este tinto passa 14 meses em barril de carvalho francês, resultando em um vinho de corpo firme e taninos macios.",
    tastingNotes: "Frutas negras maduras, notas de baunilha e especiarias, final longo e envolvente.",
    pairing: "Carnes vermelhas grelhadas, queijos curados.",
    servingTemp: "16-18°C",
    featured: true,
  },
  {
    slug: "vale-branco-altitude",
    name: "Vale Branco Altitude",
    type: "Branco",
    grape: "Chardonnay",
    region: "Serra Gaúcha",
    vintage: "2023",
    description:
      "Uvas colhidas a mais de 900m de altitude, garantindo acidez vibrante e frescor mineral característicos do nosso terroir.",
    tastingNotes: "Frutas cítricas, maçã verde e um toque floral, acidez viva.",
    pairing: "Frutos do mar, peixes grelhados, queijos frescos.",
    servingTemp: "8-10°C",
    featured: true,
  },
  {
    slug: "rose-da-serra",
    name: "Rosé da Serra",
    type: "Rosé",
    grape: "Pinot Noir",
    region: "Serra Gaúcha",
    vintage: "2023",
    description:
      "Um rosé delicado, feito por sangria, que carrega a leveza e o frescor das manhãs frias da serra.",
    tastingNotes: "Morango silvestre, pétalas de rosa, final crocante.",
    pairing: "Saladas, aperitivos, culinária leve.",
    servingTemp: "8-10°C",
    featured: true,
  },
  {
    slug: "cume-espumante-brut",
    name: "Cume Espumante Brut",
    type: "Espumante",
    grape: "Chardonnay/Pinot Noir",
    region: "Serra Gaúcha",
    vintage: "2022",
    description:
      "Método tradicional, com segunda fermentação em garrafa e mínimo de 18 meses sobre borras finas.",
    tastingNotes: "Bolhas finas e persistentes, notas de pão fresco e maçã verde.",
    pairing: "Celebrações, entradas, frutos do mar.",
    servingTemp: "6-8°C",
    featured: true,
  },
  {
    slug: "terra-alta-cabernet",
    name: "Terra Alta Cabernet Sauvignon",
    type: "Tinto",
    grape: "Cabernet Sauvignon",
    region: "Serra Gaúcha",
    vintage: "2020",
    description:
      "Vinhas de baixo rendimento em solo pedregoso, resultando em um vinho estruturado e de grande potencial de guarda.",
    tastingNotes: "Cassis, pimentão verde maduro, taninos firmes e presentes.",
    pairing: "Cordeiro, carnes de caça, queijos maturados.",
    servingTemp: "17-18°C",
  },
];
