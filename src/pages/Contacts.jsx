import PageTitle from "../components/PageTitle/PageTitle";
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { Toaster, toast } from "react-hot-toast";
import {
    selectAllContacts,
    selectError,
    selectLoading,
  } from "../redux/contacts/selectors";
  import { TailSpin } from "react-loader-spinner";

const Contacts = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectAllContacts);
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  if (isError) {
    toast.error("Something went wrong, please try again");
  }

  return (
    <div>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#3f51b5"
            ariaLabel="tail-spin-loading"
            radius="1"
          />
        </div>
      )}
      {contacts.length > 1 && <SearchBox />}
      <ContactList />
      <Toaster position="top-center" />
    </div>
  );
}

export default Contacts