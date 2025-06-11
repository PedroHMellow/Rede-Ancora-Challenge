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
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://www.facebook.com/RedeAncora/?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-ancora-red transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/redeancorabr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-ancora-red transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/redeancorabr/?originalSubdomain=br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-ancora-red transition-colors"
              >
                LinkedIn
              </a>
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