import React, { Component } from 'react';
import telegram from '../images/telegram.webp';
import github from '../images/github.png';
import email from '../images/email.png';
import phone from '../images/phone.png'

class Contact extends Component {

    render() {
        return (
            <div className='contact'>


                <p>Contact me</p>

                <div className='contact-section'>
                    <div className='contact-items'>
                        <img src={telegram} className='contact-imgs' />
                        <a className='contact-links' href=' https://t.me/kimia_khl'>@kimia_khl</a>
                    </div>
                    <div className='contact-items'>
                        <img src={github} className='contact-imgs' />
                        <a className='contact-links' href='https://github.com/kimKh4092/'>@kimKh4092</a>

                    </div>
                    <div className='contact-items'>
                        <img src={phone} className='contact-imgs' />
                        <a className='contact-links' href='tel:+989175856914'>+98 917 585 6914</a>
                    </div>
                    <div className='contact-items'>
                        <img src={email} className='contact-imgs' />
                        <a className='contact-links' href="mailto:kimia2000kh@gmail.com" >kimia2000kh@gmail.com </a>
                    </div>


                </div>

            </div>

        );
    }
}

export default Contact;