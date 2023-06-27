import Image from 'next/image';
import React from 'react';
import text from '../utils/text';
import Layout from './Layout';

export default function SubLayout({ topic, children }) {
  return (
    <Layout>
      <div className="promo_page bg-white w-[95%] m-auto">
        <div className="cover lg:h-[350px] md:h-[300px] sm:h-[200px] min-[320px]:h-[200px] relative mb-[100px] max-[768px]:mb-[50px] ">
          <h1 className="text-white font-[500] text-[50px] max-[672px]:text-[40px] max-[555px]:text-[35px] px-4 center-item z-30 rounded-lg shadow-lg ring-4 ring-white">
            {topic}
          </h1>
          <Image
            className=" object-cover brightness-50"
            src="/images/dark_kit_4.jpg"
            alt="about-cover"
            fill={true}
          />
        </div>
        <div className="submain_content">{children}</div>

        <div className="extra-content bg-slate-100 flex flex-row justify-between items-start about_xtra_res">
          {text.extra_text_about.map((extra, i) => (
            <div
              className="extra_col w-[30%] p-8 max-[880px]:w-[95%] max-[562px]:p-2"
              key={i}
            >
              <h3 className="h3-primary text-center font-[500] mb-[20px]">
                {extra.h3}
              </h3>
              <p className="lg:text-[18px] md:text-[18px] font-[500] text-gray-800 min-[320px]:text-[16px] text-left">
                {extra.extra}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
