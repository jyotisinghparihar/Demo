import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

const headerStyle = {
  color: '#fff',
  padding: '1rem',
  backgroundImage: "url('blog.jpg')",
  height: '60vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  margin: '0 0.5rem',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: '#fff',
};

const isAuthenticated = () => {
  return localStorage.getItem('user') ? true : false;
};






function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      localStorage.setItem('user', username);
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div style={{ width: '50%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Login</h2>
        <form onSubmit={handleLogin} style={{ marginBottom: '1rem' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>Login</button>
        </form>
      </div>
    </section>
  )
}



function CreatePost({ onSave }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    onSave(newPost);
    setTitle('');
    setContent('');
    window.location.href = '/';
  };

  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div style={{ width: '50%', maxWidth: '600px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem' }}>Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
          <label htmlFor="content" style={{ display: 'block', marginBottom: '0.5rem' }}>Content:</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc', minHeight: '150px' }} />
          <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Post</button>
        </form>
      </div>
    </section>
  );
}

function Home({ posts, onDelete, isLoggedIn }) {
  // State to track the expanded state of each post
  const [expandedPosts, setExpandedPosts] = useState(Array(posts.length).fill(false));
  // State to store selected month and year
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Function to toggle the expanded state of a post
  const toggleExpanded = (index) => {
    setExpandedPosts(prevState => {
      const newExpandedPosts = [...prevState];
      newExpandedPosts[index] = !newExpandedPosts[index];
      return newExpandedPosts;
    });
  };

  // Reverse the order of posts
  const reversedPosts = [...posts].reverse();

  // Function to filter posts based on selected month and year
  const filteredPosts = reversedPosts.filter(post => {
    if (!selectedMonth && !selectedYear) return true;
    if (selectedMonth && selectedYear) {
      const postDate = new Date(post.date);
      return postDate.getMonth() === selectedMonth && postDate.getFullYear() === selectedYear;
    }
    if (selectedMonth) {
      const postDate = new Date(post.date);
      return postDate.getMonth() === selectedMonth;
    }
    if (selectedYear) {
      const postDate = new Date(post.date);
      return postDate.getFullYear() === selectedYear;
    }
    return true;
  });

  // Function to handle change in month or year selection
  const handleMonthYearChange = (event) => {
    const { name, value } = event.target;
    if (name === 'month') {
      setSelectedMonth(parseInt(value));
    } else if (name === 'year') {
      setSelectedYear(parseInt(value));
    }
  };

  // Generate an array of years from 2024 to 2050
  const years = Array.from({ length: 2050 - 2024 + 1 }, (_, index) => 2024 + index);

  // Function to format the date
 
// Function to format the date
// Function to format the date
const formatDate = (dateString, postDate) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    // If the provided date is invalid, check if the post date is available
    if (postDate) {
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      return new Date(postDate).toLocaleDateString('en-US', options);
    } else {
      // If post date is not available, return current date
      const currentDate = new Date();
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      return currentDate.toLocaleDateString('en-US', options);
    }
  } else {
    // Format the provided date if it's valid
    const options = { month: 'short', day: '2-digit', year: 'numeric' }; // Example format: "Apr 08, 2024"
    return date.toLocaleDateString('en-US', options);
  }
};






  return (
    <section style={{ minHeight: '80vh' }}>
      <h1 style={{ marginTop: '7px', marginBottom: '5rem', textAlign: 'center', fontSize: 'calc(10px + 4vmin)' }}>Recent posts</h1>

      {/* Month and year filter */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <div style={{ marginRight: '1rem', marginLeft: '550px' }}>
          <select name="month" id="month" onChange={handleMonthYearChange} style={{ width: '200px', height: '50px', borderRadius: '20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#7DCEA0' }}>
            <option value="" style={{ fontSize: '16px' }}>Select Month</option>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(month => (
              <option key={month} value={month} style={{ fontSize: '16px' }}>{new Date(0, month).toLocaleString('default', { month: 'long' })}</option>
            ))}
          </select>
        </div>
        <div>
          <select name="year" id="year" onChange={handleMonthYearChange} style={{ width: '200px', height: '50px', borderRadius: '20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#7DCEA0',  }}>
            <option value="" style={{ fontSize: '16px' }}>Select Year</option>
            {years.map(year => (
              <option key={year} value={year} style={{ fontSize: '16px' }}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Recent posts section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', padding: '1rem', borderRadius: '8px', background: 'linear-gradient(to right,#8d9db6,#667292 )', maxWidth: '1170px', margin: '3px auto', marginTop: '30px', fontSize: 'calc(10px + 2vmin)' }}>

        {filteredPosts.map((post, index) => (
          <article key={index} style={{ marginBottom: '5rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h3>{post.title}</h3>
            <p>{formatDate(post.date, post.date)}</p>
            {expandedPosts[index] ? (
              <>
                <p>{post.content}</p>
                <button onClick={() => toggleExpanded(index)} style={{ cursor: 'pointer' }}>Read Less</button>
              </>
            ) : (
              <>
                <p>{post.content.slice(0, 100)}...</p>
                <button onClick={() => toggleExpanded(index)} style={{ cursor: 'pointer' }}>Read More</button>
              </>
            )}
            {isLoggedIn && <button onClick={() => onDelete(post.id)}>Delete</button>} {/* Pass post ID to onDelete */}
          </article>
        ))}

      </div>
    </section>
  );
}


function AdminPanel({ posts, onConfirmPost, isAdminLoggedIn, handleAdminLogin }) {
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleAdminLoginSubmit = (e) => {
    e.preventDefault();
    // Check admin credentials
    if (adminUsername === 'admin' && adminPassword === 'admin') {
      handleAdminLogin();
    } else {
      alert('Invalid admin credentials.');
    }
  };

  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      {isAdminLoggedIn ? (
        <div style={{ width: '50%', maxWidth: '600px', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Admin Panel</h2>
          {posts.map((post, index) => (
            !post.confirmed && (
              <article key={index} style={{ marginBottom: '1rem' }}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <button onClick={() => onConfirmPost(index)}>Confirm</button>
              </article>
            )
          ))}
        </div>
      ) : (
        <div style={{ width: '50%', maxWidth: '400px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Admin Login</h2>
          <form onSubmit={handleAdminLoginSubmit} style={{ marginBottom: '1rem' }}>
            <label htmlFor="adminUsername" style={{ display: 'block', marginBottom: '0.5rem' }}>Username:</label>
            <input type="text" id="adminUsername" value={adminUsername} onChange={(e) => setAdminUsername(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            <label htmlFor="adminPassword" style={{ display: 'block', marginBottom: '0.5rem' }}>Password:</label>
            <input type="password" id="adminPassword" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>Login</button>
          </form>
        </div>
      )}
    </section>
  );
}

function Blogpage() {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  const handleSavePost = (newPost) => {
    const updatedPosts = [...posts, { ...newPost, confirmed: false }];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleConfirmPost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].confirmed = true;
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleDelete = (index) => {
    if (isLoggedIn) {
      const updatedPosts = [...posts];
      updatedPosts.splice(index, 1);
      setPosts(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
    } else {
      alert('You must be logged in to delete posts.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setIsAdminLoggedIn(false); // Reset admin login status on logout
  };

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <header style={headerStyle}>
        <div style={{color:'black', fontSize: 'calc(12px + 3vmin)', marginRight: '700px', textAlign: 'center', marginLeft: 'auto', }}>
  <h1>Bittwobyte Blog</h1>
</div>

          <nav style={navStyle}>
            <ul>
              
              {isLoggedIn && <li><Link to="/create" style={linkStyle}>Create Post</Link></li>}
              {isAdminLoggedIn && <li><Link to="/admin" style={linkStyle}>Admin Panel</Link></li>}
              {isLoggedIn && <li><button onClick={handleLogout} style={buttonStyle}>Logout</button></li>}
            
            </ul>
          </nav>
        </header>
     
        <Routes>
          <Route path="/" element={<Home posts={posts.filter(post => post.confirmed)} onDelete={handleDelete} isLoggedIn={isLoggedIn} />} />
          <Route path="/create" element={isLoggedIn ? <CreatePost onSave={handleSavePost} /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/admin" element={<AdminPanel posts={posts} onConfirmPost={handleConfirmPost} isAdminLoggedIn={isAdminLoggedIn} handleAdminLogin={handleAdminLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}


export default Blogpage;