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
        <header className=" w-full  z-10 bg-transparent fixed">
          <Header></Header>
        </header>
        <main className="  m-auto  bg-slate-200 w-full">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}
