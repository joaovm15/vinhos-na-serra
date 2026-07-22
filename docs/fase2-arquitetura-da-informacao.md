# Fase 2 — Arquitetura da Informação e Mapa do Site

## 1. Mapa de Páginas (Sitemap)

```
HOME
│
├── VINHOS (catálogo)
│   └── [Página individual do vinho] (template dinâmico)
│
├── A SERRA
│   (terroir, clima, altitude, o que torna o vinho da região único)
│
├── NOSSA HISTÓRIA
│   (origem da marca, fundadores, filosofia)
│
├── CONFRARIA
│   (clube de assinatura / associação — benefícios, planos, adesão)
│
├── EXPERIÊNCIAS
│   (degustações, visitas guiadas, eventos, harmonizações)
│   └── [Página individual da experiência] (se o volume justificar)
│
├── CONTATO
│   (formulário, endereço, WhatsApp, redes sociais)
│
└── CARRINHO / CHECKOUT
    (fluxo de compra, se houver e-commerce ativo)
```

Sem submenus profundos. Cada item do menu principal é uma página de primeiro nível — nada de
"Vinhos > Tintos > Cabernet > ...". Se o catálogo crescer, isso vira filtro dentro da página
VINHOS, não hierarquia de URL.

## 2. Navegação Principal (Header)

```
[LOGO]     VINHOS   A SERRA   NOSSA HISTÓRIA   CONFRARIA   EXPERIÊNCIAS   CONTATO        [BUSCA] [CONTA] [CARRINHO]
```

- Os ícones de busca/conta/carrinho ficam à direita, discretos (apenas ícone de traço fino, sem
  badge colorido — se houver contador de itens no carrinho, um numeral pequeno, sem bolha
  vermelha chamativa).
- Em mobile: logo centralizada, menu hambúrguer minimalista à esquerda, carrinho à direita. Menu
  abre em tela cheia com os itens empilhados, tipografia grande, muito espaço — não um drawer
  estreito lateral.

## 3. Estrutura de Conteúdo por Página

### HOME
Função: apresentar a marca inteira em uma jornada, gerar desejo, direcionar para Vinhos e
Confraria.

1. Hero cinematográfico (imagem/vídeo de serra + taça, headline curta, CTA único)
2. Manifesto da marca (frase de posicionamento, texto curto, muito espaço)
3. Seleção de vinhos em destaque (3–4 rótulos, não o catálogo inteiro)
4. A Serra e o terroir (bloco editorial com imagem grande + texto)
5. Nossa História (resumo, com link para página completa)
6. Confraria (convite a associar-se — benefícios em poucas linhas)
7. Experiências (próxima degustação/evento em destaque)
8. Instagram / prova social (grid discreto, opcional)
9. CTA final (newsletter ou "conheça a seleção completa")
10. Footer

Removido da lista original: "conteúdo/inspiração" como seção separada — vira parte do bloco de
Serra/História para evitar excesso de seções repetidas.

### VINHOS (Catálogo)

- Barra de filtro horizontal discreta: tipo, uva, região, safra (aparece só se o catálogo
  justificar — com poucos rótulos, não usar filtro nenhum, só listagem curada)
- Grid assimétrico (não uniforme 3x3 padrão) com foto, nome, tipo, uva, safra, preço
- CTA "Ver detalhes" discreto, sem botão de compra imediata na listagem (a decisão de compra
  acontece na página individual, onde há contexto)

### PÁGINA INDIVIDUAL DO VINHO

1. Foto grande do rótulo (composição editorial, não still de e-commerce)
2. Nome, tipo, uva, região, safra
3. Texto de apresentação (a "história" daquele vinho — vinicultor, colheita)
4. Ficha técnica (harmonização, temperatura, notas de degustação)
5. Preço + CTA de compra
6. "Vinhos relacionados" (2–3, não carrossel infinito)

### A SERRA
Editorial puro — clima, altitude, solo, o que diferencia aquele terroir. Fotografia grande,
texto em blocos curtos, sem CTA de venda forçado (a venda acontece indiretamente, reforçando a
origem dos vinhos).

### NOSSA HISTÓRIA
Narrativa da marca/família — timeline discreta ou texto corrido longo com fotos intercaladas.
Tom pessoal, não institucional.

### CONFRARIA

1. O que é (proposta de valor do clube)
2. Benefícios (acesso a safras limitadas, eventos exclusivos, descontos)
3. Planos/níveis, se houver
4. CTA de adesão

### EXPERIÊNCIAS
Listagem de degustações/visitas/eventos com data, formato (presencial/online), CTA de reserva.
Se o volume for baixo, cabe tudo em uma página só, sem necessidade de páginas individuais.

### CONTATO
Formulário simples (nome, e-mail, mensagem), WhatsApp, endereço físico se houver loja/adega
visitável, redes sociais. Sem chatbot, sem excesso de campos.

### CARRINHO / CHECKOUT
Fluxo enxuto: carrinho → dados de entrega → pagamento → confirmação. Visual consistente com o
resto do site (nada de checkout genérico de plugin que quebra a identidade).

## 4. Hierarquia de Prioridade (o que o usuário deve encontrar primeiro)

1. Entender o que é a marca (Home)
2. Ver os vinhos (Vinhos)
3. Entender a origem/diferencial (A Serra)
4. Ser convidado a pertencer (Confraria)
5. Comprar ou visitar (Checkout / Experiências)
6. Falar com alguém (Contato)

## 5. Observação sobre Fase 3
Fase 3 é o wireframe — a estrutura de cada página em blocos, sem estilo ainda, só disposição e
prioridade de conteúdo.

## Status de implementação

O scaffold inicial (Next.js + TypeScript + Tailwind) já reflete o sitemap e a estrutura de
conteúdo desta fase, com estilização provisória — a Fase 3 (wireframe) e uma Fase de identidade
visual ainda devem refinar layout, espaçamento e estilo definitivos.

## Atualização de escopo (pós Fase 3)

O site **não é um e-commerce** — é institucional, focado em divulgar a imagem da marca, o
trabalho e a história da vinícola. Isso muda alguns pontos do sitemap original:

- **CARRINHO / CHECKOUT foi removida** — não existe fluxo de compra no site.
- A página individual do vinho não tem preço nem CTA de compra — é apresentação/ficha técnica.
- CONFRARIA não tem preços de planos nem CTA de adesão — apresenta a proposta e os níveis de
  forma informativa.
- EXPERIÊNCIAS não tem CTA de reserva — é uma listagem informativa de degustações/eventos.
- O header não tem mais ícones de conta e carrinho (não fazem sentido sem e-commerce).
