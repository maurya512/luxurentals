import React, { useState } from 'react'

// import components
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroH1, HeroItems, HeroBtn, HeroP } from './HeroElement';
function Hero() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Renting Luxury Cars Made Easy</HeroH1>
                    <HeroP>As simple as 1..2..3</HeroP>
                    <HeroBtn>Book Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
