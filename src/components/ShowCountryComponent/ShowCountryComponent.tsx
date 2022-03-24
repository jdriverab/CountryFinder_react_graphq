import React from 'react'
import './style.scss'


interface GroupComponentProps {
  title:string,
  country: string, 
  countryText: string,
}

const ShowCountryComponent = ({title, country, countryText}:GroupComponentProps) => {

  return (
    <div id='mainContainerShowComponent'>
      <h1 id='showComponentTitle'>
        {title}
      </h1>

        <div id='showComponentCard'>
          <h3 id='showComponentTextCountryName'>
            {country}
          </h3>
          <p id='showComponentTextCountryBody'>
            {countryText}
          </p>

      </div>
    </div>
  )
}

export default ShowCountryComponent