import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
/* import Layout from '../../components/Layout'; */
import { getAllPics } from '../../prisma/admin';
import Layout from '../../components/Layout';

export default function ServiceScreen({ db }) {
  const { query } = useRouter();
  console.log({ query });
  const { serviceSlug } = query;
  const service = db.find((x) => x.slug === serviceSlug);
  if (!service) {
    return <div>Service Not Found</div>;
  }
  return (
    <Layout title={service.name} key={service.id}>
      <div className="service_page">
        <h1 className="text-center h1-primary">{service.name}</h1>
        <div className="service_gallery grid grid-flow-col grid-col-4 ">
          {service.sub_images.map((sub, i) => (
            <div className="sub_container h-[300px]" key={i + 1}>
              <Image
                className="rounded-t-lg"
                src={service.image}
                alt={service.name}
                fill={true}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const servicesDb = await getAllPics();
  const updatedServiceDb = servicesDb.map((serviceDb) => ({
    ...serviceDb,
  }));

  return {
    props: {
      db: updatedServiceDb,
    },
  };
};

export async function getStaticPaths() {
  const data = await getAllPics();
  const updatedData = data.map((serviceDb) => ({
    ...serviceDb,
  }));
  const paths = updatedData.map((data) => {
    return {
      params: { serviceSlug: data.slug.toString() },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}
