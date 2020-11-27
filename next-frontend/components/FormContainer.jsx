import { Formik, Form } from 'formik';
import { Box, LinearProgress } from '@material-ui/core';
import ExpContainer from './ExpContainer';
import OfferContainer from './OfferContainer';
import Submit from './Submit';
import * as Yup from 'yup';
import styles from '../styles/FormContainer.module.css';

const facRegex = /^[a-zA-Z]\d{2}|[a-zA-Z]{3}$/;
const yearRegex = /[20]\d{2}/;
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
  offerYear: Yup.string().matches(yearRegex, 'Please use 4-digit year').required('Please add the year of your offer'),
});

function FormContainer({ step }) {
  const initialValues = {
    inputData: [{ agency: '', facility: '', type: '' }],
    offerData: [],
    offerYear: '',
  };

  function submit(values, { setSubmitting }) {
    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 500);
  }

  return (
    <Box className={styles.formContainer}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submit}>
        {({ values, touched, handleChange, handleSubmit, submitForm, isSubmitting }) => (
          <Form className={styles.form} onSubmit={handleSubmit}>
            {step == 0 && <ExpContainer values={values} handleChange={handleChange} />}
            {step == 1 && <OfferContainer values={values} handleChange={handleChange} touched={touched} />}
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
