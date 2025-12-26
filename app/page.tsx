import BackgroundTexture from "./components/BackgroundTexture";
import GradientFilter from "./components/GrainFilter";
import SunTimer from "./components/SunTimer";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <main className="overflow-y-scroll h-screen">
        <div className="flex flex-col justify-center items-center w-full h-screen text-7xl text-center font-seven-segments leading-[0.9]">
          {[
            "Adidas",
            "Hermanos",
            "Koumori",
            "Copenhagen",
            "Showroom",
            "27.01.26",
          ].map((text, index) => (
            <p key={index} className="blur-mask mix-blend-plus-lighter">
              {text}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
          {Array.from({ length: 3 }).map((_, index) => (
            <figure
              key={index}
              className="relative w-full max-w-sm aspect-image"
            >
              <Image
                src="https://lipsum.app/random/1600x900"
                fill
                alt=""
                sizes="(width < 24rem) 100vw, 24rem"
              />
            </figure>
          ))}
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="font-sans text-center max-w-2/3 rich-text mix-blend-plus-lighter text-base/6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              auctor, ex id laoreet rhoncus, nisi urna accumsan ipsum, in
              hendrerit dui nulla gravida arcu. Integer sit amet neque semper,
              malesuada metus eget, viverra velit. Aliquam eget ipsum blandit,
              volutpat justo sed, tristique ligula. Suspendisse lorem lacus,
              ornare in ligula id, imperdiet euismod ligula. Donec auctor
              fermentum pellentesque. Vestibulum faucibus nibh id rutrum
              fringilla. Quisque eu neque sed arcu pretium semper. Nulla quis
              nibh vel velit luctus convallis a vitae eros. Integer commodo
              libero at magna ornare, tincidunt faucibus arcu pharetra. Quisque
              dapibus arcu.
            </p>
            <p>H.Koumori x Adidas</p>
          </div>
        </div>
      </main>
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
        <div className="text-lg leading-none text-center">
          <label htmlFor="signup-email">
            <p className="mix-blend-plus-lighter">Showroom sign up</p>
          </label>
          <input id="signup-email" type="email" />
        </div>
      </footer>
      <BackgroundTexture />
      <GradientFilter />
    </>
  );
}
