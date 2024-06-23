"use client";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-white">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center">
          <Image
            src="/imagens/logoBandaColorida.png" 
            alt="Logo da Banda"
            width={100}
            height={50}
          />
        </div>

        <div className="text-black text-center">
          <p>&copy; 2024 My Band. Todos os direitos reservados.</p>
        </div>

        <div>
          <ul className="flex space-x-4">
            <li><a href="#">
              <Image
                src="/imagens/itens_footer/instagram.png"
                alt="ícone do Instagram"
                width={30}
                height={30}
              />
            </a></li>
            <li><a href="#">
              <Image
                src="/imagens/itens_footer/facebook.png"
                alt="ícone do Facebook"
                width={30}
                height={30}
              />
            </a></li>
            <li><a href="#">
              <Image
                src="/imagens/itens_footer/whatsapp.png"
                alt="ícone do WhatsApp"
                width={30}
                height={30}
              />
            </a></li>
            <li><a href="#">
              <Image
                src="/imagens/itens_footer/gmail.png"
                alt="ícone do Gmail"
                width={30}
                height={30}
              />
            </a></li>
            <li><a href="#">
              <Image
                src="/imagens/itens_footer/youtube.png"
                alt="ícone do Youtube"
                width={30}
                height={30}
              />
            </a></li>
            <li><a href="#">
              <Image
                src="/imagens/itens_footer/spotify.png"
                alt="ícone do Spotify"
                width={30}
                height={30}
              />
            </a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
