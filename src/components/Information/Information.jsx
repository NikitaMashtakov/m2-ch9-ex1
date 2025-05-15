import { useSelector } from 'react-redux';
import { InformationLayout } from '../InformationLayout/InformationLayout';
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors';

export const Information = () => {
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isDraw = useSelector(selectIsDraw);
  const isGameEnded = useSelector(selectIsGameEnded);

  return (
    <>
      <InformationLayout
        text={
          isDraw
            ? 'Ничья'
            : !isDraw && isGameEnded
            ? `Победа: ${currentPlayer}`
            : `Ходит: ${currentPlayer}`
        }
      />
    </>
  );
};
