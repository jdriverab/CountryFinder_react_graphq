import React, { useContext, useEffect } from 'react'
import { APPCONTEXT } from '../../context/AppContext'
import UseQueryHook from '../../Hooks/UseQueryHook'
import CountrySearchContainer from '../CountrySearchContainer/CountrySearchContainer'
import ShowCountryContainer from '../ShowCountryContainer/ShowCountryContainer'
import './style.scss'

const HomeContainer = () => {

  const {state, dispatch, organiceInfoForComponents,filterByCountry} = useContext(APPCONTEXT)
  const {queryInfo} = UseQueryHook()

  useEffect(()=>{
    const data = queryInfo.data
    
    if(data){
      if(state.groupedBy){
        const dataToDispatch = state.groupedBy == 'Continent' ?  organiceInfoForComponents(data).dataByContinents : organiceInfoForComponents(data).dataByLanguage
        const dataFiltered = state.country == '' ? dataToDispatch : filterByCountry({dataList: dataToDispatch, textToFilter: state.country})
        dispatch({type:'setDataToShow', payload:{dataToShow: dataFiltered}})
      }
    }

  },[state.groupedBy, state.country])

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