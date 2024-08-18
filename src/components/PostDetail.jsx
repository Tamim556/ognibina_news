import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://admin.desh365.top/api/post/${id}`) // Adjust API endpoint as needed
      .then(response => response.json())
      .then(data => {
        if (data.status && data.data) {
          setPost(data.data);
        }
      })
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  const handleShare = () => {
    if (post) {
      // Assuming `https://yourdomain.com/posts/${id}` is the correct URL for the post
      const postUrl = `https://ognibina-news.vercel.app/posts/${id}`;
      const title = post.title;
      const description = post.post_body;

      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}&quote=${encodeURIComponent(title + ' - ' + description)}`;
      window.open(facebookUrl, '_blank');
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <img
        src={`https://admin.desh365.top/public/storage/post-image/${post.image}`}
        alt={post.title}
        style={{ height: '300px', width: '300px' }}
      />
      <p dangerouslySetInnerHTML={{ __html: post.post_body }}></p>
      <button onClick={handleShare}>Share on Facebook</button>
    </div>
  );
}

export default PostDetail;
