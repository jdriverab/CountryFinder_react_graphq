import React from 'react'
import { countriesReturnProps, dataToShowReturnProps } from '../../context/AppContext'
import './style.scss'


// interface GroupComponentProps {
//   title:string,
//   countries: countriesReturnProps[], 
// }


const ShowCountryComponent = ({title, countries}:dataToShowReturnProps) => {

  return (
    <div id='mainContainerShowComponent'>
      
      <h1 id='showComponentTitle'>
        {title}
      </h1>

    <div id='containerComponentCard'>
      {
        countries.map((response:countriesReturnProps)=>{
          return (
            <div id='showComponentCard'>

              <div id='showComponentTitle'>

                <h3 id='showComponentTextCountryEmoji'>
                  {response.emoji}
                </h3>
                <h3 id='showComponentTextCountryName'>
                  { response.countryName}
                </h3>
              </div>
              <p id='showComponentTextCountryBody'>
                The capital of the country is { response.capital}
              </p>

            </div>
          )
        })
      }


    </div>

    </div>
  )
}

export default ShowCountryComponent