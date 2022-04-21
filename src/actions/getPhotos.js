import axios from 'axios';

export default function getPhotos() {
  return async function (dispatch) {
    const response = await axios.get(
      `https://api.unsplash.com/photos?client_id=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    const json = response.data;
    dispatch({
      type: 'GET_PHOTOS',
      payload: json,
    });
  };
}
