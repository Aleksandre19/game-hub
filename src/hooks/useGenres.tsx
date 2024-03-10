// import genres from "../assets/data/genres";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Staticaly returning the Genres.
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

// Dynamically returning the Genres.
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
