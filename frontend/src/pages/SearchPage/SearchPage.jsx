import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchPage = () => {
    const [search, setSearch] = useState([]);

    useEffect(() => {
        searchVideos();
    }, []);

    async function searchVideos(){
        let response = await axios.get("");
        searchVideos(response.data);
    }
    return (<h1>Search for Videos!</h1> );
}
 
export default SearchPage;
