import { Field, Formik, Form } from 'formik';
import { TextField } from 'formik-material-ui';

const MainForm = () => {
  const initialValues = {};

  return (
    <div>
      <Formik initialValues={initialValues}>
        <Form>
          <Field name='filed1' component={TextField} label='Field1' />
          <Field name='filed2' component={TextField} label='Field3' />
          <Field name='filed3' component={TextField} label='Field2' />
          <Field name='filed4' component={TextField} label='Field4' />
        </Form>
      </Formik>
    </div>
  );
};

export default MainForm;
