import Image from 'next/image';

export default function CardReferencias({ name, link, year, imgSrc }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 transform transition duration-500 hover:scale-105">
      <div className="relative p-2">
        <div className="absolute top-0 left-0 m-2">
          <p className="text-sm text-azulPrincipal font-semibold">{name}</p>
          <p className="text-sm text-azulPrincipal font-semibold"><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
        </div>
        <div className="absolute top-0 right-0 m-2">
          <p className="text-sm text-azulPrincipal font-semibold">{year}</p>
        </div>
        <div className="mt-16 flex justify-center">
          <Image
            src={imgSrc}
            alt={name}
            width={300}
            height={200}
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
