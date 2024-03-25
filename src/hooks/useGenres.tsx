import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../assets/data/genres";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

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
