export default function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <h1>{props.name}</h1>

        <img src={props.imageUrl} alt="pokemon image" />

      </div>
    </div>
  )
}
