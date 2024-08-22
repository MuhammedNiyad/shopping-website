import Image from "next/image";
import React from "react";

interface propsTypes {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}
const Slide: React.FC<propsTypes> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="relative border-none outline-none">
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-1/2 -translate-y-1/2 space-y-2 lg:space-y-4 bg-{#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="text-2xl text-accent lg:text-[28px]">{title}</h3>
        <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
          {mainTitle}
        </h2>
        <h3 className="text-[24px] text-gray-500">
          starting at {" "}
          <b className="text-[24px] lg:text-[30px]">{price}</b>
          .00
        </h3>
        <div className="text-white bg-accent text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackishs">
          Shop Now
        </div>
      </div>
      <Image
        className="w-full h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
        src={img}
        alt="banner"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Slide;
