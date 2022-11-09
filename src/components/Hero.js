import React from 'react'

import {Parallax, ParallaxLayer} from '@react-spring/parallax'

import Logo from '../images/Logo.png'

import githubIcon from '../images/Github.png'
import linkedinIcon from '../images/Linkedin.png'
import emailIcon from '../images/Email.png'
import instagramIcon from '../images/Instagram.png'
import Me from '../images/Me.png'

export default function Hero(props) {
    return (
        <div id="hero">
            <Parallax pages={2}>
            {/* First Page */}
                <ParallaxLayer offset={0} speed={0.5}>
                    <div className="flex-container">
                        <h1 id="hero-name">JUNTINGWEI</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <div className="flex-container">
                        <img id="hero-logo" src={Logo}/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.3} speed={0.5}>
                    <div className="flex-container">
                        <div id="social-links-container">
                            <a href='https://github.com/juntingwei/'>
                                <img className="social-links" id="github" src={githubIcon}/>
                            </a>
                            <a href='https://www.linkedin.com/in/juntingweinz/'>
                                <img className="social-links" id="linkedin" src={linkedinIcon}/>
                            </a>
                            <a href='mailto: juntingweipharm@gmail.com'>
                                <img className="social-links" id="email" src={emailIcon}/>
                            </a>
                            <a href='https://www.instagram.com/juntingwei/'>
                                <img className="social-links" id="instagram" src={instagramIcon}/>
                            </a>
                        </div>
                    </div>
                </ParallaxLayer>

            {/* Second Page */}
                
                <ParallaxLayer 
                    offset={1}
                    speed={0.5}
                    style={{
                            backgroundColor: '#F1F1F1',
                            backgroundSize: 'cover'
                    }}
                ></ParallaxLayer>
                <ParallaxLayer offset={1} speed={1}>
                    <div className="flex-container">
                        <div id="about-container">
                            <div id="img-container">
                                <img id="me-img" src={Me}/>
                            </div>
                            <div id="about-text-container">
                                <h2>ABOUT ME</h2>
                                <p>
                                I am a highly motivated early-career pharmacist currently working as a Locum Pharmacist around Waikato and Auckland. However, I have now shifted into a new space with several projects in the digital health domain.
                                </p>
                                <p>
                                With experience in community and hospital pharmacy, I have developed the necessary skills to coordinate with organisations large and small.
                                </p>
                                <p>
                                In regards to software, the majority of my experience has been with front-end development. I have worked with Figma and XD for design and Javascript with React.
                                </p>
                                <p>
                                I am looking forward to the new shift into digital healthcare.
                                </p>
                                <button id='learn-btn' onClick={event => props.handleClick(event, 1)}>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>


            
            
            
        </div>
    )
}