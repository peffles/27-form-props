'use strict';

import React from 'react';
import { render as reactDomRender } from 'react-dom';
import superagent from 'superagent';
import SearchResults from './components/search-results/searchResults';
import SearchForm from './components/search-form/searchForm';
import './style/main.scss';

const apiUrl = 'http://www.reddit.com/r';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: '',
      resultsError: '',
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidUpdate() {
    console.log('__UPDATE STATE__', this.state);
  }

  updateState(board, number) {
    return superagent.get(`${apiUrl}/${board}.json?limit=${number}`)
      .then((response) => {
        this.setState({
          results: response.body,
          resultsError: null,
        });
        this.componentDidUpdate();
      })
      .catch((err) => {
        this.setState({
          results: null,
          resultsError: err,
        });
      });
  }

  render() {
    return (
      <section>
        <h2>Reddit Search - Lab 27</h2>
        <h3>Please enter the subreddit you would like to pull posts from</h3>
        <SearchForm updateState={this.updateState} errorCaught={this.state.resultsError}/>
        <div>
          <SearchResults results={this.state.results} error={this.state.resultsError}/>
        </div>
      </section>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
reactDomRender(<App />, container);
