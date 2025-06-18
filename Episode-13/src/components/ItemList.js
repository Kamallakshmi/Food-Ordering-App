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
      {items.map((item, index) => (
        <div key={item.card.info.id}>
          <div
            data-testid="foodItems"
            className="flex justify-between items-start gap-6 py-6"
          >
            {/* Left side - name, price, desc */}
            <div className="w-9/12 text-left">
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                {item.card.info.name}
              </h3>
              <p className="text-sm font-medium text-gray-700 mb-1">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
              <p className="text-sm text-gray-500">
                {item.card.info.description}
              </p>
            </div>

            {/* Right side - image and add button */}
            <div className="w-3/12 relative min-w-[100px]">
              {item.card.info.imageId && (
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full h-[96px] object-cover rounded-lg"
                  alt={item.card.info.name}
                />
              )}
              <button
                onClick={() => handleAddItem(item)}
                className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 bg-white text-green-600 font-semibold px-5 py-1 rounded shadow-md border border-gray-300 text-sm"
              >
                ADD
              </button>
            </div>
          </div>

          {/* Divider */}
          {index !== items.length - 1 && (
            <div className="border-t border-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
{
  /* <button
  className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 bg-white text-green-600 font-semibold px-5 py-1 rounded shadow-md border border-gray-300 text-sm"
  //onClick={handleAddItem}
  onClick={() => handleAddItem(item)} // This is the correct way when you need to pass an argument (item) at the time of clicking.
  //onClick={handleAddItem(item)} // This calls the function immediately when the component renders — not when you click.
></button>; */
}
