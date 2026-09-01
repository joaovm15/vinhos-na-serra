"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import ThreeTacaIcon from "@/components/ThreeTacaIcon";
import SectionTexture from "@/components/SectionTexture";
import { CLICAVEL_CONTORNO, CLICAVEL_SOLIDO } from "@/components/Button";
import {
  CHAVE_BLOQUEIO,
  CHAVE_MAIOR,
  TEXTO_BLOQUEIO,
  TEXTO_PERGUNTA,
  VERIFICACAO_IDADE_ENABLED,
} from "@/lib/idade";

type Estado = "carregando" | "perguntando" | "liberado" | "bloqueado";

/** O que já está gravado no navegador. Só roda no cliente. */
function lerDecisao(): Estado {
  if (!VERIFICACAO_IDADE_ENABLED) return "liberado";
  /* Navegador com armazenamento bloqueado não pode travar o site: em caso de
     erro, a pergunta simplesmente aparece de novo. */
  try {
    if (window.sessionStorage.getItem(CHAVE_BLOQUEIO) === "1") return "bloqueado";
    if (window.localStorage.getItem(CHAVE_MAIOR) === "1") return "liberado";
  } catch {
    /* sem armazenamento: pergunta a cada visita */
  }
  return "perguntando";
}

/* Nada muda esse valor por fora da página, então não há o que assinar. */
const semAssinatura = () => () => {};

/** No servidor não existe navegador: renderiza nada até a hidratação. */
const noServidor = (): Estado => "carregando";

/**
 * Porta de entrada do site: pergunta a idade e, se for menor, bloqueia.
 *
 * Fica montado no layout raiz, então vale para todas as rotas. A verificação
 * acontece no navegador, depois da página carregada — o HTML servido continua
 * completo, e nem o SEO nem os buscadores são afetados.
 */
export default function VerificacaoIdade() {
  const gravado = useSyncExternalStore(semAssinatura, lerDecisao, noServidor);
  const [escolha, setEscolha] = useState<Estado | null>(null);
  const estado = escolha ?? gravado;
  const primeiroBotao = useRef<HTMLButtonElement>(null);

  /* Com a pergunta ou o bloqueio na tela, o fundo não rola. */
  useEffect(() => {
    const travado = estado === "perguntando" || estado === "bloqueado";
    if (!travado) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    primeiroBotao.current?.focus();
    return () => {
      document.body.style.overflow = anterior;
    };
  }, [estado]);

  const confirmar = useCallback(() => {
    try {
      window.localStorage.setItem(CHAVE_MAIOR, "1");
    } catch {
      /* sem armazenamento: a pergunta volta na próxima visita */
    }
    setEscolha("liberado");
  }, []);

  const recusar = useCallback(() => {
    try {
      /* `sessionStorage` de propósito: o bloqueio dura só esta sessão, então um
         clique errado não deixa a pessoa trancada para sempre. */
      window.sessionStorage.setItem(CHAVE_BLOQUEIO, "1");
    } catch {
      /* sem armazenamento: o bloqueio vale só nesta página */
    }
    setEscolha("bloqueado");
  }, []);

  if (estado === "carregando" || estado === "liberado") return null;

  const bloqueado = estado === "bloqueado";
  const texto = bloqueado ? TEXTO_BLOQUEIO : TEXTO_PERGUNTA;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="verificacao-idade-titulo"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overscroll-contain bg-verde-serra px-6 py-16"
    >
      <SectionTexture tone="dark" />

      <div className="relative flex w-full max-w-lg flex-col items-center text-center">
        <ThreeTacaIcon className="h-auto w-32 text-off-white sm:w-40" />

        <p className="mt-10 text-sm tracking-[0.3em] text-areia uppercase">{texto.rotulo}</p>

        <h2
          id="verificacao-idade-titulo"
          className="text-h3 mt-4 font-serif text-balance text-off-white"
        >
          {texto.titulo}
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-pretty text-areia">{texto.texto}</p>

        {!bloqueado && (
          <div className="mt-10 flex w-full flex-col items-center gap-4">
            <button
              ref={primeiroBotao}
              type="button"
              onClick={confirmar}
              className={`${CLICAVEL_SOLIDO} w-full max-w-xs`}
            >
              {TEXTO_PERGUNTA.sim}
            </button>
            <button
              type="button"
              onClick={recusar}
              className={`${CLICAVEL_CONTORNO} w-full max-w-xs border-off-white/30 py-3 text-off-white hover:border-off-white hover:bg-off-white/10`}
            >
              {TEXTO_PERGUNTA.nao}
            </button>
          </div>
        )}

        <p className="mt-10 border-t border-off-white/15 pt-6 text-xs tracking-[0.15em] text-areia/70 uppercase">
          {texto.aviso}
        </p>
      </div>
    </div>
  );
}
