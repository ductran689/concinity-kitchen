/* eslint-disable @next/next/no-img-element */
import data from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import BtnCard from '../components/BtnCard';

/* const fetchPics = async () => {
  const response = await fetch('../../api/admin');
  const data = await response.json();
  console.log(data);
}; */
export default function Services() {
  return (
    <div className="services  mt-[100px] mb-[100px] " id="service_section">
      <h1 className="h1-primary">OUR SERVICVE</h1>
      <p className="text-primary mb-[50px]">
        Perfect Kitchens provide a full range of services covering everything
        you need to create a beautiful new kitchen. Select a service below to
        find out more.
      </p>
      {/* services-cards */}
      <div className=" grid mt-4 gap-x-2 gap-y-8 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 lg:justify-self-center lg:justify-items-center  sm:justify-self-center sm: justify-items-center">
        {data.services.map((service, i) => (
          <div
            className="service_card w-[90%] border-solid border-transparent  border-2 bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative hover:overflow-hidden  overflow-hidden"
            key={i}
          >
            <div className="image_container relative w-full lg:min-h-[300px] md:min-h[250] min-h-[250px] hover:scale-105  ease-in duration-100 overflow-hidden">
              <Link href={`/services/${service.slug}`}>
                <Image
                  className="rounded-t-lg  fill-slate-700"
                  src={service.image}
                  alt={service.name}
                  fill={true}
                />
              </Link>
            </div>
            {/* <div className="image_overlay overlay  "></div> */}
            <BtnCard service={service} href={service.slug}>
              {service.name}
            </BtnCard>
          </div>
        ))}
      </div>
    </div>
  );
}

/* export async function getStaticProps() {
  const res = await fetch('../../api/services');
const servicePics = await res.json(); 

  return {
    props: {
      pics:servicePics,
    },
  };
}
 */
