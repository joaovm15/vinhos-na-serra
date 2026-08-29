"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import MonogramaVS from "@/components/MonogramaVS";
import { CLICAVEL_CONTORNO } from "@/components/Button";
import { whatsappUrl } from "@/lib/whatsapp";
import { ITENS_POR_PAGINA } from "@/lib/catalogo";
import type { CategoriaCatalogo, ItemCatalogo } from "@/data/catalogo";

/* Busca, filtro por categoria e carregamento progressivo. Tudo em memória:
   o catálogo é estático, então não há requisição nenhuma aqui. */
export default function CatalogoGrade({
  itens,
  categorias,
}: {
  itens: ItemCatalogo[];
  categorias: CategoriaCatalogo[];
}) {
  const [categoria, setCategoria] = useState<string>("todos");
  const [busca, setBusca] = useState("");
  const [visiveis, setVisiveis] = useState(ITENS_POR_PAGINA);

  /* Só mostra o filtro de categorias que realmente tem rótulo. */
  const categoriasComItens = useMemo(
    () => categorias.filter((c) => itens.some((i) => i.categoria === c.slug)),
    [categorias, itens]
  );

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return itens.filter((item) => {
      const daCategoria = categoria === "todos" || item.categoria === categoria;
      if (!daCategoria) return false;
      if (!termo) return true;
      return [item.nome, item.descricao, ...item.tags]
        .join(" ")
        .toLowerCase()
        .includes(termo);
    });
  }, [itens, categoria, busca]);

  const mostrando = filtrados.slice(0, visiveis);
  const faltam = filtrados.length - mostrando.length;

  /* Qualquer mudança de filtro recomeça a contagem da paginação. */
  const trocarCategoria = (slug: string) => {
    setCategoria(slug);
    setVisiveis(ITENS_POR_PAGINA);
  };
  const trocarBusca = (valor: string) => {
    setBusca(valor);
    setVisiveis(ITENS_POR_PAGINA);
  };

  const pilhaFiltro = (ativo: boolean) =>
    `${CLICAVEL_CONTORNO} ${
      ativo
        ? "border-verde-serra bg-verde-serra text-off-white"
        : "border-verde-serra/25 text-verde-serra/80 hover:border-verde-serra hover:bg-verde-serra/[0.06]"
    }`;

  return (
    <div>
      {/* Busca — mesmo tratamento dos campos do formulário de contato. */}
      <div className="mx-auto max-w-md">
        <label
          htmlFor="busca-catalogo"
          className="text-xs tracking-[0.15em] text-verde-serra/60 uppercase"
        >
          Buscar rótulo
        </label>
        <input
          id="busca-catalogo"
          type="search"
          value={busca}
          onChange={(e) => trocarBusca(e.target.value)}
          placeholder="Uva, região, nome do rótulo…"
          className="mt-2 w-full border-b border-verde-serra/25 bg-transparent py-2 text-verde-serra outline-none placeholder:text-verde-serra/40 focus:border-dourado"
        />
      </div>

      {/* Categorias */}
      {categoriasComItens.length > 0 && (
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          <button type="button" onClick={() => trocarCategoria("todos")} className={pilhaFiltro(categoria === "todos")}>
            Todos
          </button>
          {categoriasComItens.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => trocarCategoria(c.slug)}
              className={pilhaFiltro(categoria === c.slug)}
            >
              {c.nome}
            </button>
          ))}
        </div>
      )}

      {/* Cards — uma coluna no celular, duas no tablet, três a partir do desktop */}
      {mostrando.length > 0 ? (
        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mostrando.map((item) => (
            <li key={item.slug}>
              <CardCatalogo item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-16 text-center text-verde-serra/70">
          Nenhum rótulo encontrado para essa busca. Tente outro termo ou fale com a nossa
          equipe.
        </p>
      )}

      {faltam > 0 && (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setVisiveis((v) => v + ITENS_POR_PAGINA)}
            className={`${CLICAVEL_CONTORNO} border-verde-serra/30 text-verde-serra hover:border-verde-serra hover:bg-verde-serra/[0.06]`}
          >
            Ver mais rótulos
          </button>
        </div>
      )}
    </div>
  );
}

function CardCatalogo({ item }: { item: ItemCatalogo }) {
  const mensagem = whatsappUrl(
    `Olá! Vi o rótulo ${item.nome} no catálogo do Vinhos na Serra e gostaria de saber mais.`
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-verde-serra/15 bg-verde-serra/[0.035] transition-colors duration-300 hover:border-verde-serra/30 hover:bg-verde-serra/[0.06]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-areia">
        {item.imagem ? (
          <Image
            src={item.imagem}
            alt={item.imagemAlt ?? item.nome}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          /* Sem foto, o card não fica com buraco: entra o monograma da marca. */
          <div className="flex h-full w-full items-center justify-center bg-verde-serra/[0.06]">
            <MonogramaVS className="h-12 w-auto text-verde-serra/30" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl text-verde-serra">{item.nome}</h3>
        <p className="mt-3 text-sm leading-relaxed text-verde-serra/80">{item.descricao}</p>

        {item.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-dourado/30 px-3 py-1 text-[0.65rem] tracking-[0.12em] text-dourado uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <a
          href={mensagem}
          target="_blank"
          rel="noopener noreferrer"
          className={`${CLICAVEL_CONTORNO} mt-6 w-fit border-bordo/40 text-bordo hover:border-bordo hover:bg-bordo/[0.06]`}
        >
          {item.acao ?? "Consultar disponibilidade"}
        </a>
      </div>
    </article>
  );
}
