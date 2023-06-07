import data from '@/utils/data';
import React from 'react';

export default function Testimonials() {
  console.log(data.testimonial);
  return (
    <div className="mt-[100px] h-[300px] mb-[200px]">
      <h1 className="h1-primary">Testimonials</h1>
      {data.testimonial.map((test) => (
        <div
          className="testimonial-content w-[60%] m-auto mb-[30px]"
          key={test.key}
        >
          <p className="text-secondary text-center">{test.content}</p>
          <p className="text-center text-primary drop-shadow-md">{test.name}</p>
        </div>
      ))}
    </div>
  );
}
