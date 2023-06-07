import Layout from '@/components/Layout';
/* import data from '../utils/data'; */
import Carousel from '../components/Carousel';
import Form from '../components/Form';
/* import ProductItem from '../components/ProductItem'; */
import Image from 'next/image';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { getAbout, getAllPics, getCarousel } from '../prisma/admin';

export const getStaticProps = async () => {
  const servicesDb = await getAllPics();
  const carouselDb = await getCarousel();
  const aboutDb = await getAbout();
  const updatedServiceDb = servicesDb.map((serviceDb: Object) => ({
    ...serviceDb,
  }));
  const updatedCarouselDb = carouselDb.map((carousel: Object) => ({
    ...carousel,
  }));
  const updatedAboutDb = aboutDb.map((about: Object) => ({
    ...about,
  }));

  return {
    props: {
      db: updatedServiceDb,
      dbCarousel: updatedCarouselDb,
      dbAbout: updatedAboutDb,
    },
  };
};

export default function Home({ db, dbCarousel, dbAbout }: any) {
  console.log('carousel', dbCarousel);
  console.log('about', dbAbout);
  const images = [
    '/images/cabinet_1.jpg',
    '/images/cabinet_2.jpg',
    '/images/kitchen_1.jpg',
    '/images/kitchen_3.jpg',
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
                className="relative h-[700px] w-full flex-[0_0_100%]"
                key={i}
              >
                {/* use object-cover + fill since we don't know the height and width of the parent */}
                <Image src={src} fill className="object-cover " alt={`${i}`} />
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
      <Services services={db}></Services>
      {/* <Gallery></Gallery> */}
      <Testimonials></Testimonials>
      <Form></Form>
    </Layout>
  );
}
