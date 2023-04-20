import React, { Component } from 'react';







class NavBar extends Component {

    state = {
        dbtClass: 'dropdown-content1',
        dbtItems: 'dbt-item'
    }


    showMenu = () => {
        if (this.state.dbtClass === 'dropdown-content1') {
            this.setState({ dbtClass: 'dropdown-content2' });
        }

        else {
            this.setState({ dbtClass: 'dropdown-content1' });
        }
    }

    render() {



        return (
            <div>
                <nav className='navbar'>

                    <div className='nav-content1'>
                        <a onClick={() => this.props.onClick('home')} className='item'>Kimia Khalili</a>
                    </div>
                    <div className='nav-conetnt2'>
                        <ul className='nav-list nav-content2'>
                            <li className='item' >
                                <a className={this.props.section === 'contact' ? this.state.dbtItems + ' active' : this.state.dbtItems} onClick={() => this.props.onClick('contact')} >Contact</a>
                            </li>
                            <li className='item'>
                                <a className={this.props.section === 'about me' ? this.state.dbtItems + ' active' : this.state.dbtItems} onClick={() => this.props.onClick('about me')}>About me</a>
                            </li>
                            <li className='item'>
                                <a className={this.props.section === 'home' ? this.state.dbtItems + ' active' : this.state.dbtItems} onClick={() => this.props.onClick('home')}>Home</a>
                            </li>
                        </ul>

                    </div>
                    <div className='nav-content3'>
                        <a className='menu' onClick={this.showMenu}>
                            <i className="fa fa-bars fa-2x"></i>
                        </a>



                    </div>


                </nav>
                <div className={this.state.dbtClass}>

                    <a className={this.props.section === 'contact' ? this.state.dbtItems + ' active' : this.state.dbtItems} onClick={() => this.props.onClick('contact')}>Contact</a>
                    <a className={this.props.section === 'about me' ? this.state.dbtItems + ' active' : this.state.dbtItems} onClick={() => this.props.onClick('about me')} >About me</a>
                    <a className={this.props.section === 'home' ? this.state.dbtItems + ' active' : this.state.dbtItems} onClick={() => this.props.onClick('home')}>Home</a>



                </div>
            </div >

        );
    }
}

export default NavBar;