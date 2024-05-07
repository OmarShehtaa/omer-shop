import React from 'react'
import './Contact.css';
import {FaLocationCrosshairs} from "react-icons/fa6";
import { FaEnvelope,FaPhoneAlt } from "react-icons/fa";



const Contact = () => {
  return (
    <div className='contact container'>
        <h2>Contact <span>Us</span></h2>
   <div className="contact-content">
         <div className="contact-left">
       
         <form >

            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Subject'/>
            <textarea  placeholder='Message'></textarea>
            <button>SEND MESSAGE</button>
         </form>



        </div>
        <div className="contact-right">
                 <div className="contact-right-up">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.35229903!2d31.4967274!3d30.595824800000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f147e5fe7337%3A0x27ea7767255ccbe!2z2LTYsdmD2Kkg2KjYsdin2YHZiCDZhNiq2LnZhNmK2YUg2KfZhNio2LHZhdis2Kk!5e0!3m2!1sar!2seg!4v1714951980925!5m2!1sar!2seg"></iframe>
                 </div>
                 <div className="contact-right-down">
                    <div>
                    
                        <FaLocationCrosshairs className='contact-icon'></FaLocationCrosshairs>
                        <span>Egypt-Sharkia-Zagazig</span>
                    </div>
                    <div>
                          < FaEnvelope className='contact-icon'></FaEnvelope>
                        <span>bravocoading123@gmail.com</span>
                    </div>
                    <div>
                          <FaPhoneAlt className='contact-icon'></FaPhoneAlt>
                        <span>+0123456789</span>
                    </div>
                 </div>

        </div>
   </div>
      
    </div>
  )
}

export default Contact
