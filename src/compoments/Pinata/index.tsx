type PinataProps = {
  name?: string;
};

export default function Pinata({ name }: PinataProps) {
  return (
    <div className="pinata">
      <p className="pinata-kicker">Hora da festa</p>
      <h2 className="pinata-title">
         Feliz aniversário{ name ? `, ${name}` : "!"}
      </h2>
      <p className="pinata-body">
        Estoura a pinhata e espalha a alegria! Obrigado por partilhar o teu
        dia conosco — vamos celebrar em grande.
      </p>
    </div>
  );
}
