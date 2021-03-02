import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import dbConnect from '../db/mongodb';
import Submission from '../db/schema';
import ViewContainer from '../components/ViewContainer';
import ViewSearchBar from '../components/ViewSearchBar';
import styles from '../styles/View.module.css';
import NavDrawer from '../components/NavDrawer';

function View({ data }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

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
  await dbConnect();
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
