import React, { useState } from "react";
import axios from "axios";

function Postform() {
  const [post, setPost] = useState({ title: "", desc: "" });
  const [message, setMessage] = useState(""); // State for feedback message

  // Function to handle form submission
  const addPostHandler = async (event) => {
    event.preventDefault();
    if (post.title.trim() && post.desc.trim()) {
      try {
        // Sending post data to the backend (Node.js/Express server)
        await axios.post("http://localhost:5000/posts", post); // Adjust URL based on your server
        setPost({ title: "", desc: "" }); // Reset form
        setMessage("Post Submitted!"); // Success message
      } catch (error) {
        setMessage("Failed to submit post!"); // Error message
      }
    } else {
      setMessage("Please fill in both the title and description.");
    }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mt-20">
      <form onSubmit={addPostHandler}>
        <div className="heading text-center font-bold text-4xl m-7 text-gray-800">
          New Post Form
        </div>
        <div
          className="editor mx-auto w-10/12 flex mt-7 flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl"
          style={{ background: "white" }}
        >
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Title"
            name="title"
            type="text"
            value={post.title}
            onChange={handleInputChange}
          />
          <textarea
            className="description bg-gray-100 p-3 h-60 border border-gray-300 outline-none"
            spellCheck="false"
            placeholder="Describe everything about this post here"
            name="desc"
            value={post.desc}
            onChange={handleInputChange}
          ></textarea>

          {/* Post Counter */}
          <div className="icons flex text-gray-500 m-2">
            <div className="count ml-auto text-gray-400 text-xs font-semibold">
              {post.desc.length}/300
            </div>
          </div>

          {/* Buttons */}
          <div className="buttons flex">
            <button
              type="button"
              className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
              onClick={() => setPost({ title: "", desc: "" })}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            >
              Post
            </button>
          </div>
        </div>
      </form>

      {/* Show feedback message */}
      {message && (
        <div className="mt-4 text-center text-xl font-semibold text-green-500">
          {message}
        </div>
      )}
    </div>
  );
}

export default Postform;
