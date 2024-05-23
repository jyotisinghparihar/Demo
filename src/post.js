import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const BlogApp = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory(); // Initialize useHistory

  // Load posts from local storage when component mounts
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && content.trim() !== '') {
      const newPost = { title, content };
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      // Save posts to local storage
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      setTitle('');
      setContent('');
      history.push('/posts'); // Navigate to the post list page after submitting
    } else {
      alert('Please fill out both title and content fields.');
    }
  };

  return (
    <div className='App'>
      <header>
        <h1>My Blog</h1>
      </header>
      <main>
        <section id="create-post">
          <h2>Create a New Post</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label><br />
            <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
            <label htmlFor="content">Content:</label><br />
            <textarea id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)} /><br />
            <button type="submit">Post</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default BlogApp;
