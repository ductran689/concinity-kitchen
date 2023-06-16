import React from 'react';
import Image from 'next/image';
import text from '../../utils/text';
import SubLayout from '../../components/SubLayout';

export default function index() {
  return (
    <SubLayout topic={'Profile'}>
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
    </SubLayout>
  );
}
