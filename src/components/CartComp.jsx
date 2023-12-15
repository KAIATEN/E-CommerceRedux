import React from 'react'
import { useDispatch} from "react-redux";
import { removeFromCart } from '../redux/cartSlice';
const CartComp = ({cart}) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img className="w-[175px] h-[175px] object-cover" src={cart?.image} />
      <div className="w-[400px]">
        <div className="text-xl font-bold">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="text-xl font-bold">
        {cart?.price * 29} <span className="text-sm">TL</span> ({cart?.quantity}
        )
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart.id))}
        className="text-sm font-bold bg-red-700 text-white cursor-pointer flex items-center justify-center w-[175px] h-16 rounded-md"
      >
        Ürünü Sepetten Kaldır
      </div>
    </div>
  );
}

export default CartComp
