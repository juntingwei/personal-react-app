import './App.css';
import React from 'react'

//Components
import Nav from './components/Nav.js'
import Hero from './components/Hero.js'
import Pharmacy from './components/Pharmacy.js'
import Software from './components/Software.js'
import Contact from './components/Contact.js'

function App() {

  // Nav bar operations

  const [hoverStatus, setHoverStatus] = React.useState('nothing')

  const [currentPage, setCurrentPage] = React.useState(0);
  const displayedPage = [
    <Hero
      handleClick={handleClick}
    />, 
    <Pharmacy/>,
    <Software
      currentHover={currentHover}
      notHover={notHover}
      hoverStatus={hoverStatus}
    />,
    <Contact/>
  ]

  function handleClick(event, numPage) {
    setCurrentPage(numPage)
  }

  // Software page hovers


  function currentHover(event, id) {
    setHoverStatus(id == 0 ? 'ohm' : 'stockrx')
  }

  function notHover(event) {
    setHoverStatus('nothing')
  }

  React.useEffect(() => {
    console.log(hoverStatus)
  }, [hoverStatus])

  return (
    <React.StrictMode>
      <div className="App">
        {displayedPage[currentPage]}
        <Nav
          handleClick={handleClick}
          currentPageNum={currentPage}
          hoverStatus={hoverStatus}
        />
      </div>
    </React.StrictMode>
  );
}

export default App;