import React from 'react'
import Logo from '../images/Logo.png'
import LogoDark from '../images/Logo-dark.png'
import LogoLight from '../images/Logo-light.png'



export default function Nav(props) {

    function checkActive(num) {
        if (props.currentPageNum == num) {
            return "active"
        }
    }


    const [displayedLogo, setDisplayedLogo] = React.useState(Logo)
    const [navTextMode, setNavTextMode] = React.useState('nav-default')

    React.useEffect(() => {
         if (props.currentPageNum == 2) {
            setDisplayedLogo(LogoDark)
            setNavTextMode('nav-dark')
        } else {
            setDisplayedLogo(Logo)
            setNavTextMode('nav-default')
        }
    }, [props.currentPageNum])

    React.useEffect(() => {
        if (props.hoverStatus == 'ohm') {
            setNavTextMode('nav-light')
            setDisplayedLogo(LogoLight)
        } else if (props.hoverStatus == 'stockrx') {
            setNavTextMode('nav-dark')
            setDisplayedLogo(LogoDark)
        } else if (props.hoverStatus == 'nothing') {
            setDisplayedLogo(Logo)
            setNavTextMode('nav-default')
        }
    }, [props.hoverStatus])


    return (
        <div id="nav-bar">
            <img src={displayedLogo} id="logo-img" onClick={event => props.handleClick(event, 0)}/>
            <div className={`links-container ${navTextMode}`}>
                <a className={`links ${checkActive(0)}`} onClick={event => props.handleClick(event, 0)}>HOME</a>
                <a className={`links ${checkActive(1)}`} onClick={event => props.handleClick(event, 1)}>PHARMACY</a>
                <a className={`links ${checkActive(2)}`} onClick={event => props.handleClick(event, 2)}>SOFTWARE</a>
                <a className={`links ${checkActive(3)}`} onClick={event => props.handleClick(event, 3)}>CONTACT</a>
            </div>
        </div>
    )
}