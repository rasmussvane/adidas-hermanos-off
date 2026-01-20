import BackgroundTexture from './components/BackgroundTexture';
import FixedLayout from './components/FixedLayout';
import Image from 'next/image';
import SectionLayout from './components/SectionLayout';
import images from './components/constants/images';
import SignUpForm from './components/SignUpForm';

export default function Home() {
  return (
    <>
      <main>
        <SectionLayout className="mix-blend-plus-lighter">
          <figure
            className="relative w-full flex-1"
            style={{ maxWidth: 500, minHeight: 300 }}
          >
            <Image
              src="/Hero_text.webp"
              loading="eager"
              className="w-full h-full object-contain"
              fill
              alt="Adidas. H.Koumori. CPHFW EXHIBITION. 28-30/01/2026, 12:00-18:00"
            />
          </figure>
        </SectionLayout>
        {/* <SectionLayout className="gap-base"> */}
        {/*   {images.map((src, index) => ( */}
        {/*     <figure */}
        {/*       key={index} */}
        {/*       className="relative w-full max-w-[480px] aspect-image" */}
        {/*     > */}
        {/*       <Image */}
        {/*         src={src} */}
        {/*         fill */}
        {/*         alt="" */}
        {/*         sizes="(max-width: 480px) 100vw, 480px" */}
        {/*         loading="eager" */}
        {/*       /> */}
        {/*     </figure> */}
        {/*   ))} */}
        {/* </SectionLayout> */}
        <SectionLayout className="mix-blend-plus-lighter">
          <div className="max-w-none font-sans text-center rich-text text-base/5 md:max-w-2/3">
            <p>
              The adidas and Hermanos Koumori collaboration unites performance
              engineering with cultural expression, redefining running as both a
              physical act and a deeper state of awareness. At its heart, the
              woven Adizero EVO SL embodies the feeling of fast—lightweight,
              precise, and purposeful. This vision extends into an apparel
              collection that blends minimalist design with functional detail,
              built for freedom of motion across streets, trails, and inner
              journeys alike. Guided by Hermanos Koumori’s belief that every
              stride connects the visible and the unseen, this partnership
              champions runners who seek progress not only in pace, but in
              perspective.
            </p>

            <p>
              Visit the exhibition and see the collection.
              <br />
              Papirøen 73, CPH
              <br />
              28th - 29th January
              <br />
              10:00 - 18:00.
            </p>
          </div>
        </SectionLayout>
        <SectionLayout
          id="sign-up"
          className="mix-blend-plus-lighter gap-10 font-seven-segments"
        >
          <figure className="relative w-full h-[120px] md:h-[60px]">
            <Image
              src={'/sign-up_desktop.png'}
              alt="Sign up"
              fill={true}
              className="object-contain w-full h-full hidden md:block"
            />
            <Image
              src={'/sign-up_mobile.png'}
              alt="Sign up"
              fill={true}
              className="object-contain w-full h-full block md:hidden"
            />
          </figure>

          <SignUpForm
            label={
              <p>
                H. KOUMORI X ADIDAS EXHIBITION
                <br />
                WED 28TH – THU 29TH JAN
              </p>
            }
            sheet="exhibition"
          />

          <SignUpForm
            label={
              <p>
                COFFEE COURSE 01 W. LA CABRA
                <br />
                WED 28TH JAN – 17:00
              </p>
            }
            sheet="coffee-course-01"
            isFull={true}
          />

          <SignUpForm
            label={
              <p>
                SUNRISE RUN 10KM W. TTTT ATHLETICS
                <br />
                07:00 – WED 28TH JAN
              </p>
            }
            sheet="run-sun-rise"
          />

          <SignUpForm
            label={
              <p>
                COFFEE COURSE 02 W. LA CABRA
                <br />
                THU 29TH JAN – 13:00
              </p>
            }
            sheet="coffee-course-02"
            isFull={true}
          />

          <SignUpForm
            label={
              <p>
                SUNSET RUN 7KM W. OUTDOOR OFFICE
                <br />
                18:00 – THU 29TH JAN
              </p>
            }
            sheet="run-sun-set"
          />
        </SectionLayout>
      </main>
      <FixedLayout />
      <BackgroundTexture />
    </>
  );
}
