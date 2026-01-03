import moment from "moment-timezone";
import { useState, useEffect } from "react";
import { Location } from "../utils/fetchSun";

const UPDATE_INTERVAL = 60000; // 1 minute
const TIME_ZONES = {
  cdmx: "America/Mexico_City",
  cph: "Europe/Copenhagen",
};

export default function useLocalTime(location: Location): string {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = (): void => {
      const time = moment().tz(TIME_ZONES[location]).format("HH:mm");
      setLocalTime(time);
    };

    const interval = setInterval(() => {
      updateTime();
    }, UPDATE_INTERVAL);

    updateTime();

    return () => clearInterval(interval);
  }, [location]);

  return localTime;
}
