import React from 'react'
import { Nav, NavIcon, NavLink, Bars } from './NavbarElement'

function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to='/'>LuxuRentals</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
