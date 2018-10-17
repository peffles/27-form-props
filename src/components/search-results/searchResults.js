'use strict';

import React from 'react';
import '../../style/main.scss';

module.exports = class SearchResults extends React.Component {
  render() {
    return (
      <div>
        {this.props.results ?
          <div>
            <h2>Search Results</h2>
            <ul>
              { this.props.results.data.children.map((item, index) => {
              return <li key={index}>
                <a href={item.data.url}>{item.data.title}</a>
                <p>{item.data.ups}</p>
                </li>;
              })}
            </ul>
          </div>
        :
        undefined
        }
        {this.props.error ? 
        <div>
          <h2>No results, Are you sure you entered the name correcly?</h2>
        </div>
        :
        undefined
        }
      </div>
    );
  }
};
