import React from 'react'

export default function Sobre() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-ancora-blue mb-6 sm:mb-8 text-center md:text-left">
        Sobre a Rede Âncora
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="prose max-w-none">
          <p className="text-base sm:text-lg mb-4 text-gray-700">
            A Rede Âncora é líder no mercado de peças automotivas, oferecendo produtos
            de alta qualidade e soluções inovadoras para nossos parceiros.
          </p>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 my-6 sm:my-8">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-ancora-blue mb-3 sm:mb-4">
                Nossa Missão
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Fornecer peças automotivas de qualidade superior e suporte técnico
                excepcional para nossos parceiros mecânicos.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-ancora-blue mb-3 sm:mb-4">
                Nossa Visão
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Ser referência em inovação e qualidade no mercado de peças
                automotivas, através de tecnologia de ponta e excelência no
                atendimento.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ancora-blue mb-3 sm:mb-4">
              Nossos Valores
            </h2>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li>• <strong>Qualidade:</strong> Produtos certificados e testados</li>
              <li>• <strong>Inovação:</strong> Tecnologia 3D para melhor experiência</li>
              <li>• <strong>Confiabilidade:</strong> Parceria sólida com nossos clientes</li>
              <li>• <strong>Suporte:</strong> Atendimento técnico especializado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}