/**
 * Catálogo — configuração e chave de publicação.
 *
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │  CATALOG_ENABLED = false  →  o catálogo NÃO existe para o visitante │
 * │  CATALOG_ENABLED = true   →  /catalogo passa a responder            │
 * └─────────────────────────────────────────────────────────────────────┘
 *
 * Com a chave em `false`:
 *   - `/catalogo` devolve 404 (a rota não fica acessível nem por link direto);
 *   - a rota fica fora do sitemap;
 *   - nada é renderizado em página nenhuma, então não sobra espaço vazio;
 *   - nenhum menu, header ou rodapé aponta para lá.
 *
 * Para publicar: troque para `true`, confira o conteúdo em `src/data/catalogo.ts`
 * e acrescente `/catalogo` em `src/app/sitemap.ts` e no menu (`Header.tsx`), se
 * quiser que apareça na navegação.
 */
export const CATALOG_ENABLED = false;

/** Quantos cards aparecem por vez, antes do botão "Ver mais rótulos". */
export const ITENS_POR_PAGINA = 9;

/** Passos do "como funciona", no espírito do fluxo de compra pelo WhatsApp. */
export const PASSOS = [
  {
    titulo: "Escolha os rótulos",
    texto: "Navegue pelo catálogo e separe o que quer levar para a sua adega.",
  },
  {
    titulo: "Fale com a equipe",
    texto: "O pedido é combinado pelo WhatsApp, com a mensagem já preenchida.",
  },
  {
    titulo: "Confirme o pedido",
    texto: "A equipe confere disponibilidade e fecha as condições com você.",
  },
  {
    titulo: "Receba ou retire",
    texto: "Combine a entrega ou retire na adega, na Várzea, em Teresópolis.",
  },
];

/**
 * Faixa de informação logo abaixo dos passos — o equivalente ao aviso de frete
 * da referência. Texto neutro: ajuste quando a política estiver definida.
 */
export const AVISO = {
  titulo: "Entrega",
  destaque: "Consulte as condições de entrega com a nossa equipe.",
  complemento: "Retirada na adega, na Várzea, em Teresópolis.",
};
