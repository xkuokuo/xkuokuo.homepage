'use strict';

import React from 'react'
import ReactDOM from 'react-dom'

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Place Holder For React Component.';
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Place Holder For React Component.
      </button>
    );
  }
}

const domContainer = document.querySelector('#react_container');
ReactDOM.render(e(LikeButton), domContainer);
