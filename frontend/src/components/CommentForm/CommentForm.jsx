import React, { useState } from "react";

const CommentForm = ({ addComment }) => {
    const [commentText, setCommentText] = useState("");

    async function handleAddComment(event) {
        event.preventDefault();
        debugger;
        let newEntry = {
            text: commentText,
        };
        await addComment(newEntry);
    }

    return (
        <form
            className="comment-form"
            onSubmit={(event) => handleAddComment(event)}
        >
            <input
                className="comment-input"
                value={commentText}
                type="text"
                onChange={(event) => setCommentText(event.target.value)}
            />
            <button className="comment-form-button" type="submit">
                Add Comment
            </button>
        </form>
    );
};

export default CommentForm;