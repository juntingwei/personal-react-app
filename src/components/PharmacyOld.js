import React from 'react'

import ECP from '../images/skills/ECP.png'
import MidCPG from '../images/skills/MidCPG.png'
import RxOne from '../images/skills/RxOne.png'
import Sildenafil from '../images/skills/Sildenafil.png'
import TMP from '../images/skills/TMP.png'
import Toniq from '../images/skills/Toniq.png'

import {Parallax, ParallaxLayer} from '@react-spring/parallax'

export default function Pharmacy(props) {
    return (
        <div id="pharmacy-page">
            <Parallax pages={3}>

                <ParallaxLayer
                    offset={0}
                    factor={3}
                    speed={1}
                    style={{
                        backgroundColor: '#001724'
                        }}
                ></ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    factor={3}
                    speed={1}
                    style={{
                        backgroundColor: '#132937'
                        }}
                ></ParallaxLayer>

                {/* First Page */}
                {/* First Page Background */}
                
                <ParallaxLayer
                offset={0}
                speed={1}
                style={{
                    background: 'linear-gradient(to bottom, #A9C2D0, #001724)'
                    }}
                ></ParallaxLayer>

                {/* Accredications */}

                <ParallaxLayer
                offset={0.8}
                speed={1.6}
                >
                    <div id="skills-container">

                        <h3 className='skills-name'>Accredications</h3>
                        <div id="accreditations-container">
                            <div className="accreditation" id="trimethoprim">
                                <img className='accredications-img' src={TMP}/>
                                <p>Trimethoprim</p>
                            </div>
                            <div className="accreditation" id="ecp">
                                <img className='accredications-img' src={ECP}/>
                                <p>ECP</p>
                            </div>
                            <div className="accreditation" id="sildenafil">
                                <img className='accredications-img' src={Sildenafil}/>
                                <p>Sildenafil</p>
                            </div>
                            <div className="accreditation" id="midcpg">
                                <img className='accredications-img' src={MidCPG}/>
                                <p>MidCPG</p>
                            </div>
                        </div>

                        <h3 className='skills-name'>Pharmacy Software Experience</h3>
                        <div id="software-container">
                            <img className="software-img" src={Toniq}/>
                            <img className="software-img" src={RxOne}/>
                        </div>
                    </div>
                </ParallaxLayer>

                {/* main content */}

                <ParallaxLayer
                offset={0}
                speed={1}
                >
                    <div id="intro-container">
                        <h2>Pharmacist with 3+ years experience in the field.</h2>
                        <h2>Available for Locuming</h2>
                    </div>
                </ParallaxLayer>
            
            {/* Second Page */}
                {/* Second Page Background */}
                
                <ParallaxLayer
                offset={1}
                factor={1}
                speed={1}
                style={{
                    background: 'linear-gradient(to bottom, #011725, #132937)'
                    }}
                ></ParallaxLayer>

                {/* Experience */}

                <ParallaxLayer
                offset={1}
                factor={1}
                speed={1}
                >
                    <div id='experience-block'>
                        <h2>Experience</h2>
                        <div className='experience-container' id='locum-container'>
                            <div className='experience-label'>
                                <p className='experience-heading'>Locum Pharmacist</p>
                                <p>May 2022 - Ongoing</p>
                            </div>
                            <p className='experience-desc'>Providing Locuming services in Auckland and Waikato region. Worked with Toniq and RxOne.</p>
                        </div>
                        <div className='experience-container' id='locum-container'>
                            <div className='experience-label'>
                                <p className='experience-heading'>Counties Manukau Health</p>
                                <p>Clinical Pharmacist</p>
                                <p>Jun 2021 - May 2022</p>
                            </div>
                            <p className='experience-desc'>Completed 6 months general surgical rotation, 4 months in-patient dispensary, and 2 months general medicine. Involved with medication history taking, reconciliation, and discharge facilitation. Collaboration with doctors, nurses, and other MDT.</p>
                        </div>
                        <div className='experience-container' id='locum-container'>
                            <div className='experience-label'>
                                <p className='experience-heading'>Everhealth Pharmacy</p>
                                <p>Pharmacist Manager</p>
                                <p>Feb 2021 - May 2021</p>
                            </div>
                            <p className='experience-desc'>Responsible for daily operations of a pharmacy including dispensing, staffing, inventory management, and business strategy.</p>
                        </div>
                        <div className='experience-container' id='locum-container'>
                            <div className='experience-label'>
                                <p className='experience-heading'>Frankton Pharmacy</p>
                                <p>Dispensary Manager</p>
                                <p>Dec 2020 - Feb 2021</p>
                            </div>
                            <p className='experience-desc'>Worked as dispensary manager responsible for supervision and training of pharmacy students, daily operations of pharmacy, and medication supply to care facilities.</p>
                        </div>
                    </div>
                    
                </ParallaxLayer>

            {/* Third Page */}
                {/* First Page Background */}
                
                <ParallaxLayer
                offset={2.5}
                speed={1}
                >
                    <div id="booking-container">
                        <h2>Request booking.</h2>
                        <a id='contact-btn' href='mailto: juntingweipharm@gmail.com'>Contact Me</a>
                    </div>
                </ParallaxLayer>

            </Parallax>
        </div>
    )
}