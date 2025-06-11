import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero-section flex items-center justify-center pt-20 md:pt-24">
        <div className="hero-overlay"></div>
        <div className="relative z-10 text-center text-white px-4 md:px-6">
          {/* Logo oficial do Forró */}
          <div className="floating mb-8">
            <Image 
              src="/images/logo_oficial_forro_hero.jpeg" 
              alt="Logo Forró de Fátima" 
              width={300}
              height={300}
              className="h-32 md:h-48 w-auto mx-auto rounded-lg shadow-2xl pulse-glow"
            />
          </div>
          
          {/* Título principal */}
          <h1 className="title-font text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-yellow-300 drop-shadow-lg">
            FORRÓ DE FÁTIMA
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-8 text-red-400">
            PROPOSTA DE PATROCÍNIO 2025
          </h2>
          
          {/* Informações do evento */}
          <div className="bg-white bg-opacity-95 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
              <div className="text-center">
                <i className="fas fa-calendar-alt text-4xl text-red-600 mb-3"></i>
                <h3 className="text-xl font-bold">12 DE JULHO</h3>
                <p className="text-gray-600">2025</p>
              </div>
              <div className="text-center">
                <i className="fas fa-map-marker-alt text-4xl text-red-600 mb-3"></i>
                <h3 className="text-xl font-bold">ZILA'S CERIMONIAL</h3>
                <p className="text-gray-600">Bairro dos Capuchinhos</p>
              </div>
              <div className="text-center">
                <i className="fas fa-users text-4xl text-red-600 mb-3"></i>
                <h3 className="text-xl font-bold">ATÉ 3.000</h3>
                <p className="text-gray-600">Pessoas</p>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-4">
              <p className="text-white font-bold text-lg">
                <i className="fas fa-handshake mr-2"></i>
                SEJA NOSSO PARCEIRO NESTA FESTA INESQUECÍVEL!
              </p>
            </div>
          </div>
          
          {/* Botão CTA */}
          <div className="mt-8">
            <Link href="#patrocinio" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              <i className="fas fa-star mr-2"></i>
              SEJA NOSSO PATROCINADOR
            </Link>
          </div>
        </div>
      </section>
      
      {/* Nossa Festa Section */}
      <section id="evento" className="section-bg py-20">
        <div className="section-overlay"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="title-font text-5xl font-bold text-yellow-300 mb-4">NOSSA FESTA</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-95 rounded-2xl p-8 shadow-2xl card-hover">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    <i className="fas fa-heart text-red-600 mr-3"></i>
                    Uma Tradição que Transforma Vidas
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    O <strong className="text-red-600">Forró de Fátima</strong> é mais que um evento musical - é uma 
                    celebração da cultura nordestina que une famílias e fortalece nossa comunidade.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Há anos, nossa festa se tornou referência em <strong className="text-blue-600">responsabilidade social</strong>, 
                    arrecadando recursos para obras assistenciais que beneficiam mais de 
                    <strong className="text-green-600">200 famílias</strong> em situação de vulnerabilidade.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Cada ingresso vendido, cada patrocínio recebido se transforma em esperança, 
                    alimentação e dignidade para quem mais precisa.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl p-6 text-white">
                    <i className="fas fa-hands-helping text-6xl mb-4"></i>
                    <h4 className="text-2xl font-bold mb-2">IMPACTO SOCIAL</h4>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <div className="text-3xl font-bold">200+</div>
                        <div className="text-sm">Famílias Beneficiadas</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">100%</div>
                        <div className="text-sm">Recursos Aplicados</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Atrações Musicais */}
      <section id="atracoes" className="section-bg py-20">
        <div className="section-overlay"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="title-font text-5xl font-bold text-yellow-300 mb-4">ATRAÇÕES MUSICAIS</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-white text-xl">4 GRANDES ATRAÇÕES DE FORRÓ</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            {/* Forró Pé de Moita */}
            <div className="artist-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="bg-red-600 text-white rounded-full px-3 py-1 text-sm font-bold">
                    <i className="far fa-clock mr-1"></i> 20:00 HORAS
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image 
                      src="/images/pe_de_moita.jpeg" 
                      alt="Forró Pé de Moita" 
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">FORRÓ PÉ DE MOITA</h3>
                    <p className="text-yellow-300">Primeira Atração</p>
                  </div>
                </div>
                <p className="text-gray-200 mt-4">
                  Forró autêntico com muito swing e energia para abrir a noite com o pé direito!
                </p>
              </div>
            </div>
            
            {/* Banda Pau na Mulera */}
            <div className="artist-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 text-white rounded-full px-3 py-1 text-sm font-bold">
                    <i className="fas fa-star mr-1"></i> ATRAÇÃO PRINCIPAL
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image 
                      src="/images/banda_pau_na_mulera.jpeg" 
                      alt="Banda Pau na Mulera" 
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">BANDA PAU NA MULERA</h3>
                    <p className="text-yellow-300">Segunda Atração</p>
                  </div>
                </div>
                <p className="text-gray-200 mt-4">
                  Banda que promete agitar a pista com os maiores sucessos do forró tradicional!
                </p>
              </div>
            </div>
            
            {/* Murilo Matos */}
            <div className="artist-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-bold">
                    <i className="fas fa-award mr-1"></i> ATRAÇÃO ESPECIAL
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image 
                      src="/images/murilo_matos.jpeg" 
                      alt="Murilo Matos" 
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">MURILO MATOS</h3>
                    <p className="text-yellow-300">Terceira Atração</p>
                  </div>
                </div>
                <p className="text-gray-200 mt-4">
                  Jovem talento do forró com repertório moderno e tradicional que conquista todas as idades!
                </p>
              </div>
            </div>
            
            {/* Jarbas O Original */}
            <div className="artist-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-600 text-white rounded-full px-3 py-1 text-sm font-bold">
                    <i className="fas fa-crown mr-1"></i> GRANDE FINAL
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image 
                      src="/images/jarbas_original.jpeg" 
                      alt="Jarbas O Original" 
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">JARBAS O ORIGINAL</h3>
                    <p className="text-yellow-300">Quarta Atração</p>
                  </div>
                </div>
                <p className="text-gray-200 mt-4">
                  O mestre do forró que encerra a noite com chave de ouro e muito carisma!
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-400 rounded-xl p-4 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold">
              <i className="fas fa-music mr-2"></i> 8 HORAS DE FORRÓ ININTERRUPTO! <i className="fas fa-music ml-2"></i>
            </h3>
          </div>
        </div>
      </section>
      
      {/* Patrocínio Section */}
      <section id="patrocinio" className="section-bg py-20">
        <div className="section-overlay"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="title-font text-5xl font-bold text-yellow-300 mb-4">SEJA NOSSO PATROCINADOR</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-white text-xl">Escolha a cota que melhor se adequa ao seu investimento</p>
          </div>
          
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cota Bronze */}
              <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-8 text-white card-hover">
                <div className="text-center mb-6">
                  <i className="fas fa-medal text-6xl text-orange-300 mb-4"></i>
                  <h3 className="text-3xl font-bold">BRONZE</h3>
                  <div className="text-4xl font-bold mt-2">R$ 800</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    1 Mesa (4 ingressos)
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    Divulgação da Marca por locução durante o evento
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    Mídia em Redes Sociais
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    Marca no Cardápio
                  </li>
                </ul>
              </div>
              
              {/* Cota Prata */}
              <div className="bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl p-8 text-white card-hover transform scale-105">
                <div className="text-center mb-6">
                  <i className="fas fa-medal text-6xl text-gray-200 mb-4"></i>
                  <h3 className="text-3xl font-bold">PRATA</h3>
                  <div className="text-4xl font-bold mt-2">R$ 1.500</div>
                  <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold mt-2">
                    MAIS POPULAR
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    2 Mesas (8 ingressos)
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    Divulgação da Marca por locução durante o evento
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    Mídia em Redes Sociais
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    Marca em Mídia Offline - Cardápios | Banners
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    Mídia no espaço interno do evento, sem stand
                  </li>
                </ul>
              </div>
              
              {/* Cota Ouro */}
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-2xl p-8 text-white card-hover">
                <div className="text-center mb-6">
                  <i className="fas fa-crown text-6xl text-yellow-200 mb-4"></i>
                  <h3 className="text-3xl font-bold">OURO</h3>
                  <div className="text-4xl font-bold mt-2">R$ 2.000</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    3 Mesas (12 ingressos)
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    Divulgação da Marca por locução durante o evento
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    Mídia em Redes Sociais
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    Marca em Mídia Offline - Cartazes | Panfletos | Cardápios | Banners
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-3"></i>
                    Mídia no espaço interno do evento, com stand exclusivo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 title-font">Forró de Fátima 2025</h3>
              <p className="text-gray-300">
                Uma festa que une tradição, cultura e responsabilidade social em prol de nossa comunidade.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <p><i className="fas fa-phone mr-2"></i> (71) 99182-9108</p>
                <p><i className="fab fa-instagram mr-2"></i> @paroquia_nsf_caseb</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Localização</h4>
              <p className="text-gray-300">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Zila's Cerimonial<br />
                Bairro dos Capuchinhos<br />
                Feira de Santana - BA
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            {/* Logo da Paróquia */}
            <div className="mb-6">
              <Image 
                src="/images/logo_paroquia_final.jpeg" 
                alt="Paróquia Nossa Senhora de Fátima" 
                width={200}
                height={100}
                className="h-20 w-auto mx-auto"
              />
            </div>
            <p>&copy; 2025 Paróquia Nossa Senhora de Fátima. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

