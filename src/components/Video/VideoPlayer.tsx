'use client';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer = ({ videoId, title }: VideoPlayerProps) => {
  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg relative">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full absolute inset-0"
      />
    </div>
  );
};

export default VideoPlayer; 