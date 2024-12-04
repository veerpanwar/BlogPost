import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/posts'); // Fetch posts from server
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="text-gray-800 p-7 mt-20">
      <h1 className="text-4xl font-bold mb-4 text-center">Today's Post {formattedDate}</h1>

      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="p-4 border-b border-gray-300 text-left">
            <h1 className="font-bold text-xl">{post.title}</h1>
            <h2 className="text-base">{post.desc}</h2>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No posts yet.</p>
      )}
    </div>
  );
};

export default Home;
