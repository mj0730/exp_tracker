import { Formik, Form } from 'formik';
import { Box, LinearProgress } from '@material-ui/core';
import ExpContainer from './ExpContainer';
import OfferContainer from './OfferContainer';
import Submit from './Submit';
import styles from '../styles/FormContainer.module.css';

function FormContainer({ step }) {
  const initialValues = {
    inputData: [{ agency: '', facility: '', type: '' }],
  };

  function validate(values) {
    const errors = {};
    if (!values.facility) {
      errors.facility = 'A facility ID is required';
    } else if (values.facility.length != 3) {
      errors.facility = 'Must be 3 characters';
    }

    if (!values.agency) {
      errors.agency = 'Agency name is required';
    }

    if (!values.type) {
      errors.type = 'Facility type is required';
    }

    return errors;
  }

  function submit(values, { setSubmitting }) {
    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 500);
  }

  return (
    <Box className={styles.formContainer}>
      <Formik initialValues={initialValues} validate={validate} onSubmit={submit}>
        {({ values, handleChange, handleBlur, handleSubmit, submitForm, isSubmitting }) => (
          <Form className={styles.form} onSubmit={handleSubmit}>
            {step == 0 && <ExpContainer values={values} handleChange={handleChange} />}
            {step == 1 && <OfferContainer />}
            {step == 2 && <Submit isSubmitting={isSubmitting} submitForm={submitForm} />}
            {isSubmitting && <LinearProgress />}
            {step == 3 && <p>Thank you for adding to the database.</p>}
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default FormContainer;
