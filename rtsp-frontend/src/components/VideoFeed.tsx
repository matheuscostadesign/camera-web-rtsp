import { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./VideoFeed.css";

const VideoFeed: React.FC<VideoFeedProps> = ({ src }) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState<ReturnType<typeof videojs>>();

  useEffect(() => {
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      setPlayer(
        videojs(
          videoElement,
          {
            autoplay: true,
            muted: true,
            controls: true,
          },
          () => {
            console.log("player is ready");
          }
        )
      );
    }
  }, [videoRef]);

  useEffect(() => {
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [player]);

  return (
    <video className="video-js" ref={videoRef} controls>
      <source src={src} type="application/x-mpegURL" />
    </video>
  );
};

interface VideoFeedProps {
  src: string;
}

export default VideoFeed;
