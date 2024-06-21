import CardReferencias from './CardReferencias';
import { cardsData } from '../dados/dadosReferencias';

export default function CardGridReferencias() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
      {cardsData.map((card, index) => (
        <CardReferencias 
          key={index} 
          name={card.name} 
          link={card.link} 
          year={card.year} 
          imgSrc={card.imgSrc} 
        />
      ))}
    </div>
  );
}
