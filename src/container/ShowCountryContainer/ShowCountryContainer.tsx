import React, { useContext, useRef, useState } from 'react'
import { APPCONTEXT } from '../../context/AppContext';
import UseQueryHook from '../../Hooks/UseQueryHook';
import './style.scss'
import ShowCountryComponent from '../../components/ShowCountryComponent/ShowCountryComponent';

interface Country {
    name: string;
    code: string;
    capital: string;
    continent: {
      name: string;
    };
  }
  
  interface CountryData {
    countries: Country[];
  }

const ShowCountryContainer = () => {

  
  const {isSelectedAGroup} = useContext(APPCONTEXT)
  const {queryInfo} = UseQueryHook()
  
  const [dataCountries, setDataCountries] = useState<any> (null)

  console.log(queryInfo.data)

  return (
    <> 
      { 
        isSelectedAGroup &&
          <div id='mainContainerShowCountryContainer'>
            <ShowCountryComponent title={'Spanish'} country={'Chile'} countryText={'Informacion que puedas sacar del grafo'} />

            <ShowCountryComponent title={'Spanish'} country={'Chile'} countryText={'Informacion que puedas sacar del grafo'} />
          </div>
            
      }
    </>
  )
}

export default ShowCountryContainer