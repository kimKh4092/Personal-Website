import React, { Component, createFactory, useRef } from 'react';
import Home from './Home';
import Content from './content';



function Main(props) {


    return (
        <React.Fragment>
            <Home />
            <Content />
        </React.Fragment>
    )
}

export default Main;