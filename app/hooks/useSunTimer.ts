import { getSunString, Location } from "../utils/fetchSun";
import { useQuery } from "@tanstack/react-query";
import useLocalTime from "./useLocalTime";

type SunData = {
  type: string;
  countDown: string;
} | null;

type UseSunTimerReturn = {
  localTime: string;
  sunData: SunData;
  isLoading: boolean;
  isError: boolean;
};

export const useSunTimer = (location: Location): UseSunTimerReturn => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sun-data", location],
    queryFn: () => getSunString(location),
  });

  const localTime = useLocalTime(location);

  return {
    localTime,
    sunData: data || null,
    isLoading,
    isError,
  };
};
