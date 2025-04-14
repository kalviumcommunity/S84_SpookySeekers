import React, { useState, useEffect } from 'react';

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [reaction, setReaction] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showStoryForm, setShowStoryForm] = useState(false);

  const storageKey = `post_${post._id}`;

  useEffect(() => {
    try {
      const storedData = JSON.parse(localStorage.getItem(storageKey)) || {};
      setLikes(typeof storedData.likes === 'number' ? storedData.likes : 0);
      setDislikes(typeof storedData.dislikes === 'number' ? storedData.dislikes : 0);
      setComments(Array.isArray(storedData.comments) ? storedData.comments : []);
      setReaction(storedData.reaction || null);
    } catch (err) {
      console.error('Error reading from localStorage:', err);
    }
  }, [storageKey]);

  const updateLocalStorage = (data) => {
    try {
      const current = JSON.parse(localStorage.getItem(storageKey)) || {};
      const updated = { ...current, ...data };
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch (err) {
      console.error('Error updating localStorage:', err);
    }
  };

  const handleLike = () => {
    if (reaction === 'liked') return;

    const newLikes = likes + 1;
    const newDislikes = reaction === 'disliked' ? dislikes - 1 : dislikes;

    setLikes(newLikes);
    setDislikes(newDislikes);
    setReaction('liked');
    updateLocalStorage({ likes: newLikes, dislikes: newDislikes, reaction: 'liked' });
  };

  const handleDislike = () => {
    if (reaction === 'disliked') return;

    const newDislikes = dislikes + 1;
    const newLikes = reaction === 'liked' ? likes - 1 : likes;

    setLikes(newLikes);
    setDislikes(newDislikes);
    setReaction('disliked');
    updateLocalStorage({ likes: newLikes, dislikes: newDislikes, reaction: 'disliked' });
  };

  const addComment = () => {
    if (!newComment.trim()) return;
    const updatedComments = [...comments, newComment.trim()];
    setComments(updatedComments);
    updateLocalStorage({ comments: updatedComments });
    setNewComment('');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href + `#${post._id}`);
    alert('Post link copied to clipboard!');

    try {
      const current = JSON.parse(localStorage.getItem(storageKey)) || {};
      const newShares = (current.shares || 0) + 1;
      updateLocalStorage({ shares: newShares });
    } catch (err) {
      console.error('Error updating share count:', err);
    }
  };

  return (
    <div className="post-card" id={post._id}>
      <div className="post-content">
        <h2>{post.title || 'Untitled Sighting'}</h2>
        <p><strong>Location:</strong> {post.location || 'Unknown Location'}</p>
        <p><strong>Witness:</strong> {post.Eye_witness || 'Anonymous'}</p>
        <p><strong>Story:</strong> {post.story || 'No story provided.'}</p>

        <div className="post-actions">
          <button
            onClick={handleLike}
            style={{ color: reaction === 'liked' ? 'red' : 'black' }}
          >
            ❤️ Like {likes}
          </button>
          <button
            onClick={handleDislike}
            style={{ color: reaction === 'disliked' ? 'blue' : 'black' }}
          >
            👎 Dislike {dislikes}
          </button>
          <button onClick={() => setShowComments(!showComments)}>💬 Comment</button>
          <button onClick={handleShare}>📤 Share</button>
        </div>

        {showComments && (
          <div className="comment-box">
            <input
              type="text"
              placeholder="Type your comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={addComment}>Post</button>
            <ul>
              {comments.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
