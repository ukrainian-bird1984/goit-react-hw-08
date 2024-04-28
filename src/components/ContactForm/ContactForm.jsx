import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import css from './ContactForm.module.css';

export default function ContactForm() {
    const nameFieldId = useId();
    const numberFieldId = useId();
    const dispatch = useDispatch();
  
    const ValidationSchema = Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      number: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    });
  
    return (
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(addContact(values));
          actions.resetForm();
        }}
        validationSchema={ValidationSchema}
      >
        <Form className={css.form}>
          <div className={css.list}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={css.field}
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
  
          <div className={css.list}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={css.field}
              type="text "
              name="number"
              id={numberFieldId}
            ></Field>
            <ErrorMessage
              className={css["error-text"]}
              name="number"
              component="p"
            ></ErrorMessage>
          </div>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }