import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import genres from "../assets/data/genres";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Staticaly returning the Genres.
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

// Dynamically returning the Genres.
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
