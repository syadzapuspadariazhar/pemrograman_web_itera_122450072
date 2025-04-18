import React from 'react';
import PropTypes from 'prop-types';
import './BookFilter.css';

// Komponen dropdown filter berdasarkan status buku
const BookFilter = ({ selected, onChange }) => {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)} className="book-filter">
      <option value="">Semua</option>
      <option value="milik">Milik</option>
      <option value="baca">Sedang Dibaca</option>
      <option value="beli">Ingin Dibeli</option>
    </select>
  );
};

BookFilter.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default BookFilter;