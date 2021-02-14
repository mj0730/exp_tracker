import PropTypes from 'prop-types';
import styles from '../styles/ViewContainer.module.css';
import uniqid from 'uniqid';

function ViewContainer({ data }) {
  //placeholder data
  data = {
    offerData: ['abc', 'def', 'ghi', 'jkl', 'mno'],
    inputData: [
      {
        agency: 'Mil',
        facility: 'ABC',
        type: 'Tower',
      },
      {
        agency: 'Mil',
        facility: 'ABC',
        type: 'Tower',
      },
      {
        agency: 'Mil',
        facility: 'ABC',
        type: 'Tower',
      },
    ],
    offerYear: '2020',
  };

  return (
    <article className={styles.viewContainer}>
      <div className={styles.year}>{data.offerYear}</div>
      <div className={styles.expListContainer}>
        <h3 className={styles.expHeading}>Experience</h3>
        <ul className={styles.expList}>
          {data.inputData.map((item) => (
            <li key={uniqid()}>
              {item.agency}
              {item.facility}
              {item.type}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.offerListContainer}>
        <h3 className={styles.offerHeading}>Offers</h3>
        <ul className={styles.offerList}>
          {data.offerData.map((item) => (
            <li key={uniqid()}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ViewContainer;

ViewContainer.propTypes = {
  data: PropTypes.object.isRequired,
};
