import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logged out!');
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} style={{ backgroundColor: '#111', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '8px' }}>
      Logout
    </button>
  );
};

export default LogoutButton;
