
import React,{ useState } from 'react'
import styles from '../styles/Home.module.css';
import Image from 'next/image';
interface Square {
    selected:boolean,
    id:string,
    content:string
}
const defSquares :Square[][] = [[{selected:false,id:'00',content:''}]]
const getImageName = () => {

}
const GameBoard = () => {
    const isOutside = (num:number):boolean => {
        if(num === 0 || num === 6){
            return true;
        }else{
            return false;
        }
    }
    const [squares, setSquares] = useState<Square[][]>(() => {
        const rows = 7;
        const cols = 7;
        const emptySquare:Square = {
            content:'na',
            selected:false,
            id:'na'
        }
        const board:Square[][] = [];
        for(let i = 0; i < rows; i++){
            board[i] = [];
            for(let j = 0; j < cols; j++){
                // board[i][j] = emptySquare;
                const sqrId = `${i.toString()}${j.toString()}`;
                let cont = '';
                switch (i) {
                    case 0:
                        cont = '/sImages/blank1.png'
                        break;
                    case 1:
                        cont = isOutside(j) ? '/sImages/blank1.png' : '/sImages/blank2.png'
                        break;
                    case 2:
                        cont = isOutside(j) ? '/sImages/blank1.png' : '/sImages/blank2.png'

                        break;
                    case 3:
                        cont = isOutside(j) ? '/sImages/blank1.png' : '/sImages/blank2.png'

                        break;
                    case 4:
                        cont = isOutside(j) ? '/sImages/blank1.png' : '/sImages/blank2.png'

                        break;
                    case 5:
                        cont = isOutside(j) ? '/sImages/blank1.png' : '/sImages/blank2.png'

                        break;
                    case 6:
                        cont = '/sImages/blank1.png'
                        break;
                
                    default:
                        break;
                }
                board[i][j] = {
                    content:cont,
                    id:sqrId,
                    selected:false
                };
            }
        }
        return board;
    })
    const squareClick = (sqr:string) => {    
        console.log(`Suqare Click: ${sqr}`)
    }
  return (
    <div className={styles.gameBoard}>
        {squares.map((row,i) => {
            return (
                <React.Fragment key={i}>
                    {row.map((square,j) => {
                        return (
                            <div key={`${i}-${j}`} className={styles.squareDiv} onClick={() => squareClick(`${i}-${j}`)}>
                                {/* <img src='/sImages/aceDiamond.png' className={styles.imageDiv}/> */}
                                <img src={square.content} className={styles.imageDiv}/>

                            </div>
                        )
                    })}
                </React.Fragment>
            )
        })}
    </div>
  )
}



export default GameBoard