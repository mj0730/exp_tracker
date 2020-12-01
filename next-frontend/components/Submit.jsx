import { Box, Button } from '@material-ui/core';
import styles from '../styles/Submit.module.css';

function Submit({ isSubmitting, submitForm, values }) {
  //make box display flex, move button to bottom of box, width 100%
  return (
    <Box className='submitReview'>
      <ul className={styles.inputList}>
        <li className={styles.title}>Previous Experience</li>
        {values.inputData.map((item, i) => {
          if (!item.agency || !item.facility || !item.type) {
            return null;
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
          <li className={styles.listItem}>{values.offerYear}</li>
        </ul>

        <p className={styles.title}>Facilities:</p>
        <Box className={styles.offers}>
          {values.offerData.map((item, i) => {
            return (
              <span key={i} className={styles.offerItem}>
                {item}
              </span>
            );
          })}
        </Box>
      </Box>
      <Button variant='contained' color='primary' disabled={isSubmitting} onClick={submitForm}>
        Submit
      </Button>
    </Box>
  );
}

export default Submit;
