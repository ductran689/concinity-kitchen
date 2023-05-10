import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from './Carousel';

export default function Layout({ title, children }) {
  const images = [
    '/images/cabinet_1.jpg',
    '/images/cabinet_2.jpg',
    '/images/kitchen_1.jpg',
    '/images/kitchen_3.jpg',
  ];
  return (
    <>
      <Head>
        <title>{title ? title : 'concinity-kitchen'}</title>
        <meta name="description" content=" Ecommerce Website" />
      </Head>
      <div>
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="font-bold">
              concinity-kitchen
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className=" container m-auto mt-4 px-4">
          {children}
          <div className="carousel lg:w-3/4 mx-auto my-2">
            <Carousel loop>
              {images.map((src, i) => {
                return (
                  // 👇 style each individual slide.
                  // relative - needed since we use the fill prop from next/image component
                  // h-64 - arbitrary height
                  // flex[0_0_100%]
                  //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                  //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                  <div className="relative h-64 flex-[0_0_100%]" key={i}>
                    {/* use object-cover + fill since we don't know the height and width of the parent */}
                    <Image
                      src={src}
                      fill
                      className="object-cover"
                      alt={`${i}`}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright 2023 Duc Tran</p>
        </footer>
      </div>
    </>
  );
}
