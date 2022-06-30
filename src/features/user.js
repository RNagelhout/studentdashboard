import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = {name: "" , password: ""}

export const userSlice = createSlice({
    name: "user",
    initialState: {value: initialStateValue},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        clearFields: (state) => {
            state.value = initialStateValue
        }
    }
})

export const {login, clearFields} = userSlice.actions

export default userSlice.reducer