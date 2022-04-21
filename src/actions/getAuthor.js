import axios from 'axios';

export default function getAuthor(author) {
  return async function (dispatch) {
    const response = await axios.get(
      `https://api.unsplash.com/users/${author}}?client_id=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    const json = response.data;
    dispatch({
      type: 'GET_AUTHOR',
      payload: json,
    });
  };
}
