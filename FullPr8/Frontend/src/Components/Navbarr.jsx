import React from 'react'
import {Link, useNavigate} from "react-router"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';


function Navbarr() {

  let navigate=useNavigate()

  function handleNavigateHome(){
    navigate("/")
  }
  function handleNavigateFav(){
    navigate("/favorites")
  }
  function handleNavigateAddProduct(){
    navigate("/addproduct")
  }

  return (
    <>
      <div className='nvb contain '>
        <div className='nvb-logo'>
          <h2>
            Banker.
          </h2>
        </div>
        <div className='nvb-links'>
          <Link onClick={()=>handleNavigateHome()} className='link'>Home</Link>
          <Link className='link'>About</Link>
          <Link className='link'>Blog</Link>
          <Link className='link'>Contact</Link>
          <Link onClick={()=>handleNavigateAddProduct()} className='link'>AddProduct</Link>
          <IconButton onClick={()=>handleNavigateFav()}>
            <FavoriteBorderIcon/>
          </IconButton>
        </div>
      </div>
    </>
  )
}

export default Navbarr
