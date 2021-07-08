import firebase from "firebase";
import React, { useState } from "react";

type NewPostProps = {
  currentUser: any;
};

export const NewPost: React.FC<NewPostProps> = ({ currentUser }) => {
  const [newPostScreen, setNewPostScreen] = useState<boolean>(false);
  const [postValue, setPostValue] = useState<string>("");

  const handlePost = async (e: any) => {
    await firebase.firestore().collection("posts").add({
      message: postValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      userName: currentUser.displayName,
    });

    setNewPostScreen(false);
    setPostValue("");
  };

  return !newPostScreen ? (
    <div className="newPost">
      <button
        className="createPostButton"
        onClick={() => setNewPostScreen(true)}
      >
        New Post
      </button>
    </div>
  ) : (
    <div className="newPost">
      <textarea
        className="newPostInput"
        placeholder="Start Typing!"
        value={postValue}
        onChange={(e) => setPostValue(e.target.value)}
      ></textarea>
      <div className="newPostButtonSection">
        <button
          className="newPostButton"
          disabled={!postValue}
          onClick={(e) => handlePost(e)}
        >
          Post!
        </button>
        <button
          className="newPostButton"
          onClick={() => setNewPostScreen(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
