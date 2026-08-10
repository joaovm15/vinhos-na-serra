"use client";

import { useRef, useState } from "react";

export default function EventVideoPlayer({
  src,
  poster,
  className = "",
  label = "Assistir ao vídeo do evento",
}: {
  src: string;
  poster?: string;
  className?: string;
  /** Rótulo do botão de play para leitores de tela. */
  label?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-verde-profundo ${className}`}>
      {/* O raio vai também no <video> e no botão: o Safari não recorta
          mídia pelo overflow do elemento pai. */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        preload="metadata"
        className="h-full w-full rounded-2xl object-cover"
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          onClick={play}
          aria-label={label}
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-verde-serra/20 transition-colors hover:bg-verde-serra/10"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-off-white/95 text-verde-serra shadow-[0_2px_20px_rgba(0,0,0,0.35)] transition-transform group-hover:scale-105">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
