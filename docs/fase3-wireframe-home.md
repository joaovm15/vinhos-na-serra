# Fase 3 — Wireframe Estratégico da Home

Direção de marca: institucional, sem e-commerce. Jornada narrativa:
IMPACTO → IDENTIDADE → MANIFESTO → ORIGEM → VINHOS → EXPERIÊNCIAS → CONFRARIA → CONTATO.

Paleta:
- `#1B2418` Verde Serra Profundo
- `#343B28` Verde Oliva Mineral
- `#8E2638` Bordô Vinícola
- `#F3EFE6` Off-White Papiro
- `#D8CEBB` Areia Natural
- `#B09A68` Dourado Envelhecido
- `#171815` Carvão

Tipografia: Cormorant Garamond (títulos) + Manrope (texto/interface). Conceito: "luxo discreto".

---

## 0. HEADER (chrome persistente, não é um "beat" da narrativa)

**Objetivo:** dar acesso à navegação sem competir com o Hero; sinalizar sofisticação desde o primeiro frame.
**Hierarquia visual:** logo (esquerda) > itens de menu (centro/direita) > nenhum CTA de destaque no header — a marca não empurra ação aqui, ela convida.
**Conteúdo:** Logo · Nossa História · A Serra · Nossos Vinhos · Experiências · Confraria · Contato.
**Layout:** barra fixa full-width, altura enxuta (~80px), logo à esquerda, menu inline à direita, bastante respiro entre itens (letras espaçadas, tudo caixa-alta, peso leve).
**Estado 1 — sobre o Hero:** fundo transparente, texto em off-white/dourado envelhecido para contraste sobre a foto.
**Estado 2 — ao rolar (>1 viewport):** fundo sólido Verde Serra Profundo, texto off-white, transição suave (~300–400ms, ease-out) de opacidade + cor de fundo, sem "salto".
**Interação:** hover nos itens de menu sublinha fina em dourado envelhecido; nenhum dropdown — navegação plana, sem submenus.
**Animação:** header nunca esconde ao rolar para baixo (permanece visível); apenas troca o "estado" de transparente para sólido.

---

## 1. HERO — IMPACTO

**Objetivo:** parar o scroll no primeiro segundo; comunicar "isso não é um site de vinícola genérico".
**Hierarquia visual:** imagem > overlay > título > subtítulo > CTA (o CTA é o elemento de menor peso visual da seção — convite, não venda).
**Conteúdo:**
- Etiqueta pequena, caixa-alta, espaçada: "VINHOS NA SERRA"
- Título (Cormorant Garamond, grande): "Da Serra para a Taça."
- Subtítulo (Manrope, leve): "Uma experiência construída entre a terra, o tempo e a paixão pelo vinho brasileiro."
- CTA discreto: "CONHEÇA A VINHOS NA SERRA"
**Layout:** full-bleed, 100vh, conteúdo centralizado horizontalmente, ancorado levemente abaixo do centro vertical (não no meio exato — dá peso à imagem).
**Imagem recomendada:** vinhedos em contraluz de fim de tarde, encostas em profundidade, névoa leve da Serra — tom quente sobre a paleta verde-escura no overlay.
**Overlay:** gradiente sutil de Verde Serra Profundo (`#1B2418`) na base, ~35–45% de opacidade, mais forte embaixo (onde está o texto) e quase transparente no topo (deixa a foto respirar).
**CTA:** texto sublinhado fino, sem botão "pílula" — traço horizontal que se estende no hover.
**Interação:** nenhuma — a seção existe para ser vista, não manipulada.
**Animação:** entrada em fade + leve translação vertical (16–24px) no título e subtítulo, sequenciada (título entra, 150ms depois o subtítulo, 150ms depois o CTA); zoom quase imperceptível na imagem de fundo (ken burns muito sutil, 20–30s de duração) para dar sensação de "vivo" sem parecer efeito de template.
**Transição para próxima seção:** o overlay escurece progressivamente perto do fim do Hero, criando uma faixa de transição para o fundo off-white do Manifesto — a mudança de escuro (foto) para claro (tipografia) é o primeiro grande contraste de ritmo da página.

---

## 2. MANIFESTO — IDENTIDADE

