import React, { useState } from 'react'
import { useAuth } from '../providers/auth'

const Login = () => {
    const [input, setInput] = useState({
        name: ''
    })
    const  { setUser } = useAuth()

    const handlerLogin = () => {
        
        localStorage.setItem('user', JSON.stringify(input))
        setUser(input)
    }

    const handlerLogout = () => {
        
        localStorage.removeItem('user')
        setUser({name: ''})
    }

    return (
        <div>
            <input type="text" onChange={(e) => setInput({name: e.target.value})} />
            <button onClick={handlerLogin}>Login</button>
            <button onClick={handlerLogout}>Logout</button>

        </div>
    )
}

export default Login