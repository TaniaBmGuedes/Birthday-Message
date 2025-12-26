type PinataImageProps = {
  src: string;
  alt: string;
};

export function PinataImage({ src, alt }: PinataImageProps) {
  return (
    <div className="relative flex w-full justify-center">
      <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,126,179,0.25),rgba(96,199,236,0.1),transparent_60%)] blur-3xl opacity-80" />
      <img
        src={src}
        alt={alt}
        className="w-full max-w-90 max-h-105 rounded-3xl object-contain shadow-[0_24px_70px_rgba(0,0,0,0.45)] mix-blend-screen"
      />
    </div>
  );
}
