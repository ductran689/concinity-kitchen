import React from 'react';
import Layout from '../../../components/Layout';
import Image from 'next/image';
import data from '../../../utils/data';
import { useRouter } from 'next/router';
import SubLayout from '../../../components/SubLayout';

export default function SubService() {
  const router = useRouter();
  const { subSlug, serviceSlug } = router.query;
  console.log('subSlug', subSlug);
  const service = data.services.find((x) => x.slug === serviceSlug);
  if (service) {
    const sub = service.subServices.find((x) => x.slug === subSlug);
    if (!sub) {
      return <div>Service Not Found</div>;
    }
    if (sub) {
      return (
        <SubLayout topic={sub.name}>
          <div className="service_gallery grid-flow-cols  gap-6 mb-[100px] mx-[20px] grid-lg-cols grid-md-cols grid-sm-cols ">
            {sub.pics.map((subI, i) => (
              <div className="sub_container h-[400px] relative " key={i}>
                <h1>{subI.name}</h1>
                <Image
                  className="rounded-lg"
                  src={subI.image}
                  alt={subI.key}
                  fill={true}
                />
              </div>
            ))}
          </div>
        </SubLayout>
      );
    }
  } else {
    <div>
      <h1>Cannot find the data</h1>
    </div>;
  }
}
