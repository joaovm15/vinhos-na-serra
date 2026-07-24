import Image from "next/image";

export default function PhotoDivider({
  src,
  alt,
  height = "h-56 md:h-72",
}: {
  src: string;
  alt: string;
  height?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${height}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover grayscale"
      />
      <div className="absolute inset-0 bg-verde-serra/35" />
    </div>
  );
}
