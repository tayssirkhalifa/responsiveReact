import { Search } from '@mui/icons-material'
import React from 'react'
import "./Navbar.css"
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import { fontSize } from '@mui/system';
import { Responsive } from '../Responsive'
const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="wrapper">
                <div className="Left">
                    <span className="language">EN</span>
                    <div className="searchContainer">
                        <input className="navbar-input" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </div>
                </div>
                <div className="center">
                    <h1 className="logo">
                        TAYSSIR
                    </h1>
                </div>
                <div className="right">
                    <div className="MenuItem">Register</div>
                    <div className="MenuItem">Sign In</div>
                    <div className="MenuItem">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
