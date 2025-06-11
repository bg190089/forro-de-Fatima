import './globals.css';

export const metadata = {
  title: 'Forró de Fátima 2025 - Proposta de Patrocínio',
  description: 'Evento beneficente da Paróquia Nossa Senhora de Fátima',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One:wght@400&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      </head>
      <body>
        {/* Navbar */}
        <nav className="navbar fixed top-0 w-full z-50" id="navbar">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-white font-bold text-xl title-font">Forró de Fátima 2025</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#home" className="text-white hover:text-yellow-300 transition-colors">Início</a>
                <a href="#evento" className="text-white hover:text-yellow-300 transition-colors">O Evento</a>
                <a href="#local" className="text-white hover:text-yellow-300 transition-colors">Local</a>
                <a href="#atracoes" className="text-white hover:text-yellow-300 transition-colors">Atrações</a>
                <a href="#digital" className="text-white hover:text-yellow-300 transition-colors">Alcance</a>
                <a href="#patrocinio" className="text-white hover:text-yellow-300 transition-colors">Patrocínio</a>
              </div>
              <div className="md:hidden">
                <button className="text-white">
                  <i className="fas fa-bars text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        {children}
        
        <script dangerouslySetInnerHTML={{
          __html: `
            function toggleMenu() {
              // Implementar toggle do menu mobile
            }
            
            // Efeito de scroll na navbar
            window.addEventListener('scroll', function() {
              const navbar = document.getElementById('navbar');
              if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
              } else {
                navbar.classList.remove('scrolled');
              }
            });
          `
        }} />
      </body>
    </html>
  )
}

