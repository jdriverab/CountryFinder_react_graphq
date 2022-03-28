import React, { useContext } from 'react'
import { CSSTransition } from 'react-transition-group'; 
import { APPCONTEXT, countriesReturnProps, dataToShowReturnProps } from '../../context/AppContext'
import CardComponent from '../CardComponent/CardComponent'
import './style.scss'

const ShowCountryComponent = ({title, countries}:dataToShowReturnProps) => {

  const {isSelectedAGroup} = useContext(APPCONTEXT)

  return (
    <div id='mainContainerShowComponent'>
      
      <h1 id='showComponentTitle'>
        {title}
      </h1>

      <div id='containerComponentCard'>
        {
          countries.map((response:countriesReturnProps)=>{
            return (
              <CSSTransition
                in={isSelectedAGroup}
                // key={response.countryName}
                timeout={600}
                classNames='switch'
              >

                <CardComponent dataForCard={response} key={response.countryName}/>

              </CSSTransition>

            )
          })
        }

      </div>

    </div>
  )
}

export default ShowCountryComponent