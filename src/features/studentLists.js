import { createSlice } from "@reduxjs/toolkit"

export const studentListSlice = createSlice({
    name: "lists",
    initialState: {value: [], },
    reducers: {
        parsedList: (state, action) => {
            state.value = action.payload
        }  
    }
})

export const {parsedList} = studentListSlice.actions

export default studentListSlice.reducer