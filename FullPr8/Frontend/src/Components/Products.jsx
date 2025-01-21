import React from 'react'
import { ProductContext } from '../Context/ProductContexr'
import { useContext } from 'react'
import { IconButton } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FavoritesContext } from "../Context/FavoritesContext"
import { Link, useNavigate } from "react-router"
import Swal from 'sweetalert2'
import Helmet from "react-helmet"

function Products() {

    let navigate = useNavigate()
    let { products, setProducts } = useContext(ProductContext)
    let { favorites, setFavorites } = useContext(FavoritesContext)

    function handleAddFav(product) {
        let findFavorites = favorites.find(favorit => favorit._id == product._id)
        if (findFavorites) {
            Swal.fire({
                text: "Already added to favorites!",
                icon: "question",
                timer: 2000
            });
        } else {
            Swal.fire({
                title: "Add to Favorites!",
                icon: "success",
                draggable: true,
                timer: 1500
            });
            setFavorites([...favorites, product])
        }
    }

    function handleNavigateDetail(id) {
        navigate(`/detail/${id}`)
    }

    return (
        <>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Home" />
            </Helmet>
            <section id='products'>
                <div className='products-content'>
                    <h2>
                        Our Services
                    </h2>
                </div>
                <div className='products contain'>
                    {
                        products.map(product => (
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
                                    <button onClick={() => handleNavigateDetail(product._id)} className='btn-product'>
                                        Detail
                                    </button>
                                    <IconButton onClick={() => handleAddFav(product)}><FavoriteBorderIcon /></IconButton>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Products
