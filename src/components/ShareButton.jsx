import React from 'react';

const ShareButton = ({ url, title }) => {
  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`;
    window.open(facebookUrl, '_blank');
  };

  return (
    <button onClick={shareOnFacebook}>
      Share on Facebook
    </button>
  );
};

export default ShareButton;