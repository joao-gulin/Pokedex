import './App.css'
import MainPage from './routes/Main'
import PokemonDetails from './routes/PokemonDetails'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PokemonProvider } from "./contexts/PokemonContext"

function App() {
  return (
    <PokemonProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/pokemon/:name" element={<PokemonDetails />}></Route>
        </Routes>
      </Router>
    </PokemonProvider>
  )
}

export default App
