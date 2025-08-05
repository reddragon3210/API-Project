import Card from './Card.jsx'
import './CardContainer.css'
import { useState, useEffect } from 'react';



export default function CardContainer() {
    
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error:', err));
  }, []);

    return (
        <div className="card-container">
            {posts.length === 0 ? (
                <p style={{ color: '#fff' }}>Loading...</p>
            ) : (
                posts.map(post => <Card key={post.id} post={post} />)
            )}
        </div>
    )
  
}