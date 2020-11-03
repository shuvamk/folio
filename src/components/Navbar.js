import React from 'react'
import { AnimatedText } from './AnimatedText'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__left'>
            <AnimatedText
            textColor='#ffffff'
            overlayColor='#ff1e56'
            >

            Shuvam's Folio
            </AnimatedText>
                
            </div>
            <div className='navbar__right'>
                <h2>Me</h2>
                <h2>Projects</h2>
                <h2>Contact</h2>
            </div>
        </div>
    )
}

export default Navbar
