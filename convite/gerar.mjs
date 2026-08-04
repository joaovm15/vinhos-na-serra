import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Caminhos relativos ao próprio arquivo, para funcionar em qualquer clone.
const AQUI = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(AQUI, "fontes");
const SAIDA = path.join(AQUI, "saida");
const REPO = path.join(AQUI, "..");
fs.mkdirSync(SAIDA, { recursive: true });

// Nome do convidado via argumento: node gerar.mjs "Sr. Fulano de Tal"
const CONVIDADO = process.argv[2] || null;
const ARQUIVO = process.argv[3] || "Convite-Vinhos-na-Serra-4a-Edicao.pdf";

const b64 = (p) => fs.readFileSync(p).toString("base64");
const playfair = b64(`${DIR}/playfair.woff2`);
const manrope = b64(`${DIR}/manrope.woff2`);

// Texturas da própria identidade do site
const texDark = fs.readFileSync(`${REPO}/public/patterns/vinha-textura-dark.svg`).toString("base64");
const texLight = fs.readFileSync(`${REPO}/public/patterns/vinha-textura-light.svg`).toString("base64");
const cantoDark = fs.readFileSync(`${REPO}/public/patterns/vinha-canto-dark.svg`).toString("base64");

// Paleta oficial
const C = {
  verde: "#2c3117",
  verdeProfundo: "#1e2210",
  verdeOliva: "#373d1e",
  bordo: "#b10736",
  offWhite: "#fffdeb",
  areia: "#d8cebb",
  bordoClaro: "#f0708a",
};

const vinicolas = [
  "Aurora", "Casa Ottone", "Casa Valduga", "Dom Bernardo", "Dom Cândido",
  "Don Laurindo", "Foppa & Ambrosi", "Iribarrem", "Larentis", "Lídio Carraro",
  "Miolo", "Peculiare", "Pizzato", "Terragnolo", "Valhalla",
];

const noite = [
  ["Curadoria", "Degustação de rótulos selecionados entre as principais vinícolas brasileiras."],
  ["Gastronomia", "Experiência gastronômica premium, pensada para harmonizar com a seleção da noite."],
  ["Ambiente", "Espaço exclusivo, com música ao vivo e ambientação sensorial."],
  ["Encontro", "Contato direto com produtores e enólogos por trás de cada rótulo."],
];

const numeros = [
  ["20", "Vinícolas participantes"],
  ["120+", "Rótulos degustados"],
  ["400+", "Pessoas presentes"],
  ["< 1 mês", "Para esgotar os ingressos"],
];

/* As três taças da identidade — traços por cima do vinho, como no manual */
const tresTacas = (cor = C.offWhite, vinho = C.bordo) => `
<svg viewBox="0 0 120 26" width="230" height="50">
  <path d="M12 15h16a8 8 0 0 1-16 0Z" fill="${vinho}"/>
  <circle cx="60" cy="15" r="8" fill="${vinho}"/>
  <path d="M92 15h16a8 8 0 0 1-16 0Z" fill="${vinho}"/>
  <line x1="12" y1="7" x2="28" y2="7" stroke="${cor}" stroke-width="1"/>
  <circle cx="60" cy="9" r="6" fill="none" stroke="${cor}" stroke-width="1"/>
  <line x1="92" y1="15" x2="106" y2="3" stroke="${cor}" stroke-width="1"/>
</svg>`;

const umaTaca = (cor, vinho, size = 26) => `
<svg viewBox="0 0 24 24" width="${size}" height="${size}">
  <circle cx="12" cy="14" r="7" fill="${vinho}"/>
  <circle cx="12" cy="8" r="5" fill="none" stroke="${cor}" stroke-width="1"/>
</svg>`;

