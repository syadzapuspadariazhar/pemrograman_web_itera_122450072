import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import BookContext from '../../context/BookContext';
import './BookForm.css';

const BookForm = ({ currentBook, onFinish }) => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('milik');
  const [error, setError] = useState('');

  // Mengisi form saat mode edit aktif
  useEffect(() => {
    if (currentBook) {
      setTitle(currentBook.title);
      setAuthor(currentBook.author);
      setStatus(currentBook.status);
    }
  }, [currentBook]);

  // Menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      setError('Judul dan Penulis harus diisi.');
      return;
    }

    const bookData = {
      id: currentBook ? currentBook.id : Date.now(),
      title,
      author,
      status
    };

    // Menentukan apakah menambahkan buku baru atau mengupdate yang lama
    dispatch({
      type: currentBook ? 'UPDATE_BOOK' : 'ADD_BOOK',
      payload: bookData
    });

    // Reset form
    setTitle('');
    setAuthor('');
    setStatus('milik');
    setError('');
    if (onFinish) onFinish();
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      {error && <p className="error">{error}</p>}
      <input type="text" placeholder="Judul" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Penulis" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="milik">Milik</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <button type="submit">{currentBook ? 'Update' : 'Tambah'} Buku</button>
    </form>
  );
};

BookForm.propTypes = {
  currentBook: PropTypes.object,
  onFinish: PropTypes.func
};

export default BookForm;