"use client";

import { useEffect, useState } from "react";
import { getSunString, Location, SunDataObject } from "../utils/fetchSun";

type Props = {
  location: Location;
};

export default function SunCount({ location }: Props) {
  const [sunString, setSunString] = useState<SunDataObject>();

  useEffect(() => {
    getSunString(location).then((data) => {
      if (!data) return;
      setSunString(data);
    });
  }, [location]);

  if (!sunString) return null;

  return (
    <div className="text-center text-lg leading-none">
      <p>{`${location.toUpperCase()} ${sunString?.time}`}</p>
      <p>{`${sunString?.type.toUpperCase()} ${sunString?.countDown}`}</p>
    </div>
  );
}
