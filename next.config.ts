import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Os valores usados no código: 85 na galeria e nas fotos, 90 no restante.
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
