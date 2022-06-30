import { createSlice } from "@reduxjs/toolkit"

 
export const currentStudentSlice = createSlice({
    name: "currentStudent",
    initialState: {value: ""},
    reducers: {
        currentStudent: (state, action) => {
            state.value = action.payload
        }   
    }
})

export const {currentStudent} = currentStudentSlice.actions

export default currentStudentSlice.reducer