import styles from './Field.module.css';
import { FieldLayout } from '../FieldLayout/FieldLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectField, selectIsGameEnded } from '../../selectors';

export const Field = () => {
  const dispatch = useDispatch();

  const field = useSelector(selectField);
  const isGameEnded = useSelector(selectIsGameEnded);

  const handleClick = (index) => {
    dispatch({ type: 'SET_GAME_STATE', payload: { index } });
  };

  return (
    <div className={styles.container}>
      {field.map((value, index) => (
        <FieldLayout
          key={index}
          value={value}
          onClick={() => handleClick(index)}
          disabled={field[index] || isGameEnded}
        />
      ))}
    </div>
  );
};
