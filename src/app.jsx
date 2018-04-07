import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Content from './components/Content';

const App = props => (
  <div>
    <h1>Hello Wold! {props.text}</h1>
    <Content />
  </div>
);

App.propTypes = {
  text: PropTypes.string.isRequired
};

ReactDOM.render(<App text="ssss" />, document.getElementById('app'));
