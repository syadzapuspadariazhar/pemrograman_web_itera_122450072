import { useReducer, useEffect } from 'react';

// Custom hook untuk menyimpan data di localStorage
function useLocalStorage(key, defaultValue) {
  // Menginisialisasi state dari localStorage jika ada, atau menggunakan nilai default
  const initializer = () => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  };

  // Reducer untuk menangani aksi tambah, ubah, dan hapus buku
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return [...state, action.payload];
      case 'UPDATE_BOOK':
        return state.map(book => book.id === action.payload.id ? action.payload : book);
      case 'DELETE_BOOK':
        return state.filter(book => book.id !== action.payload);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, defaultValue, initializer);

  // Menyimpan perubahan state ke localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorage;