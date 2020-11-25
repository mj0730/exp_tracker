import { MenuItem, InputLabel, FormControl, Box } from '@material-ui/core';
import { Field } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import styles from '../styles/ExpInput.module.css';

const ExpLineItem = ({ values, handleChange }) => {
  return (
    <Box className={styles.inputListItem}>
      <FormControl>
        <InputLabel id='agency'>Agency</InputLabel>
        <Field name='agency' component={Select} labelId='agency' multiple={false}>
          <MenuItem value='mil'>Military</MenuItem>
          <MenuItem value='contract'>Contract</MenuItem>
          <MenuItem value='faa'>FAA</MenuItem>
        </Field>
      </FormControl>
      <FormControl>
        <Field name='facility' component={TextField} label='Facility' value={values.facility} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <InputLabel id='type'>Type</InputLabel>
        <Field name='type' component={Select} labelId='type' multiple={false}>
          <MenuItem value='tower'>Tower</MenuItem>
          <MenuItem value='approach'>Approach</MenuItem>
          <MenuItem value='facsac'>FACSAC</MenuItem>
          <MenuItem value='other'>Other</MenuItem>
        </Field>
      </FormControl>
    </Box>
  );
};

export default ExpLineItem;
