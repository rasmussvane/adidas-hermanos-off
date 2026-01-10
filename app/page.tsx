import BackgroundTexture from "./components/BackgroundTexture";
import FixedLayout from "./components/FixedLayout";
import Image from "next/image";
import SectionLayout from "./components/SectionLayout";
import images from "./components/constants/images";
import SubEventSignUp from "./components/SubEventSignup";

export default function Home() {
  return (
    <>
      <main>
        <SectionLayout className="mix-blend-plus-lighter">
          <figure className="relative w-full flex-1" style={{ maxWidth: 500 }}>
            <Image
              src="/text-lockup.webp"
              loading="eager"
              className="w-full h-full object-contain pointer-event-none"
              fill
              alt="Adidas X Hermanos Koumori. Copenhagen showroom. 27. 01. 2026"
            />
          </figure>
        </SectionLayout>
        <SectionLayout className="gap-base">
          {images.map((src, index) => (
            <figure
              key={index}
              className="relative w-full max-w-100 aspect-image"
            >
              <Image
                src={src}
                fill
                alt=""
                sizes="(max-width: 25rem) 100vw, 25rem"
                loading="eager"
              />
            </figure>
          ))}
        </SectionLayout>
        <SectionLayout className="mix-blend-plus-lighter">
          <div className="max-w-none font-sans text-center rich-text text-base/5 md:max-w-2/3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              auctor, ex id laoreet rhoncus, nisi urna accumsan ipsum, in
              hendrerit dui nulla gravida arcu. Integer sit amet neque semper,
              malesuada metus eget, viverra velit. Aliquam eget ipsum blandit,
              volutpat justo sed, tristique ligula.
            </p>
            <p>
              Suspendisse lorem lacus, ornare in ligula id, imperdiet euismod
              ligula. Donec auctor fermentum pellentesque. Vestibulum faucibus
              nibh id rutrum fringilla. Quisque eu neque sed arcu pretium
              semper. Nulla quis nibh vel velit luctus convallis a vitae eros.
              Integer commodo libero at magna ornare, tincidunt faucibus arcu
              pharetra. Quisque dapibus arcu.
            </p>
            <p>H.Koumori x Adidas</p>
          </div>
        </SectionLayout>
        <SectionLayout className="mix-blend-plus-lighter gap-sm">
          <SubEventSignUp label="Showroom sign up" sheet="test-event-1" />
          <SubEventSignUp label="Another event" sheet="test-event-2" />
        </SectionLayout>
      </main>
      <FixedLayout />
      <BackgroundTexture />
    </>
  );
}
