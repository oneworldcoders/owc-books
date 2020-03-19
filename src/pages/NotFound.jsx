import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="App">
        <h1 style={{color: "white"}}>Opps Page not found. Go back <Link to="/" className="NF">Home</Link></h1>
    </div>
  );
}

export default NotFoundPage;
