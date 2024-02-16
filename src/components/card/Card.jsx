import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard/ImageCard.jsx";
import InformationCard from "./InformationCard/InformationCard.jsx";
import "../../index.css";

const Card = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div className="card h-full w-full" key={product.id}>
          <ImageCard img={product.img} name={name} />
          <InformationCard
            name={product.name}
            price={product.price}
            description={product.description}
            category={product.category}
          />
          <div className="justify-center mx-6 my-1">
            <Link to={`/item/${product.id}`}>
              <button className="bg-slate-950 text-slate-100  items-center justify-center   px-4 text-base rounded w-full py-2 font-bold">
                Ver detalle
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
