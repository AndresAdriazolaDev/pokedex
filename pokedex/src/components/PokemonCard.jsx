import "../styles/PokemonCard.css";

export function PokemonCard({ id, name, image, type,height,weight,stats,statsName }) {
  return (
    <div className="container">
      <div className="show">
        <div className="stat-container-title">
          <p>{name}</p>
          <img src={image} alt={name} className="img-title" />
        </div>
      </div>
    </div>
  );
}
