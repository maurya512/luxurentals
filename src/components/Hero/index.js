import React from 'react'

// import components
import Navbar from '../Navbar'
import { HeroContainer, HeroContent, HeroH1, HeroItems, HeroBtn, HeroP } from './HeroElement';
function Hero() {
    return (
        <HeroContainer>
            <Navbar />
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
