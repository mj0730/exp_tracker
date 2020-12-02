import { useState } from 'react';
import Head from 'next/head';
import LinearStepper from '../components/LinearStepper';
import FormContainer from '../components/FormContainer';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [step, setStep] = useState(0);
  const instructions = [
    'Get started by adding your information.',
    'Add all facilities you were offered to select from.',
    'Verify your information is correct.',
    'Submission is complete. Thank you!',
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Previous Experience Tracker</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Previous Experience Tracker</h1>
        <p className={styles.description}>{instructions[step]}</p>

        <FormContainer step={step} />
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
