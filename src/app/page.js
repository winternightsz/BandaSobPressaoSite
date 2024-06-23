import Image from "next/image";
import "./globals.css";
import CardHomeGrid from '../components/CardHomeGrid';
import Ensaio from '../components/Ensaio';

export const metadata = {
  title: "Banda Sob Pressão",
  description: "Site da Banda Sob Pressão",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contêiner para a imagem de fundo */}
      <div className="relative w-full h-[48vh]">
        <div className="hero-section"></div>
        <div className="hero-overlay">
          <h1 className="text-4xl font-bold text-white">Bem-vindo</h1>
          <p className="text-lg text-white mt-4">Texto na metade superior</p>
        </div>
      </div>
      <div className="transition-blur"></div>
      {/* Seção para o restante do conteúdo */}
      <div className="main-page flex-grow mt-0 bg-gradient-to-b from-azulPrincipal to-azulEmBaixo flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mt-8">Conteúdo da página</h2>
        <p className="text-lg mt-4">Mais informações aqui.</p>

        <div className="p-4 w-full max-w-screen-lg mx-auto">
          <CardHomeGrid />
        </div>

        <div className="w-full max-w-screen-lg mx-auto mt-8">
          <Ensaio />
        </div>

      </div>
    </div>
  );
}
