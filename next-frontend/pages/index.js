import { useState } from 'react';
import Head from 'next/head';
import ExpContainer from '../components/ExpContainer';
import OfferContainer from '../components/OfferContainer';
import LinearStepper from '../components/LinearStepper';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [step, setStep] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Previous Experience Tracker</h1>

        <p className={styles.description}>Get started by adding your information.</p>
        {step == 0 ? <ExpContainer /> : <OfferContainer />}
        <LinearStepper setIndexPageStep={setStep}></LinearStepper>
      </main>

      <footer className={styles.footer}>
        <a href='https://pointsixtyfive.com' target='_blank' rel='noopener noreferrer'>
          <img src='./circle_logo.svg' height='24px' width='24px' alt='pointSixtyFive logo' />
          pointSixtyFive.com
        </a>
      </footer>
    </div>
  );
}
