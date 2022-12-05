import PropTypes from 'prop-types';
import css from 'components/Contacts/ContactList.module.css';
import { removeContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      {name}: {number}
      <button
        type="button"
        onClick={() => dispatch(removeContact(id))}
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
