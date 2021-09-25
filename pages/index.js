import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CodersWhoDesign</title>
        <meta name="description" content="A communitiy of status quo challengers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome!</h1>

        <p className={styles.description}>
          We are preparing a movement to connect coders who want to design.
        </p>
      </main>
    </div>
  );
}
