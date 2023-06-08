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
      <div clas>
        <header>
          <Header></Header>
        </header>
        <main className="  m-auto  bg-slate-200">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}
