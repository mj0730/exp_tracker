import PropTypes from 'prop-types';
import { useState } from 'react';
import ViewLineItem from './ViewLineItem';
import ViewPagination from './ViewPagination';
import { Container, Paper } from '@material-ui/core';
import styles from '../styles/ViewContainer.module.css';
import uniqid from 'uniqid';

function ViewContainer({ data, filter }) {
  const [page, setPage] = useState(1);

  function handlePageChange(e, val) {
    setPage(val);
  }

  let filteredData = [];
  if (filter.length == 3) {
    filteredData = data.filter((x) => {
      let facList = [];
      x.inputData.forEach((item) => facList.push(item.facility));
      return facList.includes(filter) ? true : false;
    });
  }

  const totalRecords = data.length;
  const itemsPerPage = 10;
  const pageCount = Math.ceil(totalRecords / itemsPerPage);

  return (
    <Container>
      <Paper className={styles.paperItem} elevation={0}>
        {filter.length !== 3 &&
          data.map((item) => {
            return <ViewLineItem item={item} key={uniqid()} />;
          })}

        {filter.length == 3 && filteredData.length == 0 ? (
          <p style={{ textAlign: 'center' }}>There were no matches.</p>
        ) : (
          filteredData.map((item) => {
            return <ViewLineItem item={item} key={uniqid()} />;
          })
        )}

        <div className={styles.total}>Total Records: {data.length}</div>

        <ViewPagination pageCount={pageCount} page={page} handlePageChange={handlePageChange} />
      </Paper>
    </Container>
  );
}

export default ViewContainer;

ViewContainer.propTypes = {
  data: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};
