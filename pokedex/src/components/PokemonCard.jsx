import { useState } from "react";
import "../styles/PokemonCard.css";
import pokeball from "../assets/pokeball.png";
export function PokemonCard({
  id,
  name,
  image,
  type,
  height,
  weight,
  stats,
  statsName,
}) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="container">
      {isShow && (
        <div className="show">
          <div className="stat-container-title">
            <p>{name}</p>
            <img src={image} alt={name} className="img-title" />
          </div>
          <img src={image} alt={name} />

          <div style={{ display: "flex", width: "100%" }}>
            <div
              className="stats-left"
              style={{ background: "#ffffff", textAlign: "center" }}
            >
              <p>Type</p>
              <p>Height</p>
              <p>Weight</p>
            </div>
            <div className="stats-right" style={{ background: "#ffffff" }}>
              <p>{type}</p>
              <p>{height} cm</p>
              <p>{weight} lbs</p>
            </div>
            <div className="base-stats">
              <div>
                {statsName.map((stats) => (
                  <p className="stats"> {stats} </p>
                ))}
              </div>
              <div>
                {stats.map((stats) => (
                  <p className="stats">{stats}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="right"
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        <img
          src={image}
          alt={name}
          style={{ maxHeight: "50px", marginRight: "10px", width: "50px" }}
        />
        <p style={{ width: "270px" }}>No. {id}</p>
        <p>{name}</p>
        <img
          src={pokeball}
          alt="Pokeball"
          style={{ marginLeft: "auto", width: "40px" }}
        />
      </div>
    </div>
  );
}
