import React, { useEffect, useState } from 'react'
// import { createContext } from 'react'

export const AuthContext = React.createContext({})
// export const AuthContext = createContext({})

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        name: 'Rafael'
    })

    useEffect(() => {
        const userStorage = localStorage.getItem('user')
        if (userStorage) {
            setUser(JSON.parse(userStorage))
        } else {
            setUser({ name: ''})
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

// Criar um Hook
export const useAuth = () =>  React.useContext(AuthContext)