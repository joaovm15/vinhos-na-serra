# Assets

Tudo o que o site serve estaticamente vive em `public/`. O caminho no código é sempre
absoluto a partir da raiz de `public/` (`/images/...`, `/videos/...`).

## Organização

| Pasta | Conteúdo | Convenção de nome |
| --- | --- | --- |
| `public/images/hero/` | fotos de topo | assunto: `vista-serra.jpg` |
| `public/images/evento/` | fotos das edições e posters de vídeo | `evento-NN.jpg`, `poster-<video>.jpg` |
| `public/images/adega/` | fotos da adega | assunto: `detalhe-taca.jpg` |
| `public/images/catalogo/` | fotos dos rótulos do catálogo | `<slug-do-rotulo>.jpg` |
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
  normalizada no CSS (32px no celular, 40px a partir do desktop).

Nomes esperados (é só descomentar o campo `logo` em `src/data/patrocinadores.ts`):

| Marca | Arquivo |
| --- | --- |
| Gênesis Empreendimentos | `genesis.png` |
| Consevitis-RS | `consevitis.png` |
| Vinho Brasileiro | `vinho-brasileiro.png` |
| Vale dos Vinhedos | `vale-dos-vinhedos.png` |
| Ville Verte | `ville-verte.png` |
| Água Levy | `agua-levy.png` |
| 3 Corações | `3-coracoes.png` |
| Burrata Bistrô | `burrata.png` |
| Velluto Gelato | `velluto-gelato.png` |
| Mérica | `merica.png` |
