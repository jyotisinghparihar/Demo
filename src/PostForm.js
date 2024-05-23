// PostForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/posts', formData);
      alert('Blog post submitted successfully!');
      setFormData({ title: '', content: '' }); // Clear form fields
    } catch (error) {
      console.error('Error submitting blog post:', error);
    }
  };

  return (
    <div>
      <h2>Create New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Content:</label>
          <textarea name="content" value={formData.content} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
