import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useId } from 'react';
import * as Yup from 'yup';
import css from '../LoginForm/LoginForm.module.css'
import { register } from '../../redux/auth/operations'
import { useDispatch } from 'react-redux';
import { Toaster, toast } from "react-hot-toast";

const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .min(10, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(10, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const nameFieldId = useId();
    const emailFieldId = useId();
    const passwordFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(register(values))
          .unwrap()
          .then(() => {
            toast.success("You have successfully registered!");
          })
          .catch(() => {
            toast.error("Something went wrong! Please try again!");
          });
        actions.resetForm();
      };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className={css.form}>
          <div className={css.container}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameFieldId}
            ></Field>
            <ErrorMessage
              className={css["error-text"]}
              name="name"
              component="p"
            ></ErrorMessage>
          </div>

          <div className={css.container}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field
              className={css.input}
              type="email"
              name="email"
              id={emailFieldId}
            ></Field>
            <ErrorMessage
              className={css["error-text"]}
              name="email"
              component="p"
            ></ErrorMessage>
          </div>

          <div className={css.container}>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field
              className={css.input}
              type="password"
              name="password"
              id={passwordFieldId}
            ></Field>
            <ErrorMessage
              className={css["error-text"]}
              name="password"
              component="p"
            ></ErrorMessage>
          </div>
          <button type="submit" className={css.btn}>
            Register
          </button>
        </Form>
      </Formik>
      <Toaster position="top-center" />
    </>
  );
}

export default RegistrationForm;