import React, { useState } from "react";

function Stories() {
  const [stories, setStories] = useState([
    { author: "John", text: "I love gardening every weekend!" },
    { author: "Mary", text: "My grandchildren taught me how to use Zoom!" }
  ]);
  const [newStory, setNewStory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newStory.trim() === "") return;
    setStories([...stories, { author: "You", text: newStory }]);
    setNewStory("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Community Stories</h2>
      <ul className="space-y-4 mb-6">
        {stories.map((s, i) => (
          <li
            key={i}
            className="bg-white p-4 rounded shadow border-l-4 border-blue-500"
          >
            <p className="text-gray-800">{s.text}</p>
            <p className="text-sm text-gray-500 mt-2">— {s.author}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          value={newStory}
          onChange={(e) => setNewStory(e.target.value)}
          placeholder="Share your story..."
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post Story
        </button>
      </form>
    </div>
  );
}

export default Stories;
