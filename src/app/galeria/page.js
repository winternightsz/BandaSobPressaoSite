import Carrossel from '@/components/Carrossel';
import VideoThumbnails from '@/components/VideoThumbnails';

export const metadata = {
  title: "Galeria",
  description: "Site da banda Sob Pressão",
};


export default function Galeria() {
  return (
    <div className="p-8 bg-gradient-to-b from-azulPrincipal to-azulEmBaixo">
      <h1 className="text-3xl font-bold text-center mb-8">Galeria</h1>
      <Carrossel />
      <VideoThumbnails />
    </div>
  );
}
