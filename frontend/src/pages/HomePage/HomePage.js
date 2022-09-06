import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom"; 

import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos'
import CommentList from "../../components/CommentList/CommentList";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  const [videoSearchResults, setVideoSearchResults] = useState([])
  const [selectedVideoId, setSelectedVideoID] = useState('')
  const [similarVideos, setSimilarVideos] = useState('')
  const { videoId } = useParams();
  console.log(user);
  console.log(token);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?", {
            params: {
            Authorization: "Bearer " + token,
            type: 'video',
            videoSearchResults: ['basketball'],
            key: "AIzaSyCDwnOQTOjMwjJzRxeKjOJ4xoOWRO5TmaQ",
            part: 'snippet',
          },
        });
        setVideos(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchVideos();
  }, [token]);

  useEffect(() => {
    videoSearch(videoId);
  },[videoId]);
    const videoSearch = async () => {
      try{
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?",{
          params: {
            type: 'video',
            videoSearchResults: [''],
            key: "AIzaSyCDwnOQTOjMwjJzRxeKjOJ4xoOWRO5TmaQ",
            part: 'snippet',
          }
        })
        
        setVideoSearchResults(response.data.item)
      } catch (error) {
        console.log(error.response.data);
      }
      };
  
  useEffect(() => {
    relatedVideoSearch(videoId);
  },[videoId]);
    const relatedVideoSearch = async (similarVideos) => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?`, {
      params: {
        type: 'video',
        similarVideos: similarVideos,
        key: "AIzaSyCDwnOQTOjMwjJzRxeKjOJ4xoOWRO5TmaQ",
        part: 'snippet',
      }
        });
        setSimilarVideos(response.data.items);
      } catch (error) {
        console.log(error.message);
      }
      };
    


  return (
    <div className="wrapper">
     
      {/* {console.log('videoSearchResults in render:',videoSearchResults)} */}
      <div className="videoplayer">
        <VideoPlayer videoId={videoId}/>
      </div>
      <div className="relatedvideos">
      <RelatedVideos videos={similarVideos}/>
      </div>
      <div className="commentList">
        <CommentList videoId={videoId}/>
      </div>
     
    </div>
  );
};

export default HomePage;
