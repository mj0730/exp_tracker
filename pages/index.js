import Link from 'next/link';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import Layout from '../components/Layout';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PageviewIcon from '@material-ui/icons/Pageview';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <Layout>
      <Typography variant='h1' className={styles.title}>
        Previous Experience Tracker
      </Typography>
      <Grid container direction='row' justify='center' alignItems='center' className={styles.container}>
        <Grid item>
          <Link href='/add'>
            <Card className={styles.homeCard}>
              <CardContent>
                <Typography className={styles.cardTitle} gutterBottom>
                  <AddBoxIcon style={{ fontSize: '5rem' }} />
                </Typography>
                <Typography className={styles.cardText} varient='caption'>
                  Add Your Data
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item>
          <Link href='/view'>
            <Card className={styles.homeCard}>
              <CardContent>
                <Typography className={styles.cardTitle}>
                  <PageviewIcon style={{ fontSize: '5rem' }} />
                </Typography>
                <Typography className={styles.cardText} varient='caption'>
                  View Database
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Home;
