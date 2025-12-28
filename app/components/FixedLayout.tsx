"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import SunTimer from "./SunTimer";
import Image from "next/image";
import SignUp from "./SignUp";

const mobileBreakPoints = 512; // Tailwind: Lg

export default function FixedLayout() {
  const { width } = useWindowSize();

  if (!width) return null;

  if (width < mobileBreakPoints) {
    return (
      <>
        <header className="flex absolute top-0 left-0 justify-between p-4 w-full font-seven-segments">
          <SunTimer location="cdmx" />
          <SunTimer location="cph" />
        </header>
        <footer className="flex absolute bottom-0 left-0 justify-between items-end p-4 w-full font-seven-segments">
          <figure style={{ width: 137, height: 58 }} className="relative">
            <Image
              src="/logo.svg"
              alt=""
              fill
              className="object-contain object-bottom mix-blend-plus-lighter"
            />
          </figure>
          <div className="text-lg leading-none mix-blend-plus-lighter">
            <label htmlFor="signup-email">
              <p>Showroom sign up</p>
            </label>
            <input
              id="signup-email"
              type="email"
              className="border-b border-dashed border-b-foreground"
            />
          </div>
        </footer>
      </>
    );
  }

  return (
    <>
      <header className="flex absolute top-0 left-0 justify-center p-4 w-full">
        <figure style={{ width: 137, height: 58 }} className="relative">
          <Image
            src="/logo.svg"
            alt=""
            fill
            className="object-contain object-bottom mix-blend-plus-lighter"
          />
        </figure>
      </header>
      <div className="flex absolute top-0 bottom-0 left-0 items-center p-4 font-seven-segments mix-blend-plus-lighter">
        <SunTimer location="cdmx" />
      </div>
      <div className="flex absolute top-0 right-0 bottom-0 items-center p-4 font-seven-segments mix-blend-plus-lighter">
        <SunTimer location="cph" />
      </div>
      <footer className="flex absolute bottom-0 left-0 justify-center items-end p-4 w-full font-seven-segments">
        <div className="text-lg leading-none text-center mix-blend-plus-lighter">
          <SignUp />
        </div>
      </footer>
    </>
  );
}
