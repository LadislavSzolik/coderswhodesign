import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CodersWhoDesign</title>
        <meta name="description" content="A communitiy of status quo challengers" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Coders who design</h1>

        <p className={styles.description}>
          We are preparing a movement connecting all coders who want more.
        </p>

        <form
          className={styles.signUpFrom}
          name="earlyaccess"
          method="POST"
          data-netlify="true"
          action="success"
          encType="application/x-www-form-urlencoded"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="earlyaccess" />
          <h2 className={styles.subTitle}>Get early updates</h2>
          <p className={styles.description}>
            Sign up to get notified about our progress.
          </p>
          <p className={styles.description}>No b*llsh*t ads and nonsense mails.</p>
          <p>
            <label>
              Email <input type="email" name="email" />
            </label>
          </p>
          <p>
            <button type="submit">Sign me up</button>
          </p>
        </form>
      </main>
    </div>
  );
}
