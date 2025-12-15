import moment from "moment";

export type Location = "cph" | "cdmx";
type SunEvent = "sunrise" | "sunset";

type Props = {
  location: Location;
};

type SunData = {
  sunrise: string;
  sunset: string;
};

const locations: Record<Location, { lat: number; lng: number }> = {
  cph: { lat: 55.6761, lng: 12.5683 }, // Fixed coordinates for Copenhagen
  cdmx: { lat: 19.4326, lng: -99.1332 }, // Fixed coordinates for Mexico City
};

async function fetchSun({ location }: Props): Promise<SunData | null> {
  const { lat, lng } = locations[location];
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
  );

  if (!response.ok) return null;

  const data = await response.json();
  const results = data?.results;

  if (results.ok) return null;

  const sunrise = results?.sunrise;
  const sunset = results?.sunset;

  if (!sunrise || !sunset) return null;

  return { sunrise, sunset };
}

const getNextSunEvent = (
  sunData: SunData
): { event: SunEvent; time: string; fromNow: string } => {
  const now = new Date();

  const today = now.toISOString().split("T")[0];
  const sunriseDate = new Date(`${today} ${sunData.sunrise}`);
  const sunsetDate = new Date(`${today} ${sunData.sunset}`);

  if (now < sunriseDate) {
    return {
      event: "sunrise",
      time: sunData.sunrise,
      fromNow: moment(sunriseDate).fromNow(),
    };
  } else if (now < sunsetDate) {
    return {
      event: "sunset",
      time: sunData.sunset,
      fromNow: moment(sunsetDate).fromNow(),
    };
  } else {
    return {
      event: "sunrise",
      time: sunData.sunrise,
      fromNow: moment(sunriseDate).add(1, "day").fromNow(),
    };
  }
};

export const getSunString = async (
  location: Location
): Promise<{ type: SunEvent; time: string; countDown: string } | null> => {
  const sunData = await fetchSun({ location });

  if (!sunData) return null;

  const nextEvent = getNextSunEvent(sunData);

  return {
    type: nextEvent.event,
    time: nextEvent.time,
    countDown: nextEvent.fromNow,
  };
};
