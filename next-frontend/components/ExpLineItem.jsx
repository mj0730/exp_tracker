import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Field, Formik, Form, useFormik } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import styles from '../styles/ExpInput.module.css';

const validate = (values) => {
  const errors = {};
  if (!values.facility) {
    errors.facility = 'Required';
  } else if (values.facility.length != 3) {
    errors.facility = 'Must be 3 characters';
  }

  if (!values.agency) {
    errors.agency = 'Required';
  }

  if (!values.type) {
    errors.type = 'Required';
  }

  return errors;
};

const ExpLineItem = () => {
  const formik = useFormik({
    initialValues: {
      facility: '',
      org: '',
      type: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  function handleFacilityValue(e) {}

  return (
    <div className={styles.item}>
      <Formik initialValues={formik.initialValues}>
        <Form className={styles.form}>
          <FormControl>
            <InputLabel id='agency'>Agency</InputLabel>
            <Field name='agency' component={Select} labelId='agency' multiple={false}>
              <MenuItem value='mil'>Military</MenuItem>
              <MenuItem value='contract'>Contract</MenuItem>
              <MenuItem value='faa'>FAA</MenuItem>
            </Field>
          </FormControl>
          <FormControl>
            <Field
              name='facility'
              component={TextField}
              label='Facility'
              value={formik.values.facility}
              onChange={formik.handleChange}
            />
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
        </Form>
      </Formik>
    </div>
  );
};

export default ExpLineItem;
