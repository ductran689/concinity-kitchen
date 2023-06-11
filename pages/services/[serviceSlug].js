import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';

export default function ServiceScreen() {
  const { query } = useRouter();
  console.log({ query });
  const { serviceSlug } = query;
  const service = data.services.find((x) => x.slug === serviceSlug);
  if (!service) {
    return <div>Service Not Found</div>;
  }
  return (
    <Layout title={service.name} key={service.id}>
      <div className="service_page  bg-white w-[95%] m-auto">
        <div className="cover lg:h-[400px] md:h-[300px] relative mb-[100px] sm:h-[200px]">
          <Image
            className="rounded-t-lg object-cover brightness-75"
            src={service.cover}
            alt={service.name}
            fill={true}
          />
        </div>
        <div className="service_gallery grid-flow-cols  gap-6 mb-[100px] mx-[20px] grid-lg-cols grid-md-cols grid-sm-cols ">
          {service.sub_images.map((sub) => (
            <div
              className="sub_container h-[400px] relative "
              key={`${sub.key}`}
            >
              <Image
                className="rounded-lg"
                src={sub.image}
                alt={sub.name}
                fill={true}
              />
            </div>
          ))}
        </div>
        <div className="visit w-[60%] m-auto pb-[100px]">
          <h1 className="h1-primary">VISIT OUR SHOWROOM</h1>
          <p className="text-primary">
            Thank you for considering Kenny Kitchen Joinery for your next
            project. We look forward to collaborating with you, bringing your
            kitchen aspirations to life, and creating a space that will be
            cherished for years to come.
          </p>
        </div>
      </div>
    </Layout>
  );
}
