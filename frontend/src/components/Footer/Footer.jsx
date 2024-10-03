import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt='logo' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus veritatis voluptates obcaecati! Maiores et hic, voluptatum numquam nisi atque? Expedita quidem earum recusandae totam nisi fugit maiores iusto tenetur?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="facebook" />
                        <img src={assets.twitter_icon} alt="twitter" />
                        <img src={assets.linkedin_icon} alt="lnkedin" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privecy policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+963 982 275 671</li>
                        <li>khaledabdalslam99@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
