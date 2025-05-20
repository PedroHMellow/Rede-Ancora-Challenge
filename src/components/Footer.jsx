import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Rede Âncora</h3>
            <p className="text-gray-300">
              Sua parceira em peças automotivas de qualidade.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-300">
              Email: contato@redeancora.com.br<br />
              Tel: (11) 1234-5678
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-ancora-red">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-ancora-red">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-ancora-red">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 Rede Âncora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}