import React from "react";
import "./page.css";

const fetchComments = () => {
  return fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => data);
};

const page = async () => {
  const data = await fetchComments();
  return (
    <div className="comments-container">
      {data.map((comment) => (
        <div key={comment.id} className="comment-content">
          <h4 className="comment-name">{comment.email}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
