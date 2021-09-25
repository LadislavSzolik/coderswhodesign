import React from 'react';
import Link from 'next/link';
import styles from '../styles/Success.module.css';

function Success() {
  return (
    <div className={styles.container}>
      <h1>Thanks for joining! You will hear from us.</h1>

      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
}

export default Success;
