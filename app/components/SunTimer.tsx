import moment from "moment-timezone";
import { getSunString, Location } from "../utils/fetchSun";

type Props = {
  location: Location;
};

const TIME_ZONES = {
  cdmx: "America/Mexico_City",
  cph: "Europe/Copenhagen",
};

export default async function SunTimer({ location }: Props) {
  const sunString = await getSunString(location);
  const localTime = moment().tz(TIME_ZONES[location]).format("HH:mm");

  return (
    <div className="text-lg leading-none text-center mix-blend-plus-lighter">
      <p>{`${location} ${localTime}`}</p>
      <p>{`${sunString?.type} ${sunString?.countDown}`}</p>
    </div>
  );
}
