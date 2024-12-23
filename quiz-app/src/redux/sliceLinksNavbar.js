import { createSlice } from "@reduxjs/toolkit";
export const currentLocation = createSlice({
    name: "currentLocation",
    initialState: {value:'HomePage'},
    reducers: {
        setText:(state,action)=>{
            state.value = action.payload;
        }
    },
})

export const { setText } = currentLocation.actions;
export default currentLocation.reducer;