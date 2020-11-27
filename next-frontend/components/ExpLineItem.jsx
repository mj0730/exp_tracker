import { MenuItem, InputLabel, FormControl, Box } from '@material-ui/core';
import { Field } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import styles from '../styles/ExpInput.module.css';

const ExpLineItem = ({ i, handleChange }) => {
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
        <Field name={`inputData.${i}.facility`} component={TextField} label='Facility' onChange={handleChange} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor={`inputData.${i}.type`}>Type</InputLabel>
        <Field name={`inputData.${i}.type`} component={Select} labelId='type' multiple={false}>
          <MenuItem value='tower'>Tower</MenuItem>
          <MenuItem value='approach'>Approach</MenuItem>
          <MenuItem value='updown'>Up/Down</MenuItem>
          <MenuItem value='center'>Center</MenuItem>
          <MenuItem value='facsac'>FACSAC</MenuItem>
          <MenuItem value='other'>Other</MenuItem>
        </Field>
      </FormControl>
    </Box>
  );
};

export default ExpLineItem;
