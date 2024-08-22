import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div>
      <div className="container grid-cols-2 pt-16 pb-16">
        <h2 className="pb-4 text-2xl font-medium">Testimonials</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="grid p-6 border border-gray-300 rounded-2xl place-items-center lg:p-0">
            <div className="flex flex-col items-center gap-1 text-center">
              <Image
                src="/profile.jpg"
                alt="dp"
                width={80}
                height={80}
                className="inline-block rounded-full"
              />
              <h2 className="font-black text-gray-500 text-[20px]">Niyad</h2>
              <p>CEO & Founder Invision</p>
              <Image
                src="/quoteIcon.png"
                alt="star"
                width={30}
                height={30}
                className="inline-block py-2"
              />
              <p className="max-w-[200px] text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis, cupiditate.
              </p>
            </div>
          </div>
          
          <div className="bgred600 bg-[url(/banner-4.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-[#ffffffa2] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-2 grid place-items-center gap-3">
                <button className="p-2 text-white rounded-md bg-blackish">25% DISCOUNT</button>
                <h2 className="text-2xl font-semibold text-[#272727">Summer collection</h2>
                <p className="text-gray-500 text-[20px]">
                    Starting @ $20 <b>Shop Now</b>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
