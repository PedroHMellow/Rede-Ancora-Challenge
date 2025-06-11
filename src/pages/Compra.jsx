import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ThreeViewer from '../components/ThreeViewer'

const products = [
  {
    id: 1,
    name: "Pneu Aro 15",
    image: "Pneu.png",
    price: 299.90,
    description: "Pneu de alta performance para veículos de passeio. Desenvolvido com tecnologia avançada para proporcionar maior durabilidade, aderência e conforto.",
    model3d: '/3d/Pneu/scene.gltf'
  },
  {
    id: 2,
    name: "Jogo de Velas de Ignição Bosch",
    image: "Bosch Jogo Velas de Ignição.png",
    price: 189.90,
    description: "Kit com 4 velas de ignição originais Bosch. Fabricadas com materiais de alta qualidade, garantem ignição perfeita e maior eficiência do motor.",
    model3d: '/3d/Spark Plug/scene.gltf'
  },
  {
    id: 3,
    name: "Kit Correia Dentada",
    image: "Kit Correia Dentada.png",
    price: 249.90,
    description: "Kit completo de correia dentada com tensionador.",
    model3d: '/3d/Pneu/scene.gltf'
  },
  {
    id: 4,
    name: "Bomba de Combustível",
    image: "Bomba Combustível.png",
    price: 399.90,
    description: "Bomba de combustível eletrônica completa.",
    model3d: '/3d/Pneu/scene.gltf'
  },
  {
    id: 5,
    name: "Radiador de Resfriamento",
    image: "RADIADOR DE RESFRIAMENTO.png",
    price: 599.90,
    description: "Radiador de alta performance com garantia.",
    model3d: '/3d/Pneu/scene.gltf'
  },
  {
    id: 6,
    name: "Kit Embreagem C3",
    image: "Kit Embreagem C3.png",
    price: 789.90,
    description: "Kit completo de embreagem para Citroën C3.",
    model3d: '/3d/Pneu/scene.gltf'
  }
]

export default function Compra() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [showViewer, setShowViewer] = useState(false)
  const [productDetails, setProductDetails] = useState('')
  const [quantity, setQuantity] = useState(1)
  
  const product = products.find(p => p.id === parseInt(id)) || products[0]

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      details: productDetails,
      image: product.image
    }
    
    addToCart(cartItem)
    alert(`${product.name} adicionado ao carrinho!`)
  }

  const handleFinalizePurchase = () => {
    handleAddToCart()
    // Redirect to checkout or show checkout modal
    alert('Redirecionando para finalização da compra...')
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Visualizador 3D */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-ancora-blue mb-4">
            {showViewer ? 'Visualizador 3D' : 'Imagem do Produto'}
          </h2>
          
          {showViewer ? (
            <div>
              <ThreeViewer productId={id} modelPath={product.model3d} />
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Use o mouse para rotacionar, zoom e mover o modelo 3D
              </p>
            </div>
          ) : (
            <img 
              src={`/img/${product.image}`}
              alt={product.name}
              className="w-full h-64 sm:h-80 lg:h-96 object-contain rounded-lg"
            />
          )}
        </div>

        {/* Informações do Produto e Compra */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-ancora-blue mb-2">
              {product.name}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mb-4">{product.description}</p>
            
            <div className="text-2xl sm:text-3xl font-bold text-ancora-blue mb-6">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(product.price)}
            </div>
          </div>

          {/* Campo de Detalhes/Defeitos */}
          <div className="bg-gray-50 rounded-lg p-4">
            <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
              Detalhes adicionais ou defeitos encontrados:
            </label>
            <textarea
              id="details"
              value={productDetails}
              onChange={(e) => setProductDetails(e.target.value)}
              placeholder="Descreva detalhes específicos, defeitos encontrados ou observações sobre a peça..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ancora-blue resize-none"
              rows="4"
            />
          </div>

          {/* Quantidade */}
          <div className="flex items-center space-x-4">
            <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
              Quantidade:
            </label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                -
              </button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Botões de Ação */}
          <div className="space-y-3 sm:space-y-4">
            <button 
              onClick={handleFinalizePurchase}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold text-sm sm:text-base transition-colors"
            >
              Finalizar Compra
            </button>
            
            <button 
              onClick={handleAddToCart}
              className="w-full bg-ancora-red text-white px-6 py-3 rounded-lg hover:bg-opacity-90 font-semibold text-sm sm:text-base transition-colors"
            >
              Adicionar ao Carrinho
            </button>
            
            <button 
              onClick={() => setShowViewer(!showViewer)}
              className="w-full border-2 border-ancora-blue text-ancora-blue px-6 py-3 rounded-lg hover:bg-ancora-blue hover:text-white transition-colors font-semibold text-sm sm:text-base"
            >
              {showViewer ? 'Ver Imagem' : 'Visualizar em 3D'}
            </button>
          </div>

          {/* Especificações */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Especificações:</h3>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
              <li>• Produto original</li>
              <li>• Garantia de 12 meses</li>
              <li>• Entrega em todo o Brasil</li>
              <li>• Suporte técnico especializado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}