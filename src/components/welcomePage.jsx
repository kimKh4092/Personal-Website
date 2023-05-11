import React, { useState, useRef } from 'react';
import Home from './Home';
import Content from './content';
import Contact from './contact';



function Main() {
    // document.title = 'Kimia Khalili';



    const [Section, setSection] = useState('');

    const home = useRef(null);
    const content = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef, selected) => {

        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const select = (selected) => {
        setSection(selected);

        if (selected === 'refresh') {
            window.location.reload();
        }

        if (selected === 'home') {
            scrollToSection(home, selected);
        }
        if (selected === 'about me') {
            scrollToSection(content, selected)
        }
        if (selected === 'contact') {
            scrollToSection(contact, selected)
        }
    }

    return (
        <React.Fragment>
            <div ref={home}>
                <Home scroll={select} section={Section} />
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