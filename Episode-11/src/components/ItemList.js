import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {
  console.log(dummy);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-6 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span>
                - Rs.
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-lg"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <button className="bg-white text-green-600 font-bold px-6 py-2 rounded-lg shadow-md">
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
