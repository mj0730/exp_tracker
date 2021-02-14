import PropTypes from 'prop-types';
import styles from '../styles/ViewLineItem.module.css';
import uniqid from 'uniqid';

function ViewLineItem({ item }) {
  return (
    <article className={styles.ViewLineItem}>
      <div className={styles.year}>{item.offerYear}</div>
      <div className={styles.expListContainer}>
        <h3 className={styles.expHeading}>Experience</h3>
        <ul className={styles.expList}>
          {item.inputData.map((data) => (
            <li key={uniqid()}>
              {data.agency}
              {data.facility}
              {data.type}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.offerListContainer}>
        <h3 className={styles.offerHeading}>Offers</h3>
        <ul className={styles.offerList}>
          {item.offerData.map((data) => (
            <li key={uniqid()}>{data}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ViewLineItem;

ViewLineItem.propTypes = {
  item: PropTypes.object.isRequired,
};
