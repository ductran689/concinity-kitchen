import Layout from '@/components/Layout';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';

export default function Home() {
  return (
    <Layout title="concinity">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product: object) => (
          <ProductItem product={product} key={Math.random()}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
