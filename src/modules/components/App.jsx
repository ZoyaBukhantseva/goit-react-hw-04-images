import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./Searchbar/Searchbar";
import styles from "..//components/App.module.css"

class App extends Component {
  state = {
    searchParam: null,
  };
  handleSubmit = search => {
    this.setState({ searchParam: search });
  };
  render() {
    const { searchParam } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery searchParam={searchParam} />
      </div>
    );
  }
}

export default App;
