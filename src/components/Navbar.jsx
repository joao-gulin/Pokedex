import "../styles/Navbar.css"
import PokemonLogo from "../assets/5.svg"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate();

  const goToHomePage = (
    navigate("/")
  )

  return (
    <header>
      <nav>
        <img src={PokemonLogo} alt="PokemonLogo" />
        <span onClick={goToHomePage}>Pokedex</span>
      </nav>
    </header>
  )
}
