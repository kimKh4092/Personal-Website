import React, { Component, useRef } from 'react';


class Content extends Component {
    state = {}
    render() {

        return (

            <div className='content'>

                <ul className='list'>
                    <li className='content-item'>I am an electrical engineer, graduated
                        from shiraz university.</li>
                    <li className='content-item'>
                        I work as a full stack web developer.</li>
                    <li className='content-item'>I’m interested in financial markets and has experience in markets like Stocks, Forex and Cryptocurrency.</li>
                </ul>

                <div>
                    <div className='content-head'>Languages & Frameworks</div>
                    <div className='lists'>
                        <ul>
                            <li className='content-item'>Python</li>
                            <li className='content-item'>Javascript</li>
                            <li className='content-item'>Html & Css</li>
                        </ul>
                        <ul>
                            <li className='content-item'>Node.js</li>
                            <li className='content-item'>React</li>
                        </ul>

                    </div>


                </div>
            </div>
        );
    }
}

export default Content;