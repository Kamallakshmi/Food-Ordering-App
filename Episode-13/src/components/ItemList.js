import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  //console.log(dummy);

  const dispatch = useDispatch(); // this dispatch is the function that we get it from hook useDispatch

  const handleAddItem = (item) => {
    // dispatch an action. we have to dispatch the action coming from the cartSlice Component
    dispatch(addItem(item)); // whatevr we pass inside the addItem will go inside cartSlice function that too inside reducer function appropriate action, here under addItem second argument(action) and we can access it by action.payload
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
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
              <button
                className="bg-white text-green-600 font-bold px-6 py-2 rounded-lg shadow-md"
                //onClick={handleAddItem}
                onClick={() => handleAddItem(item)} // This is the correct way when you need to pass an argument (item) at the time of clicking.
                //onClick={handleAddItem(item)} // This calls the function immediately when the component renders — not when you click.
              >
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
