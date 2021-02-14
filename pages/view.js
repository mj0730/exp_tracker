import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Submission from '../db/mongodb';
import ViewContainer from '../components/ViewContainer';
import ViewSearchBar from '../components/ViewSearchBar';
import styles from '../styles/View.module.css';

function View({ data }) {
  const [query, setQuery] = useState('');

  console.log(data);

  if (query.length == 3) {
    useEffect(() => {}, [query]);
  }

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <ViewSearchBar query={query} setQuery={setQuery} />
      </nav>
      <ViewContainer data={data}></ViewContainer>
    </main>
  );
}

export async function getStaticProps() {
  const data = await Submission.find();

  return {
    props: { data: data },
    revalidate: 5,
  };
}

export default View;

View.propTypes = {
  data: PropTypes.array.isRequired,
};
