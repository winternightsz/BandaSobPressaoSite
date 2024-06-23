import React from 'react';

const CardServicosHome = ({ imagem, titulo, descricao }) => {
  return (
    <div className="flex items-center p-4">
      <div className="bg-blue-500 rounded-full shadow-lg shadow-blue-800 p-4">
        <img src={imagem} alt={titulo} className="w-16 h-16 object-cover rounded-full" />
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold">{titulo}</h4>
        <p className="mt-2">{descricao}</p>
      </div>
    </div>
  );
};

export default CardServicosHome;
