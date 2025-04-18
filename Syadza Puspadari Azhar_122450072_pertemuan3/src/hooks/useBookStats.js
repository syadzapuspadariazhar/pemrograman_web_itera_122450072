import { useContext, useMemo } from 'react';
import BookContext from '../context/BookContext';

// Custom hook untuk menghitung statistik dari koleksi buku
const useBookStats = () => {
  const { books } = useContext(BookContext);

  return useMemo(() => {
    const total = books.length;
    const milik = books.filter(book => book.status === 'milik').length;
    const baca = books.filter(book => book.status === 'baca').length;
    const beli = books.filter(book => book.status === 'beli').length;

    return { total, milik, baca, beli };
  }, [books]);
};

export default useBookStats;