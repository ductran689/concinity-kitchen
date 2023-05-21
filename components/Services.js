import React from 'react';
import data from '../utils/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="services relative">
      <Image
        src="/public/images/kitchen_1"
        alt="background image"
        fill={true}
      />
      <h1 className="h1-primary">OUR SERVICVE</h1>
      <p>
        Perfect Kitchens provide a full range of services covering everything
        you need to create a beautiful new kitchen. Select a service below to
        find out more.
      </p>
      {/* services-cards */}
      <div className=" grid mt-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:justify-self-center lg:justify-items-center ">
        {data.services.map((service, i) => (
          <div
            className="service_card w-[90%] border-solid border-transparent border-b-lime-500 border-2 bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative "
            key={i}
          >
            <div className="image_container relative w-full lg:min-h-[300px] md:min-h[250] min-h-[250px]">
              <Link href={`/services/${service.slug}`}>
                <Image
                  className="rounded-t-lg"
                  src={service.image}
                  alt={service.name}
                  fill={true}
                />
              </Link>
            </div>
            <div className="describtion m-2">
              <p>{service.content}</p>
            </div>

            <div className="button relative flex justify-end">
              <Link href={`/services/${service.slug}`}>
                <button className="m-2 text-right ">FIND OUT MORE</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
