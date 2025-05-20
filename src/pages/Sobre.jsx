import React from 'react'

export default function Sobre() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-ancora-blue mb-8">
        Sobre a Rede Âncora
      </h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          A Rede Âncora é líder no mercado de peças automotivas, oferecendo produtos
          de alta qualidade e soluções inovadoras para nossos parceiros.
        </p>
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div>
            <h2 className="text-2xl font-semibold text-ancora-blue mb-4">
              Nossa Missão
            </h2>
            <p className="text-gray-700">
              Fornecer peças automotivas de qualidade superior e suporte técnico
              excepcional para nossos parceiros mecânicos.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-ancora-blue mb-4">
              Nossa Visão
            </h2>
            <p className="text-gray-700">
              Ser referência em inovação e qualidade no mercado de peças
              automotivas, através de tecnologia de ponta e excelência no
              atendimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}