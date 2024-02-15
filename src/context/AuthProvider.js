import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    console.log(JSON.parse(localStorage.getItem("user")))

    const signIn = (newUser, callback) => {
        setUser(newUser)
        localStorage.setItem("user", JSON.stringify(newUser))
        callback()
    }

    const signOut = (callback) => {
        setUser(null)
        localStorage.removeItem('user')
        callback()
    }

    const value = {
        user,
        signIn,
        signOut
    }

    return (
        <AuthContext.Provider value={value}>
           {children}
        </AuthContext.Provider>
    );
}