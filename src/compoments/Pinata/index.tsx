type PinataProps = {
  name?: string;
};

export default function Pinata({ name }: PinataProps) {
  return (
    <div className="grid gap-2 text-left">
      <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#ff7eb3]">
        Hora da festa
      </p>
      <h2 className="font-['Playfair_Display','Times_New_Roman',serif] text-[clamp(2rem,3.6vw,2.6rem)] text-[#fbe2ff]">
        🎉 Feliz aniversário{name ? `, ${name}` : "!"}
      </h2>
      <p className="text-[1.05rem] leading-[1.7] text-[#d5dcff]">
        Estoura a pinhata e espalha a alegria! Obrigado por partilhar o teu
        dia conosco — vamos celebrar em grande.
      </p>
    </div>
  );
}