**Objetivo:** desacelerar o visitante depois do impacto visual; estabelecer a voz da marca em texto puro.
**Hierarquia visual:** espaço negativo > texto (tudo o resto é ausência — não há imagem aqui, de propósito).
**Conteúdo:**
- Título: "O vinho começa muito antes da taça."
- Corpo editorial (2–3 parágrafos curtos), tecendo terra, clima, tempo, pessoas, histórias e origem como uma continuidade — não como lista.
**Layout:** fundo Off-White Papiro; bloco de texto centralizado, largura estreita (~600–680px) — força a leitura pausada; margens verticais generosas (160px+ no desktop).
**Imagem recomendada:** nenhuma. A ausência de imagem é a decisão de design.
**CTA:** nenhum — esta seção não converte, ela constrói confiança.
**Interação:** nenhuma.
**Animação:** o texto aparece em fade suave conforme entra no viewport (scroll-triggered, sem parallax); talvez uma palavra-chave (ex: "terra", "tempo") em Dourado Envelhecido para dar um único ponto de cor no meio do texto monocromático.
**Transição para próxima seção:** o branco/off-white do Manifesto continua na seção seguinte (Nossa Essência), mas ela introduz uma imagem — a transição é de "só texto" para "texto + imagem", mantendo o mesmo fundo claro (evita cortar o ritmo de leitura com uma mudança brusca de cor).

---

## 3. NOSSA ESSÊNCIA — IDENTIDADE

**Objetivo:** apresentar a personalidade da marca de forma mais concreta que o Manifesto, preparando o terreno para "A Serra".
**Hierarquia visual:** imagem e texto com peso visual equivalente (50/50) — nenhum domina.
**Conteúdo:**
- Título: "Mais do que vinho. Uma forma de viver a Serra."
- Parágrafo curto sobre filosofia/identidade da marca.
- CTA: "CONHEÇA NOSSA HISTÓRIA"
**Layout:** grid de 2 colunas (imagem | texto) no desktop; em mobile empilha (imagem em cima). Alternar lado da imagem em relação à seção "Nossa História" mais adiante, para variar o padrão.
**Imagem recomendada:** retrato humano — alguém da família/equipe entre as parreiras, mão tocando a uva ou a terra. Foto quente, não still de still-life.
**CTA:** texto sublinhado, mesmo padrão do Hero (consistência de linguagem de CTA em toda a Home).
**Interação:** leve zoom na imagem ao hover (desktop), 3–4% de escala, transição lenta (~600ms).
**Animação:** imagem e texto entram com fade + slide horizontal discreto, de direções opostas (imagem desliza de fora, texto de dentro), sincronizados.
**Transição para próxima seção:** corte direto e deliberado de claro (off-white) para escuro (Verde Serra Profundo) ao entrar em "A Serra" — esse é o segundo grande contraste de ritmo, sinalizando "agora entramos no território".

---

## 4. A SERRA — ORIGEM

**Objetivo:** seção de assinatura visual — o momento mais cinematográfico depois do Hero, ancorando a marca no território real.
**Hierarquia visual:** imagem em tela cheia domina; texto sobreposto é mínimo e centrado.
**Conteúdo:**
- Título: "Onde a terra encontra o vinho."
- Texto curto de apoio sobre território/terroir (2–3 linhas, não um parágrafo longo).
- CTA: "DESCUBRA A SERRA"
**Layout:** full-bleed, fundo Verde Serra Profundo com imagem em tela cheia (não split — diferente da seção anterior, para variar o padrão); texto centralizado sobre a imagem com overlay escuro sutil, similar ao Hero mas mais escuro (esta é a segunda "grande respiração" visual da página).
**Imagem recomendada:** vista aérea ou de encosta das vinhas na Serra, luz de manhã, profundidade de vale — diferente do enquadramento do Hero para não repetir.
**CTA:** sublinhado, cor Dourado Envelhecido sobre o fundo escuro.
**Interação:** nenhuma além do CTA.
**Animação:** parallax muito sutil (a imagem se move ~10–15% mais devagar que o scroll) — dá profundidade sem efeito "aplicativo de template".
**Transição para próxima seção:** a imagem escurece na base, dissolvendo para o fundo Off-White de "Nossos Vinhos" — volta ao claro, terceiro grande contraste, agora saindo do território para o produto.

---

## 5. NOSSOS VINHOS — VINHOS

