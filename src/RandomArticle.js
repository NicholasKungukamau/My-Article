import React, { useEffect, useState } from 'react';

const API_URL = "https://randomfox.ca/floof/"

function RandomArticle() {
  const [image, setImage] = useState(null)
  
  useEffect(() => {
      fetch("https://randomfox.ca/floof/")
        .then(r => r.json())
        .then(data => setImage(data.image))
  }, [])
  
  return (
    <div id="article" >
      <p>Here's a lovely article for you:</p>
      <img src={image} alt="Random Article" />
    </div>
  );
}

export default RandomArticle