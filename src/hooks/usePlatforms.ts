import { fetchResponse } from "./useData";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import platforms from "../assets/data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<fetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 6 - 0 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