**Objetivo:** apresentar o produto de forma editorial, sem parecer loja.
**Hierarquia visual:** título > as quatro categorias em peso visual igual entre si (nenhuma categoria é "destaque").
**Conteúdo:**
- Título: "Uma seleção para descobrir."
- Quatro blocos: Tintos, Brancos, Rosés, Espumantes — cada um com imagem, título, descrição curta (1 linha) e CTA "CONHECER SELEÇÃO".
**Layout:** fundo Off-White Papiro; grid 2×2 no desktop (não um carrossel — reforça o tom editorial, não comercial), 1 coluna em mobile; imagens em proporção retrato, bastante espaço entre os blocos (não é uma prateleira de produtos, é uma vitrine editorial).
**Imagem recomendada:** still-life discreto de garrafa + taça em luz natural, ou detalhe da uva correspondente à categoria — evitar fotos de catálogo com fundo branco de estúdio.
**CTA:** "CONHECER SELEÇÃO" por categoria, mesmo padrão sublinhado, sem preço nem "comprar".
**Interação:** hover na imagem com leve escurecimento + CTA ganha destaque em dourado.
**Animação:** entrada escalonada dos 4 blocos (stagger de ~100ms entre eles) conforme entram no viewport.
**Transição para próxima seção:** o off-white permanece momentaneamente, mas a seguinte ("Curadoria") entra em Verde Oliva — transição por corte, não por gradiente, para marcar uma mudança de registro (do produto para a filosofia por trás dele).

---

## 6. CURADORIA — VINHOS (aprofundamento)

**Objetivo:** explicar o "porquê" por trás da seleção, reforçando expertise sem soar técnico demais.
**Hierarquia visual:** título > os quatro pilares em grid simétrico, tratados como texto/tipografia, não como ícones ilustrativos genéricos.
**Conteúdo:**
- Título: "Cada vinho tem uma história."
- Quatro pilares: Origem, Qualidade, Identidade, Experiência — cada um com um número ou palavra-chave grande (tipografia como elemento gráfico) + 1–2 linhas de texto.
**Layout:** fundo Verde Oliva Mineral (`#343B28`); grid 4 colunas no desktop (2×2 em tablet, 1 coluna em mobile); design minimalista — sem ícones ilustrados, sem cards com borda/sombra; separação entre pilares por linhas finas em Dourado Envelhecido ou por espaço puro.
**Imagem recomendada:** nenhuma, ou no máximo uma textura muito sutil de fundo (ex: papel/tecido) quase imperceptível — a seção é sobre tipografia e conceito, não sobre foto.
**CTA:** nenhum — esta seção sustenta a anterior, não converte.
**Interação:** nenhuma, ou leve destaque em dourado no pilar sob hover.
**Animação:** os quatro pilares entram em fade sequencial (stagger), texto sobe levemente (12px) ao aparecer.
**Transição para próxima seção:** do Verde Oliva (escuro/mineral) para uma seção com fotografia editorial de pessoas em "Experiências" — contraste de textura: da tipografia fria para o calor humano da foto.

---

## 7. EXPERIÊNCIAS — EXPERIÊNCIAS

**Objetivo:** mostrar que a marca é vivida coletivamente, não só consumida.
**Hierarquia visual:** fotografia > título > texto de apoio > CTA.
**Conteúdo:**
- Título: "O vinho também é sobre estar junto."
- Menção breve a degustações, eventos e harmonizações (texto corrido curto, não uma lista com bullets).
- CTA: "CONHEÇA NOSSAS EXPERIÊNCIAS"
**Layout:** fundo Areia Natural (`#D8CEBB`) ou Off-White — volta ao claro depois do Verde Oliva; foto em destaque ocupando ~60% da largura, texto ao lado (assimétrico, para variar do 50/50 usado em "Nossa Essência").
**Imagem recomendada:** fotografia editorial de pessoas reunidas à mesa/adega, luz natural, momento genuíno de convívio — não pose de stock photo.
**CTA:** sublinhado, consistente com o padrão da página.
**Interação:** leve zoom na foto ao hover, igual ao padrão de "Nossa Essência".
**Animação:** entrada em fade + slide, mesma lógica das seções split anteriores, mas invertendo o lado da imagem para criar variação.
**Transição para próxima seção:** corte para o fundo Bordô da Confraria — o contraste de cor mais forte da página até aqui (do bege/areia claro para o bordô saturado), sinalizando "seção especial".

---

## 8. CONFRARIA — CONFRARIA

