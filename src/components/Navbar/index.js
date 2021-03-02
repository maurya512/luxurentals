import React from 'react'
import { Nav, NavIcon, NavLink, Bars } from './NavbarElement'

// pass in toggle as props
function Navbar({ toggle }) {
    return (
        <>
            <Nav>
                <NavLink to='/'>LuxuRentals</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
