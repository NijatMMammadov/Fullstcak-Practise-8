import React from 'react'
import Navbarr from '../Components/Navbarr'
import Footerr from '../Components/Footerr'
import { Outlet } from "react-router"
import { Helmet } from 'react-helmet'

function MainRoot() {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="Not Found" />
      </Helmet>
      <Navbarr></Navbarr>
      <Outlet />
      <Footerr></Footerr>
    </>
  )
}

export default MainRoot
