export default function BotaoContato({ nome, imagem, cor }) {
    return (
      <a href="#" className={`flex items-center p-2 rounded ${cor} text-white`}>
        <img src={imagem} alt="Ícone" className="w-6 h-6 mr-2" />
        {nome}
      </a>
    );
  }
  