import { useState } from 'react'
import './App.css'
import MainPage from './routes/Main'
import PokemonDetails from './routes/PokemonDetails'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/details" element={<PokemonDetails />}></Route>
      </Routes>
    </Router>
  )
}

export default App
