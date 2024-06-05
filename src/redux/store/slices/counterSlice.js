import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
       
        incrementCounter:function(state,action){
            state.counter=state.counter+1;
        },
        decrementCouter:function(state,action){
            state.counter=state.counter-1;
        },
    }
})
export const {decrementCouter,incrementCounter} =counterSlice.actions;
export default counterSlice.reducer