import "../styles/Navbar.css"
import PokemonLogo from "../assets/5.svg"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/")
  }

  return (
    <header>
      <nav>
        <img src={PokemonLogo} alt="PokemonLogo" />
        <span onClick={handleGoHome}>Pokedex</span>
      </nav>
    </header>
  )
}
