import PropTypes from 'prop-types';
import styles from './Button.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsGameEnded } from '../../selectors';

export const Button = ({ children }) => {
  const dispatch = useDispatch();
  const isGameEnded = useSelector(selectIsGameEnded);
  const handleClick = () => dispatch({ type: 'RESET_GAME' });
  return (
    <button
      className={styles.button + ' ' + `${isGameEnded ? styles.endOfGame : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
};
