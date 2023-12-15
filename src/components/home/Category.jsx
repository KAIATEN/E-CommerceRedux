import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from '../../redux/CategorySlice';

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state=>state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className='w-1/6 bg-gray-100 text-blue-300 p-5'>
      <div className='border m-1 text-xl font-bold flex justify-center items-center'>
        KATEGORİ
      </div>
      {categories?.map((category,index)=>(
        <div onClick={()=>setCategory(category)} className='text-lg mt-1 cursor-pointer hover:bg-gray-300 p-2' key={index}>{category}</div>
      ))}
    </div>
  )
}

export default Category;
