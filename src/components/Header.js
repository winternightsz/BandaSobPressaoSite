'use client';

import NavLink from './NavLink';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ isHomePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={`${isHomePage === 'sim' ? (isOpen ? 'bg-azulPrincipal' : 'bg-transparent') : 'bg-azulPrincipal'} text-white p-2 fixed w-full z-10 transition-colors duration-300`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Esquerda */}
          <div className="flex items-center space-x-6">
            <button className="md:hidden" onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <nav className="hidden md:flex space-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/repertorio">Repertório</NavLink>
              <NavLink href="/referencias">Referências</NavLink>
            </nav>
          </div>

          {/* Centro */}
          <div className="flex justify-center items-center flex-1">
            <Image
              src="/imagens/logoBandaBranca.png" // Substitua pelo caminho correto da logo da banda
              alt="Logo da Banda"
              width={100}
              height={50}
              className="rounded-full"
            />
          </div>

          {/* Direita */}
          <nav className="hidden md:flex space-x-6">
            <NavLink href="/galeria">Galeria</NavLink>
            <NavLink href="/quem-somos">Quem Somos</NavLink>
            <NavLink href="/contato">Contato</NavLink>
          </nav>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-azulPrincipal text-white md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/repertorio">Repertório</NavLink>
              <NavLink href="/referencias">Referências</NavLink>
              <NavLink href="/galeria">Galeria</NavLink>
              <NavLink href="/quem-somos">Quem Somos</NavLink>
              <NavLink href="/contato">Contato</NavLink>
            </nav>
          </div>
        )}
      </header>
      {/* Espaço abaixo do header para evitar sobreposição */}
      <div className="h-16 md:h-0"></div>
    </>
  );
};

export default Header;
