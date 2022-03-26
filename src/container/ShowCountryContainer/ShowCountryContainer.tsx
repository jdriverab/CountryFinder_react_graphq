import React, { useContext, useRef, useState } from 'react'
import { APPCONTEXT, countriesReturnProps, dataToShowReturnProps } from '../../context/AppContext';
import UseQueryHook from '../../Hooks/UseQueryHook';
import './style.scss'
import ShowCountryComponent from '../../components/ShowCountryComponent/ShowCountryComponent';

// interface Country {
//     name: string;
//     code: string;
//     capital: string;
//     continent: {
//       name: string;
//     };
//   }
  
//   interface CountryData {
//     countries: Country[];
//   }

const ShowCountryContainer = () => {
  const {state, isSelectedAGroup, dataToShow, showDataByContinent} = useContext(APPCONTEXT)
  const {queryInfo} = UseQueryHook()

  if (queryInfo.loading) return <p>Loading...</p>;
  // if (queryInfo.data) return <p>Loading...</p>;

  const dataByContinent = queryInfo.data && showDataByContinent(queryInfo.data)

  // console.log(isSelectedAGroup)
  // console.log(queryInfo)
  console.log(dataByContinent)
  // const prueba = dataToShow(queryInfo.data ,'Language')
  
  // console.log(prueba)
  // console.log(queryInfo.data?.continents)

  // queryInfo.loading && return <p>Loading...</p>

  return (
    // <> 
    <div id='mainContainerShowCountryContainer'>
      { 
        isSelectedAGroup && dataByContinent && state.groupedBy === 'Continent' &&

          dataByContinent.map((res:dataToShowReturnProps)=>{
            // console.log(res)
            return <ShowCountryComponent title={res.title} countries={res.countries} />
          })
        }
              {/* <ShowCountryComponent title={'Spanish'} country={'Chile'} countryText={'Informacion que puedas sacar del grafo'} />
              <ShowCountryComponent title={'Spanish'} country={'Chile'} countryText={'Informacion que puedas sacar del grafo'} />
              <ShowCountryComponent title={'Spanish'} country={'Chile'} countryText={'Informacion que puedas sacar del grafo'} /> */}

    </div>
    // </>
  )
}

export default ShowCountryContainer