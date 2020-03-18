import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="App">
      <header className="App-header">
        Opps Page not found. Go back <Link to="/">Home</Link>
      </header>
    </div>
  );
}

export default NotFoundPage;
