import React from "react"
import {useDispatch} from "react-redux"
import { login, clearFields } from "../features/user"

function Login() {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => {dispatch(login({name: "René Nagelhout" , password: "234234666345"}))} }>
                Login
            </button>
            <button onClick={() => {dispatch(clearFields())}}>
                Clear Fields
            </button> 
        </div>
    )
}

export default Login