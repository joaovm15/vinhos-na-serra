# Backlog

Pendências e decisões em aberto. Atualizado em agosto de 2026, ao fechar a primeira fase
do site.

---

## 1. Logos de patrocinadoras e parceiras no rodapé — *próxima entrega*

**O que:** faixa de logos no rodapé, com as patrocinadoras do evento e as marcas
parceiras. Ainda não foi feita porque os arquivos das logos não chegaram.

**Pré-requisitos (com quem toca comercial):**
- arquivo de cada logo, de preferência SVG, em versão monocromática clara — o rodapé é
  verde escuro (`verde-profundo`). Especificação completa em [`assets.md`](assets.md).
- nome exato de cada marca (vira o `alt`) e link do site, quando houver;
- se há hierarquia (patrocinador master × apoiador) ou se todas entram no mesmo tamanho.

**Como implementar quando os arquivos chegarem:**

1. Colocar os arquivos em `public/images/patrocinadores/`.
2. Criar `src/data/patrocinadores.ts`:
   ```ts
   export type Patrocinador = {
     nome: string;
     logo: string;   // caminho em /images/patrocinadores/
     url?: string;
   };

   export const patrocinadores: Patrocinador[] = [];
   ```
3. Criar `src/components/Patrocinadores.tsx`: título curto ("Patrocinadores" ou
   "Realização e apoio") no mesmo estilo dos títulos de coluna do rodapé
   (`text-sm tracking-widest text-dourado-claro uppercase`), e as logos numa grade
   `flex flex-wrap items-center justify-center gap-x-10 gap-y-8`.
   - altura fixa por logo (`h-8` ou `h-10` + `w-auto`) para normalizar tamanhos;
   - `opacity-80 transition hover:opacity-100` dá unidade a logos de pesos diferentes;
   - se a logo tiver link, envolver em `<a target="_blank" rel="noopener noreferrer">`.
4. Montar em `src/components/Footer.tsx` **entre** o bloco principal e a barra de
   copyright, separado por `border-t border-off-white/10`.
5. Se a lista estiver vazia, o componente deve retornar `null` — assim ele pode ser
   montado antes de as logos chegarem.

Conferir depois em 320 / 390 / 768 / 1440 (ver rotina de QA no `AGENTS.md`).

---

## 2. Definir o domínio oficial — *bloqueia a indexação*

`NEXT_PUBLIC_SITE_URL` ainda não está configurada na Vercel. Sem ela, canonical,
sitemap e Open Graph usam o domínio `*.vercel.app`. Definir a variável com o domínio
final, escolher no painel da Vercel qual versão é a principal (com ou sem `www`) e
refazer o deploy. Detalhes em [`seo.md`](seo.md).

---

## 3. Páginas legais (recomendadas, não criadas)

Não existem `/privacidade` nem `/termos`. O site não tem cadastro, login, carrinho
nem cookies de rastreamento — o formulário de contato apenas monta uma mensagem de
WhatsApp no próprio navegador, sem enviar dados para servidor nenhum. Ainda assim,
se entrar Google Analytics, pixel ou qualquer coleta de dados, uma página de
privacidade passa a ser necessária (LGPD). O texto precisa ser escrito por quem
responde juridicamente pelo negócio — não dá para gerar aqui.

---

## 4. Páginas publicadas mas sem link

`/experiencias` e `/a-serra` estão no ar e não são acessadas por nenhum menu ou botão.
Enquanto isso, ficaram com `noindex, follow` e fora do sitemap — página órfã indexada
é entrada sem contexto na busca. **Decidir:** linkar (onde?), transformar em seção de
outra página, ou remover. Se voltarem à navegação, é só remover o `robots` da metadata
e acrescentar a rota em `src/app/sitemap.ts`.

Atenção ao conteúdo de `/experiencias`: as três experiências em `src/data/experiences.ts`
têm datas e formatos que precisam ser confirmados antes de a página voltar ao ar.

---

## 5. Peso dos vídeos

`public/videos/` soma ~15 MB servidos direto do `public/`. Se entrar um terceiro vídeo,
avaliar hospedagem externa (Mux, Cloudflare Stream, YouTube não listado) ou uma versão
comprimida com bitrate menor.

---

## 6. Marca d'água no vídeo da página do Evento

`evento-pagina.mp4` tem a marca d'água **@encantosdetere** no canto. Trocar por uma
versão sem marca, ou obter autorização de crédito.

---

## 7. Divergência de local do evento

O slug do link do Sympla (`src/lib/evento.ts`) diz `vale-dos-vinhedos`, enquanto o site
anuncia **Espaço Ville Verte, Teresópolis**. Não deu para abrir o Sympla daqui para
confirmar. Verificar qual é o texto correto na página de ingressos.

---

## 8. Textos que ficaram sem uso

Os números das edições anteriores (20 vinícolas, 120+ rótulos, 400+ pessoas) saíram da
página do Evento quando o texto novo entrou. Se fizerem falta como prova social, cabem
bem como faixa de `InfoBox` antes da lista de vinícolas.

---

## 9. Higiene técnica (opcional, quando houver mais gente no projeto)

- o CI (`.github/workflows/ci.yml`) roda `npm run lint` e `npm run build` a cada push e
  PR; não há testes automatizados — a verificação visual continua manual;
- Prettier não está configurado — a formatação hoje é manual e consistente por convenção;
- `convite/` (gerador do convite em PDF) mora no repositório do site mas não faz parte
  dele; se crescer, vira repositório próprio.
