import { Component } from 'react';
import PropTypes from "prop-types"
import styles from "./searc-bar.module.css"


class SearchBar extends Component{
    state = {
        search: '',
      };
      handleChange = e => {
        this.setState({ search: e.target.value });
      };
      handleSubmit = e => {
        e.preventDefault();
        if (this.state.search.trim() !== '') {
          this.props.onSubmit(this.state.search);
          // this.setState({ search: '' });
        }
      };
    render() {
        return (
          <header className={styles.SearchBar}>
            <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
              <button type="submit" className={styles.button}>
                <span className={styles.Button_label}>Search</span>
              </button>
    
              <input
                className={styles.input}
                type="text"
                autoComplete="off"
                autoFocus
                onChange={this.handleChange}
                value={this.state.search}
                placeholder=""
              />
            </form>
          </header>
        );
      }
    }



export  default SearchBar;


SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };