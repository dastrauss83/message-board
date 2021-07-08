import React from "react";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <button
        className="navbarButton"
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
        //onClick = Login/Logout (on Logout window.confirm)
      >
        Log In
      </button>
    </div>
  );
};
