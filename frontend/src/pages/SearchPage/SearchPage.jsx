import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



import SearchBar from '../../components/SearchBar/SearchBar';

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const SearchPage = () => {
    const [videoSearchData, setVideoSearchData] = useState([]);
    const [searchCriteria, setSearchCriteria] = useState("basketball");

    let googleApiKey="AIzaSyCDwnOQTOjMwjJzRxeKjOJ4xoOWRO5TmaQ"

    useEffect(() => {
        getVideosSearch();
    }, []);

    async function getVideosSearch() {
        try {
            let response = await axios.get(
                "https://www.googleapis.com/youtube/v3/search?q", {
                    params: {
                        type: 'video',
                        videoSearchResults: [''],
                        key: "AIzaSyCDwnOQTOjMwjJzRxeKjOJ4xoOWRO5TmaQ",
                        part: 'snippet',
                      }
                }
                  
            );
            setVideoSearchData(response.data.items);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <div>
            <div className="search-bar-div">
                <SearchBar setState={setSearchCriteria} />
                <button className="search-button" onClick={getVideosSearch}>
                    Search
                </button>
            </div>
            <VideoPlayer videoId='uwzhZuK9WLQ' />
        </div>
    );
};

export default SearchPage;




