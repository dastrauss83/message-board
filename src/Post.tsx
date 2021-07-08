import firebase from "firebase";
import React from "react";

type PostProps = {
  post: any;
  currentUser: any;
};

export const Post: React.FC<PostProps> = ({ post, currentUser }) => {
  let displayDate;
  if (post.createdAt) {
    const toDateTime = (secs: number) => {
      const t = new Date(1970, 0, 1); // Epoch
      t.setSeconds(secs);
      return t;
    };
    const date = toDateTime(post.createdAt["seconds"]);
    displayDate = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
  }

  const handleDelete = async (e: any) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await firebase.firestore().collection("posts").doc(`${post.id}`).delete();
    }
  };

  return (
    <div className="post">
      <div className="postID">
        <div>{post.userName}</div>
        <div>{displayDate}</div>
      </div>
      <div className="message">{post.message}</div>
      {currentUser ? (
        currentUser.displayName === post.userName ? (
          <button onClick={(e) => handleDelete(e)}>Delete Post</button>
        ) : null
      ) : null}
    </div>
  );
};