**Objetivo:** posicionar a Confraria como o ápice emocional da jornada — pertencimento, não assinatura.
**Hierarquia visual:** cor de fundo (Bordô) como protagonista > título > texto > CTA.
**Conteúdo:**
- Título: "Faça parte da nossa mesa."
- Texto curto apresentando a Confraria como comunidade/experiência (não como plano pago com benefícios listados).
- CTA: "CONHECER A CONFRARIA"
**Layout:** fundo Bordô Vinícola (`#8E2638`) full-bleed; conteúdo centralizado, tipografia grande em off-white, seção mais "cheia de cor" e menos dependente de foto — a cor carrega o peso emocional aqui.
**Imagem recomendada:** opcional — se usar, uma foto discreta e escurecida ao fundo (mesa posta, taças, mãos brindando) com o bordô como overlay dominante; ou nenhuma imagem, só cor + tipografia (mais alinhado ao "luxo discreto").
**CTA:** sublinhado em Dourado Envelhecido sobre o bordô — contraste elegante.
**Interação:** nenhuma além do CTA.
**Animação:** fade simples, sem movimento de imagem (a seção "respira" pela cor sólida, não por efeito).
**Transição para próxima seção:** do Bordô saturado para o Off-White/Areia de "Nossa História" — volta à calma depois do pico emocional, preparando o visitante para a narrativa mais pausada da história da marca.

---

## 9. NOSSA HISTÓRIA — ORIGEM (fechamento narrativo)

**Objetivo:** contextualizar tudo que veio antes com a origem real da marca — o "porquê existimos".
**Hierarquia visual:** título > narrativa editorial > (estrutura para timeline futura).
**Conteúdo:**
- Título: "Uma história que começa na Serra."
- Bloco de texto narrativo (placeholder), estruturado para acomodar depois uma timeline com marcos reais (ano + acontecimento), como já prototipado na página `/nossa-historia`.
**Layout:** fundo Off-White Papiro ou Areia; texto em coluna estreita centralizada (eco do Manifesto, fechando o círculo estrutural da página); espaço reservado abaixo do texto para a timeline vertical.
**Imagem recomendada:** fotografia de arquivo/família (real ou placeholder), em tom sépia/quente, pequena e lateral — não domina a seção, é um detalhe humano.
**CTA:** "LER NOSSA HISTÓRIA COMPLETA" (leva à página dedicada) — opcional, pode ser omitido se o texto já for suficientemente completo aqui.
**Interação:** nenhuma.
**Animação:** fade suave no texto, sem movimento de imagem — ecoa a quietude do Manifesto.
**Transição para próxima seção:** mantém o fundo claro para o grid do Instagram — transição suave, quase sem corte, já que ambas são seções "leves".

---

## 10. INSTAGRAM — PROVA SOCIAL (opcional)

**Objetivo:** mostrar que a marca é viva e presente, sem depender de depoimentos formais.
**Hierarquia visual:** grid de imagens > título pequeno acima.
**Conteúdo:**
- Título: "Acompanhe a nossa jornada."
- Grid de imagens (6–8 fotos).
- CTA: "SEGUIR NO INSTAGRAM"
**Layout:** fundo Off-White; grid uniforme (3–4 colunas desktop, 2 mobile), sem espaçamento excessivo entre as imagens (mais denso que as outras seções, de propósito — contraste de textura antes do CTA final).
**Imagem recomendada:** fotos reais do Instagram da marca (vinhedo, eventos, bastidores, detalhes) — se não houver conteúdo real ainda, é a seção mais fácil de adiar/remover até existir acervo.
**CTA:** texto sublinhado abaixo do grid, único ponto de texto na seção.
**Interação:** hover escurece levemente a imagem.
**Animação:** grid aparece em fade simples, sem stagger elaborado (a densidade visual já basta).
**Transição para próxima seção:** corte direto para o CTA final em imagem cinematográfica — do grid denso e claro para uma única foto imersiva escura, o último grande contraste da página antes do footer.

---

## 11. CTA FINAL — CONTATO

