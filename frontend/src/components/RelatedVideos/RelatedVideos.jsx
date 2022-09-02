import React from "react";
import useVideoPush from "../../hooks/VIdeoPush";

const RelatedVideos = ({ videos, size }) => {
  const { handleVideoPush } = useVideoPush();

  return (
    <>
      {videos ? (
        videos.map((video) => {
          if (video.snippet) {
            return (
              <div className={`video-${size}`} key={video.id.videoId}>
                <img
                  key={video.id.videoId}
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  onClick={() => handleVideoPush(video)}
                />
                <p>{video.snippet.title}</p>
              </div>
            );
          } else {
            return null;
          }
        })
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default RelatedVideos;
