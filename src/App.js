import React from 'react';
import './App.css';

function App() {
  const handleShare = () => {
    const url = window.location.href; // Current page URL
    const title = document.querySelector('h1').innerText; // Get H1 text
    const description = document.querySelector('p').innerText; // Get P text
    const imageUrl = document.querySelector('img').src; // Get Image URL

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title + ' - ' + description)}&picture=${encodeURIComponent(imageUrl)}`;

    window.open(facebookUrl, '_blank');
  };

  return (
    <div className="App">
      <h1>bangladesh is right now</h1>

      <img
        style={{ height: "300px", width: "300px" }}
        src="https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className=""
        alt="Bangladesh right now"
      />

      <p>dfvhdhbu dfdf bdfbd fd f dfdhfdbfhdbhbhgfdbhgdbhg</p>

      <button onClick={handleShare}>Share on Facebook</button>
    </div>
  );
}

export default App;
