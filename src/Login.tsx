import React from "react";

type LoginProps = {
  currentUser: any;
};

export const Login: React.FC<LoginProps> = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? (
        <div className="login">
          Currently Logged in as: {currentUser.displayName}
        </div>
      ) : (
        <div className="login">Log in to post</div>
      )}
    </div>
  );
};
