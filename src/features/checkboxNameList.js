import { createSlice } from "@reduxjs/toolkit"

 
export const checkboxNameListSlice = createSlice({
    name: "checkboxNameList",
    initialState: {value: []},
    reducers: {
        checkboxNameList: (state, action) => {
            state.value = action.payload
        }   
    }
})

export const {checkboxNameList} = checkboxNameListSlice.actions

export default checkboxNameListSlice.reducer