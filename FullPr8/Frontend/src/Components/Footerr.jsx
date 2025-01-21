import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router';

function Footerr() {
    return (
        <>
            <hr />
            <div className='footer'>
                <p>
                    Copyright ©2025 All rights reserved | This template is made with
                </p>
                <FavoriteBorderIcon />
                <p>
                    by
                </p>
                <Link style={{ textDecoration: "none", color: "white" }}>Colorlib</Link>
            </div>
        </>
    )
}

export default Footerr
