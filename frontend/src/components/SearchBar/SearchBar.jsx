import React from "react";

const SearchBar = ({ setState }) => {
    return (
        <form>
            <input
                className="search-input"
                type="text"
                onChange={(event) => setState(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;