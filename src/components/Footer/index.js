import React from 'react'
// import icons from react icons
import {
    FaFacebook,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa';

// import Elements from Footer Element
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElement';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>LuxuRentals</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook' rel='noopener noreferrer'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram' rel='noopener norefferer'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter' rel='noopener norefferer'>
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
