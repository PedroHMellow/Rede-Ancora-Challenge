import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useCart()

  const handleFinalizePurchase = () => {
    if (cartItems.length === 0) {
      alert('Carrinho vazio!')
      return
    }
    
    const total = getTotalPrice()
    const itemCount = getTotalItems()
    
    if (confirm(`Finalizar compra de ${itemCount} item(s) por ${new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(total)}?`)) {
      alert('Compra finalizada com sucesso!')
      clearCart()
      setShowCart(false)
    }
  }

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/img/REDE-ANCORA.png" alt="Rede Âncora" className="h-12 sm:h-16" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-black hover:text-[#bb1e32] text-lg font-medium">Loja</Link>
            <Link to="/sobre" className="text-black hover:text-[#bb1e32] text-lg font-medium">Sobre</Link>
            <Link to="/checklist" className="text-black hover:text-[#bb1e32] text-lg font-medium">Checklist</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar peças..."
                className="w-64 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-ancora-blue text-sm"
              />
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowCart(!showCart)}
                className="p-2 text-black hover:text-[#bb1e32] text-2xl relative"
              >
                <span className="sr-only">Carrinho</span>
                🛒
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-ancora-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              
              {/* Cart Dropdown */}
              {showCart && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border z-50">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-3">Carrinho ({getTotalItems()} itens)</h3>
                    {cartItems.length === 0 ? (
                      <p className="text-gray-500">Carrinho vazio</p>
                    ) : (
                      <>
                        <div className="max-h-80 overflow-y-auto space-y-4">
                          {cartItems.map((item) => (
                            <div key={item.id} className="border-b pb-3">
                              <div className="flex items-start space-x-3">
                                <img 
                                  src={`/img/${item.image}`} 
                                  alt={item.name}
                                  className="w-12 h-12 object-contain rounded"
                                />
                                <div className="flex-1">
                                  <p className="font-medium text-sm">{item.name}</p>
                                  {item.details && (
                                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.details}</p>
                                  )}
                                  <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center space-x-2">
                                      <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs hover:bg-gray-100"
                                      >
                                        -
                                      </button>
                                      <span className="text-sm font-medium">{item.quantity}</span>
                                      <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs hover:bg-gray-100"
                                      >
                                        +
                                      </button>
                                    </div>
                                    <div className="text-right">
                                      <p className="text-sm font-bold text-ancora-blue">
                                        {new Intl.NumberFormat('pt-BR', {
                                          style: 'currency',
                                          currency: 'BRL'
                                        }).format(item.price * item.quantity)}
                                      </p>
                                      <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700 text-xs"
                                      >
                                        Remover
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t space-y-3">
                          <div className="flex justify-between items-center font-bold">
                            <span>Total:</span>
                            <span className="text-ancora-blue text-lg">
                              {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                              }).format(getTotalPrice())}
                            </span>
                          </div>
                          <button
                            onClick={handleFinalizePurchase}
                            className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-semibold text-sm"
                          >
                            Finalizar Compra
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
            <button className="p-2 text-black hover:text-[#bb1e32] text-2xl">
              <span className="sr-only">Conta</span>
              👤
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="relative">
              <button 
                onClick={() => setShowCart(!showCart)}
                className="p-2 text-black hover:text-[#bb1e32] text-xl relative"
              >
                🛒
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-ancora-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
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
              <Link
                to="/checklist"
                className="block px-3 py-2 text-black hover:text-[#bb1e32] text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Checklist
              </Link>
              <div className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Buscar peças..."
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-ancora-blue text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* Mobile Cart Dropdown */}
        {showCart && (
          <div className="md:hidden absolute left-4 right-4 mt-2 bg-white rounded-lg shadow-lg border z-50">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3">Carrinho ({getTotalItems()} itens)</h3>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Carrinho vazio</p>
              ) : (
                <>
                  <div className="max-h-60 overflow-y-auto space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="border-b pb-2">
                        <div className="flex items-start space-x-2">
                          <img 
                            src={`/img/${item.image}`} 
                            alt={item.name}
                            className="w-10 h-10 object-contain rounded"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm">{item.name}</p>
                            <div className="flex items-center justify-between mt-1">
                              <div className="flex items-center space-x-1">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-xs"
                                >
                                  -
                                </button>
                                <span className="text-xs">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-xs"
                                >
                                  +
                                </button>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-bold text-ancora-blue">
                                  {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                  }).format(item.price * item.quantity)}
                                </p>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-red-500 hover:text-red-700 text-xs"
                                >
                                  ✕
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t space-y-2">
                    <div className="flex justify-between items-center font-bold">
                      <span>Total:</span>
                      <span className="text-ancora-blue">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(getTotalPrice())}
                      </span>
                    </div>
                    <button
                      onClick={handleFinalizePurchase}
                      className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-semibold text-sm"
                    >
                      Finalizar Compra
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}