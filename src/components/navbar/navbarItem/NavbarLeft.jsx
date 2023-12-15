import React from 'react'
import {useNavigate} from "react-router-dom"
const NavbarLeft = () => {
  const navigate = useNavigate();
  return (
    <div className='text-4xl cursor-pointer hover:text-blue-400' onClick={()=>navigate("/")}>
      E-React Mağaza
    </div>
  )
}

export default NavbarLeft
