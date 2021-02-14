import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Box, LinearProgress } from '@material-ui/core';
import ExpContainer from './ExpContainer';
import OfferContainer from './OfferContainer';
import Submit from './Submit';
import * as Yup from 'yup';
import styles from '../styles/FormContainer.module.css';

const facRegex = /^[a-zA-Z]\d{2}|[a-zA-Z]{3}$/;
const yearRegex = /\b([20])\d{3}\b/;
const validationSchema = Yup.object().shape({
  inputData: Yup.array().of(
    Yup.object().shape({
      agency: Yup.string().required('All fields required'),
      facility: Yup.string()
        .matches(facRegex, 'Please use 3 character ID')
        .min(3, 'Must be exactly 3 characters')
        .max(3, 'Must be exactly 3 characters')
        .required('All fields required'),
      type: Yup.string().required('All fields required'),
    })
  ),
  offerData: Yup.array().of(
    Yup.string()
      .matches(facRegex, 'Must be 3 character ID')
      .min(3, 'Must be exactly 3 characters')
      .max(3, 'Must be exactly 3 characters')
      .required('All fields required')
  ),
  offerYear: Yup.string()
    .matches(yearRegex, 'Please use 4-digit year (2000 or later)')
    .required('Please add the year of your offer'),
});

function FormContainer({ step, setStep, setsubmitted }) {
  const initialValues = {
    inputData: [{ agency: '', facility: '', type: '' }],
    offerData: [],
    offerYear: '',
  };

  async function submit(values, { setSubmitting, resetForm }) {
    for (let key in values) {
      if (key.startsWith('mui')) {
        delete values[key];
      }
    }

    await fetch(`${NEXT_PUBLIC_API_URL}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(values),
    })
      .then(() => {
        setsubmitted(true);
        setSubmitting(false);
        setStep(step + 1);
        resetForm();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <Box className={styles.formContainer}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submit}>
        {({ values, touched, errors, handleChange, handleSubmit, submitForm, isSubmitting }) => (
          <Form className={styles.form} onSubmit={handleSubmit}>
            {step == 0 && <ExpContainer values={values} handleChange={handleChange} />}
            {step == 1 && (
              <OfferContainer values={values} handleChange={handleChange} touched={touched} errors={errors} />
            )}
            {step == 2 && <Submit values={values} isSubmitting={isSubmitting} submitForm={submitForm} />}
            {isSubmitting && <LinearProgress />}
            {step == 3 && <p className={styles.center}>Thank you for adding to the database.</p>}
            <pre className={styles.debug}>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default FormContainer;

FormContainer.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  setsubmitted: PropTypes.func.isRequired,
};
