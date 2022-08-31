import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom"; 

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [videoSearchResults, setVideoSearchResults] = useState([])
  const [selectedVideoId, setSelectedVideoID] = useState('')
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
        console.log(response.data.item)
        setVideoSearchResults(response.data.item)
      } catch (error) {
        console.log(error.response.data);
      }
      };
      videoSearch();
  },[]);


  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {console.log('videoSearchResults in render:',videoSearchResults)}
      {/* <Link to="/addvideo">Add Video!</Link> */}
      <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>
      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))}
    </div>
  );
};

export default HomePage;
