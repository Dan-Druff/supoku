import React, { ReactNode, createContext, useContext, useReducer, useState } from 'react';
import { Square,SupokuActionTypes,SupokuDispatchType } from '@/util/constants';

type StateType = Square[];



type DispatchType = (action: SupokuActionTypes) => void;
const defSupState :Square[] = [{pic:'/sImages/blank1.png',id:'00',inside:false,selected:false,card:''},{pic:'/sImages/blank1.png',id:'01',inside:false,selected:false,card:''},{pic:'/sImages/blank1.png',id:'02',inside:false,selected:false,card:''},{pic:'/sImages/blank1.png',id:'03',inside:false,selected:false,card:''},{pic:'/sImages/blank1.png',id:'04',inside:false,selected:false,card:''},{pic:'/sImages/blank1.png',id:'05',inside:false,selected:false,card:''},{pic:'/sImages/blank1.png',id:'06',inside:false,selected:false,card:''},
{pic:'/sImages/blank1.png',id:'10',inside:false,selected:false,card:''},{pic:'/sImages/blank2.png',id:'11',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'12',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'13',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'14',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'15',inside:true,selected:false,card:''},{pic:'/sImages/blank1.png',id:'16',inside:false,selected:false,card:''},
{pic:'/sImages/blank1.png',id:'20',inside:false,selected:false,card:''},{pic:'/sImages/blank2.png',id:'21',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'22',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'23',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'24',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'25',inside:true,selected:false,card:''},{pic:'/sImages/blank1.png',id:'26',inside:false,selected:false,card:''},
{pic:'/sImages/blank1.png',id:'30',inside:false,selected:false,card:''},{pic:'/sImages/blank2.png',id:'31',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'32',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'33',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'34',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'35',inside:true,selected:false,card:''},{pic:'/sImages/blank1.png',id:'36',inside:false,selected:false,card:''},
{pic:'/sImages/blank1.png',id:'40',inside:false,selected:false,card:''},{pic:'/sImages/blank2.png',id:'41',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'42',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'43',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'44',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'45',inside:true,selected:false,card:''},{pic:'/sImages/blank1.png',id:'46',inside:false,selected:false,card:''},
{pic:'/sImages/blank1.png',id:'50',inside:false,selected:false,card:''},{pic:'/sImages/blank2.png',id:'51',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'52',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'53',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'54',inside:true,selected:false,card:''},{pic:'/sImages/blank2.png',id:'55',inside:true,selected:false,card:''},{pic:'/sImages/blank1.png',id:'56',inside:false,selected:false,card:''},
{pic:'/sImages/blank1.png',id:'60',inside:false,selected:false,card:''},{pic:'/sImages/blank1.png',id:'61',inside:false,selected:false,card:''},{pic:'/sImages/blank1.png',id:'62',inside:false,selected:false,card:''},{pic:'/sImages/blank1.png',id:'63',inside:false,selected:false,card:''},{pic:'/sImages/blank1.png',id:'64',inside:false,selected:false,card:''},{pic:'/sImages/blank1.png',id:'65',inside:false,selected:false,card:''},{pic:'/sImages/blank1.png',id:'66',inside:false,selected:false,card:''}]
export interface SupokuContextType {
    supokuState:Square[],
    supokuDispatch:SupokuDispatchType,
    supokuDeck:string[]
}
const SupokuContext = createContext<SupokuContextType>({
    supokuDeck:[],
    supokuState:[],
    supokuDispatch: () => null
});



export const SupokuContextProvider = ({children}:{children:ReactNode}) => {
    const [supokuDeck,setSupokuDeck] = useState<string[]>([]);

    const supokuReducer = (state: StateType, action: SupokuActionTypes): StateType => {
        switch (action.type) {
          case 'TOGGLE_SELECT':
           
          return action.payload.cards;
     
          case 'DEAL':
            console.log(`Getting to dispatch. Why doesnt it get here!!???`);
            setSupokuDeck(action.payload.deck);
            return action.payload.cards;
          case 'DRAW':
                setSupokuDeck(action.payload.deck);
                return action.payload.cards;
          case 'UPDATE_ITEM':
            return state;
          default:
            return state;
        }
      };
  const [supokuState, supokuDispatch] = useReducer(supokuReducer, defSupState);

  return (
    <SupokuContext.Provider value={{ 
        supokuState: supokuState, 
        supokuDispatch: supokuDispatch, 
        supokuDeck:supokuDeck }}>
      {children}
    </SupokuContext.Provider>
  );
};

export const useSupoku = () => {
    return useContext(SupokuContext);
}


