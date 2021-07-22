import firebase from "firebase";
import moment from "moment";
import React from "react";

type PostProps = {
  post: any;
  currentUser: any;
};

export const Post: React.FC<PostProps> = ({ post, currentUser }) => {
  let displayDate;
  if (post.createdAt) {
    displayDate = moment(post.createdAt.toDate()).startOf("minute").fromNow();
  }

  const firebasePost = firebase
    .firestore()
    .collection("posts")
    .doc(`${post.id}`);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await firebasePost.delete();
    }
  };

  const handleLike = async () => {
    if (post.likedBy.includes(currentUser.uid)) {
      const index = post.likedBy.indexOf(currentUser.uid);
      const tempLikedBy = [...post.likedBy];
      tempLikedBy.splice(index, 1);
      await firebasePost.update({
        likes: post.likes - 1,
        likedBy: tempLikedBy,
      });
    } else {
      await firebasePost.update({
        likes: post.likes + 1,
        likedBy: [...post.likedBy, currentUser.uid],
      });
    }
  };

  return (
    <div className="post">
      <div className="postID">
        <div>{post.userName}</div>
        <div>{displayDate}</div>
      </div>
      <div className="message">{post.message}</div>
      <div className="likes">
        {currentUser ? (
          <button className="likeButton" onClick={() => handleLike()}>
            !!
          </button>
        ) : null}
        Likes: {post.likes}
      </div>
      {currentUser ? (
        currentUser.uid === post.userID ? (
          <button className="deleteButton" onClick={() => handleDelete()}>
            Delete
          </button>
        ) : null
      ) : null}
    </div>
  );
};
