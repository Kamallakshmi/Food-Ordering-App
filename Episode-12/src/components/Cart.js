import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  // TO read the cart from the store we have to subscribe to the store
  //const cartItems = useSelector((store) => store); here subscribing to the whole store it leads to less efficient
  // why? if any one slice updated then whole store gets updated thats why it be less efficient. SOLUTION - subscribe to only specific portion of store
  //! Optimize Performance by subscribe to correct selected portion
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <div className="w-1/2 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Your Cart is empty! Please add items to the cart</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
