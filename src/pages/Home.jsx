import React from 'react'
import ProductCard from '../components/ProductCard'

const products = [
  {
    id: 1,
    name: "Pneu Aro 15",
    image: "Pneu.png",
    price: 299.90,
    description: "Pneu de alta performance para veículos de passeio"
  },
  {
    id: 2,
    name: "Jogo de Velas de Ignição Bosch",
    image: "Bosch Jogo Velas de Ignição.png",
    price: 189.90,
    description: "Kit com 4 velas de ignição originais Bosch"
  },
  {
    id: 3,
    name: "Kit Correia Dentada",
    image: "Kit Correia Dentada.png",
    price: 249.90,
    description: "Kit completo de correia dentada com tensionador"
  },
  {
    id: 4,
    name: "Bomba de Combustível",
    image: "Bomba Combustível.png",
    price: 399.90,
    description: "Bomba de combustível eletrônica completa"
  },
  {
    id: 5,
    name: "Radiador de Resfriamento",
    image: "RADIADOR DE RESFRIAMENTO.png",
    price: 599.90,
    description: "Radiador de alta performance com garantia"
  },
  {
    id: 6,
    name: "Kit Embreagem C3",
    image: "Kit Embreagem C3.png",
    price: 789.90,
    description: "Kit completo de embreagem para Citroën C3"
  }
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ancora-blue mb-6 sm:mb-8 text-center md:text-left">
        Catálogo de Peças Automotivas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}