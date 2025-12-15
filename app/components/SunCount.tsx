import { getSunString, Location } from "../utils/fetchSun";

type Props = {
  location: Location;
};

export default async function SunCount({ location }: Props) {
  const sunString = await getSunString(location);
  const countDown = "11:20:03"; // Placeholder countdown time

  return (
    <div className="text-center text-lg leading-none">
      <p>{`${location.toUpperCase()} ${sunString?.time}`}</p>
      <p>{`${sunString?.type.toUpperCase()} IN ${countDown}`}</p>
    </div>
  );
}
