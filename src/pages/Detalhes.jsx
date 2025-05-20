import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Detalhes() {
  const { id } = useParams()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <img 
            src="/src/img/Pneu.png" 
            alt="Produto"
            className="w-full aspect-square object-contain rounded-lg mb-4"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-ancora-blue">Nome do Produto</h1>
          <p className="text-gray-600">Descrição detalhada do produto...</p>
          <div className="text-2xl font-bold text-ancora-blue">
            R$ 299,90
          </div>
          <div className="space-y-4">
            <Link 
              to={`/compra/${id}`}
              className="block w-full bg-ancora-red text-white text-center px-6 py-3 rounded-lg hover:bg-opacity-90"
            >
              Comprar
            </Link>
            <button className="w-full border-2 border-ancora-blue text-ancora-blue px-6 py-3 rounded-lg hover:bg-ancora-blue hover:text-white">
              Experiência 3D
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}