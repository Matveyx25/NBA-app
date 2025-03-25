import { useQuery } from "@tanstack/react-query"
import { games } from "../api"

export const useAllGames = (params) => {
	return useQuery({
		queryKey: ['games', params],
		queryFn: () => games.getAll(params),
		select: data => data.data
	})
}