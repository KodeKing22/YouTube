import axios from "axios";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";



const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    fetchComments(videoId);
  }, [videoId]);

  const fetchComments = async (videoId) => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}`);
      setComments(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addComment = async (commentText) => {
    try {
      await axios.post(
        `http://127.0.0.1:8000/api/comments/`,
        { video_id: videoId, text: commentText },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchComments(videoId);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {user ? (
        <CommentForm submitComment={addComment} />
      ) : (
        <p>Must be logged in to comment!</p>
      )}{" "}
      <br></br>
      {comments ? (
        comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              text={comment.text}
              userName={comment.user.username}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CommentList;