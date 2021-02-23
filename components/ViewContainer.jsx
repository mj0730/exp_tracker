import PropTypes from 'prop-types';
import ViewLineItem from './ViewLineItem';
import { Container, Paper } from '@material-ui/core';
import styles from '../styles/ViewContainer.module.css';
import uniqid from 'uniqid';

function ViewContainer({ data, filter }) {
  let filteredData = [];
  if (filter.length == 3) {
    filteredData = data.filter((x) => {
      let facList = [];
      x.inputData.forEach((item) => facList.push(item.facility));
      return facList.includes(filter) ? true : false;
    });
  }

  return (
    <Container>
      <Paper className={styles.paperItem} elevation={3}>
        {filter.length !== 3 &&
          data.map((item) => {
            return <ViewLineItem item={item} key={uniqid()} />;
          })}

        {filter.length == 3 && filteredData.length == 0 ? (
          <p>There were no matches.</p>
        ) : (
          filteredData.map((item) => {
            return <ViewLineItem item={item} key={uniqid()} />;
          })
        )}
      </Paper>
    </Container>
  );
}

export default ViewContainer;

ViewContainer.propTypes = {
  data: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};
