import { MenuItem } from '@material-ui/core';
import { Field, Formik, Form } from 'formik';
import { TextField, Select } from 'formik-material-ui';

const ExpLineItem = () => {
  const initialValues = {};

  return (
    <div>
      <Formik initialValues={initialValues}>
        <Form>
          <Field name='org' component={Select} label='Organization' multiple={false}>
            <MenuItem value='mil'>Military</MenuItem>
            <MenuItem value='contract'>Contract</MenuItem>
            <MenuItem value='faa'>FAA</MenuItem>
          </Field>
          <Field name='facility' component={TextField} label='Facility' />
          <Field name='type' component={Select} label='Type' multiple={false}>
            <MenuItem value='tower'>Tower</MenuItem>
            <MenuItem value='approach'>Approach</MenuItem>
            <MenuItem value='facsac'>FACSAC</MenuItem>
            <MenuItem value='other'>Other</MenuItem>
          </Field>
        </Form>
      </Formik>
    </div>
  );
};

export default ExpLineItem;
