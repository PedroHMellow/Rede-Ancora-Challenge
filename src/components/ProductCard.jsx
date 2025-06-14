import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, name, image, price, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
      <div className="aspect-square relative overflow-hidden rounded-lg mb-4 sm:mb-6">
        <img 
          src={`/img/${image}`} 
          alt={name}
          className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">{name}</h2>
      <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">{description}</p>
      <p className="text-ancora-blue text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price)}
      </p>
      <Link 
        to={`/detalhes/${id}`}
        className="block w-full bg-ancora-red text-white text-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300 font-semibold text-sm sm:text-base"
      >
        Ver Detalhes
      </Link>
    </div>
  )
}