export async function getPostFromMistral(postTopic) {
    try {
      // Make a POST request to the backend API to fetch the post
      const response = await fetch("http://localhost:5000/api/get-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: postTopic }),
      });
  
      // Handle response errors
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch post from the backend.");
      }
  
      const data = await response.json();
      
      // Ensure data is valid before returning
      return data[0]?.generated_text || "No post generated for the given topic.";
    } catch (err) {
      console.error("Error fetching post:", err);
      return "Sorry, something went wrong while fetching the post. Please try again.";
    }
  }
  