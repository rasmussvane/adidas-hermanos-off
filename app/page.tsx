import BackgroundTexture from "./components/BackgroundTexture";
import FixedLayout from "./components/FixedLayout";
import Image from "next/image";
import SectionLayout from "./components/SectionLayout";
import images from "./components/constants/images";

export default function Home() {
  return (
    <>
      <main className="overflow-y-scroll h-screen snap-y-mandatory">
        <SectionLayout className="mix-blend-plus-lighter snap-center">
          <figure className="relative" style={{width: 400, height: 400}}>
            <Image src="/text-lockup.webp" className="w-full h-full object-contain" fill alt="Adidas X Hermanos Koumori. Copenhagen showroom. 27. 01. 2026" />
          </figure>
        </SectionLayout>
        <SectionLayout className="gap-4 snap-start">
          {images.map((src, index) => (
            <figure
              key={index}
              className="relative w-full max-w-sm aspect-image"
            >
              <Image
                src={src}
                fill
                alt=""
                sizes="(max-width: 24rem) 100vw, 24rem"
                loading="eager"
              />
            </figure>
          ))}
        </SectionLayout>
        <SectionLayout className="mix-blend-plus-lighter snap-center">
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
      </main>
      <FixedLayout />
      <BackgroundTexture />
    </>
  );
}
