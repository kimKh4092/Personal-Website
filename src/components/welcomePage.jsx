import React, { Component, createFactory, useRef } from 'react';
import Home from './Home';
import Content from './content';
import Contact from './contact';



function Main() {
    const home = useRef(null);
    const content = useRef(null);
    const contact = useRef(null);



    const scrollToSection = (elementRef) => {
        console.log('hi')
        console.log(elementRef)
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const select = (selected) => {
        if (selected === 'home') {
            scrollToSection(home)
        }
        if (selected === 'about me') {
            scrollToSection(content)
        }
        if (selected === 'contact') {
            scrollToSection(contact)
        }
    }

    return (
        <React.Fragment>
            <div ref={home}>
                <Home scroll={select} />
            </div>
            <div ref={content}>
                <Content />
            </div>
            <div ref={contact}>
                <Contact />
            </div>
        </React.Fragment>
    )
}

export default Main;