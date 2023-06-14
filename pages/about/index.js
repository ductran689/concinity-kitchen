import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import text from '../../utils/text';

export default function index() {
  return (
    <Layout>
      <div className="about_page bg-white w-[95%] m-auto">
        <div className="cover lg:h-[400px] md:h-[300px] sm:h-[200px] min-[320px]:h-[200px] relative mb-[100px] ">
          <Image
            className=" object-cover brightness-75"
            src="/images/dark_kit_4.jpg"
            alt="about-cover"
            fill={true}
          />
        </div>
        <div className="about_container lg:w-[80%] md:w-[85%] max-[768px]:w-[95%] m-auto">
          <div className="about_main">
            <h1 className="h1-primary max-[768px]:mt-[50px]">
              Kenny Kitchen's Masterful Joinery Creations
            </h1>
            <div className="about_content">
              <div className="about_content--1 lg:mb-[100px] lg:mt-[100px] md:mb-[50px] md:mt-[50px] max-[768px]:mt-[50px] max-[768px]:mb-[50px] about-content-responsive flex justify-between flex-row">
                <p className="lg:w-[45%] md:w-[45%] max-[768px]:w-[90%] flex justify-center items-center text-primary">
                  {text.about.content_1}
                </p>
                <div className="about_pic lg:w-[45%] md:w-[45%] max-[768px]:w-[70%] max-[768px]:mt-[50px] max-[768px]:h-[300px] h-[400px] relative ">
                  <Image
                    className="rounded-lg object-cover brightness-75"
                    src="/images/con_kit_12.jpg"
                    alt=""
                    fill={true}
                  />
                </div>
              </div>
              <div className="about_content--2 lg:mb-[100px] lg:mt-[100px] md:mb-[50px] md:mt-[50px] max-[768px]:mt-[50px] max-[768px]:mb-[50px] about-content-responsive flex justify-between flex-row-reverse">
                <p className="lg:w-[45%] md:w-[45%] max-[768px]:w-[90%] flex  justify-center items-center text-primary">
                  {text.about.content_2}
                </p>
                <div className="about_pic lg:w-[45%] md:w-[45%] max-[768px]:w-[70%] max-[768px]:mt-[50px] max-[768px]:h-[300px] h-[400px] relative ">
                  <Image
                    className="rounded-lg object-cover brightness-75"
                    src="/images/con_kit_11.jpg"
                    alt=""
                    fill={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="extra-content bg-slate-100 flex flex-row justify-between items-start about_xtra_res">
          {text.extra_text_about.map((extra, i) => (
            <div className="extra_col w-[30%] p-8 max-[880px]:w-[95%] " key={i}>
              <h3 className="h3-primary text-center font-[500] mb-[20px]">
                {extra.h3}
              </h3>
              <p className="lg:text-[18px] md:text-[18px] font-[500] text-gray-800 min-[320px]:text-[16px] text-left">
                {extra.extra}{' '}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
