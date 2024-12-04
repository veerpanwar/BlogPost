const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config(); // Load environment variables from .env

// Initialize the app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace with your MongoDB URI)
mongoose
  .connect("mongodb://localhost:27017/blogpost", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a Post schema
const postSchema = new mongoose.Schema({
  title: String,
  desc: String,
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);

// Routes for MongoDB CRUD operations
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find(); // Fetch all posts
    res.json(posts);
  } catch (err) {
    res.status(500).send("Error fetching posts");
  }
});

app.post("/posts", async (req, res) => {
  const { title, desc } = req.body;
  const newPost = new Post({ title, desc });

  try {
    const savedPost = await newPost.save(); // Save post to DB
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).send("Error saving post");
  }
});

// Route for AI-generated posts
app.post("/api/get-post", async (req, res) => {
  const { topic } = req.body; // Get topic from the request body
  const apiUrl = process.env.REACT_APP_API_URL; // Hugging Face API URL
  const apiKey = process.env.REACT_APP_HF_API_KEY; // Hugging Face API Key

  if (!topic) {
    return res.status(400).json({ error: "Topic is required to generate a post." });
  }

  try {
    // Make a POST request to Hugging Face API using Axios
    const response = await axios.post(
      apiUrl,
      {
        inputs: `Write a detailed blog post about: ${topic}.`,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const generatedText = response.data[0]?.generated_text || "No text generated.";
    res.json([{ generated_text: generatedText }]);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch AI-generated post." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
