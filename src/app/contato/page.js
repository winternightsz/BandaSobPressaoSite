export const metadata = {
  title: "Contato",
  description: "Site da banda Sob Pressão",
};

import ContatoGrid from '../../components/ContatoGrid';
import FormularioContato from '../../components/FormularioContato';

export default function Contato() {
  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-b from-azulPrincipal to-azulEmBaixo">
      <h1 className="text-3xl lg:mt-40 font-bold mb-8">Onde pode nos encontrar</h1>
      <ContatoGrid />
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Fale Conosco</h2>
        <div className="flex flex-col">
          <p className="mb-2">Faça contato por e-mail diretamente pelo site</p>
          <p className="mb-2 text-center"> ou entre em contato por WhatsApp.</p>
        </div>
      </div>
      <FormularioContato />
    </div>
  );
}


  