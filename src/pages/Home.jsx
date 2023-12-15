import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Product from '../components/home/Product'

function Home() {
  const [sort,setSort] = useState('');
  const [category,setCategory] = useState('');
  console.log(category);
  console.log(sort);
  return (
    <div>
      <SliderComp />
      <Sorting setSort={setSort}/>
      <div className='flex'>
        <Category setCategory={setCategory}/>
        <Product category={category} sort={sort}/>
      </div>
    </div>
  )
}

export default Home