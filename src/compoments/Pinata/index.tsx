import { Button } from "@heroui/button";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import Cake from "../Cake";
import noPinataGif from "../../assets/gif/noPinata.gif";
import pinataGif from "../../assets/gif/pinata.gif";
import { randomOneToTen } from "../../utils/generate-random";
import { PinataImage } from "./PinataImage";

type PinataProps = {
  name?: string;
};

export default function Pinata({ name }: PinataProps) {
  const [stars, setStars] = useState<
    { id: string; dx: number; dy: number; size: number }[]
  >([]);
  const [maxBeats] = useState(() => randomOneToTen());
  const [beatsNumber, setBeatNumber] = useState(0);
  const [showBrokenOverlay, setShowBrokenOverlay] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const overlayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isBroken = beatsNumber >= maxBeats;
  const currentSrc = isBroken ? noPinataGif : pinataGif;
  const currentAlt = isBroken
    ? "Pinhata partida"
    : "Animação de pinhata colorida";

  const handleBurst = () => {
    if (showCake) return;
    const burst = Array.from({ length: 12 }, (_, index) => ({
      id: `${Date.now()}-${index}`,
      dx: (Math.random() - 0.5) * 220,
      dy: (Math.random() - 0.4) * 160,
      size: 8 + Math.random() * 6,
    }));

    setStars(burst);
    setBeatNumber((prev) => {
      const next = prev + 1;
      if (next >= maxBeats && !showBrokenOverlay && !showCake) {
        setShowBrokenOverlay(true);
        if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
        overlayTimeoutRef.current = setTimeout(() => {
          setShowBrokenOverlay(false);
          setShowCake(true);
        }, 2500);
      }
      return next;
    });
    setTimeout(() => setStars([]), 900);
  };

  useEffect(() => {
    return () => {
      if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
    };
  }, []);

  const statusText = useMemo(
    () =>
      isBroken
        ? "A pinhata caiu! Hora de recolher os doces."
        : `Bate mais ${Math.max(maxBeats - beatsNumber, 0)}x para arrebentar.`,
    [beatsNumber, isBroken, maxBeats]
  );

  if (showCake) {
    return <Cake />;
  }

  return (
    <div className="relative grid h-full w-full gap-6 bg-black text-left sm:grid-cols-[1.05fr_1fr] sm:items-center sm:gap-10">
      {showBrokenOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <img
            src={noPinataGif}
            alt="Pinhata partida"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="relative flex flex-col items-start gap-4">
        <PinataImage src={currentSrc} alt={currentAlt} />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible">
          {stars.map((star) => (
            <span
              key={star.id}
              className="star-burst"
              style={
                {
                  "--dx": `${star.dx}px`,
                  "--dy": `${star.dy}px`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            className="rounded-full bg-linear-to-r from-[#ffc371] via-[#ff9ad5] to-[#ff7eb3] px-4 py-3 text-sm font-bold text-[#0c0f1c] shadow-[0_20px_50px_rgba(255,126,179,0.55)] transition duration-150 ease-in-out hover:-translate-y-0.5 active:translate-y-0  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7eb3]"
            radius="full"
            variant="shadow"
            color="secondary"
            onPress={handleBurst}
          >
            Clica para arrebentar a pinata
          </Button>
          <p className="text-sm text-[#d5dcff] opacity-80">{statusText}</p>
        </div>
      </div>

      <div className="grid gap-4 self-center rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ff9ad5]">
          Hora da festa
        </p>
        <h2 className="font-['Playfair_Display','Times_New_Roman',serif] text-[clamp(2.4rem,4vw,3.1rem)] leading-tight text-[#fbe2ff]">
          Feliz aniversário{" "}
          <span className="bg-linear-to-r from-[#ffc371] to-[#ff7eb3] bg-clip-text text-transparent">
            {name || ""}
          </span>
        </h2>
        <p className="text-[1.08rem] leading-[1.8] text-[#d5dcff]">
          Estoura a pinhata e{" "}
          <span className="text-[#60c7ec]">espalha a alegria!</span> Obrigado
          por partilhar o teu dia conosco — vamos celebrar em grande.
        </p>
      </div>
    </div>
  );
}
