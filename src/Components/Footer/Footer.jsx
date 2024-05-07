import React from 'react'
import './Footer.css';
import { FaFacebookF,FaLinkedin, FaGithub,FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <footer>
      <div className="footer-content">
        <div className="top-footer">
{/*         
        <div>
          <h2>Subscribe to our Newsletter</h2>
          <h3>Get all the latest information, Sales and Offers.</h3>
        </div>
        <div class="Subscribe">
          
          <button>Subscribe</button>
        </div> */}
        
      </div>
      
      <div className="middle-footer">
        <div>
          <h2>GET IN TOUCH</h2>
          <p>
            No dolore ipsum accusam no lorem. 
            Invidunt sed clita kasd clita et et 
            dolor sed dolor.Rebum tempor ni 
              vero est magna amet no
          </p>
        </div>
        <div>
          <h2>SOCIAL MEDIA</h2>
          <ul>
            <li><a href="#">
              <i class=""><FaFacebookF></FaFacebookF></i>
            </a></li>
            <li><a href="#">
              <i class=''><FaGithub></FaGithub></i>
            </a></li>
            <li><a href="#">
              <i class=''><FaInstagram></FaInstagram></i>
            </a></li>
            <li><a href="#">
              <i class=''><FaLinkedin></FaLinkedin></i>
            </a></li>
          </ul>
        </div>
        <div>
          <h2>QUICK SHOP</h2>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Shop</a></li>

        

            <li><a href="#">Contact</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </div>
        
      </div>
      <hr />
      <div class="bottom-footer">
          <p>@ copywrite By Omar Shehta,All Right Reserved</p>
          
        
          {/* </div> */}
      </div>
    </div>

      
     
     
     </footer>
  )
}

export default Footer
