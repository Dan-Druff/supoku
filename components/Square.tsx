import styles from '../styles/Home.module.css';
import { Square } from '@/util/constants';
const Square = ({card,squareClick}:{card:Square, squareClick:(id:string) => void}) => {
  return (
    <div className={styles.squareDiv} onClick={() => squareClick(card.id)}>
        <img src={card.pic} className={styles.imageDiv}/>
    </div>
  )
}

export default Square