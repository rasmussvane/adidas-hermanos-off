import BackgroundTexture from './components/BackgroundTexture';
import FixedLayout from './components/FixedLayout';
import Image from 'next/image';
import SectionLayout from './components/SectionLayout';
import images from './components/constants/images';
import SubEventSignUp from './components/SubEventSignup';

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
          </div>
        </SectionLayout>
        <SectionLayout className="mix-blend-plus-lighter gap-10 font-seven-segments">
          <figure className="relative w-full" style={{ height: 60 }}>
            <Image
              src={'/sign-up.webp'}
              alt="Sign up"
              fill={true}
              className="object-contain w-full h-full"
            />
          </figure>
          <SubEventSignUp
            label={
              <p>
                H.Koumori x Adidas Exhibition
                <br />
                Wed 28th – thu 30th jan
              </p>
            }
            sheet="exhibition-01"
          />

          <SubEventSignUp
            label={
              <p>
                Coffee Course 01 w. La Cabra
                <br />
                16:00 – Wed 28th JAN
              </p>
            }
            sheet="coffee-course-01"
          />

          <SubEventSignUp
            label={
              <p>
                Coffee course 02 w. La cabra
                <br />
                16:00 – Wed 28th JAN
              </p>
            }
            sheet="coffee-course-02"
          />

          <SubEventSignUp
            label={
              <p>
                Sunset Run w. Outdoor Office
                <br />
                thu 29th jan – 18:00 - 7km run
              </p>
            }
            sheet="run"
          />

          <SubEventSignUp
            label={
              <p>
                Sunrise Run 10km w. TTT Athletics
                <br />
                07:00 – wed 28th jan
              </p>
            }
            sheet="run-01"
          />

          <SubEventSignUp
            label={
              <p>
                Sunset Run 7km w. Outdoor Office
                <br />
                18:00 – thu 29th JAN
              </p>
            }
            sheet="run-02"
          />
        </SectionLayout>
      </main>
      <FixedLayout />
      <BackgroundTexture />
    </>
  );
}
