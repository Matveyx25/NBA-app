import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthContextProvider } from "./context/AuthContext"
import { Router } from "./router"

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
				<Router/>
			</AuthContextProvider>
		</QueryClientProvider>
  )
}

export default App
