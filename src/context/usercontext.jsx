import {createContext,useState} from "react"

export const userContext = createContext({})

export const UserContextProvider = ({children}) =>{
    const [User, setUser] = useState({})
    return (
        <userContext.Provider value={{User,setUser}}>
            {children}
        </userContext.Provider>
    )
}