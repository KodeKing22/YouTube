import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom"; 

import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos'

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [videoSearchResults, setVideoSearchResults] = useState([])
  const [selectedVideoId, setSelectedVideoID] = useState('')
  const [similarVideos, setSimilarVideos] = useState('')
  const { videoId } = useParams();
  console.log(user);
  console.log(token);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);

  useEffect(() => {
    const videoSearch = async () => {
      try{
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=basketball&key=AIzaSyCDwnOQTOjMwjJzRxeKjOJ4xoOWRO5TmaQ&type=video")
        
        setVideoSearchResults(response.data.item)
      } catch (error) {
        console.log(error.response.data);
      }
      };
      videoSearch();
  },[]);
  useEffect(() => {
    relatedVideoSearch(videoId);
  },[videoId]);
    const relatedVideoSearch = async (relatedVideoId) => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        type: 'video',
        relatedVideoId: relatedVideoId,
        key: process.env.REACT_APP_YT_API_KEY,
        part: 'snippet',
      }
        });
        setSimilarVideos(response.data.items);
      } catch (error) {
        console.log(error.message);
      }
      };
    


  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {/* {console.log('videoSearchResults in render:',videoSearchResults)} */}
      <VideoPlayer videoId={videoId}/>
      <RelatedVideos videos={similarVideos}/>
      <div></div>
     
    </div>
  );
};

export default HomePage;
