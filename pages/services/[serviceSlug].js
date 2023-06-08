import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import { getAllPics } from '../../prisma/admin';

/* option 1 work without API DB */
export default function ServiceScreen({ db }) {
  /* const { query } = useRouter();
  console.log({ query });
  const { serviceSlug } = query;
  const service = data.services.find((x) => x.slug === serviceSlug);
  if (!service) {
    return <div>Service Not Found</div>;
  }
  return (
    <Layout title={service.name}>
      <div className="py-2">
        <Link href="/">back to service</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={service.image}
            alt={service.name}
            width={640}
            height={640}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{service.name}</h1>
            </li>
          </ul>
        </div>
        <div className="card p-5">
          <div className="mb-2 flex justify-between">
            <div>Price</div>
            <div>${service.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>Status</div>
            <div>{service.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</div>
          </div>
          <button className="primary-button w-full">Add to cart</button>
        </div>
      </div>
    </Layout> 


    
  )*/
  /* Option2 work with DB */
  /* const { query } = useRouter(); */
  const service = db;
  /* const { serviceSlug } = query;
  const service = db.find((x) => x.slug === serviceSlug);
  console.log(service);
  if (!service) {
    return <div>Service Not Found</div>;
  } */
  return (
    /* return db.map((service) => ( */
    <Layout title={service.name} key={service.id}>
      <div className="py-2">
        <Link href="/">back to service</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={service.image}
            alt={service.name}
            width={640}
            height={640}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{service.name}</h1>
            </li>
          </ul>
        </div>
        <div className="card p-5">
          <div className="mb-2 flex justify-between">
            <div>Price</div>
            <div>${service.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>Status</div>
            <div>{service.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</div>
          </div>
          <button className="primary-button w-full">Add to cart</button>
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
