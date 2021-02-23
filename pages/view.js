import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Submission from '../db/mongodb';
import ViewContainer from '../components/ViewContainer';
import ViewSearchBar from '../components/ViewSearchBar';
import ViewHelp from '../components/ViewHelp';
import styles from '../styles/View.module.css';

function View({ data }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (query.length == 3) {
      setFilter(query);
    }
  }, [query]);

  return (
    <main className={styles.main}>
      <ViewHelp className={styles.help} />
      <nav className={styles.nav}>
        <ViewSearchBar query={query} setQuery={setQuery} setFilter={setFilter} />
      </nav>
      <ViewContainer data={data} filter={filter} />
    </main>
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
