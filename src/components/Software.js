import React from 'react'
import Project from './Project.js'

// Project Images
import ohmImage from '../images/project-images/ohm.png'
import stockrxImage from '../images/project-images/stockrx.jpeg'

export default function Software(props) {

    const [hoverClass, setHoverClass] = React.useState('default') 

    React.useEffect(() => {
        if (props.hoverStatus == 'ohm') {
            setHoverClass('ohm-hovered')
        } else if (props.hoverStatus =='stockrx') {
            setHoverClass('stockrx-hovered')
        } else {
            setHoverClass('default')
        }
    }, [props.hoverStatus])


    const arrayOfProjects = [
        {id: 0, name: "Ωhm", image: ohmImage, font: "Tiro Telugu"},
        {id: 1, name: "STOCKRX", image: stockrxImage, font: "Bebas Neue"}
    ]

    const projectElMap = arrayOfProjects.map((prevArray) => (
        <Project 
            key={prevArray.id} 
            name={prevArray.name} 
            image={prevArray.image}
            font={prevArray.font}
            currentHover={(event) => props.currentHover(event, prevArray.id)}
            notHover={(event) => props.notHover(event)}
            hoverClass={hoverClass}
        />
    ))

    return (

        <div id='software-page' className={`${hoverClass}`}>

            <div id='intro-text-container' className={`${hoverClass}`}>

                <div id='intro-heading' className={`${hoverClass}`}>
                    <h2>front-end developer</h2>
                    <h2>ui/ux designer</h2>
                </div>

                <div id='intro-desc' className={`${hoverClass}`}>
                    <p>creating meaningful healthcare solutions through software.</p>
                    <p>developing expereince in React and Figma.</p>
                </div>

            </div>


            {/* <div id='line-break' className={`${hoverClass}`}></div> */}
            <div class="section">
                <span class="hscroll-line"></span>
            </div>


            <div id='current-projects-container' className={`${hoverClass}`}>

                <h3>current projects</h3>

                {projectElMap}

                <div id='coming-soon' className={`project-container ${hoverClass}`}>
                    <h2>coming soon</h2>
                </div>

            </div>

            <div id='contact-footer'>

                <div id='work-with-me-container'>
                    <a class='work-with-me'>work with</a>
                    <a class='work-with-me'>me</a>
                </div>

                <a id='work-btn' href='mailto: juntingweipharm@gmail.com'>CONTACT ME</a>

            </div>

        </div>
    )
}