import React from 'react';
import { Link } from 'react-router-dom';
import useBookStats from '../../hooks/useBookStats';
import './Stats.css';

// Halaman statistik buku yang dimiliki pengguna
const Stats = () => {
  const { total, milik, baca, beli } = useBookStats();

  return (
    <div className="stats-container">
      <h1 style={{ color: '#e91e63' }}>📊 Statistik Buku</h1>
      <div className="stats-card">
        <p><strong>Total Buku:</strong> {total}</p>
        <p><strong>Buku Dimiliki:</strong> {milik}</p>
        <p><strong>Sedang Dibaca:</strong> {baca}</p>
        <p><strong>Ingin Dibeli:</strong> {beli}</p>
        <Link to="/" className="button-link">🏠︎</Link>
      </div>
    </div>
  );
};

export default Stats;