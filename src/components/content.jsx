import React, { Component, useRef } from 'react';


class Content extends Component {
    state = {}
    render() {

        return (

            <div >
                <div className='content'>
                    <div className='content-head'>About me</div>
                    <ul className='list1'>
                        <li className='content-item'>As a graduate of Electrical Engineering from Shiraz University,
                            I have always been drawn to the world of programming,
                            and have been working diligently to hone my skills in this field. My ultimate goal is to become a full-stack developer,
                            and I am well on my way to achieving this objective.</li>
                        <li className='content-item'>
                            One of my greatest strengths is my unique design style,
                            which allows me to create user-friendly interfaces that are both visually stunning and highly functional.
                            From the initial wireframing stages to final implementation, I am able to deliver top-quality design solutions
                            that are tailored to meet the specific needs of each individual client.</li>
                        <li className='content-item'>I am proficient in both Python and JavaScript, and have a solid understanding of the React.js framework.
                            Additionally, I am currently in the process of expanding my skill set by learning Node.js,
                            which will allow me to further enhance my capabilities as a full-stack developer.</li>
                        <li className='content-item'>Despite the fact that my degree is in Electrical Engineering,
                            I have always had a strong passion for programming, and have spent countless hours teaching myself the ins and outs of this complex field.
                            I am deeply committed to achieving excellence in my work, and am confident that my unique skill set and dedication to continuous improvement
                            will enable me to succeed as a professional full-stack developer.</li>
                    </ul>

                </div>




                <div className='content2'>
                    <div className='content-head'>Languages & Frameworks</div>
                    <div className='lists'>
                        <ul>
                            <li className='content-item2'>Python</li>
                            <li className='content-item2'>Javascript</li>
                            <li className='content-item2'>Html & Css</li>
                        </ul>
                        <ul>
                            <li className='content-item2'>Node.js</li>
                            <li className='content-item2'>React</li>
                        </ul>

                    </div>


                </div>
            </div>
        );
    }
}

export default Content;