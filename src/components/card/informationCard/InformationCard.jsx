import React from "react";
import StarRating from "../../starRating/StarRating";
const InformationCard = ({name, category, price, description}) => {
  return (
    <>
      <div className="px-6 py-4">
        <div className="uppercase">
          <h1 className="font-bold text-xl mb-2 inline">{name}</h1>
          <span className="bg-green-800 text-lg font-bold rounded text-white px-[6px] ml-1">
            ${price}
          </span>
          <p className="text-gray-700 font-bold">{description}</p>
          <p className="text-gray-700 text-base font-semibold"> Categoria:{category}</p>
          <StarRating />
        </div>
      </div>
    </>
  );
};

export default InformationCard;
