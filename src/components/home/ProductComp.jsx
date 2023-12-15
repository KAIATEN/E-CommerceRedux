import React from 'react'
import { useNavigate } from "react-router-dom";

const ProductComp = ({product}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${product?.id}`)}
      className="w-[300px] h-[320px] p-2 m-2 border rounded-md relative overflow-hidden cursor-pointer"
    >
      <div className="text-2xl font-bold absolute top-0 right-0 bg-black text-white rounded-md p-2 m-1">
        {product?.price * 29} <span className="text-sm">TL</span>
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={product?.thumbnail}
      />
      <div className="text-center text-xl bg-slate-700 text-white px-3 font-bold cursor-pointer">
        {product?.title}
      </div>
    </div>
  );
}

export default ProductComp;
