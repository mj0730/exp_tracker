import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ViewLineItem from './ViewLineItem';
import ViewPagination from './ViewPagination';
import { Container, Paper } from '@material-ui/core';
import styles from '../styles/ViewContainer.module.css';
import uniqid from 'uniqid';

function ViewContainer({ data, filter }) {
  const totalRecords = data.length;
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(Math.ceil(totalRecords / itemsPerPage));
  const [currentList, setcurrentList] = useState(data);

  useEffect(() => {
    if (filter === '') {
      setcurrentList(data);
      setPageCount(Math.ceil(totalRecords / itemsPerPage));
    } else if (filter.length == 3) {
      const filteredData = data.filter((x) => {
        let facList = [];
        x.inputData.forEach((item) => facList.push(item.facility));
        return facList.includes(filter) ? true : false;
      });
      setcurrentList(filteredData);
      setPageCount(Math.ceil(filteredData.length / itemsPerPage));
      setPage(1);
    }
  }, [filter]);

  function handlePageChange(e, val) {
    setPage(val);
  }

  return (
    <Container>
      <Paper className={styles.paperItem} elevation={0}>
        {currentList.length == 0 ? (
          <p style={{ textAlign: 'center' }}>There were no matches.</p>
        ) : (
          currentList.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item) => {
            return <ViewLineItem item={item} key={uniqid()} />;
          })
        )}

        <div className={styles.total}>
          Records Found: {currentList.length} | Total Records: {totalRecords}
        </div>

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
