import React from "react";
import "./App.css";
import { Navbar } from "./Navbar";
import { Post } from "./Post";
import firebase from "firebase/app";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//   apiKey: "AIzaSyDXCSxU-KqMmR4udegjgDEC3jGNCCDImWE",
//   authDomain: "message-board-46845.firebaseapp.com",
//   projectId: "message-board-46845",
//   storageBucket: "message-board-46845.appspot.com",
//   messagingSenderId: "947607790378",
//   appId: "1:947607790378:web:f215a39a7a6b1cd8373453",
//   measurementId: "G-GKCH51Q2NM"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const App: React.FC = () => {
  return (
    <div className="body">
      <Navbar />
      <Post />
      <h1>Slob on my nob</h1>
    </div>
  );
};

export default App;
