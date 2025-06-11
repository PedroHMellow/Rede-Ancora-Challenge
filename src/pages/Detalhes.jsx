import React from 'react'
import { useParams, Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: "Pneu Aro 15",
    image: "Pneu.png",
    price: 299.90,
    description: "Pneu de alta performance para veículos de passeio. Desenvolvido com tecnologia avançada para proporcionar maior durabilidade, aderência e conforto. Ideal para uso urbano e rodoviário, oferece excelente resistência ao desgaste e performance em diferentes condições climáticas."
  },
  {
    id: 2,
    name: "Jogo de Velas de Ignição Bosch",
    image: "Bosch Jogo Velas de Ignição.png",
    price: 189.90,
    description: "Kit com 4 velas de ignição originais Bosch. Fabricadas com materiais de alta qualidade, garantem ignição perfeita e maior eficiência do motor. Compatível com diversos modelos de veículos, proporcionam economia de combustível e redução de emissões."
  },
  {
    id: 3,
    name: "Kit Correia Dentada",
    image: "Kit Correia Dentada.png",
    price: 249.90,
    description: "Kit completo de correia dentada com tensionador. Essencial para o funcionamento sincronizado do motor, este kit garante a perfeita sincronia entre virabrequim e comando de válvulas. Inclui todos os componentes necessários para uma instalação completa e segura."
  },
  {
    id: 4,
    name: "Bomba de Combustível",
    image: "Bomba Combustível.png",
    price: 399.90,
    description: "Bomba de combustível eletrônica completa. Responsável por fornecer combustível sob pressão adequada para o sistema de injeção. Fabricada com materiais resistentes e tecnologia de ponta, garante funcionamento confiável e longa durabilidade."
  },
  {
    id: 5,
    name: "Radiador de Resfriamento",
    image: "RADIADOR DE RESFRIAMENTO.png",
    price: 599.90,
    description: "Radiador de alta performance com garantia. Projetado para manter a temperatura ideal do motor em todas as condições de uso. Construído com materiais de alta qualidade, oferece excelente dissipação de calor e resistência à corrosão."
  },
  {
    id: 6,
    name: "Kit Embreagem C3",
    image: "Kit Embreagem C3.png",
    price: 789.90,
    description: "Kit completo de embreagem para Citroën C3. Inclui disco, platô e rolamento, todos fabricados com especificações originais. Garante troca de marchas suave e durabilidade superior, proporcionando dirigibilidade confortável e segura."
  }
]

export default function Detalhes() {
  const { id } = useParams()
  
  const product = products.find(p => p.id === parseInt(id)) || products[0]

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        {/* Imagem do Produto */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <img 
            src={`/img/${product.image}`}
            alt={product.name}
            className="w-full h-64 sm:h-80 lg:h-96 object-contain rounded-lg mb-4"
          />
        </div>

        {/* Informações do Produto */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-ancora-blue mb-2">{product.name}</h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">{product.description}</p>
          </div>
          
          <div className="text-2xl sm:text-3xl font-bold text-ancora-blue">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(product.price)}
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <Link 
              to={`/compra/${id}`}
              className="block w-full bg-ancora-red text-white text-center px-6 py-3 rounded-lg hover:bg-opacity-90 font-semibold transition-colors text-sm sm:text-base"
            >
              Comprar Agora
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}