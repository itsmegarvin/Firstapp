import { ADD_TO_CART } from "./constants";

const initialState=[];

export default reducer=(state=initialState,action)=>{//always should have two parameter
    switch(action.type){
        case ADD_TO_CART:
            return[
                ...state,
                action.data
            ]
        default:
            return state;
    }
}


//reducer always should have initialstate
//reducer uses switch cases in many of the cases 