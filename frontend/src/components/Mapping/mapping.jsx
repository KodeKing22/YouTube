import React from "react";
import { Link } from "react-router-dom";

const Mapping = ({ array }) => {
  function handleClick() {}

  return (
    <ul className="video-list">
      {array.map((item) => {
        if (item.snippet) {
          return (
            <li className="video-list-item" key={item.id.videoId}>
              <Link to={`/video/${item.id.videoId}`}>
                <div className="video-list-box">
                  <img
                    src={item.snippet.thumbnails.high.url}
                    alt="video thumbnail"
                  />
                  <h3 className="video-list-info">
                                        {item.snippet.title}
                                    </h3>
                                    <hr />
                                    <h4 className="video-list-info description">
                                        {item.snippet.description}
                                    </h4>
                </div>
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Mapping;
