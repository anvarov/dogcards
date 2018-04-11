import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MainPage from './components/MainPage';

const App = props => (
  <div>
    <MainPage />
  </div>
);

// App.propTypes = {
//   text: PropTypes.string.isRequired
// };

ReactDOM.render(<App />, document.getElementById('app'));
