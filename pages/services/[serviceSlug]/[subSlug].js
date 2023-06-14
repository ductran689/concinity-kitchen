import React from 'react';
import Layout from '../../../components/Layout';
import Image from 'next/image';
import data from '../../../utils/data';
import { useRouter } from 'next/router';

export default function SubService() {
  const router = useRouter();
  const { subSlug, serviceSlug } = router.query;
  console.log('subSlug', subSlug);
  const service = data.services.find((x) => x.slug === serviceSlug);
  if (service.subServices) {
    const sub = service.subServices.find((x) => x.slug === subSlug);

    console.log('sub', sub);
    if (!sub) {
      return <div>Service Not Found</div>;
    }

    return (
      <Layout title={sub.name} key={sub.id}>
        <div className="service_page  bg-white w-[95%] m-auto">
          <div className="cover lg:h-[400px] md:h-[300px] sm:h-[200px] min-[320px]:h-[200px] relative mb-[100px] ">
            <Image
              className="rounded-t-lg object-cover brightness-75"
              src={service.cover}
              alt={sub.name}
              fill={true}
            />
            <h1>{sub.name}</h1>
          </div>
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
}
