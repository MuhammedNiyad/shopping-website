import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
interface Props {
  item: {
    id: number;
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
  };
}
const ProductCard: React.FC<Props> = ({ item }) => {
  const { id, img, title, desc, rating, price } = item;

  const generatingRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        break;
    }
  };
  

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          alt={title}
          width={200}
          height={300}
        />
      </div>
      <div className="py-2 space-y-2">
        <h2 className="font-medium uppercase text-accent">{title}</h2>
        <p className="text-gray-500 max-w-[200px]">{desc}</p>
        <div>{generatingRating(rating)}</div>

        <div className="flex gap-2 font-bold">
          {price}.00
          <del>{+price.slice(1) * 2}.00</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
