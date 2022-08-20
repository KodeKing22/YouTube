import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = () => {
  const [carVideos, setCarVideos] = useState([]);
  const [videoId, setVideoId] = useState('')

  useEffect(() => {
    getCarVideos();
  }, []);

  async function getCarVideos() {
    let response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?q=cars&key=AIzaSyBDNN1a6qBBAFG-gUKkmaaGPls7Eo7CCIo"
    );
    setCarVideos(response.data);
    setVideoId(response.data.items[0].id.videoId)
    // console.log('this is video ID', videoId)
    console.log(response.date)
    
  }
  return(
    <div>
      <h1> Welcome to the Video Page!</h1>
      <VideoPlayer videoId={videoId}/>

    </div>
    
    
    );
};
export default VideoPage;
