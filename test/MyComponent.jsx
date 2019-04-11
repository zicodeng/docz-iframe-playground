import React from 'react';
import PropTypes from 'prop-types';

import styles from './MyComponent.css';

const MyComponent = ({ text }) => (
  <div className={styles.container}>
    <h2>{text}</h2>
  </div>
);

MyComponent.propTypes = {
  text: PropTypes.string,
};

export default MyComponent;
