import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/public/img/REDE-ANCORA.png" alt="Rede Âncora" className="h-16" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-black hover:text-[#bb1e32] text-lg font-medium">Loja</Link>
            <Link to="/sobre" className="text-black hover:text-[#bb1e32] text-lg font-medium">Sobre</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar peças..."
                className="w-64 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-ancora-blue text-sm"
              />
            </div>
            <button className="p-2 text-black hover:text-[#bb1e32] text-2xl">
              <span className="sr-only">Carrinho</span>
              🛒
            </button>
            <button className="p-2 text-black hover:text-[#bb1e32] text-2xl">
              <span className="sr-only">Conta</span>
              👤
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-[#bb1e32] p-2"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              <Link
                to="/"
                className="block px-3 py-2 text-black hover:text-[#bb1e32] text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Loja
              </Link>
              <Link
                to="/sobre"
                className="block px-3 py-2 text-black hover:text-[#bb1e32] text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <div className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Buscar peças..."
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-ancora-blue text-sm"
                />
              </div>
              <div className="flex px-3 py-2 space-x-4">
                <button className="text-black hover:text-[#bb1e32] text-2xl">
                  <span className="sr-only">Carrinho</span>
                  🛒
                </button>
                <button className="text-black hover:text-[#bb1e32] text-2xl">
                  <span className="sr-only">Conta</span>
                  👤
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}