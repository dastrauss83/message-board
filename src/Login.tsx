import React from "react";

type LoginProps = {
  currentUser: any;
};

export const Login: React.FC<LoginProps> = ({ currentUser }) => {
  return currentUser ? (
    <div className="login">
      <div className="loginMessage">Currently logged in as:</div>
      <div>{currentUser.displayName}</div>
    </div>
  ) : (
    <div className="login">Log in to start posting!</div>
  );
};
