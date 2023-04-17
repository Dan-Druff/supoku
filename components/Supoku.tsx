import { useSupoku } from "@/context/SupokuContext"

import styles from '../styles/Home.module.css';
import Square from "./Square";
const Supoku = () => {
    const {supokuState,supokuDispatch, supokuDeck} = useSupoku();
    const squareClick = (sqr:string) => {
        console.log(`${sqr} selected.`)
        const newSupoku = supokuState.map((s) => {
            if(s.id === sqr){
                console.log(`${sqr} Found it..`)

                if(s.selected){
                    s.pic = `/sImages/${s.card}.png`;
                    s.selected = false;
                    console.log(`True Returning: ${s.selected} .`)

                    return s;
                }else{
                    s.pic = `/sImages/${s.card}Check.png`;
                    s.selected = true;
                    console.log(`False Returning: ${s.selected} .`)

                    return s;
                }
            }else{
                return s;
            }
        })
        supokuDispatch({type:'TOGGLE_SELECT',payload:{cards:newSupoku}});
        console.log(`Square: ${sqr}`);
    }
  return (
    <div className={styles.gameBoard}>
        {supokuState.map((sqr) => {
            return (
                <Square key={sqr.id} card={sqr} squareClick={squareClick}/>
             
            )
        })}
    </div>
  )
}

export default Supoku