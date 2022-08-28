import React from "react";

const Comment = ({ comment }) => {
    return (
        <div className="individual-comment-box">
            <h3 className="comment-username">{comment.user.username}</h3>
            <p className="comment-text">{comment.text}</p>
            <hr />
        </div>
    );
};

export default Comment;