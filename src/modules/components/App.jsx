import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./Searchbar/Searchbar";
import css from "..//components/App.module.css"
import { useState } from 'react';



const App = () => {
  const [searchParam, setSearchParam] = useState(null);
  const handleSubmit = search => {
    setSearchParam(search);
  };
  return (
    <div className={css.App}>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery searchParam={searchParam} />
    </div>
  );
};

export default App;
