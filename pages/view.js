import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Submission from '../db/mongodb';
import ViewContainer from '../components/ViewContainer';
import ViewSearchBar from '../components/ViewSearchBar';
import styles from '../styles/View.module.css';
import NavDrawer from '../components/NavDrawer';

function View({ data }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  //need to move the pagination state here, so it can be reset by the search bar clearall function
  useEffect(() => {
    if (query.length == 3) {
      setFilter(query);
    }
  }, [query]);

  return (
    <div>
      <NavDrawer />
      <main className={styles.main}>
        <nav className={styles.nav}>
          <ViewSearchBar query={query} setQuery={setQuery} setFilter={setFilter} />
        </nav>
        <ViewContainer data={data} filter={filter} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const data = await Submission.find({}, 'offerData inputData offerYear -_id');
  const dataFormattedForNext = JSON.parse(JSON.stringify(data));
  return {
    props: { data: dataFormattedForNext },
    revalidate: 5,
  };
}

export default View;

View.propTypes = {
  data: PropTypes.array.isRequired,
};
