import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/main-layout'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { Profile } from './pages/Profile'
import { useAuthContext } from './context/AuthContext'
import { Loader } from './components/shared/loader/loader'

export const Router = () => {
	const { user, isLoading } = useAuthContext()
	
	return (
		<BrowserRouter>
			<Routes>
				{isLoading ? <Route path="*" element={<Loader/>}/> : 
					<>	
						<Route element={<MainLayout/>}>
							<Route path="/" element={<Home/>}/>
							{user ? 
								<>
									<Route path="/profile" element={<Profile/>}/>
								</> : 
								<>
									<Route path="/sign-up" element={<SignUp/>}/>
								</>
							}
							<Route path="*" element={<h1>404</h1>}/>
						</Route>
					</>
				}
			</Routes>
		</BrowserRouter>
	)
}
