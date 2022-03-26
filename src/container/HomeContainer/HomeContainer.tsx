import React from 'react'
import CountrySearchContainer from '../CountrySearchContainer/CountrySearchContainer'
import ShowCountryContainer from '../ShowCountryContainer/ShowCountryContainer'
import './style.scss'

const HomeContainer = () => {
  return (
    <main id='mainContainer'>

      <div id='mainContainerCentralSection'>
        <CountrySearchContainer/> 
        
        <ShowCountryContainer/>
      </div>

    </main>
  )
}

export default HomeContainer