import React from 'react'
import { useContext } from 'react'
import { FavoritesContext } from '../../Context/FavoritesContext'
import { IconButton } from '@mui/material'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { Helmet } from 'react-helmet';

function Favorites() {

  let { favorites, setFavorites } = useContext(FavoritesContext)

  function handleDeleteFav(product) {
    let filterFavorites = favorites.filter(favotit => favotit._id !== product._id)
    setFavorites(filterFavorites)
  }

  // if (!favorites.length > 0) {
  //   return <h2 style={{color:"red", textAlign: "center", fontSize: "36px", marginBottom: "100px"}}>
  //     Favorites Empty
  //   </h2>
  // }

  return (
    <>
      <Helmet>
        <title>Favorites Page</title>
        <meta name="description" content="Favorites" />
      </Helmet>
      <hr style={{ marginBottom: "250px" }} />
      <div className='products-content'>
        <h2>
          Favorites
        </h2>
      </div>
      <div className='products contain'>
        {
          favorites.map(product => (
            <div key={product._id} className='products-card'>
              <img style={{ width: "30%" }} src={product.image} alt="" />
              <p style={{ fontSize: "18px" }}>
                <b>
                  {product.name}
                </b>
              </p>
              <p style={{ color: "gray" }}>
                {product.desc}
              </p>
              <div>
                <IconButton onClick={() => handleDeleteFav(product)}><HeartBrokenIcon /></IconButton>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Favorites
