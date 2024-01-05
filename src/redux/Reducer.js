import { ADD_TODO } from "./Actiontype";


const initState=[
    {id:0, text:"do the checkpoint",},
    {id:1, text:"save your work",}
];
export const reducer=(state=initState,action)=>{
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
    
        default:
            return state;
    }

}