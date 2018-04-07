import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Yay'
    };
  }
  render() {
    return this.state.value;
  }
}

export default Content;

