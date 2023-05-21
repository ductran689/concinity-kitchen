import data from '@/utils/data';
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div className="about mt-4">
      <h1 className="h1-primary">Creating Perfect Kitchen In Sydney</h1>
      <div className="container flex justify-around flex-col md:flex-row sm:justify-center sm:items-center lg:flex-row">
        {data.about_images.map((image, key) => (
          /* images */
          <div
            className="image_container relative sm:min-w-[40     cf0px] min-h-[250px] border-solid border-4 border-white border-b-lime-500 round-xl m-4 md:min-w-[250px] md:min-h-[180px] lg:min-w-[350px] lg:min-h-[250px]"
            key={key}
          >
            <Image
              className="c  "
              src={image.image}
              alt={image.name}
              fill={true}
            />
          </div>
        ))}
      </div>
      {/* title */}
      <h2 className="text-[30px]">New Kitchens & Kitchen Renovations</h2>
      <div className="about_context columns-2">
        <div className="col1 ">
          <p className="text-left text-xs font-thin">
            Perfect Kitchens is a family owned and operated Australian company
            based in West Sydney. We have been servicing Sydney homes with
            quality Kitchens, Vanities, Wardrobes and Cabinetry products for
            over 25 years.
            <br />
            Founded in 1988, Perfect Kitchens has become a fixture in the
            community, we take pride in the method we use in each and every
            project where honest hard work is combined with unique design,
            quality products and services to make your home not only more
            beautiful but also modern and functional.
            <br />
            All our Kitchens, Vanities, Wardrobes and Cabinetry are custom built
            in our own factory right here in western Sydney. We only employ
            qualified tradespeople who build your cabinetry to special order,
            eliminating the need for modular or standard size cabinets.
          </p>
        </div>
        <div className="col2">
          <p className="text-left text-xs font-thin">
            We know that you have a choice of kitchen design consultants in the
            area and we appreciate your consideration. Our hope is that you’ll
            feel confident in our ability to meet all of your expectations and
            know that our customers are always our number one focus.
            <br />
            The backbone to our success for over 25 years is our commitment to
            top quality in every step including design, fabrication and
            installation. Experience customer service the way it should be. We
            do it all for you.
            <br />
            Perfect Kitchens uses only the best quality materials sourced from
            all over the world and adheres to the strictest quality, accuracy
            and levels of workmanship. After all, we rely on word of mouth!
            Perfect Kitchens truly does mean perfection!
          </p>
        </div>
      </div>
    </div>
  );
}
