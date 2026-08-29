/**
 * Faixa de patrocínio e apoio do evento.
 *
 * As dez logos foram recortadas da arte oficial da faixa e convertidas para
 * branco com fundo transparente (ver `docs/assets.md`).
 *
 * Para incluir ou trocar a logo de uma marca: coloque o arquivo em
 * `public/images/patrocinadores/` e preencha o campo `logo` com o caminho.
 * Sem `logo`, a faixa mostra o nome da marca em texto — o link continua
 * funcionando e nada quebra.
 */

export type Apoiador = {
  /** Nome exato da marca. Vira o `alt` da logo e o texto de fallback. */
  nome: string;
  url: string;
  /** Caminho em /images/patrocinadores/. Sem ele, entra o nome em texto. */
  logo?: string;
};

export type GrupoApoio = {
  titulo: string;
  /** Grupo de maior peso: as logos entram maiores, como na arte de referência. */
  destaque?: boolean;
  marcas: Apoiador[];
};

export const gruposDeApoio: GrupoApoio[] = [
  {
    titulo: "Patrocínio",
    destaque: true,
    marcas: [
      {
        nome: "Gênesis Empreendimentos",
        url: "https://www.genesisempreendimentos.com.br",
        logo: "/images/patrocinadores/genesis.png",
      },
    ],
  },
  {
    titulo: "Apoio Institucional",
    marcas: [
      {
        nome: "Consevitis-RS",
        url: "https://www.consevitis-rs.com.br/pt",
        logo: "/images/patrocinadores/consevitis.png",
      },
      {
        // Link informado igual ao da Consevitis — confirmar o endereço próprio.
        nome: "Vinho Brasileiro",
        url: "https://www.consevitis-rs.com.br/pt",
        logo: "/images/patrocinadores/vinho-brasileiro.png",
      },
      {
        nome: "Vale dos Vinhedos",
        url: "https://valedosvinhedos.com.br",
        logo: "/images/patrocinadores/vale-dos-vinhedos.png",
      },
    ],
  },
  {
    titulo: "Apoio",
    marcas: [
      {
        nome: "Ville Verte",
        url: "https://www.valleeverte.com.br",
        logo: "/images/patrocinadores/ville-verte.png",
      },
      {
        nome: "Água Levy",
        url: "https://agualevy.com.br",
        logo: "/images/patrocinadores/agua-levy.png",
      },
      {
        nome: "3 Corações",
        url: "https://www.cafe3coracoes.com.br",
        logo: "/images/patrocinadores/3-coracoes.png",
      },
      {
        nome: "Burrata Bistrô",
        url: "https://www.instagram.com/burrata.bistro",
        logo: "/images/patrocinadores/burrata.png",
      },
      {
        nome: "Velluto Gelato",
        url: "https://vellutogelato.com.br",
        logo: "/images/patrocinadores/velluto-gelato.png",
      },
      {
        nome: "Mérica",
        url: "https://www.mericalog.com",
        logo: "/images/patrocinadores/merica.png",
      },
    ],
  },
];
