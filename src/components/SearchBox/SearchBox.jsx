import css from './SearchBox.module.css';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/auth/selectors';

const SearchBox = () => {
    const dispatch = useDispatch();
    const value = useSelector(selectNameFilter);
    const searchFieldId = useId();

  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter(newValue));
  }

  return (
    <div className={css.form}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        type="text"
        name="searchField"
        id={searchFieldId}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
};
export default SearchBox;