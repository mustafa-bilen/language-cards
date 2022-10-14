import { useState } from "react";
import "./Card.css";

const Card = ({ name, img, options }) => {
  const [card, setCard] = useState(true);

  return (
    <main>
      <div onClick={() => setCard(!card)}>
        {card ? (
          <div className="card">
            <img src={img} alt={name} />
            <h4k>{name}</h4k>
          </div>
        ) : (
          <p>
            {options.map((e) => {
              return (
                <ul>
                  <li>{e}</li>
                </ul>
              );
            })}
          </p>
        )}
      </div>
    </main>
  );
};

export default Card;
