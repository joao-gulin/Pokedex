import "../styles/Navbar.css"
import PokemonLogo from "../assets/5.svg"

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={PokemonLogo} alt="PokemonLogo" />
        <span>Pokedex</span>
      </nav>
    </header>
  )
}
