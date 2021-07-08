import React from "react";

export const Post: React.FC = () => {
  return (
    <div className="post">
      <div className="postID">
        <div>Username</div>
        <div>Time</div>
      </div>
      <div className="message">Message</div>
      <div className="interact">
        <div className="commentSection">
          <input type="text" placeholder="Comment" className="comment" />
          <button
          //onClick = post comment
          >
            Post
          </button>
        </div>
        <div className="likeSection">
          <button
            className="likeButton"
            //onClick = like message
          >
            !!
          </button>
          <div className="likes">#</div>
        </div>
      </div>
    </div>
  );
};
