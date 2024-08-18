// src/App.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://admin.desh365.top/api/all-post')
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          const allPosts = data.data.flatMap(category => category.posts);
          setPosts(allPosts);
        }
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleShare = () => {
    if (selectedPost) {
      const postUrl = `https://ognibina-news.vercel.app/post/${selectedPost.id}`;
      const title = selectedPost.title;
      const description = selectedPost.post_body;
  
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}&quote=${encodeURIComponent(title + ' - ' + description)}`;
      window.open(facebookUrl, '_blank');
    }
  };

  return (
    <div className="App">
      <h1>Bangladesh is right now</h1>

      {selectedPost ? (
        <>
          <h2>{selectedPost.title}</h2>
          <img
            style={{ height: "300px", width: "300px" }}
            src={`https://admin.desh365.top/public/storage/post-image/${selectedPost.image}`}
            alt={selectedPost.title}
          />
          <p dangerouslySetInnerHTML={{ __html: selectedPost.post_body }}></p>
          <button onClick={handleShare}>Share on Facebook</button>
          <button onClick={() => setSelectedPost(null)}>Back to Posts</button>
        </>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>
                <img
                  src={`https://admin.desh365.top/public/storage/post-image/${post.image}`}
                  alt={post.title}
                  style={{ height: '50px', width: '50px', marginRight: '10px', objectFit: 'cover', borderRadius: '5px' }}
                />
                <span>{post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
