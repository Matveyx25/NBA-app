import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../api/firebase";

export const AuthContext = createContext()

export const useAuthContext = () => {
	return useContext(AuthContext)
}

export const AuthContextProvider = ({children}) => {
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	
	useEffect(() => {
		onAuthStateChanged(auth, (data) => {
			if(data){
				setUser(data)
				setIsLoading(false)
			}else{
				setUser(null)
				setIsLoading(false)
			}
		})
		setIsLoading(false)
	}, [])

	return (
		<AuthContext.Provider value={{user, isLoading}}>
			{children}
		</AuthContext.Provider>
	)
}
