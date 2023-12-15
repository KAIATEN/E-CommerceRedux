import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const decrement = () => {
    if (quantity <= 0) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };
  const increment = () => {
    if (quantity < productDetail?.stock) {
      setQuantity(quantity + 1);
    }
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        description: productDetail?.description,
        title: productDetail?.title,
        image: productDetail?.thumbnail,
        price: productDetail.price,
        quantity: quantity,
      })
    );
  };
  return (
    <div className="flex gap-20 my-10">
      <img
        className="max-w-sm hover:max-w-lg max-h-96 hover:max-h-screen object-cover"
        src={productDetail?.thumbnail}
      />
      <div className="">
        <div className="text-3xl font-bold">{productDetail?.title}</div>
        <div>{productDetail?.description}</div>
        <div className="my-1 text-lg text-blue-500">
          Rating : {productDetail?.rating}
        </div>
        <div className="my-1 text-lg text-red-700">
          Stock : {productDetail?.stock}
        </div>
        <div className="text-3xl font-bold">
          {productDetail?.price * 29} <span className="text-sm">TL</span>
        </div>
        <div className=" my-2 flex items-center justify-start gap-5">
          <div className="text-5xl cursor-pointer" onClick={decrement}>
            -
          </div>
          <input
            className="w-10 text-center text-2xl font-bold bg-white"
            type="text"
            value={quantity}
            disabled
          />
          <div className="text-3xl cursor-pointer" onClick={increment}>
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border my-2 text-xl font-bold roundend-md bg-gray-600 text-white cursor-pointer w-[200px] h-16 flex items-center justify-center"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
