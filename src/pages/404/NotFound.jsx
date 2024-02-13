import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Page not found';
  }, []);

  const handleNavigate = () => {
    navigate('/');
    document.title = 'Home Page';
  };

  return (
    <div className="notfound">
      <div className="notfound_frame">
        <div className="notfound_book">
          <div className="notfound_title">
            <h4 className="notfound_info">Page not found</h4>
            <p className="notfound_status">404</p>
          </div>
        </div>
        <button className='btn_404' type="button" onClick={handleNavigate}>
          Open Home Page
        </button>
      </div>
    </div>
  );
}