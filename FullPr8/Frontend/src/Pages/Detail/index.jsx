import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Helmet } from 'react-helmet'

function Detail() {

  let { id } = useParams()
  let [product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => {
        console.log(res.data.data)
        setProduct(res.data.data)
      })
  }, [])

  return (
    <> <Helmet>
      <title>Detail Page</title>
      <meta name="description" content="Detail" />
    </Helmet>
      <><hr style={{ marginBottom: "100px" }} />
        <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
          DETAIL
        </h2>
        <div key={product._id} className='products-card contain'>
          <img style={{ width: "30%" }} src={product.image} alt="" />
          <p style={{ fontSize: "18px" }}>
            <b>
              {product.name}
            </b>
          </p>
          <p style={{ color: "gray" }}>
            {product.desc}
          </p>
        </div>
      </>
    </>
  )
}

export default Detail