**Objetivo:** fechar a jornada com o mesmo impacto do Hero, criando simetria narrativa.
**Hierarquia visual:** imagem > título > subtexto > dois CTAs (hierarquia entre eles: um primário, um secundário).
**Conteúdo:**
- Título: "Da Serra para a Taça." (eco intencional do Hero)
- Subtexto: "Descubra a Vinhos na Serra."
- CTA primário: "FALE CONOSCO"
- CTA secundário: "SIGA NOSSA HISTÓRIA"
**Layout:** full-bleed, fotografia cinematográfica da Serra (diferente da do Hero, mas do mesmo universo visual — golden hour, neblina, encostas); overlay em Verde Serra Profundo, mesma lógica do Hero.
**Imagem recomendada:** plano aberto da Serra ao entardecer, silhueta de parreiras, luz dourada — fecha visualmente o círculo aberto no Hero.
**CTA:** primário sublinhado em Dourado Envelhecido (mais peso), secundário em off-white simples (mais leve) — diferencia hierarquia sem usar botões "cheios".
**Interação:** hover nos CTAs com o mesmo traço expansivo do Hero.
**Animação:** fade + leve zoom na imagem, idêntico ao padrão do Hero — reforça a simetria de abertura/fechamento.
**Transição para próxima seção:** escurece diretamente para o Carvão do footer — não há mais "seção de conteúdo" depois, então a transição pode ser mais abrupta aqui (o fim da jornada narrativa).

---

## 12. FOOTER

**Objetivo:** fechar a página com informações práticas, sem quebrar o tom editorial.
**Hierarquia visual:** logo > frase de marca > menu > contato (WhatsApp, Instagram, e-mail, endereço), em blocos discretos.
**Conteúdo:** Logo · frase de marca (uma linha, tom do Manifesto) · menu replicado do header · WhatsApp · Instagram · e-mail · endereço.
**Layout:** fundo Carvão (`#171815`); texto em Areia/Off-White com baixo contraste (não branco puro — mantém a sofisticação); grid organizado em colunas, bastante espaço, sem ícones coloridos (ícones em traço fino, monocromáticos).
**Imagem recomendada:** nenhuma.
**CTA:** nenhum específico — os contatos (WhatsApp, e-mail) já funcionam como ação.
**Interação:** hover nos links com sublinhado em dourado, consistente com o resto da página.
**Animação:** nenhuma — o footer é o "descanso" final, estático por natureza.

---

## Experiência de Rolagem — Visão Geral do Ritmo

A Home não é uma sequência de blocos iguais — é uma composição de luz e escuridão, cheio e vazio, foto e tipografia, alternando deliberadamente:

```
HERO            escuro · foto full-bleed · impacto
  ↓ (escurece → clareia)
MANIFESTO       claro · só texto · silêncio
  ↓ (mesmo claro, ganha imagem)
NOSSA ESSÊNCIA  claro · split 50/50 · calor humano
  ↓ (corte claro → escuro)
A SERRA         escuro · foto full-bleed · parallax · respiração
  ↓ (escurece → clareia)
NOSSOS VINHOS   claro · grid editorial 2×2 · produto
  ↓ (corte claro → escuro mineral)
CURADORIA       escuro oliva · tipografia pura · conceito
  ↓ (mineral → fotografia humana)
EXPERIÊNCIAS    claro areia · split assimétrico · convívio
  ↓ (corte para cor saturada)
CONFRARIA       bordô saturado · cor pura · pertencimento
  ↓ (saturado → calmo)
NOSSA HISTÓRIA  claro · coluna estreita · narrativa
  ↓ (mesmo claro, textura muda)
INSTAGRAM       claro denso · grid de fotos · prova de vida
  ↓ (denso → imersivo)
CTA FINAL       escuro · foto full-bleed · fechamento (eco do Hero)
  ↓ (escurece)
FOOTER          carvão · estático · informação
```

**Princípios do ritmo:**
1. **Nunca duas seções escuras seguidas, nem duas claras com o mesmo padrão de layout seguidas** — Hero (escuro/foto) é seguido por Manifesto (claro/texto puro) e depois Nossa Essência (claro/split), variando textura mesmo dentro do mesmo tom.
2. **As transições de cor são sempre motivadas** — escuro para claro marca "saída de um clima emocional para outro" (ex: do território para o produto); cor saturada (bordô) é reservada para o único momento de maior intensidade emocional (Confraria), circundada por seções calmas antes e depois.
3. **Simetria de abertura e fechamento** — Hero e CTA Final compartilham composição, sinalizando começo/fim da jornada.
4. **Só duas seções usam parallax/movimento de imagem** (Hero e A Serra) — são os dois momentos "cinematográficos" da página; o resto usa fade/slide discretos, para o parallax não virar clichê repetido.
5. **CTAs são sempre sublinhados, nunca botões preenchidos** — reforça "luxo discreto" e cria consistência visual que o usuário reconhece subconscientemente ao longo do scroll.

---

Aguardando aprovação antes de iniciar a implementação em código.
