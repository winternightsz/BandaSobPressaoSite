import CardGridReferencias from '@/components/CardGridReferencias';
import Image from 'next/image';

export const metadata = {
  title: "Referências",
  description: "Site da banda Sob Pressão",
};


const ReferenciasPage = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-azulPrincipal to-azulEmBaixo">
      <h1 className="text-3xl lg:mt-40 sm:mt-28 font-bold text-center mb-8">Eventos Realizados</h1>
      <CardGridReferencias />
    </div>
  );
  };
  
  export default ReferenciasPage;
