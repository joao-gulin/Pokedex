import "../styles/card.css"

export default function Card(props) {
  // Determine the CSS class based on the primary type
  const primaryTypeClass = `type-${props.types[0]}`;

  return (
    <div className="card">
      <p>{props.name}</p>
      <img src={props.imageUrl} alt="pokemon image" />
      <div className="types">
        {props.types.map((type, index) => (
          <span key={index} className={`type type-${type}`}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

