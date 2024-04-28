import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import css from "./LoginForm.module.css";
import { toast, Toaster } from "react-hot-toast";

export default function LoginForm() {
    const dispatch = useDispatch();
    const emailFieldId = useId();
    const passwordFieldId = useId();
  
    const handleSubmit = (values, actions) => {
      dispatch(login(values))
        .unwrap()
        .then(() => {
          toast.success("You have successfully logged in!");
        })
        .catch(() => {
          toast.error("Something went wrong! Please try again!");
        });
      actions.resetForm();
    };
  
    const ValidationSchema = Yup.object().shape({
      email: Yup.string()
        .min(8, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      password: Yup.string()
        .min(8, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    });
  
    return (
      <>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={ValidationSchema}
        >
          <Form className={css.form}>
            <div className={css.label}>
              <label htmlFor={emailFieldId}>Email</label>
              <Field
                className={css.input}
                type="email"
                name="email"
                id={emailFieldId}
              ></Field>
              <ErrorMessage
                className={css["error-text"]}
                component="p"
                name="email"
              ></ErrorMessage>
            </div>
  
            <div className={css.label}>
              <label htmlFor={passwordFieldId}>Password</label>
              <Field
                className={css.input}
                type="password"
                name="password"
                id={passwordFieldId}
              ></Field>
              <ErrorMessage
                className={css["error-text"]}
                component="p"
                name="password"
              ></ErrorMessage>
            </div>
            <button type="submit" className={css.btn}>
              Log in
            </button>
          </Form>
        </Formik>
        <Toaster />
      </>
    );
  }