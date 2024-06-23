import Image from 'next/image';

export default function CardReferencias({ nome, localizacao, tipoEvento, linkFacebook, foto }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 transform transition duration-500 hover:scale-105">
      <div className="relative p-2">
        <div className="absolute top-0 left-0 m-2">
          <p className="text-sm text-azulPrincipal font-semibold">{nome}</p>
        </div>
        <div className="absolute top-0 right-0 m-2 text-right">
          <p className="text-sm text-azulPrincipal font-semibold">{localizacao}</p>
          <p className="text-sm text-azulPrincipal">{tipoEvento}</p>
        </div>
        <div className="mt-16 flex justify-center">
          <a href={linkFacebook} target="_blank" rel="noopener noreferrer">
            <Image
              src={foto}
              alt={nome}
              width={300}
              height={200}
              className="object-cover rounded-md"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
