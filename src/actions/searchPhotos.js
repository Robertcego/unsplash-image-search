export default function (query) {
  return async function (dispatch) {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    const json = response.data;
    dispatch({
      type: SEARCH_PHOTOS,
      payload: json,
    });
  };
}
