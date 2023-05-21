import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiceScreen() {
  const { query } = useRouter();
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
  );
}
