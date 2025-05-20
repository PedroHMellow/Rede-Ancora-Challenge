import React from 'react'
import { useParams } from 'react-router-dom'

export default function Compra() {
  const { id } = useParams()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-200 aspect-square rounded-lg">
          {/* Placeholder para o visualizador 3D */}
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-600">Visualizador 3D</p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-ancora-blue mb-4">
            Detalhes da Peça
          </h1>
          <p className="text-gray-600 mb-4">ID da peça: {id}</p>
          <div className="space-y-4">
            <button className="w-full bg-ancora-red text-white px-6 py-3 rounded-lg hover:bg-opacity-90">
              Adicionar ao Carrinho
            </button>
            <button className="w-full border-2 border-ancora-blue text-ancora-blue px-6 py-3 rounded-lg hover:bg-ancora-blue hover:text-white">
              Favoritar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}