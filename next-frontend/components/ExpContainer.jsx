import { useState, useEffect } from 'react';
import ExpLineItem from './ExpLineItem';
import { FieldArray, Field } from 'formik';
import { TextField, Select } from 'formik-material-ui';

//Components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { MenuItem, InputLabel, FormControl } from '@material-ui/core';

//Icons
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

//Style
import styles from '../styles/ExpInput.module.css';

const ExpContainer = ({ values, handleChange }) => {
  const blankLine = { agency: '', facility: '', type: '' };
  // const [count, setCount] = useState(2);
  // const [inputList, setInputList] = useState([<ExpLineItem key='1' values={values} handleChange={handleChange} />]);
  // const [dataLength, setDataLength] = useState(1);
  const [disableDelete, setDisableDelete] = useState(true);
  const [disableAdd, setDisableAdd] = useState(false);

  useEffect(() => {
    console.log(values.inputData.length);
    values.inputData.length === 5 ? setDisableAdd(true) : setDisableAdd(false);
    values.inputData.length === 1 ? setDisableDelete(true) : setDisableDelete(false);
  }, [values.inputData.length]);

  return (
    <>
      <Box className={styles.inputList}>
        <FieldArray name='inputData'>
          {({ insert, remove, push }) => (
            <>
              <Box id='field-array'>
                {values.inputData.map((item, i) => {
                  return (
                    <Box key={i} className={styles.inputListItem}>
                      <FormControl>
                        <InputLabel htmlFor={`inputData.${i}.agency`}>Agency</InputLabel>
                        <Field name={`inputData.${i}.agency`} component={Select} labelId='agency' multiple={false}>
                          <MenuItem value='mil'>Military</MenuItem>
                          <MenuItem value='contract'>Contract</MenuItem>
                          <MenuItem value='faa'>FAA</MenuItem>
                        </Field>
                      </FormControl>
                      <FormControl>
                        <Field
                          name={`inputData.${i}.facility`}
                          component={TextField}
                          label='Facility'
                          // value={values.facility} remove if everything is working
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl>
                        <InputLabel htmlFor={`inputData.${i}.type`}>Type</InputLabel>
                        <Field name={`inputData.${i}.type`} component={Select} labelId='type' multiple={false}>
                          <MenuItem value='tower'>Tower</MenuItem>
                          <MenuItem value='approach'>Approach</MenuItem>
                          <MenuItem value='facsac'>FACSAC</MenuItem>
                          <MenuItem value='other'>Other</MenuItem>
                        </Field>
                      </FormControl>
                    </Box>
                  );
                })}
              </Box>
              <Box>
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

{
  /* <Box className={styles.controls}>
  <Button
    startIcon={<AddCircleOutlineIcon />}
    color='default'
    onClick={push({ agency: '', facility: '', type: '' })}
    disabled={disableAdd}
  >
    Add Experience
  </Button>
  <Button
    startIcon={<HighlightOffIcon />}
    color='default'
    onClick={() => remove(inputData.length - 1)}
    disabled={disableDelete}
  >
    Delete
  </Button>
</Box>; */
}
