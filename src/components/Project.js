import React from 'react'

export default function Project(props) {

    const defaultBackgroundImage = {backgroundImage: `url(${props.image})`}

    return (

        <div id={props.name} className='project-container'
        style={defaultBackgroundImage}
        onMouseEnter={(event) => props.currentHover()}
        onMouseLeave={(event) => props.notHover()}
        >
            <div className={`fader ${props.hoverClass}`}></div>
            <h2 style={{fontFamily: `${props.font}`}}>{props.name}</h2>

        </div>

    )
}