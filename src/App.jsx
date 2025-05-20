import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Compra from './pages/Compra'
import Detalhes from './pages/Detalhes'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/compra/:id" element={<Compra />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App