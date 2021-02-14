import PropTypes from 'prop-types';
import { Box, Button } from '@material-ui/core';
import styles from '../styles/Submit.module.css';

function Submit({ isSubmitting, submitForm, values }) {
  return (
    <Box className='submitReview'>
      <ul className={styles.inputList}>
        <li className={styles.title}>Previous Experience</li>
        {values.inputData.map((item, i) => {
          if (!item.agency || !item.facility || !item.type) {
            return 'Please return to step 1 and fill in all fields.';
          }

          return (
            <li key={i} className={styles.listItem}>
              <span className={`${styles.inputItem} ${styles.agency}`}>{item.agency}</span>
              <span className={`${styles.inputItem}`}>{item.facility}</span>
              <span className={`${styles.inputItem} ${styles.type}`}>{item.type}</span>
            </li>
          );
        })}
      </ul>
      <Box className={styles.offerContainer}>
        <ul className={styles.inputList}>
          <li className={styles.title}>Year offer received:</li>
          {!values.offerYear ? (
            <li>Please add go back to step 2 and add the offer year.</li>
          ) : (
            <li className={`${styles.listItem} ${styles.year}`}>{values.offerYear}</li>
          )}
        </ul>

        <p className={styles.title}>Facilities:</p>
        <Box className={styles.offers}>
          {!values.offerData.length
            ? 'Please go back to step 2 and add the facilities you were offered.'
            : values.offerData.map((item, i) => {
                return (
                  <span key={i} className={styles.offerItem}>
                    {item}
                  </span>
                );
              })}
        </Box>
      </Box>
      <Button
        variant='contained'
        color='primary'
        className={styles.submit}
        disabled={isSubmitting}
        onClick={submitForm}
      >
        Submit
      </Button>
    </Box>
  );
}

export default Submit;

Submit.propTypes = {
  isSubmitting: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  values: PropTypes.object,
};
