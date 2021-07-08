import React from "react";
import "./App.css";
import { useState } from "react";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

import { Navbar } from "./Navbar";
import { Post } from "./Post";
import { Login } from "./Login";

firebase.initializeApp({
  apiKey: "AIzaSyDXCSxU-KqMmR4udegjgDEC3jGNCCDImWE",
  authDomain: "message-board-46845.firebaseapp.com",
  projectId: "message-board-46845",
  storageBucket: "message-board-46845.appspot.com",
  messagingSenderId: "947607790378",
  appId: "1:947607790378:web:f215a39a7a6b1cd8373453",
  measurementId: "G-GKCH51Q2NM",
});

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  const query = firebase.firestore().collection("posts").orderBy("createdAt");
  const [posts] = useCollectionData(query, { idField: "id" });

  posts && console.log(posts[0]["createdAt"]);

  return (
    <div className="body">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Login currentUser={currentUser} />
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default App;
