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
                        <p>@kimia_khl</p>
                    </div>
                    <div className='contact-items'>
                        <img src={github} className='contact-imgs' />
                        <p>@kimKh4092</p>
                    </div>
                    <div className='contact-items'>
                        <img src={email} className='contact-imgs' />
                        <p>@kimia2000kh
                        </p>
                    </div>
                    <div className='contact-items'>
                        <img src={phone} className='contact-imgs' />
                        <p>+98 917 585 6914</p>
                    </div>

                </div>

            </div>

        );
    }
}

export default Contact;