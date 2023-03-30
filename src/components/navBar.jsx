import React, { Component } from 'react';

class NavBar extends Component {

    render() {
        return (
            <nav className='navbar'>
                <div className='nav-content1'><a onClick={this.props.onClick} className='item'>Kimia Khalili</a></div>
                <div className='nav-conetnt2'>
                    <ul className='nav-list nav-content2'>
                        <li className='item' ><a href='#' className='item'>Contact</a></li>
                        <li className='item'><a href='#' className='item'>About me</a></li>
                        <li className='item'><a href='#' className='item'>Home</a></li>
                    </ul>

                </div>

            </nav>
        );
    }
}

export default NavBar;