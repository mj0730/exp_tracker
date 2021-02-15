import PropTypes from 'prop-types';
import { Box, Card, CardContent, Chip, Container, Divider, Typography } from '@material-ui/core';
import styles from '../styles/ViewLineItem.module.css';
import uniqid from 'uniqid';

function ViewLineItem({ item }) {
  return (
    <Container>
      <Card varient='outlined' className={styles.muiCard}>
        <CardContent>
          <Typography varient='h3' gutterBottom>
            {item.offerYear}
          </Typography>

          <Box>
            <Typography varient='h3' gutterBottom>
              Experience
            </Typography>
            {item.inputData.map((data) => (
              <Box className={styles.muiBox} key={uniqid()}>
                <Chip variant='outlined' color='primary' size='small' label={data.agency} />
                <Chip variant='outlined' color='primary' size='small' label={data.facility} />
                <Chip variant='outlined' color='primary' size='small' label={data.type} />
              </Box>
            ))}
          </Box>

          <Divider />

          <Box>
            <Typography varient='h3' gutterBottom>
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
