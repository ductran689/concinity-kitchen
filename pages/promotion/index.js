import React from 'react';
/* import Layout from '../../components/Layout'; */
import Image from 'next/image';
/* import text from '../../utils/text'; */
import data from '../../utils/data';
import Carousel from '../../components/Carousel';
import Link from 'next/link';
import SubLayout from '../../components/SubLayout';

export default function index() {
  return (
    <SubLayout topic={'Promotion'}>
      <div className="carousel w-full mx-auto lg:h-[800px] ">
        <Carousel loop>
          {data.promotion.map((promo, i) => {
            if (promo.image) {
              return (
                <div
                  className="relative lg:h-[800px] md:h-[600px] max-[768px]:h-[400px] w-full flex-[0_0_100%] bg-black/75 "
                  key={i}
                >
                  <div className="pro-content center-item bg-white rounded-lg m-auto border-solid border-2 w-[70%] h-[90%] shadow-xl flex flex-col justify-center items-center">
                    <div className="promo-title h-[300px] md:h-[300px] max-[672px]:h-[200px] w-[70%] relative">
                      <Image
                        className="rounded-t-lg  fill-slate-700 "
                        src={promo.promoTitle}
                        alt={promo.name}
                        fill={true}
                      />
                    </div>

                    <h2 className=" text-slate-800 text-[30px] max-[770px]:text-[18px] text-center max-[768px]:mb-[20px] mb-[50px] ">
                      {promo.emphasize}
                    </h2>
                    <div className="img-content w-[25%] h-[50%] max-[565px]:h-[40%] max-[768]:w-[50%] max-[400px]:h-[30%] relative mx-auto ">
                      <Link href="https://www.harveynorman.com.au/westinghouse-60cm-13-place-setting-stainless-steel-freestanding-dishwasher.html?CAWELAID=720013240000514751&gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oLHnMll6o7bmusosJxGOjZ1NCxLQ43HCtd2bj177qICLN_9hsqCEzwaApMREALw_wcB&gclsrc=aw.ds">
                        <Image
                          className="rounded-t-lg  fill-slate-700 "
                          src={promo.image}
                          alt={promo.name}
                          fill={true}
                        />
                      </Link>
                    </div>
                    <p className="text-center font-poppinsbold text-[20px] font-[400] mt-[20px] mb-[20px] max-[768px]:text-[16px]">
                      {promo.content}
                    </p>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="relative lg:h-[800px] md:h-[600px] max-[768px]:h-[400px] w-full flex-[0_0_100%] bg-black/75 "
                  key={i}
                >
                  <div className="pro-content center-item bg-white rounded-lg m-auto border-solid border-2 w-[70%] h-[90%] shadow-xl flex flex-col justify-center items-center">
                    <div className="promo-title ">
                      <Image
                        className="rounded-t-lg  fill-slate-700 "
                        src={promo.promoTitle}
                        alt={promo.name}
                        fill={true}
                      />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </Carousel>
      </div>
    </SubLayout>
  );
}
