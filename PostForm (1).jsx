import React, { useState } from 'react';

function PostForm({ onPost }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onPost(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        className="w-full p-2 border rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Post
      </button>
    </form>
  );
}
export default PostForm;