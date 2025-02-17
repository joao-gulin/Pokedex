export default function Card(props) {
  return (
    <>
      <h1>{props.name}</h1>

      <img src={props.imageUrl} alt="pokemon image" />
    </>
  )
}
