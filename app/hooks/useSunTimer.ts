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
    staleTime: 30 * 60 * 1000, // 30 minutes - sun data doesn't change frequently
    gcTime: 60 * 60 * 1000, // 1 hour - keep in memory for fast access
    refetchInterval: 60 * 60 * 1000, // 1 hour - refresh sun data hourly
    refetchIntervalInBackground: false, // Don't update when tab is inactive
    refetchOnWindowFocus: true, // Refresh when user returns to tab
    refetchOnReconnect: true, // Refresh when internet reconnects
    retry: 3, // Retry failed requests up to 3 times
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  });

  const localTime = useLocalTime(location);

  return {
    localTime,
    sunData: data || null,
    isLoading,
    isError,
  };
};
