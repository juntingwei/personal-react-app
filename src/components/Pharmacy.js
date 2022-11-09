import React from 'react'
import { TypeAnimation } from 'react-type-animation'

// pharmacy page images

import hygeiaImg from '../images/pharmacy-page-images/hygeia.png'

// resume import

import Resume from '../files/CV 922.pdf'

export default function Pharmacy() {

    // experience text elements

    const [experienceHover, setExperienceHover] = React.useState(0)


    function mouseOver(item) {
        setExperienceHover(item)
    }

    function mouseLeave() {
        setExperienceHover(0)
    }

    const soleCharge = (
        <TypeAnimation
            sequence={['worked sole charge managing high script counts and services.', 1000]}
            repeat={1}
            speed={50}
        ></TypeAnimation>
    )

    const managingPharmacies = (
        <TypeAnimation
            sequence={['managed a small dispensary pharmacy next to busy medical center.', 1000]}
            repeat={1}
            speed={50}
        ></TypeAnimation>
    )

    const ruralDispensaries = (
        <TypeAnimation
            sequence={['worked out in rural Te Kuiti, one hour away from the closest city.', 1000]}
            repeat={1}
            speed={50}
        ></TypeAnimation>
    )

    const largerTeams = (
        <TypeAnimation
            sequence={['worked in dispensary teams with 5-10 other staff.', 1000]}
            repeat={1}
            speed={50}
        ></TypeAnimation>
    )

    const countiesManukauDhb = (
        <TypeAnimation
            sequence={['as a clinical pharmacist, I worked closely with MDTs to provide care.', 1000]}
            repeat={1}
            speed={50}
        ></TypeAnimation>
    )

    return (
        <div id='pharmacy'>

            <div id='pharmacy-intro-page'>

                <img id='hygeia-img' src={hygeiaImg}/>


                <div id='pharmacy-heading-container'>
                    <h1>Pharmacist with 3+ years experience in the field.</h1>
                    <h1>Available for Locuming.</h1>
                </div>

            </div>

            <div class="section" id='pharmacy-section'>
                <span class="hscroll-line" id='scroll-line-pharmacy'></span>
            </div>


            <div id='experience-page'>

                <div id='experience-container'>

                    <div id='experience-text-container'>
                        {(experienceHover == 1) && soleCharge}
                        <p id='experience-text'>experience working <a id='sole-charge' className='et-focus' onMouseEnter={() => mouseOver(1)} onMouseLeave={() => mouseLeave()}>sole-charge</a> and</p>
                        {(experienceHover == 2) && managingPharmacies}
                        <p id='experience-text'><a id='managing-pharmacies' className='et-focus' onMouseEnter={() => mouseOver(2)} onMouseLeave={() => mouseLeave()}>managing pharmacies</a> ranging from smaller</p>
                        {(experienceHover == 3) && ruralDispensaries}
                        {(experienceHover == 4) && largerTeams}
                        <p id='experience-text'><a id='rural-dispensaries' className='et-focus' onMouseEnter={() => mouseOver(3)} onMouseLeave={() => mouseLeave()}>rural dispensaries</a> to <a id='larger-teams' className='et-focus' onMouseEnter={() => mouseOver(4)} onMouseLeave={() => mouseLeave()}>larger teams</a> in</p>
                        <p id='experience-text'>central auckland previously completed 1-year</p>
                        {(experienceHover == 5) && countiesManukauDhb}
                        <p id='experience-text'>rotation at <a id='middlemore-hospital' className='et-focus' onMouseEnter={() => mouseOver(5)} onMouseLeave={() => mouseLeave()}>middlemore hospital</a> in general</p>
                        <p id='experience-text'>surgery, medicine, and operational pharmacy.</p>
                    </div>

                    {/* <div id='experience-text-container'>
                        <p id='experience-text'>experience working <a id='et-sole-charge' className='et'>sole-charge<a className='et-hover' id='sole-charge-hover'>{' (5 different pharmacies across waikato) '}</a></a> and <a id='et-managing-pharmacies' className='et'>managing pharmacies<a className='et-hover' id='managing-pharmacies-hover'>TESTING HOVER BOX</a></a> ranging from smaller <a id='et-rural-dispensaries' className='et'>rural dispensaries<a className='et-hover' id='rural-dispensaries-hover'>TESTING HOVER BOX</a></a> to <a id='et-larger-teams' className='et'>larger teams<a className='et-hover' id='larger-teams-hover'>TESTING HOVER BOX</a></a> in central auckland. previously completed 1-year rotation at <a id='et-counties-manukau-dhb' className='et'>counties manukau dhb<a className='et-hover' id='counties-manukau-dhb-hover'>TESTING HOVER BOX</a></a> in general surgery, medicine, and operational pharmacy.</p>
                    </div> */}

                    <a id='resume-link' href={Resume}>see full resume here</a>

                </div>

            </div>

            <div id='pharmacy-contact-footer'>

                <div id='request-availability-container'>
                    <a class='request-availability'>request</a>
                    <a class='request-availability'>availability</a>
                </div>

                <a id='request-btn' href='mailto: juntingweipharm@gmail.com'>CONTACT ME</a>

            </div>

        </div>
    )
}