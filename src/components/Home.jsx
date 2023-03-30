import React, { Component } from 'react';
import image from '../image.png';
import NavBar from './navBar';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar onClick={this.props.onClick} />

                <div className='intro'>
                    <p className='intro-text'>Hi there! I’m an electrical engineer based in Shiraz, Iran who works as a web developer.</p>
                </div>
                <div ref={this.testRef} className='img-contain'>
                    <img src={image} className='img' />
                </div>

            </React.Fragment>

        );
    }
}

export default Home;