const html = `
<style>
  @font-face{font-family:Playfair;src:url(data:font/woff2;base64,${playfair}) format('woff2');font-weight:400 700;font-display:block}
  @font-face{font-family:Manrope;src:url(data:font/woff2;base64,${manrope}) format('woff2');font-weight:200 800;font-display:block}

  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:Manrope,sans-serif;-webkit-font-smoothing:antialiased}

  .pg{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always}
  .pg:last-child{page-break-after:auto}
  .tex{position:absolute;inset:0;background-repeat:repeat;background-size:300px 300px}
  .in{position:relative;height:100%;display:flex;flex-direction:column}

  /* ——— página 1 ——— */
  .p1{background:${C.verde};color:${C.offWhite}}
  .p1 .tex{background-image:url(data:image/svg+xml;base64,${texDark});opacity:.13}
  .vinheta{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 42%, rgba(44,49,23,.9) 0%, rgba(44,49,23,.55) 55%, rgba(44,49,23,0) 100%)}
  .canto{position:absolute;width:62mm;opacity:.16}
  .canto.tl{top:0;left:0}
  .canto.br{bottom:0;right:0;transform:scale(-1)}

  .marca{padding:26mm 0 0;text-align:center}
  .wordmark{font-family:Playfair;font-weight:400;font-size:30pt;letter-spacing:.26em;text-transform:uppercase;margin:7mm 0 0;text-indent:.26em}
  .sub{font-size:7.5pt;letter-spacing:.42em;text-transform:uppercase;margin-top:4mm;color:${C.offWhite};text-indent:.42em}
  .rule{width:16mm;height:1px;background:${C.offWhite};opacity:.55;margin:6mm auto}
  .claim{font-size:8pt;font-weight:700;letter-spacing:.28em;text-transform:uppercase;text-indent:.28em}

  .corpo{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:0 26mm}
  .eyebrow{font-size:7.5pt;letter-spacing:.4em;text-transform:uppercase;color:${C.bordoClaro};text-indent:.4em}
  .nome{font-family:Playfair;font-size:27pt;font-weight:400;margin:7mm 0 2mm;line-height:1.15}
  .nome.vazio{color:${C.areia};opacity:.55;font-style:italic;font-size:19pt}
  .texto{font-size:10.5pt;line-height:2;color:${C.areia};max-width:132mm;margin-top:8mm}
  .texto + .texto{margin-top:5mm}

  .evento{margin-top:13mm;padding-top:9mm;border-top:1px solid rgba(255,253,235,.22);width:132mm}
  .evtitulo{font-family:Playfair;font-size:19pt;line-height:1.3}
  .evdata{font-size:8.5pt;letter-spacing:.24em;text-transform:uppercase;margin-top:5mm;color:${C.offWhite};text-indent:.24em}

  .assina{padding:0 26mm 20mm;text-align:center}
  .assinaLabel{font-size:7pt;letter-spacing:.34em;text-transform:uppercase;color:${C.areia};opacity:.75;text-indent:.34em}
  .socios{font-family:Playfair;font-size:11.5pt;margin-top:4mm;line-height:1.9;color:${C.offWhite}}

  /* ——— página 2 ——— */
  .p2{background:${C.offWhite};color:${C.verde}}
  .p2 .tex{background-image:url(data:image/svg+xml;base64,${texLight});opacity:.055}
  .p2 .in{padding:20mm 22mm 18mm}

  .h2{font-family:Playfair;font-size:20pt;font-weight:400}
  .kicker{font-size:7.5pt;letter-spacing:.4em;text-transform:uppercase;color:${C.bordo};margin-bottom:4mm;text-indent:.4em}
  .bloco{margin-bottom:11mm}

  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:6mm 10mm;margin-top:7mm}
  .item{border-top:1px solid rgba(44,49,23,.22);padding-top:4mm}
  .itemT{font-family:Playfair;font-size:12.5pt;color:${C.bordo}}
  .itemD{font-size:9pt;line-height:1.72;margin-top:2mm;color:rgba(44,49,23,.82)}

  .nums{display:grid;grid-template-columns:repeat(4,1fr);gap:7mm;margin-top:7mm}
  .num{text-align:center;border-top:1px solid rgba(44,49,23,.22);padding-top:4mm}
  .numV{font-size:21pt;font-weight:500;letter-spacing:-.02em;color:${C.bordo};font-variant-numeric:tabular-nums}
  .numL{font-size:7.5pt;line-height:1.5;margin-top:2mm;color:rgba(44,49,23,.72)}

  .vins{display:grid;grid-template-columns:repeat(3,1fr);gap:3.5mm 8mm;margin-top:7mm}
  .vin{font-family:Playfair;font-size:11.5pt}

  .rsvp{margin-top:auto;background:${C.verde};color:${C.offWhite};padding:10mm 12mm;position:relative;overflow:hidden}
  .rsvp .rt{position:absolute;inset:0;background-image:url(data:image/svg+xml;base64,${texDark});background-size:260px 260px;opacity:.1}
  .rsvpIn{position:relative;display:flex;justify-content:space-between;align-items:flex-end;gap:8mm}
  .rsvpK{font-size:7.5pt;letter-spacing:.36em;text-transform:uppercase;color:${C.bordoClaro};text-indent:.36em}
  .rsvpT{font-family:Playfair;font-size:15pt;margin-top:3mm}
  .rsvpD{font-size:9pt;line-height:1.85;margin-top:4mm;color:${C.areia}}
  .fecho{text-align:right;font-family:Playfair;font-style:italic;font-size:11pt;color:${C.areia};white-space:nowrap}
</style>

<!-- ————— PÁGINA 1 — O CONVITE ————— -->
<div class="pg p1">
  <div class="tex"></div>
  <div class="vinheta"></div>
  <img class="canto tl" src="data:image/svg+xml;base64,${cantoDark}">
  <img class="canto br" src="data:image/svg+xml;base64,${cantoDark}">

  <div class="in">
    <div class="marca">
      ${tresTacas()}
      <div class="wordmark">Vinhos na Serra</div>
      <div class="sub">Adega e Confraria</div>
      <div class="rule"></div>
      <div class="claim">A casa do vinho brasileiro</div>
    </div>

    <div class="corpo">
      <div class="eyebrow">Convite pessoal</div>
      ${
        CONVIDADO
          ? `<div class="nome">${CONVIDADO}</div>`
          : `<div class="nome vazio">nome do convidado</div>`
      }

      <p class="texto">
        Desde 2019 reunimos, em Teresópolis, a mais completa seleção de vinhos
        brasileiros do país. A cada edição, o Encontro deixou de ser apenas uma
        degustação para se tornar um ponto de convergência entre produtores,
        apreciadores e lideranças que reconhecem no vinho nacional um patrimônio
        cultural.
      </p>
      <p class="texto">
        Para a 4ª edição, reservamos um número restrito de lugares a convidados
        pessoais. Ficaríamos honrados com a sua presença.
      </p>

      <div class="evento">
        <div class="evtitulo">4º Encontro de Vinhos Brasileiros</div>
        <div class="evdata">29 de agosto de 2026 &nbsp;·&nbsp; Ville Verte &nbsp;·&nbsp; Teresópolis</div>
      </div>
    </div>

    <div class="assina">
      <div class="assinaLabel">Com nossa estima</div>
      <div class="socios">Rafael Feital &nbsp;·&nbsp; Rodrigo Feital &nbsp;·&nbsp; Leonardo Claussen</div>
    </div>
  </div>
</div>

<!-- ————— PÁGINA 2 — A EXPERIÊNCIA ————— -->
<div class="pg p2">
  <div class="tex"></div>
  <div class="in">
    <div class="bloco">
      <div class="kicker">A noite</div>
      <div class="h2">Uma experiência construída rótulo a rótulo.</div>
      <div class="grid2">
        ${noite
          .map(
            ([t, d]) =>
              `<div class="item"><div class="itemT">${t}</div><div class="itemD">${d}</div></div>`
          )
          .join("")}
      </div>
    </div>

    <div class="bloco">
      <div class="kicker">A edição anterior</div>
      <div class="h2">Um marco para o vinho brasileiro.</div>
      <div class="nums">
        ${numeros
          .map(
            ([v, l]) =>
              `<div class="num"><div class="numV">${v}</div><div class="numL">${l}</div></div>`
          )
          .join("")}
      </div>
    </div>

    <div class="bloco">
      <div class="kicker">Vinícolas confirmadas</div>
      <div class="vins">${vinicolas.map((v) => `<div class="vin">${v}</div>`).join("")}</div>
    </div>

    <div class="rsvp">
      <div class="rt"></div>
      <div class="rsvpIn">
        <div>
          <div class="rsvpK">Confirmação de presença</div>
          <div class="rsvpT">Reservamos o seu lugar.</div>
          <div class="rsvpD">
            WhatsApp +55 (21) 99614-8671 &nbsp;·&nbsp; @vinhosnaserra<br>
            R. Ten. Luiz Meirelles, 439 (fundos) — Várzea, Teresópolis, RJ
          </div>
        </div>
        <div class="fecho">
          ${umaTaca(C.offWhite, C.bordo, 30)}
          <div style="margin-top:3mm">Cultura em<br>estado líquido.</div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(700);

const out = path.join(SAIDA, ARQUIVO);
await page.pdf({
  path: out,
  format: "A4",
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

// PNGs para conferência visual
await page.setViewportSize({ width: 794, height: 1123 });
for (const [i, el] of (await page.$$(".pg")).entries()) {
  await el.screenshot({ path: path.join(SAIDA, `preview-${i + 1}.png`) });
}

await browser.close();
console.log("gerado:", out, fs.statSync(out).size, "bytes");
