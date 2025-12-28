"use client";

import { Location } from "../utils/fetchSun";
import { useSunTimer } from "../hooks/useSunTimer";

type Props = {
  location: Location;
};

export default function SunTimer({ location }: Props) {
  const { localTime, sunData, isLoading, error } = useSunTimer(location);
  const warpperClass = "text-lg leading-none text-center";

  if (isLoading) return null;

  if (error) {
    return (
      <div className={warpperClass}>
        <p>{`${location} ${localTime}`}</p>
      </div>
    );
  }

  return (
    <div className={warpperClass}>
      <p>{`${location} ${localTime}`}</p>
      <p>{`${sunData?.type} ${sunData?.countDown}`}</p>
    </div>
  );
}
