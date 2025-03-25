import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Home } from "./pages/Home"
import { SignUp } from "./pages/SignUp"
import { AuthContextProvider } from "./context/AuthContext"
import { MainLayout } from "./components/layout/main-layout"

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

function App() {
  return (
		<QueryClientProvider client={client}>
			<AuthContextProvider>
				<BrowserRouter>
					<Routes>
						<Route element={<MainLayout/>}>
							<Route path="/" element={<Home/>}/>		
							<Route path="/sign-up" element={<SignUp/>}/>
						</Route>
					</Routes>
				</BrowserRouter>
			</AuthContextProvider>
		</QueryClientProvider>
  )
}

export default App
