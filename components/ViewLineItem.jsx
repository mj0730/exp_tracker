import PropTypes from 'prop-types';
import { Box, Card, CardContent, Chip, Container, Typography } from '@material-ui/core';
import styles from '../styles/ViewLineItem.module.css';
import uniqid from 'uniqid';

function ViewLineItem({ item }) {
  return (
    <Container>
      <Card varient='outlined' className={styles.muiCard}>
        <CardContent>
          <Typography varient='h6'>{item.offerYear}</Typography>
          <Box className={styles.expListContainer}>
            <Typography varient='h3' className={styles.expHeading}>
              Experience
            </Typography>
            {item.inputData.map((data) => (
              <Box key={uniqid()}>
                <Chip variant='outlined' color='primary' size='small' label={data.agency} />
                <Chip variant='outlined' color='primary' size='small' label={data.facility} />
                <Chip variant='outlined' color='primary' size='small' label={data.type} />
              </Box>
            ))}
          </Box>
          <Box className={styles.offerListContainer}>
            <Typography varient='h3' className={styles.offerHeading}>
              Offers
            </Typography>
            {item.offerData.map((data) => (
              <Chip key={uniqid()} color='primary' size='small' label={data} />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ViewLineItem;

ViewLineItem.propTypes = {
  item: PropTypes.object.isRequired,
};
