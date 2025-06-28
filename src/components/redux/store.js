import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store= configureStore({
    reducer:rootReducer   
    //any name like xyz instead reducer, we will be using that in useSelector
})

export default store;
