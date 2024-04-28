import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/auth/selectors';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li className={css["list-item"]} key={contact.id}>
            <Contact contact={contact}></Contact>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;