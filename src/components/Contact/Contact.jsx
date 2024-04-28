import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css["wrapper-for-item"]}>
          <FaUser></FaUser>
          <p className={css.text}>{name}</p>
        </div>
        <div>
          <BsFillTelephoneFill></BsFillTelephoneFill>
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button className={css.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}