import data from '@/utils/data';
import React from 'react';

export default function Testimonials() {
  console.log(data.testimonial);
  return (
    <div className="mt-[100px] mb-[100px] max-[568px]:mt-[50px] max-[568px]:mb-[50px]">
      <h1 className="h1-primary max-[568px]:text-[23px]">Testimonials</h1>
      {data.testimonial.map((test) => (
        <div
          className="testimonial-content w-[60%] max-[768px]:w-[80%] max-[568px]:w-[90%] m-auto mb-[30px]"
          key={test.key}
        >
          <p className="text-secondary text-center max-[568px]:text-[16px]">
            {test.content}
          </p>
          <p className="text-center text-primary drop-shadow-md">{test.name}</p>
        </div>
      ))}
    </div>
  );
}
