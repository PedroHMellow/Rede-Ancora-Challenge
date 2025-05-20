import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, name, image, price, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
      <div className="aspect-square relative overflow-hidden rounded-lg mb-6">
        <img 
          src={`/img/${image}`} 
          alt={name}
          className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h2 className="text-xl font-bold mb-3 text-gray-800">{name}</h2>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <p className="text-ancora-blue text-2xl font-bold mb-6">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price)}
      </p>
      <Link 
        to={`/detalhes/${id}`}
        className="block w-full bg-ancora-red text-white text-center px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300 font-semibold"
      >
        Ver Detalhes
      </Link>
    </div>
  )
}