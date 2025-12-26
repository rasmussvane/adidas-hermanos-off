import { useState, useEffect, useCallback } from "react";
import moment from "moment-timezone";
import { getSunString, Location } from "../utils/fetchSun";

type SunData = {
  type: string;
  countDown: string;
} | null;

type UseSunTimerReturn = {
  localTime: string;
  sunData: SunData;
  isLoading: boolean;
  error: string | null;
};

const TIME_ZONES = {
  cdmx: "America/Mexico_City",
  cph: "Europe/Copenhagen",
};

export const useSunTimer = (location: Location): UseSunTimerReturn => {
  const [localTime, setLocalTime] = useState<string>("");
  const [sunData, setSunData] = useState<SunData>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to update local time
  const updateTime = useCallback((): void => {
    const time = moment().tz(TIME_ZONES[location]).format("HH:mm");
    setLocalTime(time);
  }, [location]);

  // Function to fetch sun data with error handling
  const fetchSunData = useCallback(async (): Promise<void> => {
    try {
      setError(null);
      const sunString = await getSunString(location);
      setSunData(sunString);
    } catch (err) {
      console.error("Error fetching sun data:", err);
      setError("Failed to load sun data");
    } finally {
      setIsLoading(false);
    }
  }, [location]);

  // Initialize hook and set up intervals
  useEffect(() => {
    // Set initial time immediately
    updateTime();
    
    // Fetch sun data on mount
    fetchSunData();

    // Set up interval to update time every minute
    const timeInterval = setInterval(() => {
      updateTime();
      // Also update sun data every hour since it changes throughout the day
      const now = new Date();
      if (now.getMinutes() === 0) {
        fetchSunData();
      }
    }, 60000); // Update every minute (60000ms)

    // Cleanup interval on component unmount
    return () => {
      clearInterval(timeInterval);
    };
  }, [location, updateTime, fetchSunData]);

  return {
    localTime,
    sunData,
    isLoading,
    error,
  };
};