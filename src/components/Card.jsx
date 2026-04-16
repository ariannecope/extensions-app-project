//This component:shows a single card and calls functions passed from Home

import Toggle from "./Toggle";

function Card({ card, onToggle, onDelete }) {
  return (
    <div className="card">

      <div className="card-top">
        <img src={card.logo} alt={card.name} />

        <div className="card-text">
          <h3>{card.name}</h3>
          <p>{card.description}</p>
        </div>
      </div>

      <div className="card-bottom">
        <button onClick={() => onDelete(card.id)}>
          Remove
        </button>

        <Toggle
          isActive={card.isActive}
          id={card.id}
          onToggle={onToggle}
        />
      </div>

    </div>
  );
}

export default Card;