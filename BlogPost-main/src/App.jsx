import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Postform from "./Postform";
import Home from "./Home";
import Aipost from "./Aipost";

function App() {
  const [posts, setPosts] = useState([]); // State to hold all posts

  function addPost(post) {
    setPosts((prev) => [...prev, post]); // Add new post to the list
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} /> {/* Pass posts as prop */}
        <Route
          path="/postform"
          element={<Postform addPost={addPost} />} // Pass addPost as prop
        />
        <Route
          path="/aipost"
          element={<Aipost addPost={addPost} />} // Pass addPost as prop
        />
      </Routes>
    </Router>
  );
}

export default App;
