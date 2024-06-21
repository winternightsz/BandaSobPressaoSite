"use client";
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-white text-white p-4">
      <div className="items-center">
          <Image
            src="/imagens/logoBandaColorida.png" // Substitua pelo caminho correto da logo da banda
            alt="Logo da Banda"
            width={100}
            height={50}
            
          />
        </div>
      <div className=" text-black mx-auto text-center">
        <p>&copy; 2024 My Band. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
