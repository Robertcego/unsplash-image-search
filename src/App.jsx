import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { searchPhotos } from './actions';

import Masonry from '@mui/lab/Masonry';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const searchPhoto = useSelector((state) => state.searchPhotos);
  const [search, setSearch] = useState('Cats');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPhotos(search));
  };

  console.log(searchPhoto.results);

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
      <section>
        <Masonry columns={4} spacing={2}>
          {searchPhoto.results?.map((result) => (
            <img
              key={result.id}
              src={result.urls.regular}
              alt={result.alt_description}
            />
          ))}
        </Masonry>
      </section>
    </>
  );
}

export default App;
