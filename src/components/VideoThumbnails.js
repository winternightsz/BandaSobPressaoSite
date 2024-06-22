import { youtubeVideos } from '../dados/dadosYoutube';

export default function VideoThumbnails() {
  return (
    <div className="mt-8 mx-auto max-w-screen-md">
      <div className="flex justify-center mb-4">
        <div className="w-full sm:w-1/3 p-4">
          <a href={youtubeVideos[0].videoUrl} target="_blank" rel="noopener noreferrer">
            <img src={youtubeVideos[0].thumbnail} alt={youtubeVideos[0].title} className="w-full h-auto rounded-lg shadow-md" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {youtubeVideos.slice(1, 4).map((video, index) => (
          <div key={index} className="w-full p-4">
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnail} alt={video.title} className="w-full h-auto rounded-lg shadow-md" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}








