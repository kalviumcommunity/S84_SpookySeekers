import React, { useEffect, useState } from 'react';
import './GhostSightingPage.css';
import './FloatingAddButton.css';
import PostCard from './PostCard';
import StoryForm from '../components/StoryForm'; 
const GhostSightingPage = () => {
  const [posts, setPosts] = useState([]);
  const [showStoryForm, setShowStoryForm] = useState(false); // NEW

  useEffect(() => {
    fetch('http://localhost:3000/api/entities/ghost_stories')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched posts:', data);
        setPosts(data.data);
      })
      .catch((err) => console.error('Error fetching posts:', err));
  }, []);

  return (
    <div className="posts-container">
      <h1>👻 Spooky Stories</h1>

      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <p>No spooky stories found.</p>
      )}

      {showStoryForm && <StoryForm onClose={() => setShowStoryForm(false)} />}

      <button className="add-story-btn" onClick={() => setShowStoryForm(true)}>
        ➕ Add Your Story
      </button>
    </div>
  );
};

export default GhostSightingPage;
