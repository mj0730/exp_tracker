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
  offerData: Yup.array()
    .of(
      Yup.string()
        .matches(facRegex, 'Must be 3 character ID')
        .min(3, 'Must be exactly 3 characters')
        .max(3, 'Must be exactly 3 characters')
        .required('All fields required')
    )
    .required('All fields required'),
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

    await fetch(`/api/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Writing to database failed');
        }
        setsubmitted(true);
        setSubmitting(false);
        setStep(step + 1);
        resetForm();
      })
      .catch((error) => {
        console.error('Error:', error);
        alert(
          'There was an error submitting to the database. Please report the error on the pointsixtyfive.com forums.'
        );
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
            {step == 3 && <p className={styles.center}>Your information has been added to the database.</p>}
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
