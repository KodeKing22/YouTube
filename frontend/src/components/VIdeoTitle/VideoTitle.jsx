import React from "react";

const Videotitle = ({ array }) => {
    if (array[0]) {
        return (
            <div>
                <h2 className="current-video-title">
                    {array[0].snippet.title}
                </h2>
                <p className="current-video-description">
                    {array[0].snippet.description}
                </p>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Videotitle;