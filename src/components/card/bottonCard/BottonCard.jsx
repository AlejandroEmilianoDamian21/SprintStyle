import React, { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";


const BottonCard = ({ initial, stock /*, onAdd*/ }) => {
  const [quantity, setQuantity] = useState(initial);
  const [alertShown, setAlertShown] = useState(false);
  // const [alertShownDecrement, setalertShownDecrement] = useState(false);

  const value_cartContext = useContext(CartContext);

  const decremet = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setAlertShown(false);
    }
  };

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      setAlertShown(false);
    } else {
      if (!alertShown) {
        setAlertShown(true);
        return;
      }
    }
  };

  const addCart  = () => {
    console.log("Click a agregar al carrito "+ quantity);
    console.log("Context" +value_cartContext);
  }

  return (
    <div className="items-center justify-center mx-4">
      {alertShown && (
        <div
          className="mb-4 rounded-lg bg-yellow-200 px-6 py-2 text-base text-info-800"
          role="alert"
        >
          Solo hay {stock} productos en stock
        </div>
      )}
      <div className="flex items-center justify-between  mb-1">
        <button
          className="bg-slate-950 text-slate-100 px-4 text-2xl rounded text-center font-bold"
          onClick={decremet}
        >
          -
        </button>
        <span className="mx-4 text-2xl px-5 bg-slate-200 rounded">
          {quantity}
        </span>
        <button
          className="bg-slate-950 text-slate-100 px-4 text-2xl rounded font-bold"
          onClick={increment}
        >
          +
        </button>
      </div>
      <button
        className="bg-slate-950 text-slate-100 px-4 text-2xl rounded w-full py-2 font-bold"
        // onClick={()=> onAdd(quantity)}
        onClick={addCart}
        disabled={!stock}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default BottonCard;
