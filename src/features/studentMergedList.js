import { createSlice } from "@reduxjs/toolkit"
 
export const studentMergedListSlice = createSlice({
    name: "MergedList",
    initialState: {value: []},
    reducers: {
        MergedList: (state, action) => {
            state.value = action.payload
        }   
    }
})

export const {MergedList} = studentMergedListSlice.actions

export default studentMergedListSlice.reducer