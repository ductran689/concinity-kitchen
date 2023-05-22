import React from 'react';
import data from '../utils/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  return (
    <div className="gallery mt-4 container m-auto ">
      <h1 className="h1-primary">Gallery</h1>
      <p>
        View a comprehensive selection of our previous work in the galleries
        below. Select a gallery name to view more options.
      </p>
      <div className="w-[80%] m-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center ">
        {data.gallery.map((gallery, i) => (
          <div
            className="gallery_element w-[80%]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
            key={Math.random()}
          >
            <div className=" relative w-full lg:min-h-[300px] md:min-h[250] min-h-[250px]">
              <Link href={`/gallery/${gallery.slug}`}>
                <Image
                  className="card  "
                  key={i}
                  src={gallery.image}
                  alt={gallery.name}
                  fill={true}
                />
              </Link>
            </div>
            <Link href={`/gallery/${gallery.slug}`}>
              <button className="m-2">{gallery.name}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
