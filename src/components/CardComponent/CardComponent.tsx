import React from 'react'
import { countriesReturnProps } from '../../context/AppReducer'
import './style.scss'

interface dataForCardProps {
    dataForCard:countriesReturnProps
}

const CardComponent = ({dataForCard}: dataForCardProps) => {
  return (

    <div id='showComponentCard'>
        <div id='showComponentTitle'>

            <h3 id='showComponentTextCountryEmoji'>
                {dataForCard.emoji}
            </h3>
            <h3 id='showComponentTextCountryName'>
                {dataForCard.countryName}
            </h3>
        </div>
        <p id='showComponentTextCountryBody'>
            The capital of the country is {dataForCard.capital}
        </p>

    </div>
  )
}

export default CardComponent