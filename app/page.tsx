import SunCount from "./components/SunCount";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <header className="absolute top-0 left-0 w-full flex justify-between p-4">
        <SunCount location="cdmx" />
        <SunCount location="cph" />
      </header>
      <main>
        <div className="w-full h-screen flex justify-center items-center">
          <ul className="text-7xl leading-none text-center">
            {[
              "Adidas",
              "HERMANOS",
              "KOUMORI",
              "COPENHAGEN",
              "Showroom",
              "27.01.26",
            ].map((text, index) => (
              <li key={index}>
                <p className="blur-mask">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="absolute bottom-0 left-0 w-full flex justify-between p-4 items-center">
        <figure style={{ width: 137, height: 58 }} className="relative">
          <Image
            src="/logo.svg"
            alt=""
            fill
            className="mix-blend-plus-lighter object-contain object-bottom"
          />
        </figure>
        <div className="text-center text-lg leading-none">
          <p>Showroom sign up</p>
        </div>
      </footer>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden  -z-10">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/video-texture-compressed.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
