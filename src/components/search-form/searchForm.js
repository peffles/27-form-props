'use strict';

import React from 'react';
import '../../style/main.scss';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFormBoard: 'gottheories',
      searchFormLimit: '10',
    };
    this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleSearchFormChange = this.handleSearchFormChange.bind(this);
  }

  handleSearchFormChange(event) {
    this.setState({ searchFormBoard: event.target.value });
  }

  handleLimitChange(event) {
    this.setState({ searchFormLimit: event.target.value });
  }

  handleSearchFormSubmit(event) {
    event.preventDefault();
    this.props.updateState(this.state.searchFormBoard, this.state.searchFormLimit);
  }

  render() {
    return (
      <section>
        <form 
        className= { this.props.errorCaught ? 'error' : 'search-form' }
        onSubmit={this.handleSearchFormSubmit
        }>
          <div>
            <input
              type="text"
              name="boardSearch"
              placeholder="Reddit Board Search"
              value={this.state.searchFormBoard}
              onChange={this.handleSearchFormChange}
            />
          </div>
          <div>
          <h3>Please enter the number of posts you would like to pull</h3>
            <input
              type="text"
              name="searchLimit"
              placeholder="Number of Results"
              value={this.state.searchFormLimit}
              onChange={this.handleLimitChange}
              min='1'
              max='100'
            />
          </div>
            <button type="submit">Retrieve Posts</button>
        </form>
      </section>
    );
  }
};
export default SearchForm;