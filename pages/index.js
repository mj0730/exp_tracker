import Link from 'next/link';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import NavDrawer from '../components/NavDrawer';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PageviewIcon from '@material-ui/icons/Pageview';
import styles from '../styles/Home.module.css';

function Home() {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div>
      <NavDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />
      <Typography varient='h1' className={styles.title}>
        Previous Experience Tracker
      </Typography>
      <Grid container direction='row' justify='center' alignItems='center' spacing={3}>
        <Grid item>
          <Link href='/add'>
            <Card className={styles.homeCard}>
              <CardContent>
                <Typography className={styles.cardTitle} gutterBottom>
                  <AddBoxIcon style={{ fontSize: '5rem' }} />
                  <Typography className={styles.cardText} varient='caption'>
                    Add Your Data
                  </Typography>
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
                  <Typography className={styles.cardText} varient='caption'>
                    View Database
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
