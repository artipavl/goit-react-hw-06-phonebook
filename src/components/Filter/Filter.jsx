import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFiltre } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  // Знайшов лише такий спосіб перевірки
  PropTypes.checkPropTypes(
    {
      filter: PropTypes.string.isRequired,
    },
    { filter },
    'prop',
    'Filter'
  );

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        value={filter}
        onChange={e => dispatch(changeFiltre(e.target.value))}
        type="text"
        name="filter"
        title="filter"
        required
      />
    </div>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   change: PropTypes.func.isRequired,
// };
