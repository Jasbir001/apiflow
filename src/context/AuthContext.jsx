import { createContext } from "react";


const AuthContext =createContext();

export const AuthProvider = ({children}) =>{
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
}