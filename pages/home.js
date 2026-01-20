import React, { useState } from 'react';

// Componente de Card Reutilizável para os Produtos Filhos
const ProductCard = ({ title, description, color, link }) => (
  <div className={`p-6 rounded-xl border border-gray-800 bg-opacity-10 bg-white hover:border-${color} transition-all duration-300 group`}>
    <h3 className={`text-2xl font-bold mb-2 group-hover:text-${color}`}>{title}</h3>
    <p className="text-gray-400 text-sm mb-4">{description}</p>
    <a href={link} className={`text-xs uppercase tracking-widest font-bold text-${color}`}>Saiba mais →</a>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-datryx-dark text-white font-sans selection:bg-datryx-cyan selection:text-black">
      
      {/* Navegação Corporativa */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter">
          DATRYX<span className="text-datryx-cyan">.</span>
        </div>
        <div className="space-x-8 text-sm font-medium text-gray-400">
          <a href="#solucoes" className="hover:text-datryx-cyan transition">Soluções</a>
          <a href="#ecossistema" className="hover:text-datryx-cyan transition">Ecossistema</a>
          <button className="border border-datryx-cyan px-6 py-2 rounded-full text-datryx-cyan hover:bg-datryx-cyan hover:text-black transition">
            Contato
          </button>
        </div>
      </nav>

      {/* Hero Section: Futurismo e Impacto */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 text-center">
        <div className="relative inline-block">
          {/* Brilho de fundo simulando o ícone da logo */}
          <div className="absolute inset-0 bg-datryx-cyan blur-[100px] opacity-20 rounded-full"></div>
          
          <h1 className="relative text-6xl md:text-8xl font-black mb-6 tracking-tight">
            Transformando dados em <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-datryx-cyan">
              inteligência viva.
            </span>
          </h1>
        </div>
        
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
          Arquitetura digital de alta performance para empresas que buscam 
          clareza, conexão e decisões baseadas em algoritmos.
        </p>
      </main>

      {/* Seção de Ecossistema: SCRIPTUM e NEXUM */}
      <section id="ecossistema" className="max-w-7xl mx-auto px-8 py-20 border-t border-gray-900">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Base: SCRIPTUM */}
          <ProductCard 
            title="SCRIPTUM" 
            description="Gestão documental e digitalização inteligente. Organize o caos e recupere sua memória institucional."
            color="scriptum-green"
            link="/scriptum"
          />

          {/* Core: NEXUM */}
          <ProductCard 
            title="NEXUM" 
            description="O elo de ligação entre seus dados. Gerenciamento de fluxo e integração total de sistemas."
            color="nexum-purple" 
            link="/nexum"
          />

          {/* Master: DATRYX SYSTEMS */}
          <ProductCard 
            title="SYSTEMS" 
            description="Desenvolvimento de software sob medida e B.I. avançado alimentado por seu ecossistema de dados."
            color="datryx-cyan"
            link="/systems"
          />

        </div>
      </section>

      {/* Footer Profissional */}
      <footer className="p-12 text-center text-gray-600 text-xs border-t border-gray-900">
        <p>© 2026 DATRYX | Do arquivo ao algoritmo.</p>
      </footer>
    </div>
  );
};

export default HomePage;