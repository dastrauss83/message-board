import React from "react";
import firebase from "firebase";

type NavbarProps = {
  currentUser: any;
  setCurrentUser: any;
};

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  setCurrentUser,
}) => {
  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    if (!currentUser) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // /** @type {firebase.auth.OAuthCredential} */
          // const credential = result.credential;

          // // This gives you a Google Access Token. You can use it to access the Google API.
          // const token = credential.accessToken;
          // // The signed-in user info.
          setCurrentUser(result.user);
          // ...
        });
      // .catch((error) => {
      //   // Handle Errors here.
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // The email of the user's account used.
      //   const email = error.email;
      //   // The firebase.auth.AuthCredential type that was used.
      //   const credential = error.credential;
      //   // ...
      // });
    } else {
      if (window.confirm("Are you sure you want to Log Out?")) {
        setCurrentUser();
      }
    }
  };

  return (
    <div className="navbar">
      <button
        className="navbarButton"
        onClick={() => console.log(currentUser)}
        // onClick = take to home page
      >
        Home
      </button>
      <button
        className="navbarButton"
        //onClick = filter posts to just this user
      >
        My Posts
      </button>
      <button
        className="navbarButton"
        onClick={() => handleLogin()}
        //onClick = Login/Logout (on Logout window.confirm)
      >
        {currentUser ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};
