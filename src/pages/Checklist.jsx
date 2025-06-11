import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

const commonDefects = [
  { id: 1, name: 'Desgaste excessivo', price: 25.00 },
  { id: 2, name: 'Rachadura', price: 35.00 },
  { id: 3, name: 'Oxidação', price: 15.00 },
  { id: 4, name: 'Vazamento', price: 45.00 },
  { id: 5, name: 'Ruído anormal', price: 30.00 },
  { id: 6, name: 'Vibração', price: 20.00 },
  { id: 7, name: 'Superaquecimento', price: 40.00 },
  { id: 8, name: 'Perda de pressão', price: 25.00 }
]

export default function Checklist() {
  const [selectedDefects, setSelectedDefects] = useState([])
  const [customDefect, setCustomDefect] = useState('')
  const [customPrice, setCustomPrice] = useState('')
  const { addToCart } = useCart()

  const handleDefectToggle = (defect) => {
    setSelectedDefects(prev => {
      const exists = prev.find(d => d.id === defect.id)
      if (exists) {
        return prev.filter(d => d.id !== defect.id)
      } else {
        return [...prev, defect]
      }
    })
  }

  const handleAddCustomDefect = () => {
    if (customDefect.trim() && customPrice) {
      const newDefect = {
        id: Date.now(),
        name: customDefect.trim(),
        price: parseFloat(customPrice)
      }
      setSelectedDefects(prev => [...prev, newDefect])
      setCustomDefect('')
      setCustomPrice('')
    }
  }

  const totalPrice = selectedDefects.reduce((sum, defect) => sum + defect.price, 0)

  const handleAddAllToCart = () => {
    if (selectedDefects.length > 0) {
      addToCart(selectedDefects, totalPrice, 'checklist', 'Checklist de Defeitos')
      setSelectedDefects([])
      alert(`Checklist adicionada ao carrinho! Total: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(totalPrice)}`)
    }
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-ancora-blue mb-6 sm:mb-8 text-center">
        Checklist de Peças com Defeito
      </h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-ancora-blue mb-4 sm:mb-6">
            Selecione os Defeitos Encontrados
          </h3>
          
          <div className="space-y-3 mb-6">
            {commonDefects.map((defect) => (
              <label key={defect.id} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-50 rounded">
                <input
                  type="checkbox"
                  checked={selectedDefects.some(d => d.id === defect.id)}
                  onChange={() => handleDefectToggle(defect)}
                  className="w-4 h-4 text-ancora-red border-gray-300 rounded focus:ring-ancora-red"
                />
                <span className="flex-1 text-gray-700 text-sm sm:text-base">{defect.name}</span>
                <span className="text-ancora-blue font-semibold text-sm sm:text-base">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(defect.price)}
                </span>
              </label>
            ))}
          </div>

          <div className="border-t pt-4 mb-6">
            <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Adicionar Defeito Personalizado</h4>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
              <input
                type="text"
                placeholder="Descrição do defeito"
                value={customDefect}
                onChange={(e) => setCustomDefect(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ancora-blue text-sm"
              />
              <input
                type="number"
                placeholder="Preço"
                value={customPrice}
                onChange={(e) => setCustomPrice(e.target.value)}
                className="w-full sm:w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ancora-blue text-sm"
              />
              <button
                onClick={handleAddCustomDefect}
                className="w-full sm:w-auto px-4 py-2 bg-ancora-blue text-white rounded-lg hover:bg-opacity-90 text-sm"
              >
                Adicionar
              </button>
            </div>
          </div>

          {selectedDefects.length > 0 && (
            <div className="border-t pt-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  Total ({selectedDefects.length} itens):
                </span>
                <span className="text-lg sm:text-xl font-bold text-ancora-blue">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(totalPrice)}
                </span>
              </div>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-700 mb-2 text-sm">Defeitos selecionados:</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedDefects.map((defect) => (
                    <span key={defect.id} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {defect.name} - {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(defect.price)}
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                onClick={handleAddAllToCart}
                className="w-full bg-ancora-red text-white px-6 py-3 rounded-lg hover:bg-opacity-90 font-semibold text-sm sm:text-base"
              >
                Adicionar Checklist ao Carrinho
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}