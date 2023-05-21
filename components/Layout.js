import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title : 'concinity-kitchen'}</title>
        <meta name="description" content=" Ecommerce Website" />
      </Head>
      <div>
        <header>
          <Header></Header>
        </header>
        <main className=" container m-auto mt-4 px-4">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}
