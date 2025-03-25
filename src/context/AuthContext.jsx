import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../api/firebase";

export const AuthContext = createContext()

export const useAuthContext = () => {
	return useContext(AuthContext)
}

export const AuthContextProvider = ({children}) => {
	const [user, setUser] = useState(null)
	
	onAuthStateChanged(auth, (data) => {
		if(data){
			setUser(data)
		}else{
			setUser(null)
		}
	})

	return (
		<AuthContext.Provider value={{user}}>
			{children}
		</AuthContext.Provider>
	)
}
