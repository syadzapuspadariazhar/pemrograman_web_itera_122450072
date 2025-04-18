import React, { useContext, useState } from 'react';
import BookContext from '../../context/BookContext';
import BookForm from '../BookForm/BookForm';
import BookFilter from '../BookFilter/BookFilter';
import './BookList.css';

const BookList = () => {
  const { books, dispatch } = useContext(BookContext);
  const [editBook, setEditBook] = useState(null);
  const [filter, setFilter] = useState('');

  // Menghapus buku berdasarkan id
  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_BOOK', payload: id });
  };

  // Memasukkan buku ke mode edit
  const handleEdit = (book) => {
    setEditBook(book);
  };

  // Keluar dari mode edit setelah selesai
  const handleFinishEdit = () => {
    setEditBook(null);
  };

  // Filter buku berdasarkan status
  const filteredBooks = filter ? books.filter((book) => book.status === filter) : books;

  return (
    <div className="book-list">
      <BookFilter selected={filter} onChange={setFilter} />
      {editBook && <BookForm currentBook={editBook} onFinish={handleFinishEdit} />}
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> oleh {book.author} [{book.status}]
            <button onClick={() => handleEdit(book)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;