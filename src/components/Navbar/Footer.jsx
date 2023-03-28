import React from 'react'
import './Footer.css'
function Footer() {

    const logoStyle = {
        width : "30px",
        margin : "1px",
        borderRadius : "50%" 
    }

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are a passionate team of gamers who love everything about gaming! Our goal is to provide you with the latest gaming news, reviews, and guides to help you get the most out of your gaming experience.</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul className="social-media">
                        <li><a href="#"><img src="https://png.pngtree.com/png-clipart/20190419/ourmid/pngtree-youtube-social-media-icon-png-image_4235828.png" style= {logoStyle}></img></a></li>
                        <li><a href="#"><img src="https://e7.pngegg.com/pngimages/670/159/png-clipart-facebook-logo-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-media-internet.png"style={logoStyle}></img></a></li>
                        <li><a href="#"><img src ="https://www.freepnglogos.com/uploads/instagram-icon-png/instagram-icon-suzem-limited-make-known-20.png" style = {logoStyle} ></img></a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>City Centre,Bangalore</p>
                    <p>Email: info@gameflow.com</p>
                    <p>Phone: 123-456-789</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer
