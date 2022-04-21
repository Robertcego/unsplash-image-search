import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { searchPhotos } from './actions';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const searchPhoto = useSelector((state) => state.searchPhotos);
  const [search, setSearch] = useState('cat');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPhotos(search));
  };

  return (
    <>
      <h1>Image Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search an image'
          value={search}
          onChange={handleSearch}
        />
      </form>
    </>
  );
}

export default App;
