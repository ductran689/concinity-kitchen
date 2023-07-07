import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import BtnCard from '../../components/BtnCard';
import SubLayout from '../../components/SubLayout';
import data from '../../utils/data';

export default function ServiceScreen() {
  const { query } = useRouter();
  console.log({ query });
  const { serviceSlug } = query;
  const service = data.services.find((x) => x.slug === serviceSlug);
  console.log('serviceSlug', service);
  if (!service) {
    return <div>Service Not Found</div>;
  }
  return (
    <SubLayout topic={service.name} key={service.key}>
      <div className="service_gallery grid-flow-cols  gap-6 mb-[100px] mx-[20px] grid-lg-cols grid-md-cols grid-sm-cols ">
        {service.sub_images
          ? service.sub_images.map((sub) => (
              <div
                className="sub_container h-[350px] max-[433px]:h-[300px] relative "
                key={`${sub.key}`}
              >
                <Image
                  className="rounded-lg brightness-90"
                  src={sub.image}
                  alt={sub.name}
                  fill={true}
                />
              </div>
            ))
          : service.subServices.map((sub, j) => (
              <div
                className="sub_container h-[350px] max-[433px]:h-[300px] relative "
                key={j + 0.1}
              >
                <Link href={`/services/${service.slug}/${sub.slug}`}>
                  <Image
                    className="rounded-lg brightness-75"
                    src={sub.image}
                    alt={sub.name}
                    fill={true}
                  />
                </Link>

                <BtnCard service={sub} href={`${service.slug}/${sub.slug}`}>
                  {' '}
                  {sub.name}
                </BtnCard>
              </div>
            ))}
      </div>
    </SubLayout>
  );
}
