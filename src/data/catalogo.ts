/**
 * Conteúdo do catálogo.
 *
 * Este arquivo é o único lugar a mexer para incluir, editar ou remover rótulos —
 * o layout não precisa ser tocado. Passo a passo em `docs/catalogo.md`.
 */

export type CategoriaCatalogo = {
  /** Usado na URL do filtro e como chave — minúsculas, sem acento, com hífen. */
  slug: string;
  /** Como aparece no botão de filtro. */
  nome: string;
};

export type ItemCatalogo = {
  slug: string;
  nome: string;
  /** `slug` de uma das categorias abaixo. */
  categoria: string;
  /** Uma ou duas frases. Aparece no card. */
  descricao: string;
  /** Etiquetas curtas: uva, região, safra, harmonização… */
  tags: string[];
  /** Caminho em /images/catalogo/. Sem imagem, o card mostra o monograma. */
  imagem?: string;
  /** Texto alternativo da imagem. Obrigatório quando há imagem. */
  imagemAlt?: string;
  /** Texto do botão. Sem valor, usa "Consultar disponibilidade". */
  acao?: string;
};

export const categorias: CategoriaCatalogo[] = [
  { slug: "tintos", nome: "Tintos" },
  { slug: "brancos", nome: "Brancos" },
  { slug: "espumantes", nome: "Espumantes" },
  { slug: "roses", nome: "Rosés" },
];

/**
 * Os rótulos de verdade entram aqui. Enquanto a lista estiver vazia, a página
 * mostra `exemplos` com um aviso de demonstração — assim dá para conferir o
 * layout antes de ter conteúdo, e o aviso some sozinho no primeiro item real.
 */
export const itens: ItemCatalogo[] = [];

/** Demonstração de layout. Pode apagar quando o catálogo real entrar. */
export const exemplos: ItemCatalogo[] = [
  {
    slug: "exemplo-tinto",
    nome: "Nome do rótulo",
    categoria: "tintos",
    descricao:
      "Uma ou duas frases sobre o rótulo: de onde vem, o que tem de particular e com o que combina.",
    tags: ["Uva", "Região", "Safra"],
  },
  {
    slug: "exemplo-branco",
    nome: "Nome do rótulo",
    categoria: "brancos",
    descricao:
      "Uma ou duas frases sobre o rótulo: de onde vem, o que tem de particular e com o que combina.",
    tags: ["Uva", "Região"],
  },
  {
    slug: "exemplo-espumante",
    nome: "Nome do rótulo",
    categoria: "espumantes",
    descricao:
      "Uma ou duas frases sobre o rótulo: de onde vem, o que tem de particular e com o que combina.",
    tags: ["Método", "Região"],
  },
  {
    slug: "exemplo-rose",
    nome: "Nome do rótulo",
    categoria: "roses",
    descricao:
      "Uma ou duas frases sobre o rótulo: de onde vem, o que tem de particular e com o que combina.",
    tags: ["Uva", "Safra"],
  },
];

/** Itens que a página deve renderizar, e se são demonstração. */
export function itensDoCatalogo() {
  const temConteudoReal = itens.length > 0;
  return {
    lista: temConteudoReal ? itens : exemplos,
    demonstracao: !temConteudoReal,
  };
}
