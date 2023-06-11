/* eslint-disable @next/next/no-img-element */
import data from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/* const fetchPics = async () => {
  const response = await fetch('../../api/admin');
  const data = await response.json();
  console.log(data);
}; */
export default function Services() {
  const [activeId, setActiveId] = useState(0);
  const handleHover = (id) => {
    setActiveId(id);
    console.log('onhover', activeId);
  };
  const undoHover = () => {
    setActiveId(0);

    console.log('offhover', activeId);
  };
  return (
    <div className="services  mt-[200px] mb-[200px] " id="service_section">
      <h1 className="h1-primary">OUR SERVICVE</h1>
      <p className="text-primary mb-[50px]">
        Perfect Kitchens provide a full range of services covering everything
        you need to create a beautiful new kitchen. Select a service below to
        find out more.
      </p>
      {/* services-cards */}
      <div className=" grid mt-4 gap-2 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 lg:justify-self-center lg:justify-items-center  sm:justify-self-center sm: justify-items-center">
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
            <div className="service_content center-item ">
              <div className="describtion ">
                <h2 className="h2-primary text-white">{service.name}</h2>
              </div>

              <div
                className=" mt-6 btn-card-lg btn "
                onMouseEnter={() => handleHover(service.key)}
                onMouseLeave={undoHover}
              >
                <Link href={`/services/${service.slug}`}>
                  <button className="btn-service text-center btn-primary ">
                    <p className="text-slate-200 font-medium space text-btn">
                      VIEW MORE
                    </p>
                    <Image
                      className="ml-[15px] my-[15px]"
                      src={
                        activeId === service.key
                          ? `/images/arrowlongrightblack.svg`
                          : `/images/arrowlongrightwhite.svg`
                      }
                      alt=" right arrow"
                      width={12}
                      height={10}
                    />
                  </button>
                </Link>
              </div>
            </div>
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
