import {useEffect} from 'react'
import { IoSearchSharp, IoBasketSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { getCartTotal } from '../../../redux/cartSlice';
import {useNavigate} from "react-router-dom"
import { searchProducts } from '../../../redux/searchSlice';
const NavbarRight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);
  useEffect(()=>{
    dispatch(getCartTotal())
  },[dispatch]);
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center border p-3 rounded-full bg-gray-200 curso-pointer">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Arama.."
          onChange={(e) => dispatch(searchProducts(e.target.value))}
        />
        <IoSearchSharp className="hover:text-blue-500" size={30} onClick={() => navigate("/products/search")} />
      </div>
      <CiHeart size={30} />
      <div
        className="relative cursor-pointer hover:text-blue-500"
        onClick={() => navigate("/cart")}
      >
        <div className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {carts?.length}
        </div>
        <IoBasketSharp size={30} />
      </div>
    </div>
  );
}

export default NavbarRight
