import Layout from '@/components/Layout';
/* import data from '../utils/data'; */
import Carousel from '../components/Carousel';
import Form from '../components/Form';
/* import ProductItem from '../components/ProductItem'; */
import Image from 'next/image';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import text from '@/utils/text';
import Link from 'next/link';
/* import { getAbout, getAllPics, getCarousel } from '../prisma/admin'; */

export default function Home() {
  const images = [
    '/images/kit-18.webp',
    '/images/kit-17.webp',
    '/images/kit-16.webp',
    '/images/kit-15.webp',
  ];
  return (
    <Layout title="Kenny Kitchen">
      <div className="carousel w-full mx-auto ">
        <Carousel loop>
          {images.map((src, i) => {
            return (
              // 👇 style each individual slide.
              // relative - needed since we use the fill prop from next/image component
              // h-64 - arbitrary height
              // flex[0_0_100%]
              //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
              //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
              <div
                className="relative h-[800px] w-full flex-[0_0_100%]"
                key={i}
              >
                <div className="intro-text center-item z-50 lg:w-[80%] md:w-[90%] max-[768px]:w-[90%] h-[70%] max-[578px]:h-[50%]">
                  <h1 className="lg:text-[60px] text-white font-[700] md:text-[50px] max-[768px]:text-[40px]">
                    Kenny Kitchen
                  </h1>
                  {text.promo.map((text) => (
                    <p
                      className="flex mb-[10px] text-white lg:text-[30px] md:text-[25px] font-[400] max-[768px]:text-[20px] items-center justify-start"
                      key={text.name}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FFFFFF"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#575353"
                        className="w-8 h-8 max-[578px]:w-4 max-[578px]:h-4 max-[640px]:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{text.text}</span>
                    </p>
                  ))}
                  <Link href="#form_section" scroll={false}>
                    <button className="border-white border-[2px] text-white p-2 lg:text-[25px] font-[400] bg-black/50 mt-[10px] flex items-center hover:text-slate-700 hover:bg-white/50 md:text-[20px] max-[768px]:text-[16px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="lg:w-6 lg:h-6 md:w-5 md:h-5 max-[768px]:w-4 max-[768px]:h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                      Contact Us Today
                    </button>
                  </Link>
                </div>
                <Image
                  src={src}
                  fill
                  className="object-cover brightness-[.6] "
                  alt={`${i}`}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* Products */}
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product: object) => (
          <ProductItem product={product} key={Math.random()}></ProductItem>
        ))}
      </div> */}
      <About></About>
      <Services></Services>
      {/* <Gallery></Gallery> */}
      <Testimonials></Testimonials>
      <Form></Form>
    </Layout>
  );
}
