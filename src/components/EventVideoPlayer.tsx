"use client";

import { useState } from "react";

export default function EventVideoPlayer({
  videoSrc,
  title,
}: {
  videoSrc?: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing && videoSrc) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-sm border border-dourado/30">
        <video
          className="h-full w-full"
          src={videoSrc}
          controls
          autoPlay
          playsInline
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Assistir vídeo: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-sm border border-dourado/30"
    >
      {/* Capa placeholder — substituir por imagem real fornecida pela Vinhos na Serra */}
      <div className="absolute inset-0 bg-gradient-to-br from-verde-oliva via-verde-serra to-carvao transition-transform duration-700 ease-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-verde-serra/20" />

      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-off-white/50 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:border-dourado sm:h-20 sm:w-20">
          <PlayIcon />
        </span>
      </span>
    </button>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="ml-1">
      <path d="M6 4.5v15l14-7.5-14-7.5Z" fill="#F3EFE6" />
    </svg>
  );
}
