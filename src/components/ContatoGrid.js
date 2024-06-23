import BotaoContato from './BotaoContato';
import { dadosContato } from '../dados/dadosContato';

export default function ContatoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {dadosContato.map((contato, index) => (
        <BotaoContato 
          key={index} 
          nome={contato.nome} 
          imagem={contato.imagem} 
          cor={contato.cor} 
        />
      ))}
    </div>
  );
}
