"use client";

import NavLink from './NavLink';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Esquerda */}
        <nav className="flex space-x-6"> {/* Aumentando o espaçamento para 6 */}
          <NavLink href="/">Home</NavLink>
          <NavLink href="/repertorio">Repertório</NavLink>
          <NavLink href="/referencias">Referências</NavLink>
        </nav>

        {/* Centro */}
        <div className="flex justify-center items-center flex-1">
          <Image
            src="/logo.png" // Substitua pelo caminho correto da logo da banda
            alt="Logo da Banda"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        {/* Direita */}
        <nav className="flex space-x-6"> {/* Aumentando o espaçamento para 6 */}
          <NavLink href="/galeria">Galeria</NavLink>
          <NavLink href="/quem-somos">Quem Somos</NavLink>
          <NavLink href="/contato">Contato</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
