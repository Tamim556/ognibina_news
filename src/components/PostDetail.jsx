import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://admin.desh365.top/api/post/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.status && data.data) {
          setPost(data.data);
          setLoading(false);
        } else {
          throw new Error('Post not found');
        }
      })
      .catch(error => {
        console.error('Error fetching post:', error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const handleShare = () => {
    if (post) {
      const postUrl = `https://ognibina-news.vercel.app/post/${id}`;
      const title = post.title;
      const description = post.post_body.substring(0, 200);
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}&quote=${encodeURIComponent(title + ' - ' + description)}`;
      window.open(facebookUrl, '_blank');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading post: {error.message}</div>;

  const imageUrl = `https://admin.desh365.top/public/storage/post-image/${post.image}`;
  const imageWidth = 1200;  // Adjust based on your actual image size
  const imageHeight = 630;  // Adjust based on your actual image size

  return (
    <div>
      <Helmet>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.post_body.substring(0, 200)} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content={imageWidth} />
        <meta property="og:image:height" content={imageHeight} />
        <meta property="og:url" content={`https://ognibina-news.vercel.app/post/${id}`} />
        <meta property="og:type" content="article" />
        <title>{post.title}</title>
      </Helmet>
      <h2>{post.title}</h2>
      <img
        src={imageUrl}
        alt={post.title}
        style={{ height: '300px', width: '300px', objectFit: 'cover' }}
      />
      <p dangerouslySetInnerHTML={{ __html: post.post_body }}></p>
      <button onClick={handleShare}>Share on Facebook</button>
    </div>
  );
}

export default PostDetail;
