import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import LinearStepper from '../components/LinearStepper';
import FormContainer from '../components/FormContainer';
import styles from '../styles/Add.module.css';
import { Typography } from '@material-ui/core';

function Add() {
  const [step, setStep] = useState(0);
  const [submitted, setsubmitted] = useState(false);

  const instructions = [
    'Get started by adding your information.',
    'Add all facilities you were offered to select from.',
    'Verify your information is correct.',
    'Submission is complete. Thank you!',
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Previous Experience Tracker</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main}>
          <Typography variant='h1' className='title' gutterBottom>
            Previous Experience Tracker
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            {instructions[step]}
          </Typography>

          <FormContainer step={step} setStep={setStep} submitted={submitted} setsubmitted={setsubmitted} />
          <LinearStepper step={step} setIndexPageStep={setStep} submitted={submitted}></LinearStepper>
        </main>
      </div>
    </Layout>
  );
}

export default Add;
