"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [url]);

  return (
    <blockquote
      className="instagram-media mx-auto"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        margin: "0 auto",
        maxWidth: "540px",
        minWidth: "326px",
        width: "99.375%",
      }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        Ver esta publicação no Instagram
      </a>
    </blockquote>
  );
}
