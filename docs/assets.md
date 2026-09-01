# Assets

Tudo o que o site serve estaticamente vive em `public/`. O caminho no código é sempre
absoluto a partir da raiz de `public/` (`/images/...`, `/videos/...`).

## Organização

| Pasta | Conteúdo | Convenção de nome |
| --- | --- | --- |
| `public/images/hero/` | fotos de topo | assunto: `vista-serra.jpg` |
| `public/images/evento/` | fotos das edições e posters de vídeo | `evento-NN.jpg`, `poster-<video>.jpg` |
| `public/images/adega/` | fotos da adega | assunto: `detalhe-taca.jpg` |
| `public/images/patrocinadores/` | logos de patrocinadoras e parceiras | `<nome-da-marca>.svg` |
| `public/patterns/` | texturas e ornamentos da identidade | `vinha-<uso>-<dark\|light>.svg` |
| `public/videos/` | vídeos do evento | `evento-<contexto>.mp4` |

Nomes em minúsculas, sem acento e com hífen. Nada de `IMG_1234.jpg`.

## Imagens

- Usar sempre `next/image` (nunca `<img>`), com `width`/`height` reais.
- `alt` descritivo em português; string vazia (`alt=""`) só em imagem puramente decorativa,
  como as de `PhotoDivider`.
- Foto de conteúdo: JPG, lado maior ≤ 1600px, qualidade ~80.
- Cada `<video>` precisa de um **poster extraído do próprio vídeo**, senão o play troca
  de cena de repente:
  ```bash
  ffmpeg -ss 1.5 -i public/videos/<video>.mp4 -frames:v 1 -q:v 3 \
    public/images/evento/poster-<video>.jpg
  ```

## Vídeos

Os dois vídeos somam ~15 MB e são servidos direto de `public/` — é o item mais pesado do
site. Antes de adicionar um terceiro, ver a nota sobre hospedagem em
[`backlog.md`](backlog.md).

## Logos de patrocinadoras e apoiadoras

Destino: `public/images/patrocinadores/`. A faixa já existe e já está no ar em
`/evento` (e na página de catálogo) — falta só o arquivo de cada marca. Enquanto
o arquivo não entra, a faixa mostra o nome da marca em texto e o link funciona
normalmente, então nada quebra.

- **Formato**: SVG sempre que a marca fornecer; PNG com fundo transparente como
  segunda opção (altura mínima de 400px).
- **Versão**: a faixa fica sobre o verde escuro da marca — use a **versão
  monocromática clara** (branca ou off-white) de cada logo. Logo colorida em
  fundo escuro quebra a unidade da faixa.
- **Recorte**: sem moldura, sem fundo, sem margem sobrando. A altura é
  normalizada no CSS (48px no celular, 64px a partir do desktop; o patrocínio
  entra maior, 64/96px).

As dez logos estão instaladas: `genesis.png`, `consevitis.png`,
`vinho-brasileiro.png`, `vale-dos-vinhedos.png`, `ville-verte.png`,
`agua-levy.png`, `3-coracoes.png`, `burrata.png`, `velluto-gelato.png` e
`merica.png`.

Para trocar qualquer uma: substitua o arquivo com o mesmo nome. Se apagar o
arquivo, tire também o campo `logo` da marca em `src/data/patrocinadores.ts` —
sem ele, a faixa volta a mostrar o nome em texto, com o link funcionando.

> **Ao trocar um arquivo, apague `.next/` antes de conferir.** O otimizador de
> imagens do Next guarda a versão antiga em cache e continua servindo ela,
> mesmo com o arquivo novo no lugar. Isso já enganou uma revisão aqui.

## Tratamento aplicado nas logos

Os arquivos recebidos passam por um preparo antes de entrar no site — nenhuma
etapa redesenha a marca:

1. RGB forçado para branco puro, preservando o canal alfa;
2. níveis no alfa (corte em 60/190) para firmar as bordas do traço;
3. recorte da moldura transparente, para todas terem o mesmo peso óptico;
4. redução para 240px de altura (6× o tamanho de exibição), com LANCZOS.

As nove primeiras vieram recortadas da arte oficial da faixa (o PNG de 2171px
enviado pronto), segmentada por gaps de coluna no canal alfa. A Mérica veio em
arquivo separado, na versão colorida, e foi convertida para branco pelo mesmo
caminho — RGB branco preservando o alfa.

Duas armadilhas de origem, para não repetir:

- logo em **contorno vazado** (só a silhueta, sem preenchimento) some no tamanho
  da faixa; preencher o miolo por processamento vaza nas falhas do traço;
- logo **reamostrada de uma faixa comprimida** volta borrada e não recupera. O
  caminho certo é sempre a arte em alta ou o arquivo original da marca.
