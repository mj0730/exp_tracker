import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Chip, Container, Divider, Typography } from '@material-ui/core';
import uniqid from 'uniqid';

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  muiCard: {
    marginBottom: '1em',
    backgroundColor: '#f8f8ff',
  },
  muiChip: {
    marginRight: theme.spacing(0.5),
    minWidth: 73,
  },
  muiBox: {
    marginBottom: theme.spacing(1),
  },
}));

function ViewLineItem({ item }) {
  const classes = useStyles();

  return (
    <Container>
      <Card varient='outlined' className={classes.muiCard}>
        <CardContent>
          <Typography varient='h3' gutterBottom>
            {item.offerYear}
          </Typography>

          <Box>
            <Typography varient='h3' gutterBottom>
              Experience
            </Typography>
            {item.inputData.map((data) => (
              <Box className={classes.muiBox} key={uniqid()}>
                <Chip
                  className={classes.muiChip}
                  variant='outlined'
                  color='primary'
                  size='small'
                  label={data.facility.toUpperCase()}
                />
                <Chip
                  className={classes.muiChip}
                  variant='outlined'
                  color='primary'
                  size='small'
                  label={data.agency.toUpperCase()}
                />
                <Chip
                  className={classes.muiChip}
                  variant='outlined'
                  color='primary'
                  size='small'
                  label={data.type.toUpperCase()}
                />
              </Box>
            ))}
          </Box>

          <Divider />

          <Box>
            <Typography varient='h3' gutterBottom>
              Offers
            </Typography>
            {item.offerData.map((data) => (
              <Chip key={uniqid()} className={classes.muiChip} color='primary' size='small' label={data} />
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
