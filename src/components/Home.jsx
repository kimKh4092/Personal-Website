import React, { Component } from 'react';
import image from '../images/image.jpg';
import bio from '../images/bio.svg';
import coder from '../images/coder.svg';
import reactjs from '../images/reactjs.svg';
import finance from '../images/finance.svg';
import NavBar from './navBar';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar onClick={this.props.scroll} section={this.props.section} />
                <div className='intro'>
                    <p className='intro-text'>Hi there! I’m an electrical engineer based in Shiraz, Iran who works as a web developer.</p>
                </div>
                <div className='img-contain'>
                    <img src={image} className='meh' />
                    <div className='designs'>
                        <img src={bio} className='img' />
                        <img src={finance} className='img' />
                        <img src={coder} className='img' />
                        <img src={reactjs} className='img' />

                    </div>

                </div>

            </React.Fragment>

        );
    }
}

export default Home;