import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../assets/data/genres";
import APIClient from "../services/api-client";

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
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
