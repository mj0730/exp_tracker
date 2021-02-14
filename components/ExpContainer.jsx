import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ExpLineItem from './ExpLineItem';
import { FieldArray } from 'formik';

//Components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

//Icons
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

//Style
import styles from '../styles/ExpInput.module.css';

const ExpContainer = ({ values, handleChange }) => {
  const blankLine = { agency: '', facility: '', type: '' };
  const [disableDelete, setDisableDelete] = useState(true);
  const [disableAdd, setDisableAdd] = useState(false);

  useEffect(() => {
    values.inputData.length === 5 ? setDisableAdd(true) : setDisableAdd(false);
    values.inputData.length === 1 ? setDisableDelete(true) : setDisableDelete(false);
  }, [values.inputData.length]);

  return (
    <>
      <Box className={styles.inputList}>
        <FieldArray name='inputData'>
          {({ remove, push }) => (
            <>
              <Box id='field-array'>
                {values.inputData.map((item, i) => {
                  return <ExpLineItem key={i} i={i} handleChange={handleChange} />;
                })}
              </Box>

              <Box className={styles.controls}>
                <Button
                  startIcon={<AddCircleOutlineIcon />}
                  color='default'
                  onClick={() => push(blankLine)}
                  disabled={disableAdd}
                >
                  Add Experience
                </Button>
                <Button
                  startIcon={<HighlightOffIcon />}
                  color='default'
                  onClick={() => remove(values.inputData.length - 1)}
                  disabled={disableDelete}
                >
                  Delete
                </Button>
              </Box>
            </>
          )}
        </FieldArray>
      </Box>
    </>
  );
};

export default ExpContainer;

ExpContainer.propTypes = {
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
};
