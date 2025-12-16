import moment from "moment";
import { getSunString, Location } from "../utils/fetchSun";

type Props = {
  location: Location;
};

export default async function SunCount({ location }: Props) {
  const sunString = await getSunString(location);
  const formattedTime = moment(sunString?.time, moment.ISO_8601).format(
    "hh:mm A"
  );

  return (
    <div className="text-center text-lg leading-none">
      <p>{`${location.toUpperCase()} ${formattedTime}`}</p>
      <p>{`${sunString?.type.toUpperCase()} ${sunString?.countDown}`}</p>
    </div>
  );
}
