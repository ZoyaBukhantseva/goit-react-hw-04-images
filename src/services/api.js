export const fetchImage = (search, page, signal) => {
    return fetch(
      `https://pixabay.com/api/?q=${search}&page=${page}&key=32105998-e232bd24185cde365a6aebf0a&image_type=photo&orientation=horizontal&per_page=12`,
      { signal }
    );
  };
  const API = {
    fetchImage,
  };
  export default API;
