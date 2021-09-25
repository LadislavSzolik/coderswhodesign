import React from 'react';
import styles from '../styles/Success.module.css';

function Success() {
  return (
    <div className={styles.container}>
      <h1>Thanks for joining! You will hear from us.</h1>
      <a href="/">Back to home</a>
    </div>
  );
}

export default Success;
