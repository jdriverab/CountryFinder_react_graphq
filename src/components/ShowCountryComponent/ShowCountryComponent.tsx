import React from 'react'
import { countriesReturnProps, dataToShowReturnProps } from '../../context/AppContext'
import CardComponent from '../CardComponent/CardComponent'
import './style.scss'

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
            <CardComponent dataForCard={response} key={response.countryName}/>
          )
        })
      }


    </div>

    </div>
  )
}

export default ShowCountryComponent