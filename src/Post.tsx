import React from "react";

type PostProps = {
  post: any;
};

export const Post: React.FC<PostProps> = ({ post }) => {
  const toDateTime = (secs: number) => {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  };
  const date = toDateTime(post.createdAt["seconds"]);
  const displayDate = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;

  return (
    <div className="post">
      <div className="postID">
        <div>{post.userName}</div>
        <div>{displayDate}</div>
      </div>
      <div className="message">{post.message}</div>
    </div>
  );
};
