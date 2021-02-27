import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '.5rem',
  },
});

function ViewPagination({ pageCount }) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Pagination count={pageCount} variant='outlined' color='primary' />
    </Container>
  );
}

export default ViewPagination;

ViewPagination.propTypes = {
  pageCount: PropTypes.number,
};
