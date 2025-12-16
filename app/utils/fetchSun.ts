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
  try {
    const { lat, lng } = locations[location];
    const response = await fetch(
      `https://api.met.no/weatherapi/sunrise/3.0/sun?lat=${lat}&lon=${lng}`
    );

    if (!response.ok) return null;

    const data = await response.json();
    if (!data || !data.properties) return null;

    const sunrise = data.properties.sunrise.time;
    const sunset = data.properties.sunset.time;

    if (!sunrise || !sunset) return null;

    return { sunrise, sunset };
  } catch (error) {
    console.error("Error fetching sun data:", error);
    return null;
  }
}

const getNextSunEvent = (
  sunData: SunData
): { event: SunEvent; time: string; fromNow: string } => {
  const now = new Date();

  const sunriseDate = new Date(sunData.sunrise);
  const sunsetDate = new Date(sunData.sunset);

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
