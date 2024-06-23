import Image from "next/image";
import "./globals.css";
import CardHomeGrid from "../components/CardHomeGrid";
import Ensaio from "../components/Ensaio";

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
          <h1 className="text-4xl italic text-white">A BANDA CERTA</h1>
          <h1 className="text-4xl italic text-white">
            PARA O <span className="font-bold ">SEU</span> EVENTO!
          </h1>
        </div>
      </div>
      <div className="transition-blur"></div>
      {/* Seção para o restante do conteúdo */}
      <div className="main-page flex-grow mt-0 bg-gradient-to-b from-azulPrincipal to-azulEmBaixo flex flex-col items-center justify-center">
        <h2 className="text-3xl mt-8">Oque oferecemos</h2>
        <div className="p-4 w-full max-w-screen-lg mx-auto">
          <CardHomeGrid />
        </div>

        <div className="w-full max-w-screen-lg mx-auto mt-8">
          <h1 className="text-3xl text-center md:text-4xl">
            Venha nos conhecer e participe de nosso ensaio!
          </h1>
          <Ensaio />
        </div>
        <div className="w-full max-w-screen-lg mx-auto mt-8">
          
        </div>
      </div>
    </div>
  );
}
