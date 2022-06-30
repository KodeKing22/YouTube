import React, { useState, useEffect } from "react";
import axios from "axios";

const VideoPage = () => {
  const [carVideos, setCarVideos] = useState([]);

  useEffect(() => {
    getCarVideos();
  }, []);

  async function getCarVideos() {
    let response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?q=cars&key=AIzaSyBDNN1a6qBBAFG-gUKkmaaGPls7Eo7CCIo"
    );
    setCarVideos(response.data);
    console.log(response.data)
  }
  return(
    <h1> Welcome to the Video Page!</h1>
    
    
    );
};
export default VideoPage;
