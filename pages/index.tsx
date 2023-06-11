import Layout from '@/components/Layout';
/* import data from '../utils/data'; */
import Carousel from '../components/Carousel';
import Form from '../components/Form';
/* import ProductItem from '../components/ProductItem'; */
import Image from 'next/image';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
/* import { getAbout, getAllPics, getCarousel } from '../prisma/admin'; */

export default function Home() {
  const images = [
    '/images/kit-18.webp',
    '/images/kit-17.webp',
    '/images/kit-16.webp',
    '/images/kit-15.webp',
  ];
  return (
    <Layout title="concinity">
      <div className="carousel lg:w-full mx-auto ">
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
                {/* use object-cover + fill since we don't know the height and width of the parent */}
                <Image
                  src={src}
                  fill
                  className="object-cover brightness-85 "
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
