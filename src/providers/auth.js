import React, { useState } from 'react'
// import { createContext } from 'react'

export const AuthContext = React.createContext({})
// export const AuthContext = createContext({})

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        name: 'Rafael'
    })

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

// Criar um Hook
export const useAuth = () =>  React.useContext(AuthContext)