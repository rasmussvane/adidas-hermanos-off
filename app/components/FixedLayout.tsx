"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import SunTimer from "./SunTimer";
import Image from "next/image";
import SignUp from "./SignUp";

const mobileBreakPoints = 512; // Tailwind: lg-size

const logoWidth = {mobile: 137, desktop: 150}; 
const logoRatio = 58/137;
const logoSize = {
  mobile: {width: logoWidth.mobile, height: logoWidth.mobile*logoRatio}, 
  desktop: {width: logoWidth.desktop, height: logoWidth.desktop*logoRatio},
}

export default function FixedLayout() {
  const { width } = useWindowSize();
  const layout = width && width <= mobileBreakPoints ? "mobile" : "desktop";

  if (!width) return null;

  if (layout === "mobile") {
    return (
      <>
        <header className="flex fixed top-0 left-0 justify-between p-sm md:p-base w-full font-seven-segments mix-blend-plus-lighter">
          <SunTimer location="cdmx" />
          <SunTimer location="cph" />
        </header>
        <footer className="flex fixed bottom-0 left-0 justify-between items-end p-sm md:p-base w-full font-seven-segments mix-blend-plus-lighter">
          <figure style={{ ...logoSize.mobile }} className="relative">
            <Image
              src="/logo.svg"
              alt=""
              fill
              className="object-contain object-bottom"
            />
          </figure>
          <div className="text-lg leading-none">
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
      <header className="flex fixed top-0 left-0 justify-center p-sm md:p-base w-full mix-blend-plus-lighter">
        <figure style={{ ...logoSize.desktop }} className="relative">
          <Image
            src="/logo.svg"
            alt=""
            fill
            className="object-contain object-bottom"
          />
        </figure>
      </header>
      <div className="flex fixed top-0 bottom-0 left-0 items-center p-sm md:p-base pointer-events-none font-seven-segments mix-blend-plus-lighter">
        <SunTimer location="cdmx" />
      </div>
      <div className="flex fixed top-0 right-0 bottom-0 items-center p-sm md:p-base pointer-events-none font-seven-segments mix-blend-plus-lighter">
        <SunTimer location="cph" />
      </div>
      <footer className="flex fixed bottom-0 left-0 justify-center items-end p-sm md:p-base w-full font-seven-segments mix-blend-plus-lighter">
        <div className="text-lg leading-none text-center">
          <SignUp />
        </div>
      </footer>
    </>
  );
}
