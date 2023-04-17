export interface Square {
    selected:boolean,
    id:string,
    card:string,
    pic:string,
    inside:boolean
}
export type SupokuActionTypes =
| { type: 'TOGGLE_SELECT',payload:{cards:Square[]}}
| { type: 'DEAL', payload: { cards : Square[],deck:string[] } }
| { type: 'DRAW', payload: { cards : Square[],deck:string[] } }
| { type: 'UPDATE_ITEM', payload: { id: number, value: string } };

export type HandString = 'nothing' | 'highcard' | 'pair' | 'twopair' | 'threeofakind' | 'straight' | 'flush' | 'fullhouse' | 'fourofakind' | 'straightflush' | 'extra' | 'royalflush' | 'fiveofakind';

export type SupokuDispatchType = (action:SupokuActionTypes) => void;
export const HandValuObject = {
    'nothing':0,
    'highcard':2,
    'pair':4,
    'twopair':6,
    'threeofakind':8,
    'straight':10,
    'flush':12,
    'fullhouse':14,
    'fourofakind':16,
    'straightflush':18,
    'extra':20,
    'royalflush':20,
    'fiveofakind':20
}
export type handValueDict = 
{hand:'nothing',value:0} | 
{hand:'highcard',value:2} | 
{hand:'pair',value:4} | 
{hand:'twopair',value:6} | 
{hand:'threeofakind',value:8} | 
{hand:'straight',value:10} | 
{hand:'flush',value:12} | 
{hand:'fullhouse',value:14} | 
{hand:'fourofakind',value:16} | 
{hand:'straightflush',value:18} | 
{hand:'extra',value:20} | 
{hand:'royalflush',value:20} | 
{hand:'fiveofakind',value:20};

