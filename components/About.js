/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div
      className="about mt-[100px] mb-[100px] w-[70%] m-auto"
      id="about_section"
    >
      <h1 className="h1-primary text-gray-800">
        Creating Perfect Kitchen In Sydney
      </h1>
      {/* <div className="container flex justify-around flex-col md:flex-row sm:justify-center sm:items-center lg:flex-row">
        {data.about_images.map((image, key) => (
         
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
      </div> */}
      {/* title */}
      <h2 className="text-[30px] text-gray-800 text-center">
        New Kitchens & Kitchen Renovations
      </h2>
      <div className="about_context container m-auto">
        <p className="text-primary mb-[50px] mt-[50px]">
          At Kenny Kitchen Joinery, we understand that the kitchen is the heart
          of every home. It is where memories are made, meals are prepared, and
          families gather to share stories and laughter. We believe that a
          well-designed kitchen should reflect the unique tastes and lifestyle
          of its owners, providing both functionality and aesthetics that
          inspire and delight.
        </p>

        <p className="text-primary">
          We invite you to explore our portfolio and be inspired by our past
          projects, showcasing our versatility and ability to cater to a wide
          range of design preferences. When you choose Kenny Kitchen Joinery,
          you choose an unrivaled experience where passion, craftsmanship, and
          attention to detail converge to create kitchen spaces that are both
          functional and breathtakingly beautiful.
        </p>

        {/* <div className="col2">
          <p className="text-left text-xs font-thin text-gray-800">
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
        </div> */}
      </div>
      <div className=" flex flex-col items-center justify-center mt-[50px]">
        <Link href="/">
          <button className="bg-black  btn-primary px-[25px] py-[15px]">
            <p className=" text-slate-100 font-medium space">LEARN MORE</p>

            <Image
              className="ml-[20px]"
              src="/images/arrowlongrightwhite.svg"
              alt=" right arrow"
              width={12}
              height={5}
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
