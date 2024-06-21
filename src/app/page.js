import Image from "next/image";
import "./globals.css";
export const metadata = {
  title: "Banda Sob Pressão",
  description: "Site da Banda Sob Pressão",
};

export default function Home() {
  return (
    <>
    <div className="home-background"></div>
    <main className="flex min-h-screen bg-gradient-to-b from-azulPrincipal to-azulEmBaixo flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Bem-vindo ao Site da Banda Sob Pressão</h1>
        <Image
          src="/path-to-your-image.jpg" // Altere para o caminho correto da sua imagem
          alt="Imagem da Banda Sob Pressão"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
        <p className="mt-8 text-lg">
          Esta é a página inicial do site da banda. Aqui você pode encontrar todas as informações sobre nossa música, agenda de shows e muito mais.
        </p>
      </div>
    </main>
    </>
  );
}
