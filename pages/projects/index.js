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
    <SubLayout topic={'Our Projects'}>
      <div className="carousel w-full mx-auto lg:h-[800px] ">
        <Carousel loop>
          {data.promotion.map((promo, i) => {
            return (
              <div
                className="relative lg:h-[800px] md:h-[600px] max-[768px]:h-[400px] w-full flex-[0_0_100%] bg-black/75 "
                key={i}
              >
                <div className="pro-content center-item bg-white rounded-lg m-auto border-solid border-2 w-[70%] h-[90%] shadow-xl flex flex-col justify-center items-center">
                  <h1 className="h1-primary">{promo.name}</h1>
                  <h2 className="h2-primary mb-[50px] ">{promo.content}</h2>
                  <div className="img-content w-[70%] h-[50%] relative mx-auto ">
                    <Link href="https://www.harveynorman.com.au/westinghouse-60cm-13-place-setting-stainless-steel-freestanding-dishwasher.html?CAWELAID=720013240000514751&gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oLHnMll6o7bmusosJxGOjZ1NCxLQ43HCtd2bj177qICLN_9hsqCEzwaApMREALw_wcB&gclsrc=aw.ds">
                      <Image
                        className="rounded-t-lg  fill-slate-700 "
                        src={promo.image}
                        alt={promo.name}
                        fill={true}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </SubLayout>
  );
}
