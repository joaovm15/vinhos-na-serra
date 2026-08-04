# Convite — 4º Encontro de Vinhos Brasileiros

Gerador do convite em PDF (A4, 2 páginas) usando a identidade visual do site:
paleta oficial, Playfair Display + Manrope (embutidas no PDF) e as texturas
de videira de `public/patterns/`.

## Uso

```bash
# versão com o campo do nome em branco
node convite/gerar.mjs

# versão nominal
node convite/gerar.mjs "Sr. Ricardo Almeida"

# nominal, definindo o nome do arquivo
node convite/gerar.mjs "Sra. Ana Prado" "Convite-Ana-Prado.pdf"
```

Os PDFs e os PNGs de conferência saem em `convite/saida/` (fora do versionamento).

## Dependências

Precisa de `playwright-core` e de um Chromium. Não está no `package.json` do
site de propósito — é ferramenta de material gráfico, não do build:

```bash
npm i -D playwright-core
```

Se o Chromium estiver em outro caminho, aponte com `CHROMIUM_PATH`.

## Fontes

`fontes/` guarda os arquivos `.woff2` de Playfair Display e Manrope extraídos
do build do Next.js, para o PDF não depender de rede nem da máquina de quem
gera. São as mesmas famílias usadas no site.
