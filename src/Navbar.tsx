import React from "react";
import firebase from "firebase";

type NavbarProps = {
  currentUser: any;
  setCurrentUser: any;
  setPostsToDisplay: any;
  posts: any;
};

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  setCurrentUser,
  setPostsToDisplay,
  posts,
}) => {
  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    if (!currentUser) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          setCurrentUser(result.user);
        });
    } else {
      if (window.confirm("Are you sure you want to Log Out?")) {
        setCurrentUser();
      }
    }
  };

  const handleUnfilter = () => {
    setPostsToDisplay(posts);
  };

  const handleFilter = () => {
    const filteredPosts = [...posts].filter(
      (post) => currentUser.uid === post.userID
    );
    setPostsToDisplay(filteredPosts);
  };

  return (
    <div className="navbar">
      {currentUser ? (
        <button className="navbarButton" onClick={() => handleUnfilter()}>
          All Posts
        </button>
      ) : null}
      {currentUser ? (
        <button className="navbarButton" onClick={() => handleFilter()}>
          My Posts
        </button>
      ) : null}
      <button
        className="navbarButton"
        id="loginButton"
        onClick={() => handleLogin()}
        //onClick = Login/Logout (on Logout window.confirm)
      >
        {currentUser ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};
