import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import CartComp from "../components/CartComp";
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  console.log(carts, totalAmount, itemCount);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-start font-bold text-2xl">
            Toplam Tutar: <span className="ml-2 text-3xl"> {totalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center text-5xl">Sepetiniz boş</div>
      )}
    </div>
  );
};

export default Cart;
