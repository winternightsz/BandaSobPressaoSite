import CardReferencias from '@/components/CardReferencias';
import Image from 'next/image';

export const metadata = {
  title: "Referências",
  description: "Site da banda Sob Pressão",
};


const ReferenciasPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Eventos Realizados</h1>
      <CardGridReferencias />
    </div>
  );
  };
  
  export default ReferenciasPage;
