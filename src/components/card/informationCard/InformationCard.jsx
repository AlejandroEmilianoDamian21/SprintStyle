import React from "react";
import StarRating from "../../starRating/StarRating";
const InformationCard = () => {
  return (
    <>
      <div className="px-6 py-4 u">
        <div className="uppercase">
          <h1 className="font-bold text-xl mb-2 inline">The Coldest sunset</h1>
          <span className="bg-[#11E95B] font-bold rounded text-white px-[6px] ml-1">
            New
          </span>
          <p className="text-gray-700 text-base ">Basket ball collection</p>
          <StarRating />
        </div>
      </div>
    </>
  );
};

export default InformationCard;
