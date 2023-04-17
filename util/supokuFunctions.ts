import { Square } from "./constants";

export const setLabel = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const setScoreLabel = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const diffFunc = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const resetButton = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
const freshDeck = (): string[] => {
    let tempDeck = ['tenWild','tenWild','jackWild','jackWild','queenWild','queenWild','kingWild','kingWild','aceWild','aceWild'];
    const suits = ['Club','Spade','Heart','Diamond'];
    const faces = ['two','three','four','five','six','seven','eight','nine','ten','jack','queen','king','ace'];
    suits.forEach((suit) => {
        faces.forEach((face) => {
            tempDeck.push(`${face}${suit}`);
        })
    })
    return tempDeck;
}
export const dealCards = (squares:Square[]):{deck:string[],squares:Square[]} => {
    
    let tempDeck:string[] = freshDeck();
    let tempSquares = squares;
    let randomCards : string[] = [];
    
    for(let i = 0; i < 25; i++){
        let rando = Math.floor(Math.random() * tempDeck.length);
        randomCards.push(tempDeck[rando]);
        tempDeck.splice(rando,1);
    }

    const newSqrs = tempSquares.map((s) => {
        switch (s.id) {
            case '11':
                s.card = randomCards[0];
                s.pic = `/sImages/${randomCards[0]}.png`;
                
                break;
            case '12':
                s.card = randomCards[1];
                s.pic = `/sImages/${randomCards[1]}.png`;
                break;
            case '13':
                s.card = randomCards[2];
                s.pic = `/sImages/${randomCards[2]}.png`;
                break;
            case '14':
                s.card = randomCards[3];
                s.pic = `/sImages/${randomCards[3]}.png`;
                break;
            case '15':
                s.card = randomCards[4];
                s.pic = `/sImages/${randomCards[4]}.png`;
                break;
            case '21':
                s.card = randomCards[5];
                s.pic = `/sImages/${randomCards[5]}.png`;
                break;
            case '22':
                s.card = randomCards[6];
                s.pic = `/sImages/${randomCards[6]}.png`;
                break;
            case '23':
                s.card = randomCards[7];
                s.pic = `/sImages/${randomCards[7]}.png`;
                break;
            case '24':
                s.card = randomCards[8];
                s.pic = `/sImages/${randomCards[8]}.png`;
                break;
            case '25':
                s.card = randomCards[9];
                s.pic = `/sImages/${randomCards[9]}.png`;
                break;
            case '31':
                s.card = randomCards[10];
                s.pic = `/sImages/${randomCards[10]}.png`;
                break;
            case '32':
                s.card = randomCards[11];
                s.pic = `/sImages/${randomCards[11]}.png`;
                break;
            case '33':
                s.card = randomCards[12];
                s.pic = `/sImages/${randomCards[12]}.png`;
                break;
            case '34':
                s.card = randomCards[13];
                s.pic = `/sImages/${randomCards[13]}.png`;
                break;
            case '35':
                s.card = randomCards[14];
                s.pic = `/sImages/${randomCards[14]}.png`;
                break;
            case '41':
                s.card = randomCards[15];
                s.pic = `/sImages/${randomCards[15]}.png`;
                break;
            case '42':
                s.card = randomCards[16];
                s.pic = `/sImages/${randomCards[16]}.png`;
                break;
            case '43':
                s.card = randomCards[17];
                s.pic = `/sImages/${randomCards[17]}.png`;
                break;
            case '44':
                s.card = randomCards[18];
                s.pic = `/sImages/${randomCards[18]}.png`;
                break;
            case '45':
                s.card = randomCards[19];
                s.pic = `/sImages/${randomCards[19]}.png`;
                break;
            case '51':
                s.card = randomCards[20];
                s.pic = `/sImages/${randomCards[20]}.png`;
                break;
            case '52':
                s.card = randomCards[21];
                s.pic = `/sImages/${randomCards[21]}.png`;
                break;
            case '53':
                s.card = randomCards[22];
                s.pic = `/sImages/${randomCards[22]}.png`;
                break;
            case '54':
                s.card = randomCards[23];
                s.pic = `/sImages/${randomCards[23]}.png`;
                break;
            case '55':
                s.card = randomCards[24];
                s.pic = `/sImages/${randomCards[24]}.png`;
                break;
        
            default:
                break;
        }
        return s;
    })
    return {
        deck:tempDeck,
        squares:newSqrs
    }
}
export const drawCards = (deck:string[],squares:Square[]):{deck:string[],squares:Square[]} => {
    let tempSquares = squares;
    let tempDeck = deck;
    let prevCards : string[] = [];

    const nSqr = tempSquares.map((s) => {
        if(s.selected || s.inside === false){
            return s;
        }else{
            const rando = Math.floor(Math.random() * tempDeck.length);
            prevCards.push(s.card);
            s.card = tempDeck[rando];
            s.pic = `/sImages/${tempDeck[rando]}.png`;
            tempDeck.splice(rando,1);
            return s;
        }
        
    })
    // go thru each square to see if its selected
    // if it is not, select a rando from deck
    // edit that squares properties
    // remove rando from deck
    // add prev card to a prevCards array
    // after going through array add prev cards to deck

    return {
        deck:[...tempDeck,...prevCards],
        squares:nSqr
    }

}
export const nextButton = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const resetTiles = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const loadHandArrays = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const calculateHand = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const checkForFlush = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const checkHandArrays = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const setResultSquare = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const resetButtonPress = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const winnerWinner = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const checkScores = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const getScore = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const endGame = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
export const closeButtonFunc = () => {
    try {
        
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}