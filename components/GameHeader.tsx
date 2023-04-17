import { dealCards, drawCards } from '@/util/supokuFunctions';
import styles from '../styles/Home.module.css';
import { useSupoku } from '@/context/SupokuContext';
const GameHeader = () => {
    const {supokuDispatch,supokuState,supokuDeck} = useSupoku();
    const dealButton = () => {
        const postDeal = dealCards(supokuState);
        console.log(`DEALINGHGGHH ${postDeal.squares[10].pic}`);

        supokuDispatch({type:'DEAL',payload:{cards:postDeal.squares,deck:postDeal.deck}});
    }
    const drawButton = () => {
        const postDraw = drawCards(supokuDeck,supokuState);
        supokuDispatch({type:'DRAW',payload:{cards:postDraw.squares,deck:postDraw.deck}});
    }
  return (
    <div className={styles.headerArea}>
        <h2>SuPoKu</h2>
        <div className={styles.headerAreaRow}>
        <button className={styles.butt} onClick={() => dealButton()}>DEAL</button><button className={styles.butt} onClick={drawButton}>DRAW</button><button className={styles.butt}>BUTTON 3</button><button className={styles.butt}>BUTTON 4</button>
        </div>
    </div>
  )
}

export default GameHeader