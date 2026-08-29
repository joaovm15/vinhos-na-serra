# Backlog

Pendências e decisões em aberto. Atualizado em agosto de 2026, ao fechar a primeira fase
do site.

---

## 1. Um link a confirmar na faixa de apoio

A faixa de patrocínio e apoio está completa em `/evento` e na página de catálogo:
as dez marcas com a logo oficial, todas clicáveis.

Falta confirmar um dado: **Vinho Brasileiro** ficou com o mesmo link da Consevitis
(`consevitis-rs.com.br/pt`), que foi o endereço informado. Verificar se a marca tem
site próprio — o campo fica em `src/data/patrocinadores.ts`.

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
