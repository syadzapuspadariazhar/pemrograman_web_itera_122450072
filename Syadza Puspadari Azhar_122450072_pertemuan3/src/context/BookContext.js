import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';

// Membuat konteks global untuk berbagi state buku ke seluruh komponen
const BookContext = createContext();

export function BookProvider({ children }) {
  // Menggunakan custom hook untuk menyimpan dan mengelola state buku dengan localStorage
  const [books, dispatch] = useLocalStorage('books', []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
}

BookProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default BookContext;