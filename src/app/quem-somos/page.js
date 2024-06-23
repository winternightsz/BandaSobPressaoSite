export const metadata = {
  title: "Quem Somos",
  description: "Site da banda Sob Pressão",
};


import React from 'react';
import Image from 'next/image';

const QuemSomosPage = () => {
    return (
        <div className="flex flex-col items-center p-4 bg-gradient-to-b from-azulPrincipal to-azulEmBaixo">
            <h1 className="text-3xl lg:mt-40 font-bold my-4">Quem Somos</h1>
            <p className="text-lg text-center ">A Banda Sob Pressão nasceu em 2011 da paixão pela musica de alguns amigos que trabalharam juntos no ramo da construção civil em Balneário Camboriú. </p>
            <p className="text-lg text-center ">Amamos o que fazemos e temos muito respeito, cuidado e responsabilidade com nossos contratantes.</p>
            <p className="text-lg text-center ">Queremos entender suas necessidades e contribuir com a melhor trilha sonora para a realização do evento do seus sonhos!</p>
            <div className="my-4">
                <Image
                    src="/imagens/foto-quemsomos-1.jpeg"
                    alt="Descrição da Imagem 1"
                    width={700}
                    height={200}
                    className="my-2"
                />
                <Image
                    src="/imagens/foto-quemsomos-2.jpeg"
                    alt="Descrição da Imagem 2"
                    width={700}
                    height={200}
                    className="my-2"
                />
            </div>
            <p className="text-lg text-center my-4">Outro parágrafo com informações adicionais.</p>

        </div>
    );
};

export default QuemSomosPage;



  