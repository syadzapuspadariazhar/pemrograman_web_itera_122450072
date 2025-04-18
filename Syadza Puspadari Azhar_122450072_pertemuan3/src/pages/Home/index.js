// src/pages/Home/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Manajemen Buku Pribadi</h1>
      <Link to="/stats" className="pink-button">Lihat Statistik</Link>
      <BookForm />
      <BookList />
    </div>
  );
};

export default Home;