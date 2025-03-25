import axios from "axios";


const instance = axios.create({
	baseURL: 'https://api.balldontlie.io/v1/',
	headers: {
		'Authorization': import.meta.env.VITE_API_KEY, 
	}
})

export const games = {
	getAll(params) {
		return instance.get('games', {params})
	},
}