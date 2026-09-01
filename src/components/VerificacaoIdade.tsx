"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import ThreeTacaIcon from "@/components/ThreeTacaIcon";
import SectionTexture from "@/components/SectionTexture";
import { CLICAVEL_CONTORNO, CLICAVEL_SOLIDO } from "@/components/Button";
import {
  ATRIBUTO_HTML,
  CHAVE_RESPOSTA,
  RESPOSTA_MAIOR,
  RESPOSTA_MENOR,
  TEXTO_BLOQUEIO,
  TEXTO_PERGUNTA,
  VERIFICACAO_IDADE_ENABLED,
} from "@/lib/idade";

type Estado = "perguntando" | "liberado" | "bloqueado";

/** O que já foi respondido nesta sessão. Só roda no cliente. */
function lerResposta(): Estado {
  if (!VERIFICACAO_IDADE_ENABLED) return "liberado";
  /* Navegador com armazenamento bloqueado não pode travar o site: em caso de
     erro, a pergunta simplesmente aparece de novo. */
  try {
    const r = window.sessionStorage.getItem(CHAVE_RESPOSTA);
    if (r === RESPOSTA_MAIOR) return "liberado";
    if (r === RESPOSTA_MENOR) return "bloqueado";
  } catch {
    /* sem armazenamento: pergunta sempre */
  }
  return "perguntando";
}

/* Nada muda esse valor por fora da página, então não há o que assinar. */
const semAssinatura = () => () => {};

/** No servidor a pergunta é sempre renderizada: é ela que evita a piscada. */
const noServidor = (): Estado => "perguntando";

/**
 * Porta de entrada do site: pergunta a idade e, se for menor, bloqueia.
 *
 * Montado no layout raiz, vale para todas as rotas. O bloco já vem no HTML
 * servido — o script do `<head>` esconde antes da primeira pintura quando a
 * pessoa já respondeu nesta sessão.
 */
export default function VerificacaoIdade() {
  const gravado = useSyncExternalStore(semAssinatura, lerResposta, noServidor);
  const [escolha, setEscolha] = useState<Estado | null>(null);
  const estado = escolha ?? gravado;
  const primeiroBotao = useRef<HTMLButtonElement>(null);

  /* Com a pergunta ou o bloqueio na tela, o fundo não rola. Antes da
     hidratação quem trava é o CSS, pelo atributo no `<html>`. */
  useEffect(() => {
    if (estado === "liberado") return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    primeiroBotao.current?.focus();
    return () => {
      document.body.style.overflow = anterior;
    };
  }, [estado]);

  const responder = useCallback((resposta: Estado) => {
    try {
      window.sessionStorage.setItem(
        CHAVE_RESPOSTA,
        resposta === "liberado" ? RESPOSTA_MAIOR : RESPOSTA_MENOR
      );
    } catch {
      /* sem armazenamento: a pergunta volta na próxima página */
    }
    /* Mantém o atributo em dia: é ele que o CSS usa para soltar a rolagem e
       esconder o bloco enquanto o React ainda não removeu o nó. */
    document.documentElement.setAttribute(
      ATRIBUTO_HTML,
      resposta === "liberado" ? "liberado" : "bloqueado"
    );
    setEscolha(resposta);
  }, []);

  if (!VERIFICACAO_IDADE_ENABLED || estado === "liberado") return null;

  const bloqueado = estado === "bloqueado";
  const texto = bloqueado ? TEXTO_BLOQUEIO : TEXTO_PERGUNTA;

  return (
    <div
      id="verificacao-idade"
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
              onClick={() => responder("liberado")}
              className={`${CLICAVEL_SOLIDO} w-full max-w-xs`}
            >
              {TEXTO_PERGUNTA.sim}
            </button>
            <button
              type="button"
              onClick={() => responder("bloqueado")}
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
